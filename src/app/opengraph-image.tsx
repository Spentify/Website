import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Spentify — Simple expense tracking and budgeting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const [logoBuffer, appScreenBuffer] = await Promise.all([
    readFile(path.join(process.cwd(), "public", "logo.png")),
    readFile(path.join(process.cwd(), "public", "screen-tran.png")),
  ]);
  const logo = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  const appScreen = `data:image/png;base64,${appScreenBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
          color: "#0f172a",
          fontFamily: "Arial, sans-serif",
          padding: "64px 72px",
        }}
      >
        <div style={{ position: "absolute", width: 620, height: 620, borderRadius: 999, right: -220, top: -300, background: "rgba(14,118,217,0.14)" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: 999, right: 130, bottom: -310, background: "rgba(34,211,238,0.12)" }} />

        <div style={{ display: "flex", flexDirection: "column", width: "100%", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={logo} width="52" height="52" alt="" style={{ borderRadius: 13 }} />
            <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>Spentify</span>
          </div>

          <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: 76 }}>
            <div style={{ display: "flex", flexDirection: "column", width: 670 }}>
              <div style={{ display: "flex", fontSize: 63, lineHeight: 1.04, letterSpacing: "-3.2px", fontWeight: 800 }}>
                See where your money goes—and what you have left.
              </div>
              <div style={{ display: "flex", marginTop: 24, maxWidth: 640, color: "#475569", fontSize: 24, lineHeight: 1.45 }}>
                A simple, clean expense tracker to manage spending, budgets, and savings.
              </div>
            </div>

            <div
              style={{
                width: 286,
                height: 500,
                display: "flex",
                position: "relative",
                overflow: "hidden",
                border: "9px solid #111827",
                borderRadius: 42,
                background: "#ffffff",
                boxShadow: "0 24px 60px rgba(15,23,42,0.20)",
              }}
            >
              <img
                  src={appScreen}
                width="268"
                height="566"
                alt=""
                style={{ objectFit: "cover", objectPosition: "top", marginTop: -1 }}
              />
              <div style={{ display: "flex", position: "absolute", width: 82, height: 19, borderRadius: 999, background: "#111827", top: 9, left: 93 }} />
            </div>
          </div>

          <div style={{ display: "flex", color: "#64748b", fontSize: 18, fontWeight: 600 }}>spentify.app</div>
        </div>
      </div>
    ),
    size,
  );
}
