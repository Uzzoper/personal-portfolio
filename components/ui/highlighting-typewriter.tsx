"use client";

import { useEffect, useState, useCallback } from "react";

interface HighlightingTypewriterProps {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  highlightWord?: string;
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
  highlightWord = "software",
  highlightClass = "text-green-500",
  cursor = true,
  cursorStyle = "_",
}: HighlightingTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delaySpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        // Word complete - pause before deleting
        setIsPaused(true);
      }
    } else {
      // Deleting backward
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        const nextIndex = (wordIndex + 1) % words.length;
        if (nextIndex === 0 && !loop) return;
        setWordIndex(nextIndex);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    isPaused,
    currentWord,
    wordIndex,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    loop,
    words.length,
  ]);

  // Split display text to highlight the target word
  const renderHighlightedText = () => {
    if (!highlightWord) return displayText;

    const regex = new RegExp(`(${highlightWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = displayText.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
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
