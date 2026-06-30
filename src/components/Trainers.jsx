import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { trainers } from "../data/trainers";
import toast from "react-hot-toast";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};


// ─── Single Trainer Card ──────────────────────────────────────────────────────
function TrainerCard({ trainer, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      style={{
        background: "#111",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
      }}
    >
      {/* ── Image Area ── */}
      <div
        style={{
          position: "relative",
          height: 340,
          background: "#1a1a1a",
          overflow: "hidden",
        }}
      >
        {trainer.image ? (
          // When you add the image import above, it will render here automatically
          <img
            src={trainer.image}
            alt={trainer.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          // ── Placeholder shown until you add real images ──
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 100%)",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #E84035 0%, #FF6B35 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              {trainer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Add Photo
            </span>
          </div>
        )}

        {/* Red gradient overlay at bottom of image */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: "linear-gradient(to top, #111 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Experience badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(8,8,8,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(232,64,53,0.3)",
            borderRadius: 4,
            padding: "5px 12px",
            color: "#E84035",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {trainer.exp}
        </div>
      </div>

      {/* ── Info Area ── */}
      <div style={{ padding: "24px 28px 28px" }}>
        <h3
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: 20,
            margin: "0 0 6px",
            letterSpacing: "-0.4px",
          }}
        >
          {trainer.name}
        </h3>
        <p
          style={{
            color: "#E84035",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: "0 0 20px",
          }}
        >
          {trainer.role}
        </p>

        {/* Specialties */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {trainer.specialties.map((spec) => (
            <span
              key={spec}
              style={{
                background: "rgba(232,64,53,0.08)",
                border: "1px solid rgba(232,64,53,0.2)",
                color: "rgba(255,255,255,0.6)",
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: 20,
                letterSpacing: "0.05em",
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Book button */}
        <motion.button
  whileHover={{ scale: 1.03, background: "#c9332a" }}
  whileTap={{ scale: 0.97 }}
  onClick={() =>
    toast.success(
      `🎉 Your session with ${trainer.name} has been booked successfully!\n\nYou'll receive a confirmation email shortly.`
    )
  }
  style={{
    marginTop: 24,
    width: "100%",
    padding: "12px 0",
    background: "#E84035",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    cursor: "pointer",
  }}
>
  Book a Session
</motion.button>
      </div>
    </motion.div>
  );
}

// ─── Main Trainers Section ────────────────────────────────────────────────────
export default function Trainers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trainers"
      ref={ref}
      style={{
        background: "#0d0d0d",
        padding: "100px 8%",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* ── Section Header ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        style={{ textAlign: "center", marginBottom: 64 }}
      >
        <p
          style={{
            color: "#E84035",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Expert Coaches
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: 900,
            color: "#fff",
            margin: "0 0 16px",
            letterSpacing: "-1.5px",
            lineHeight: 1.05,
          }}
        >
          Meet Your{" "}
          <span style={{ color: "#E84035" }}>Coaches.</span>
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 15,
            maxWidth: 460,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Certified professionals obsessed with one thing — your results.
        </p>

        {/* Red underline accent */}
        <div
          style={{
            width: 48,
            height: 3,
            background: "#E84035",
            borderRadius: 2,
            margin: "24px auto 0",
          }}
        />
      </motion.div>

      {/* ── Trainer Cards Grid ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 28,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {trainers.map((trainer, index) => (
          <TrainerCard key={trainer.id} trainer={trainer} index={index} />
        ))}
      </motion.div>

      {/* ── Bottom CTA ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={4}
        style={{ textAlign: "center", marginTop: 56 }}
      >
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, marginBottom: 16 }}>
          Want to train with our full team?
        </p>
        <motion.button
          whileHover={{ scale: 1.04, borderColor: "#E84035", color: "#E84035" }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "transparent",
            color: "rgba(255,255,255,0.6)",
            border: "1.5px solid rgba(255,255,255,0.15)",
            borderRadius: 4,
            padding: "12px 32px",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
        >
          View All Trainers
        </motion.button>
      </motion.div>
    </section>
  );
}
