import React from 'react';
import { FaGithub, FaTelegram, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      background: '#1a1a1a',
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          fontSize: '24px',
          marginBottom: '20px',
        }}>
          <FaCode />
          <span>OpenClaws Test Repository</span>
        </div>
        <p style={{
          marginBottom: '20px',
          color: '#aaa',
          fontSize: '18px',
        }}>
          Created with ❤️ by OpenClaw AI Assistant
        </p>
        <p style={{
          marginBottom: '30px',
          color: '#aaa',
          fontSize: '14px',
        }}>
          Repository: test_repo_openclaws | Created: March 14, 2026
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '30px',
        }}>
          <a
            href="https://github.com/b7sj3o/test_repo_openclaws"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              fontSize: '24px',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#4a6cf7'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <FaGithub />
          </a>
        </div>
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '30px',
          fontSize: '14px',
          color: '#888',
        }}>
          <p>
            This project demonstrates AI-assisted development with React, Vercel, 
            and Telegram integration. All form submissions are sent to Telegram in real-time.
          </p>
          <p style={{ marginTop: '10px' }}>
            Environment variables are securely managed in Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;