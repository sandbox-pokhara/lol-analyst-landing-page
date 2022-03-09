import React, { useState } from "react";

const url =
  "https://vldewis041.execute-api.us-east-1.amazonaws.com/lol-analyst-app-contact-form/contact-us";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const sendEmail = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setStatus(null);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        setStatus(false);
        return;
      }
      setName("");
      setEmail("");
      setMessage("");
      setStatus(true);
    } catch {
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  const statusText =
    status === null ? null : status ? (
      <div className="body-small victory">Message successfully sent.</div>
    ) : (
      <div className="body-small defeat">Failed to send message.</div>
    );

  return (
    <div className="contact-us">
      <div className="heading-large primary">Contact Us</div>
      <div className="heading-small">
        Have an inquiry or some feedback for us? Fill out the form below to contact our team.
      </div>
      <form className="contact-us-form" onSubmit={sendEmail}>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <input type="submit" value={loading ? "Sumbitting..." : "Submit"} disabled={loading} />
        {statusText}
      </form>
    </div>
  );
}
