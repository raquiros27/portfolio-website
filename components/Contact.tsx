"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-inner">
        <motion.div
          initial={{ y: 18 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <span className="contact-label">Contact</span>
          <h2>Get in Touch</h2>
          <p>
            Let&apos;s collaborate on your next project or simply have a thoughtful conversation
            about design, strategy, and ideas.
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            initial={{ y: 18 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="contact-info"
          >
            <p className="contact-intro">
              Open to freelance, collaborations, and full-time opportunities.
            </p>

            <a href="mailto:hello@raquelquiros.com" className="contact-link">
              hello@raquelquiros.com
            </a>

            <div className="contact-meta">
              <span>Leeds, UK</span>
              <span>Available for remote work</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ y: 18 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-group">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
