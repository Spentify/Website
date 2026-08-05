import { ImageResponse } from "next/og";

export const alt = "Spentify 50/30/20 Budget Calculator";
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
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 999,
            right: -170,
            top: -260,
            background: "rgba(59, 130, 246, 0.13)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: 999,
            right: 120,
            bottom: -260,
            background: "rgba(34, 211, 238, 0.12)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", width: "100%", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 13,
                background: "#0e76d9",
                color: "white",
                fontSize: 25,
                fontWeight: 800,
              }}
            >
              S
            </div>
            <span style={{ fontSize: 27, fontWeight: 700, letterSpacing: "-0.5px" }}>Spentify</span>
            <span
              style={{
                display: "flex",
                marginLeft: 8,
                border: "1px solid #bfdbfe",
                borderRadius: 999,
                padding: "7px 14px",
                color: "#1d4ed8",
                background: "#eff6ff",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Free calculator
            </span>
          </div>

          <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between", gap: 64 }}>
            <div style={{ display: "flex", flexDirection: "column", width: 665 }}>
              <div style={{ display: "flex", fontSize: 66, lineHeight: 1.02, letterSpacing: "-3.5px", fontWeight: 800 }}>
                50/30/20 Budget Calculator
              </div>
              <div style={{ display: "flex", marginTop: 24, maxWidth: 620, color: "#475569", fontSize: 25, lineHeight: 1.45 }}>
                Split your income into needs, wants, and savings—in seconds.
              </div>
            </div>

            <div
              style={{
                width: 340,
                display: "flex",
                flexDirection: "column",
                border: "1px solid #e2e8f0",
                borderRadius: 26,
                background: "rgba(255,255,255,0.92)",
                padding: "30px",
                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.10)",
              }}
            >
              <span style={{ color: "#64748b", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.4px" }}>
                Your money plan
              </span>
              <div style={{ display: "flex", height: 17, overflow: "hidden", borderRadius: 999, marginTop: 22 }}>
                <div style={{ display: "flex", width: "50%", background: "#3b82f6" }} />
                <div style={{ display: "flex", width: "30%", background: "#8b5cf6" }} />
                <div style={{ display: "flex", width: "20%", background: "#10b981" }} />
              </div>
              {[
                ["Needs", "50%", "#3b82f6"],
                ["Wants", "30%", "#8b5cf6"],
                ["Savings", "20%", "#10b981"],
              ].map(([label, value, color]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 19, fontSize: 19 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: color }} />
                    <span style={{ color: "#475569", fontWeight: 600 }}>{label}</span>
                  </div>
                  <span style={{ fontWeight: 800 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", color: "#64748b", fontSize: 18, fontWeight: 600 }}>
            spentify.app/calculators/50-30-20
          </div>
        </div>
      </div>
    ),
    size,
  );
}
