import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";


function Contact() {
    const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});


const handleSubmit = (e) => {
  e.preventDefault();

    if (
    !form.name ||
    !form.email ||
    !form.phone ||
    !form.message
  ) {
    toast.error("Please fill in all the fields.");
    return;
  }

  const firstName = form.name.trim().split(" ")[0];

  toast.success(
    `Thank you, ${firstName}! 🎉 We have received your message. Our team will connect with you soon.`,
    {
      duration: 5000,
    }
  );

  // Clear the form
  setForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
};

  return (
    <section
      id="contact"
      style={{
        background: "#080808",
        padding: "100px 8%",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        <p
          style={{
            color: "#E84035",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Contact Us
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(32px,4vw,48px)",
            fontWeight: 900,
            margin: 0,
          }}
        >
          Let's Start Your Fitness Journey
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,.6)",
            marginTop: 18,
            fontSize: 16,
          }}
        >
          We'd love to hear from you. Reach out anytime.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: 50,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div
            style={{
              background: "#111",
              padding: 35,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <Info
              title="📍 Address"
              text="IronForge Fitness Club, MG Road, Bengaluru, Karnataka 560001"
            />

            <Info
              title="📞 Phone"
              text="+91 98765 43210"
            />

            <Info
              title="📧 Email"
              text="contact@ironforgefitness.com"
            />

            <Info
              title="🕒 Working Hours"
              text={`Monday - Friday : 5:00 AM - 11:00 PM
Saturday : 6:00 AM - 10:00 PM
Sunday : 7:00 AM - 8:00 PM`}
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            background: "#111",
            padding: 35,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <input
            placeholder="Full Name"
  value={form.name}
  onChange={(e) =>
    setForm({ ...form, name: e.target.value })
  }
            style={inputStyle}
          />

          <input
            placeholder="Email Address"
  value={form.email}
  onChange={(e) =>
    setForm({ ...form, email: e.target.value })
  }
            style={inputStyle}
          />

          <input
            placeholder="Phone Number"
  value={form.phone}
  onChange={(e) =>
    setForm({ ...form, phone: e.target.value })
  }
            style={inputStyle}
          />

         <textarea
  rows={5}
  placeholder="Your Message"
  value={form.message}
  onChange={(e) =>
    setForm({
      ...form,
      message: e.target.value,
    })
  }
  style={{
    ...inputStyle,
    resize: "none",
  }}
/>

          <motion.button
          type="submit"
            whileHover={{
              scale: 1.03,
              background: "#c9332a",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%",
              padding: 16,
              marginTop: 20,
              background: "#E84035",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: 700,
              letterSpacing: ".1em",
              textTransform: "uppercase",
            }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function Info({ title, text }) {
  return (
    <div
      style={{
        marginBottom: 30,
      }}
    >
      <h3
        style={{
          color: "#E84035",
          marginBottom: 10,
          fontSize: 18,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,.7)",
          lineHeight: 1.8,
          whiteSpace: "pre-line",
        }}
      >
        {text}
      </p>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "18px",
  background: "#181818",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: 5,
  color: "#fff",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
};

export default Contact;