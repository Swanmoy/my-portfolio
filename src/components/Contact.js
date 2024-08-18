import React from 'react';

const Contact=()=>{
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
