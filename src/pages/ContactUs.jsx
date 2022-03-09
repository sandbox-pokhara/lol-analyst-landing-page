import React from "react";

export default function ContactUS() {
  return (
    <div className="contact-us">
      <div className="heading-large primary">Contact Us</div>
      <div className="heading-small">
        Have an inquiry or some feedback for us? Fill out the form below to contact our team.
      </div>
      <form>
        <input name="name" placeholder="Name" type="text" />
        <input name="email" placeholder="Email" type="email" />
        <textarea name="message" rows="10" placeholder="Message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
