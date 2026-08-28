"use client";

import { useEffect, useState } from "react";

interface HighlightingTypewriterProps {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  highlightWords?: string[];
  highlightClass?: string;
  cursor?: boolean;
  cursorStyle?: string;
}

export function HighlightingTypewriter({
  words,
  loop = true,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 2000,
  highlightWords = ["software"],
  highlightClass = "text-green-500",
  cursor = true,
  cursorStyle = "_",
}: HighlightingTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = words[wordIndex] || "";

  // Cursor blink effect — keep it in DOM to prevent layout shift
  useEffect(() => {
    if (!cursor) return;
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, [cursor]);

  // Keep text width stable — cursor is always rendered, just toggles opacity

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        // Word complete - pause (delaySpeed) before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delaySpeed);
      }
    } else {
      // Deleting backward
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Word fully deleted - move to next word
        timeout = setTimeout(() => {
          const nextIndex = (wordIndex + 1) % words.length;
          if (nextIndex === 0 && !loop) return;
          setIsDeleting(false);
          setWordIndex(nextIndex);
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentWord,
    wordIndex,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    loop,
    words.length,
  ]);

  // Split display text to highlight any of the target words
  const renderHighlightedText = () => {
    const terms = highlightWords ?? [];
    if (!terms.length) return displayText;

    const pattern = terms
      .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
    const regex = new RegExp(`(${pattern})`, "gi");
    const parts = displayText.split(regex);

    return parts.map((part, i) =>
      terms.some((t) => part.toLowerCase() === t.toLowerCase()) ? (
        <span key={i} className={highlightClass}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <span>
      {renderHighlightedText()}
      {cursor && <span className={showCursor ? "opacity-100" : "opacity-0"}>{cursorStyle}</span>}
    </span>
  );
}
