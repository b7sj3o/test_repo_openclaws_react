import React from 'react';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 999,
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        height: '60px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div className="logo" style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#4a6cf7',
          gap: '12px',
          textDecoration: 'none',
        }}>
          <FaCode style={{ marginTop: '6px', fontSize: '24px' }} />
          <div style={{ marginTop: '6px', fontSize: '24px' }}>OpenClaws</div>
        </div>
        <ul className="nav-links" style={{
          display: 'flex',
          alignItems: 'center',
          listStyle: 'none',
        }}>
          <li style={{ marginRight: '12px' }}><a style={{ color: '#555', fontWeight: '500', textDecoration: 'none' }} href="#home">Home</a></li>
          <li style={{ marginRight: '12px' }}><a style={{ color: '#555', fontWeight: '500', textDecoration: 'none' }} href="#features">Features</a></li>
          <li style={{ marginRight: '12px' }}><a style={{ color: '#555', fontWeight: '500', textDecoration: 'none' }} href="#about">About</a></li>
          <li style={{ marginRight: '12px' }}><button style={{
          background: '#4a6cf7',
          color: 'white',
          border: 'none',
          padding: '0.7rem 1.5rem',
          borderRadius: '5px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }} onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Get Started</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;