import { motion,AnimatePresence } from "framer-motion"; 
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const links = {
  Train: ["All Programs", "HIIT Classes", "Strength Training", "Combat & Boxing", "Recovery"],
  Company: ["About Us", "Our Trainers", "Success Stories", "Blog", "Careers"],
  Support: ["Contact Us", "FAQ", "Membership Policy", "Privacy Policy", "Terms of Use"],
};

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
const [showMessage, setShowMessage] = useState(false);

  return (
    <AnimatePresence>
  {showMessage && (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        background: "#111",
        color: "#fff",
        padding: "16px 22px",
        borderRadius: 10,
        border: "1px solid #E84035",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        zIndex: 9999,
        maxWidth: 340,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 4 }}>
        🎉 Email Sent!
      </div>

      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
        Thanks for subscribing. Please check your inbox at
        <br />
        <strong>{email}</strong>
      </div>
    </motion.div>
  )}
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(232,64,53,0.18)",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#fff",
      }}
    >
      {/* Main footer grid */}
      <div
        style={{
          padding: "72px 8% 52px",
          display: "grid",
          gridTemplateColumns: "1.8fr repeat(3, 1fr)",
          gap: 48,
        }}
      >
        {/* Brand column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
        >
          <div
            style={{
              fontWeight: 900,
              fontSize: 26,
              letterSpacing: "-0.5px",
              marginBottom: 16,
            }}
          >
            IRON<span style={{ color: "#E84035" }}>FORGE</span>
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 14,
              lineHeight: 1.75,
              maxWidth: 260,
              margin: "0 0 28px",
            }}
          >
            Where limits are broken and legends are built. Join Delhi's most
            intense training community.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12 }}>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                whileHover={{ scale: 1.12, color: "#E84035" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: 6,
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,64,53,0.5)";
                  e.currentTarget.style.color = "#E84035";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Contact blurb */}
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Reach Us
            </div>
            <a
              href="mailto:hello@ironforge.in"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 13,
                textDecoration: "none",
                display: "block",
                marginBottom: 4,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#E84035")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
            >
              hello@ironforge.in
            </a>
            <a
              href="tel:+911140001234"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 13,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#E84035")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
            >
              +91 11 4000 1234
            </a>
          </div>
        </motion.div>

        {/* Link columns */}
        {Object.entries(links).map(([heading, items], colIdx) => (
          <motion.div
            key={heading}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={colIdx + 1}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              {heading}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((item) => (
                <li key={item} style={{ marginBottom: 12 }}>
                  <a
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Newsletter strip */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        style={{
          margin: "0 8%",
          padding: "28px 36px",
          background: "#111",
          border: "1px solid rgba(232,64,53,0.2)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: 16,
              marginBottom: 4,
              letterSpacing: "-0.3px",
            }}
          >
            Get training tips & member offers
          </div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
            No spam. Just gains.
          </div>
        </div>
        <div style={{ display: "flex", gap: 0, flexShrink: 0 }}>
         <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="your@email.com"
  style={{
    background: "#1a1a1a",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRight: "none",
    borderRadius: "4px 0 0 4px",
    padding: "11px 16px",
    color: "#fff",
    fontSize: 13,
    outline: "none",
    width: 220,
  }}
/>
<button
  type="button"
  onClick={() => {
    if (!email.trim()) return;

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }}
  style={{
    background: "linear-gradient(135deg, #E84035, #C62828)",
    color: "#fff",
    border: "none",
    padding: "0 22px",
    height: 46,
    borderRadius: "0 6px 6px 0",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.3px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "all 0.25s ease",
    boxShadow: "0 6px 18px rgba(232,64,53,0.25)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background =
      "linear-gradient(135deg, #F04E42, #E84035)";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow =
      "0 10px 24px rgba(232,64,53,0.4)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background =
      "linear-gradient(135deg, #E84035, #C62828)";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 6px 18px rgba(232,64,53,0.25)";
  }}
>
  Subscribe
  <span style={{ fontSize: 16 }}>→</span>
</button>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div
        style={{
          padding: "24px 8%",
          marginTop: 40,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
          © {year} IronForge Fitness Pvt. Ltd. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Use", "Refund Policy"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: 12,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.2)")}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
    </AnimatePresence>
  );
}
