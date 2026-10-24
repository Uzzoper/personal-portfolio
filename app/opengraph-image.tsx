import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Juan Peruzzo — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default function OpengraphImage() {
  let avatarBase64 = "";
  try {
    const avatarPath = path.join(process.cwd(), "public", "juan.jpeg");
    if (fs.existsSync(avatarPath)) {
      const avatarBuffer = fs.readFileSync(avatarPath);
      avatarBase64 = `data:image/jpeg;base64,${avatarBuffer.toString("base64")}`;
    }
  } catch {
    // Fallback gracefully
  }

  const technologies = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "React",
    "Next.js",
    "TypeScript",
    "Docker",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "60px 68px",
          position: "relative",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          color: "#fafafa",
        }}
      >
        {/* Soft ambient background highlight */}
        <div
          style={{
            position: "absolute",
            top: "-140px",
            right: "-100px",
            width: "620px",
            height: "620px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.07), transparent 70%)",
          }}
        />

        {/* Inset subtle border */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.07)",
          }}
        />

        {/* Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {avatarBase64 ? (
              <img
                src={avatarBase64}
                alt="Juan Peruzzo"
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "999px",
                  objectFit: "cover",
                  border: "2px solid rgba(255, 255, 255, 0.16)",
                }}
              />
            ) : (
              <div
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "2px solid rgba(255, 255, 255, 0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                JP
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                Juan Peruzzo
              </span>
              <span
                style={{
                  fontSize: "18px",
                  color: "#a1a1aa",
                  letterSpacing: "-0.01em",
                }}
              >
                Software Developer • Remote
              </span>
            </div>
          </div>
        </div>

        {/* Center Main Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.04em",
              color: "#ffffff",
            }}
          >
            I build and ship full-stack products.
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {technologies.map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#d4d4d8",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <span
            style={{
              fontSize: "17px",
              color: "#71717a",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            juanperuzzo.is-a.dev ↗
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
