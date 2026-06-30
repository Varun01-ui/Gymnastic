import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// import "./Counter.css";

const data = [
  {
    number: 12000,
    suffix: "+",
    title: "Happy Members",
  },
  {
    number: 85,
    suffix: "+",
    title: "Professional Trainers",
  },
  {
    number: 250,
    suffix: "+",
    title: "Modern Machines",
  },
  {
    number: 15,
    suffix: "+",
    title: "Years Experience",
  },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="counter section" ref={ref}>
      <div className="container counter-grid">
        {data.map((item, index) => (
          <div className="counter-card" key={index}>
            <h2>
              {inView && (
                <CountUp
                  end={item.number}
                  duration={2.5}
                />
              )}
              {item.suffix}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;