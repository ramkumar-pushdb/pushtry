import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    // User's provided Web3Forms access key
    formData.append("access_key", "0b07efb7-3e03-49c8-99b8-fb08c70aa05d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset(); // Clear the form input fields
      } else {
        setResult("Failed to send message: " + data.message);
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setResult("An error occurred while sending.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>Send us a message and we'll receive it via email.</p>
        
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Your Name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="Your Email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button" disabled={result === 'Sending...'}>
            {result === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
          
          {result && <p className="form-status">{result}</p>}
        </form>
      </div>
    </div>
  );
}
