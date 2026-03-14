import React from 'react';

const Contact = ({ formData, setFormData, formStatus, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section id="contact" style={{
      padding: '80px 20px',
      background: 'white',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>
          Contact Us
        </h2>
        <p style={{
          color: '#666',
          marginBottom: '40px',
          fontSize: '18px',
        }}>
          Fill out the form below and the message will be sent directly to Telegram.
        </p>

        {formStatus.message && (
          <div style={{
            marginBottom: '20px',
            padding: '15px',
            borderRadius: '5px',
            fontWeight: '600',
            textAlign: 'center',
            backgroundColor: formStatus.success ? '#d4edda' : '#f8d7da',
            color: formStatus.success ? '#155724' : '#721c24',
            border: `1px solid ${formStatus.success ? '#c3e6cb' : '#f5c6cb'}`,
            animation: 'fadeIn 0.3s ease',
          }}>
            {formStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={formStatus.loading}
            style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              fontFamily: 'inherit',
              transition: 'border-color 0.3s',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={formStatus.loading}
            style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              fontFamily: 'inherit',
              transition: 'border-color 0.3s',
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={formStatus.loading}
            style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              fontFamily: 'inherit',
              resize: 'vertical',
              transition: 'border-color 0.3s',
            }}
          />
          <button
            type="submit"
            disabled={formStatus.loading}
            style={{
              background: formStatus.loading ? '#999' : '#4a6cf7',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: formStatus.loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
            }}
          >
            {formStatus.loading ? 'Sending...' : 'Send Message to Telegram'}
          </button>
        </form>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '10px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'left',
        }}>
          <strong>How it works:</strong>
          <ol style={{ margin: '10px 0 0 20px', lineHeight: 1.6 }}>
            <li>You fill out the form above</li>
            <li>Data is sent to our Vercel serverless function</li>
            <li>The function forwards it to your Telegram bot</li>
            <li>You receive the message instantly in Telegram</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Contact;