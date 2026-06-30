import { motion } from "framer-motion";
// import { fadeUp, stagger, scaleIn } from "../animations";
// import useSection from "../hooks/useSection";
import { plans } from "../data/pricing";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function useSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

function Pricing() {
  const { ref, inView } = useSection();

  return (
    <section
      ref={ref}
      id="pricing"
      style={{
        background: "#080808",
        padding: "100px 8%",
      }}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          textAlign: "center",
          marginBottom: 56,
        }}
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
          Membership
        </p>

        <h2
          style={{
            fontSize: "clamp(28px,4vw,48px)",
            fontWeight: 900,
            color: "#fff",
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
          Pick your level.
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 24,
          maxWidth: 940,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            variants={scaleIn}
            custom={i}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            style={{
              background: plan.highlight ? "#E84035" : "#111",
              borderRadius: 8,
              padding: plan.highlight ? "44px 32px" : "36px 28px",
              border: plan.highlight
                ? "none"
                : "1px solid rgba(255,255,255,0.07)",
              position: "relative",
            }}
          >
            {plan.highlight && (
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff",
                  color: "#E84035",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  padding: "5px 14px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                }}
              >
                Most Popular
              </div>
            )}

            <div
              style={{
                color: plan.highlight
                  ? "rgba(255,255,255,.8)"
                  : "rgba(255,255,255,.45)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {plan.name}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 4,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-1.5px",
                  lineHeight: 1,
                }}
              >
                {plan.price}
              </span>

              <span
                style={{
                  color: plan.highlight
                    ? "rgba(255,255,255,.65)"
                    : "rgba(255,255,255,.35)",
                  fontSize: 14,
                }}
              >
                {plan.period}
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px",
              }}
            >
              {plan.perks.map((perk) => (
                <li
                  key={perk}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                    borderBottom: `1px solid ${
                      plan.highlight
                        ? "rgba(255,255,255,.15)"
                        : "rgba(255,255,255,.06)"
                    }`,
                    color: plan.highlight
                      ? "rgba(255,255,255,.88)"
                      : "rgba(255,255,255,.55)",
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      color: plan.highlight ? "#fff" : "#E84035",
                      fontSize: 16,
                    }}
                  >
                    ✓
                  </span>

                  {perk}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 4,
                border: plan.highlight
                  ? "none"
                  : "1.5px solid rgba(255,255,255,.2)",
                background: plan.highlight ? "#fff" : "transparent",
                color: plan.highlight ? "#E84035" : "#fff",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Pricing;