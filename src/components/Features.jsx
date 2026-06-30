import {
  FaDumbbell,
  FaHeartbeat,
  FaUsers,
  FaAppleAlt,
  FaFire,
  FaRunning,
} from "react-icons/fa";

import { motion } from "framer-motion";
// import "./Features.css";

const features = [
  {
    icon: <FaDumbbell />,
    title: "Modern Equipment",
    description:
      "Latest imported strength and cardio machines.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Fitness Assessment",
    description:
      "Track body composition and monitor progress.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Trainers",
    description:
      "Certified coaches for every fitness level.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Nutrition Plans",
    description:
      "Customized meal plans for your goals.",
  },
  {
    icon: <FaRunning />,
    title: "Functional Training",
    description:
      "Improve endurance, flexibility and strength.",
  },
  {
    icon: <FaFire />,
    title: "Fat Burn Programs",
    description:
      "Scientifically designed HIIT sessions.",
  },
];

const Features = () => {
  return (
    <section className="features section">
      <div className="container">

        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>Train Smarter. Get Stronger.</h2>
        </div>

        <div className="features-grid">

          {features.map((item, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;