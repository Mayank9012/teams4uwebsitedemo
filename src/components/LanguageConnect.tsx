import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import backgroundImage from '../assets/languageconnectimage.svg';

const LanguageConnect: React.FC = () => {
  const languages = [
    'Hindi', 'Odia', 'Bengali',
    'Marathi', 'Telugu', 'Kannada',
    'Malayalam', 'Punjabi', 'Assamese',
  ];

  return (
    <>
      <style>
        {`
          .language-section {
            padding: 5rem 5rem;
          }
          .language-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          .language-buttons {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          @media (max-width: 768px) {
            .language-section {
              padding: 3rem 1rem;
            }
            .language-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            .language-buttons {
              grid-template-columns: repeat(2, 1fr);
              gap: 0.75rem;
            }
          }
        `}
      </style>
      <section className="language-section" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div className="language-grid">
        <div>
          <h1 style={{
            ...typography.h1,
            color: colors.navy,
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.5)',
          }}>
            Language Connect:
          </h1>
          <h2 style={{
            ...typography.h2,
            color: colors.textDark,
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.5)',
          }}>
            A Community of Callers
          </h2>
          <p style={{
            ...typography.body,
            color: colors.textDark,
            marginBottom: '2rem',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), -1px -1px 1px rgba(255, 255, 255, 0.5)',
          }}>
            Our Telecallers deals in multiple languages with our customer from any region or from any State.
          </p>
          <div className="language-buttons">
            {languages.map((lang, index) => (
              <button key={index} style={{
                backgroundColor: colors.paleBlue,
                color: colors.textDark,
                border: `2px solid ${colors.primary}`,
                padding: '0.5rem 0.2rem',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                {lang}
              </button>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LanguageConnect;