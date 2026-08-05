import { ImageResponse } from "next/og";

export const alt = "Spentify — Simple expense tracking and budgeting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 13, background: "#0e76d9", color: "#ffffff", fontSize: 25, fontWeight: 800 }}>
              S
            </div>
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
                width: 328,
                display: "flex",
                flexDirection: "column",
                border: "1px solid #dbeafe",
                borderRadius: 28,
                background: "rgba(255,255,255,0.94)",
                padding: "30px",
                boxShadow: "0 18px 50px rgba(15,23,42,0.10)",
              }}
            >
              <span style={{ color: "#64748b", fontSize: 15, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase" }}>This month</span>
              <span style={{ display: "flex", marginTop: 13, fontSize: 42, fontWeight: 800, letterSpacing: "-1.5px" }}>$2,840</span>
              <span style={{ color: "#64748b", fontSize: 17, marginTop: 3 }}>available balance</span>
              <div style={{ display: "flex", height: 12, overflow: "hidden", borderRadius: 999, background: "#e2e8f0", marginTop: 26 }}>
                <div style={{ display: "flex", width: "66%", borderRadius: 999, background: "#0e76d9" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, color: "#475569", fontSize: 16, fontWeight: 600 }}>
                <span>Budget used</span><span>66%</span>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 25 }}>
                {["Spending", "Budgets", "Savings"].map((item) => (
                  <span key={item} style={{ display: "flex", borderRadius: 999, background: "#eff6ff", color: "#1d4ed8", padding: "7px 10px", fontSize: 12, fontWeight: 700 }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", color: "#64748b", fontSize: 18, fontWeight: 600 }}>spentify.app</div>
        </div>
      </div>
    ),
    size,
  );
}
