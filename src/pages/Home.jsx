import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image1 from "../assests/images/Image1.jpg"
import TrainersComponent from "../components/Trainers";
import PricingComponent from "../components/Pricing";
import Contact from "../pages/Contact";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Reusable Hook ─────────────────────────────────────────────────────────────
function useSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: "12K+", label: "Active Members" },
  { value: "98%", label: "Retention Rate" },
  { value: "50+", label: "Expert Trainers" },
  { value: "200+", label: "Weekly Classes" },
];

const features = [
  {
    icon: "⚡",
    title: "High-Intensity Training",
    desc: "Push past your limits with programs engineered for maximum output and explosive gains.",
  },
  {
    icon: "🏋️",
    title: "Elite Equipment",
    desc: "Train on competition-grade machines — free weights, cable systems, and recovery tech.",
  },
  {
    icon: "🔥",
    title: "Personal Coaching",
    desc: "One-on-one sessions with certified coaches who build your plan around your goals.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    desc: "Real-time analytics, body scans, and weekly check-ins so every rep counts.",
  },
  {
    icon: "🥊",
    title: "Combat & Conditioning",
    desc: "Boxing, MMA, and cardio combat classes for full-body power and mental grit.",
  },
  {
    icon: "🧬",
    title: "Nutrition Science",
    desc: "Macro planning and meal coaching from in-house sports dietitians.",
  },
];

const programs = [
  {
    tag: "STRENGTH",
    title: "Power Block",
    duration: "60 min",
    intensity: "High",
    color: "#E84035",
  },
  {
    tag: "CARDIO",
    title: "Ignite HIIT",
    duration: "45 min",
    intensity: "Max",
    color: "#FF6B35",
  },
  {
    tag: "COMBAT",
    title: "Iron Fist",
    duration: "75 min",
    intensity: "Extreme",
    color: "#E84035",
  },
  {
    tag: "RECOVERY",
    title: "Flex & Flow",
    duration: "50 min",
    intensity: "Medium",
    color: "#888",
  },
];

const plans = [
  {
    name: "Core",
    price: "₹1,499",
    period: "/mo",
    perks: ["Gym floor access", "2 group classes/wk", "App tracking"],
    highlight: false,
  },
  {
    name: "Beast",
    price: "₹2,999",
    period: "/mo",
    perks: [
      "Unlimited classes",
      "1 PT session/wk",
      "Nutrition consult",
      "Priority booking",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹5,499",
    period: "/mo",
    perks: [
      "Everything in Beast",
      "4 PT sessions/wk",
      "Body composition scans",
      "Recovery lounge",
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Vikram S.",
    text: "Lost 18 kg in 5 months. The trainers here don't let you quit — that's the difference.",
    stars: 5,
  },
  {
    name: "Ananya R.",
    text: "The combat classes are insane — I've never felt stronger or more confident.",
    stars: 5,
  },
  {
    name: "Dev K.",
    text: "Went from 60 kg to 82 kg lean mass in under a year. Data-driven coaching works.",
    stars: 5,
  },
];

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        height: 68,
        background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,64,53,0.2)" : "none",
        transition: "background 0.3s, border-bottom 0.3s",
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: 24,
          letterSpacing: "-0.5px",
          color: "#fff",
        }}
      >
        IRON<span style={{ color: "#E84035" }}>FORGE</span>
      </span>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Programs", "Trainers", "Pricing", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#E84035")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
          >
            {item}
          </a>
        ))}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "#E84035",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "9px 20px",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Join Now
        </motion.button>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 640,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Parallax background grid */}
      <motion.div style={{ y, position: "absolute", inset: 0 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(232,64,53,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,64,53,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232,64,53,0.12) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Diagonal red slash */}
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: 0,
          bottom: 0,
          width: "48%",
          background: "rgba(232,64,53,0.06)",
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* ── Main content: LEFT text | RIGHT image ── */}
      <motion.div
        style={{
          opacity,
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "0 8%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
        }}
      >
        {/* ── LEFT: Text block ── */}
        <div style={{ flex: "1 1 480px", maxWidth: 560 }}>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{
              color: "#E84035",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: 20,
              margin: "0 0 20px",
            }}
          >
            No Excuses. No Limits.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              fontSize: "clamp(52px, 6vw, 96px)",
              fontWeight: 900,
              lineHeight: 1,
              color: "#fff",
              margin: "0 0 24px",
              letterSpacing: "-2px",
            }}
          >
            FORGE
            <br />
            YOUR
            <br />
            <span style={{ color: "#E84035" }}>LIMITS.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 17,
              lineHeight: 1.65,
              margin: "0 0 40px",
              maxWidth: 440,
            }}
          >
            Elite training, world-class coaches, and a community that doesn't
            accept less. Your transformation starts today.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <motion.button
              whileHover={{ scale: 1.04, background: "#c9332a" }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "#E84035",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                padding: "16px 36px",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, borderColor: "#E84035", color: "#E84035" }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.25)",
                borderRadius: 4,
                padding: "16px 36px",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Explore Programs
            </motion.button>
          </motion.div>
        </div>

        {/* ── RIGHT: Image block ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: "1 1 420px",
            maxWidth: 520,
            position: "relative",
          }}
        >
          {/* Red accent border behind image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "2px solid rgba(232,64,53,0.35)",
              borderRadius: 8,
              transform: "translate(12px, 12px)",
              zIndex: 0,
            }}
          />

          {/* Image */}
          <motion.img
            src={Image1}
            alt="IronForge athlete training"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: 8,
              display: "block",
              position: "relative",
              zIndex: 1,
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          />

          {/* Floating stat badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              position: "absolute",
              bottom: -20,
              left: -24,
              zIndex: 2,
              background: "#E84035",
              borderRadius: 8,
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >

            {/* <span
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Active Members
            </span> */}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(232,64,53,0.8), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}


// ─── Stats ─────────────────────────────────────────────────────────────────────
function Stats() {
  const { ref, inView } = useSection();
  return (
    <section
      ref={ref}
      style={{
        background: "#E84035",
        padding: "48px 8%",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 32,
          textAlign: "center",
        }}
      >
        {stats.map((s, i) => (
          <motion.div key={s.label} variants={fadeUp} custom={i}>
            <div
              style={{
                fontSize: 44,
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-1.5px",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── Features / Why Us ────────────────────────────────────────────────────────
function Features() {
  const { ref, inView } = useSection();
  return (
    <section
      ref={ref}
      id="features"
      style={{ background: "#0d0d0d", padding: "100px 8%" }}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ marginBottom: 56 }}
      >
        <p
          style={{
            color: "#E84035",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Why IronForge
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            color: "#fff",
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          Built different. <span style={{ color: "#E84035" }}>Period.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={scaleIn}
            custom={i}
            whileHover={{ y: -6, borderColor: "rgba(232,64,53,0.5)" }}
            style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8,
              padding: "32px 28px",
              transition: "border-color 0.2s",
              cursor: "default",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
            <h3
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
                margin: "0 0 10px",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 14,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {f.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── Programs ─────────────────────────────────────────────────────────────────
function Programs() {
  const { ref, inView } = useSection();
  return (
    <section
      ref={ref}
      id="programs"
      style={{ background: "#080808", padding: "100px 8%" }}
    >
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ marginBottom: 56 }}
      >
        <p
          style={{
            color: "#E84035",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Our Programs
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            color: "#fff",
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          Train with purpose.
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            custom={i}
            whileHover={{ scale: 1.025 }}
            style={{
              background: "#111",
              borderRadius: 8,
              padding: "36px 28px",
              borderLeft: `4px solid ${p.color}`,
              cursor: "pointer",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: `${p.color}22`,
                color: p.color,
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.18em",
                padding: "4px 10px",
                borderRadius: 2,
                marginBottom: 20,
              }}
            >
              {p.tag}
            </span>
            <h3
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: 22,
                margin: "0 0 20px",
                letterSpacing: "-0.5px",
              }}
            >
              {p.title}
            </h3>
            <div
              style={{
                display: "flex",
                gap: 20,
                color: "rgba(255,255,255,0.4)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <span>⏱ {p.duration}</span>
              <span>🔥 {p.intensity}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const { ref, inView } = useSection();
  return (
    <section
      ref={ref}
      style={{ background: "#0d0d0d", padding: "100px 8%" }}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ textAlign: "center", marginBottom: 56 }}
      >
        <p
          style={{
            color: "#E84035",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Real Results
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            color: "#fff",
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          They did it. You will too.
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            custom={i}
            style={{
              background: "#111",
              borderRadius: 8,
              padding: "32px 28px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ color: "#E84035", fontSize: 20, marginBottom: 16, letterSpacing: 2 }}>
              {"★".repeat(t.stars)}
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 15,
                lineHeight: 1.7,
                margin: "0 0 24px",
                fontStyle: "italic",
              }}
            >
              "{t.text}"
            </p>
            <div
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.05em",
              }}
            >
              — {t.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  const { ref, inView } = useSection();
  return (
    <section
      ref={ref}
      style={{
        background: "#080808",
        padding: "120px 8%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,64,53,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-2px",
            lineHeight: 1.05,
            margin: "0 0 20px",
          }}
        >
          Your strongest self
          <br />
          <span style={{ color: "#E84035" }}>is waiting.</span>
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 16,
            maxWidth: 440,
            margin: "0 auto 44px",
            lineHeight: 1.65,
          }}
        >
          First 7 days free. No contracts. Just results.
        </p>
        <motion.button
          whileHover={{ scale: 1.06, background: "#c9332a" }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "#E84035",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "18px 52px",
            fontWeight: 900,
            fontSize: 15,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Claim Your Free Week
        </motion.button>
      </motion.div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span
        style={{ fontWeight: 900, fontSize: 18, color: "#fff", letterSpacing: "-0.5px" }}
      >
        IRON<span style={{ color: "#E84035" }}>FORGE</span>
      </span>
      <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
        © {new Date().getFullYear()} IronForge. All rights reserved.
      </span>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#080808",
        minHeight: "100vh",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Programs />
      <TrainersComponent />
      <PricingComponent />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
