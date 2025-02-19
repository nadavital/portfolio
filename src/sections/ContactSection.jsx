import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import resumeData from '../../Nadav_Avital_Resume.json';
import '../styles/ContactSection.css';
import GlassButton from '../components/GlassButton';

const ContactSection = () => {
  useEffect(() => {
    emailjs.init('itHDqZmh0meyKQDnJ');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    try {
      await emailjs.send(
        'service_rflja7f',
        'template_2j8ex88',
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