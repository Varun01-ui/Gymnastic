import { motion } from "framer-motion";
// import "./About.css";

const About = () => {
  return (
    <section className="about section">
      <div className="container about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80"
            alt="Gym"
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <span>ABOUT US</span>

          <h2>
            Become The Best Version Of Yourself
          </h2>

          <p>
            At Iron Pulse Fitness we combine modern equipment, certified
            trainers and science-backed workout programs to help you build
            strength, confidence and discipline.
          </p>

          <div className="about-stats">

            <div>
              <h3>12K+</h3>
              <p>Members</p>
            </div>

            <div>
              <h3>80+</h3>
              <p>Trainers</p>
            </div>

            <div>
              <h3>15+</h3>
              <p>Years</p>
            </div>

          </div>

          <button>Learn More</button>

        </motion.div>

      </div>
    </section>
  );
};

export default About;