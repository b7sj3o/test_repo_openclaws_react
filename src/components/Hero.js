import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      gap: '40px',
      flexWrap: 'wrap',
    }}>
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px',
          lineHeight: 1.2,
        }}>
          AI-Powered Development with{' '}
          <span style={{ color: '#4a6cf7' }}>OpenClaws</span>
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '30px',
          maxWidth: '600px',
        }}>
          A demonstration of AI-assisted Git repository creation and deployment. 
          Built with React and deployed to Vercel with Telegram integration.
        </p>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <button style={{
            background: '#4a6cf7',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Started
          </button>
          <button style={{
            background: 'transparent',
            color: '#4a6cf7',
            border: '2px solid #4a6cf7',
            padding: '12px 24px',
            borderRadius: '5px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onClick={() => window.open('https://github.com/b7sj3o/test_repo_openclaws', '_blank')}>
            View on GitHub
          </button>
        </div>
      </div>
      <div style={{
        flex: 1,
        minWidth: '300px',
        background: '#1e1e1e',
        color: '#d4d4d4',
        padding: '20px',
        borderRadius: '10px',
        fontFamily: "'Courier New', monospace",
        overflowX: 'auto',
      }}>
        <pre style={{ margin: 0, fontSize: '14px' }}>
{`// Created by OpenClaw AI Assistant
const project = {
  name: "test_repo_openclaws",
  tech: ["React", "Vercel", "Telegram Bot"],
  features: [
    "Responsive Design",
    "Form Submission",
    "GitHub Integration",
    "Telegram Notifications"
  ],
  deployed: true,
  date: "March 14, 2026"
};`}
        </pre>
      </div>
    </section>
  );
};

export default Hero;