"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import MagicButton from "./MagicButton";
import { FaPaperPlane } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:shaazakhtar12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="p-6 rounded-lg shadow-md max-w-lg mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      {submitted ? (
        <div className="text-center p-10 bg-green-900/20 rounded-lg border border-green-500/50">
          <h3 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h3>
          <p className="text-gray-300">
            Your message has been drafted. Please send the email from your mail client.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-4 text-purple hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border bg-transparent rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-32"
            ></textarea>
          </div>
          <div className="text-center">
            <MagicButton
              title="Submit"
              icon={<FaPaperPlane />}
              position="right"
            />
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
