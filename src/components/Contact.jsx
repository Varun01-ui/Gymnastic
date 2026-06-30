import { useForm } from "react-hook-form";
// import "./Contact.css";

const Contact = () => {

  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent Successfully!");
    reset();
  };

  return (

    <section className="contact section">

      <div className="container">

        <h2>Get In Touch</h2>

        <p>
          Ready to transform yourself? Contact our team today.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            {...register("name")}
            placeholder="Full Name"
          />

          <input
            {...register("email")}
            placeholder="Email Address"
          />

          <input
            {...register("phone")}
            placeholder="Phone Number"
          />

          <textarea
            {...register("message")}
            rows="6"
            placeholder="Write your message..."
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;