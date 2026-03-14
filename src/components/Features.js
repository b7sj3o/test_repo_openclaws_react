import React from 'react';
import { FaRobot, FaRocket, FaCode, FaTelegram } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div style={{
    background: '#f8f9fa',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    transition: 'all 0.3s',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  }}>
    <Icon style={{ fontSize: '40px', color: '#4a6cf7', marginBottom: '20px' }} />
    <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>{title}</h3>
    <p style={{ color: '#666' }}>{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: FaRobot,
      title: "AI-Assisted",
      description: "Created entirely with AI assistance to demonstrate modern development workflows."
    },
    {
      icon: FaRocket,
      title: "Vercel Deployed",
      description: "Automatically deployed to Vercel with environment variables for secure API keys."
    },
    {
      icon: FaTelegram,
      title: "Telegram Integration",
      description: "Form submissions are sent directly to your Telegram bot in real-time."
    },
    {
      icon: FaCode,
      title: "React Powered",
      description: "Built with modern React for fast, responsive user experiences."
    }
  ];

  return (
    <section id="features" style={{
      padding: '80px 20px',
      background: 'white',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          marginBottom: '50px',
        }}>
          Key Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
        }}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;