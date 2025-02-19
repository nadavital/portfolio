import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import resumeData from '../../Nadav_Avital_Resume.json';
import '../styles/ContactSection.css';
import GlassButton from '../components/GlassButton';

const ContactSection = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    // Common TLDs
    const validTLDs = [
      'com', 'net', 'org', 'edu', 'gov', 'mil', 'int',
      'io', 'co', 'ai', 'app', 'dev', 'me', 'info',
      // Country codes
      'uk', 'us', 'ca', 'au', 'de', 'fr', 'jp', 'cn', 'br', 'il'
    ];

    // Basic format check
    const basicEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]+)+$/;
    if (!basicEmailRegex.test(email)) return false;

    // Check if TLD is valid
    const tld = email.split('.').pop().toLowerCase();
    return validTLDs.includes(tld);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear email error when user starts typing
    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email before sending
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    setSending(true);
    setStatus('');
    setEmailError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: resumeData.contact.email,
        }
      );

      setStatus('Message sent successfully. I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Unable to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={sending}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={sending}
          />
          {emailError && <div className="status-error">{emailError}</div>}
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            disabled={sending}
          />
        </div>
        {status && <div className={status.includes('success') ? 'status-success' : 'status-error'}>{status}</div>}
        <GlassButton type="submit" size="medium" disabled={sending}>
          {sending ? 'Sending...' : 'Send Message'}
        </GlassButton>
      </form>
    </section>
  );
};

export default ContactSection;