import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_v0tv9wy",   // Your Service ID
          "template_cqa873u",  // Your Template ID
          form.current,
          "ge577sB4BWXQ6zsew" // Your Public Key
        )
        .then(
          () => {
            alert("✅ Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("❌ Failed to send message. Try again later.");
          }
        );
    }
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="user_name" placeholder="Your Name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="user_email" placeholder="Your Email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Your Message" rows={5} required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}
