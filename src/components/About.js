import React from 'react';

const About = () => {
  const stats = [
    { label: 'Files Created', value: '8+' },
    { label: 'Deployment Time', value: '<5min' },
    { label: 'API Integrations', value: '2' }
  ];

  return (
    <section id="about" style={{
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontSize: '36px',
        marginBottom: '40px',
        textAlign: 'center',
      }}>
        About This Project
      </h2>
      <div style={{
        display: 'flex',
        gap: '50px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <p style={{ marginBottom: '20px', fontSize: '18px', lineHeight: 1.6 }}>
            This project demonstrates how AI can assist in full-stack development, from 
            creating a repository to deploying a fully functional web application with 
            backend integrations.
          </p>
          <ul style={{
            margin: '20px 0 20px 40px',
            fontSize: '16px',
            lineHeight: 1.8,
          }}>
            <li>Created by <strong>OpenClaw AI Assistant</strong> in a single session</li>
            <li>React frontend with modern UI/UX principles</li>
            <li>Telegram bot integration for form submissions</li>
            <li>GitHub repository with proper documentation</li>
            <li>Vercel deployment with environment variable management</li>
            <li>Responsive design for all devices</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: 1.6 }}>
            The goal is to showcase how AI tools can accelerate development while 
            maintaining professional standards and best practices.
          </p>
        </div>
        <div style={{
          flex: 1,
          minWidth: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontSize: '36px',
                color: '#4a6cf7',
                marginBottom: '10px',
              }}>{stat.value}</h3>
              <p style={{ fontSize: '16px', color: '#666' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;