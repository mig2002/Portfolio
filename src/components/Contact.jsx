import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <span className="underline"></span>

      <p className="contact-desc">
        I’m open to internships, research opportunities, and full-time roles.
        Feel free to reach out for collaboration or discussion.
      </p>

      <form
        className="contact-form"
        action="mailto:mg6318497@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
