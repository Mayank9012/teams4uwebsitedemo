import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import communityImage from '../assets/communitysection.svg';

const Contact: React.FC = () => {
  return (
    <>
      <style>
        {`
          .contact-section {
            padding: 5rem 5rem;
          }
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
          }
          .contact-image {
            height: 350px;
          }
          @media (max-width: 768px) {
            .contact-section {
              padding: 3rem 1rem;
            }
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            .contact-image {
              height: 250px;
            }
            .contact-button {
              width: 100%;
            }
          }
        `}
      </style>
      <section id="join-us" className="contact-section" style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div className="contact-grid">
        <div>
          <h2 style={{
            ...typography.h2,
            color: colors.white,
            marginBottom: '1rem',
          }}>
            Let's Hook with Our Community
          </h2>
          <p style={{
            ...typography.body,
            color: colors.white,
            marginBottom: '2rem',
            opacity: 0.95,
          }}>
            Join Our Community and start earning rewards today! Connect, engage, and be part of something special—where every action brings you closer to exciting benefits!
          </p>
          <button
            className="contact-button"
            style={{
              backgroundColor: 'transparent',
              color: colors.white,
              border: '2px solid ' + colors.textDark,
              padding: '0.875rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
            onClick={() => window.location.href = '/joinus'}
          >
            Join Community By signing Up
          </button>
        </div>
        <div className="contact-image" style={{
          width: '100%',
          borderRadius: '200px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          <img 
            src={communityImage} 
            alt="Team collaboration"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      </div>
    </section>
    </>
  );
};

export default Contact;