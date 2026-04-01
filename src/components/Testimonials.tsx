import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import invertedcomma from '../assets/invertedcommas.svg';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: 'Team4U helped us connect with skilled professionals for our community project. Their platform made collaboration easy and efficient.',
      author: 'Shreyas',
    },
    {
      text: 'Joining Team4U was a great decision. I found opportunities to contribute and learn new skills while working on meaningful initiatives.',
      author: 'Mridul',
    },
    {
      text: 'The support and resources provided by Team4U empowered our organization to reach more people and make a real impact.',
      author: 'Aisha',
    },
  ];

  return (
    <>
      <style>
        {`
          .testimonials-section {
            padding: 5rem 5rem;
          }
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          @media (max-width: 768px) {
            .testimonials-section {
              padding: 3rem 1rem;
            }
            .testimonials-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
          }
        `}
      </style>
      <section className="testimonials-section" style={{
        backgroundColor: colors.white,
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h2 style={{
          ...typography.h2,
          color: colors.navy,
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          Testimonials
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              backgroundColor: colors.lightGray2,
              padding: '2rem',
              borderRadius: '12px',
              position: 'relative',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <span style={{ fontSize: '2.5rem', color: colors.primary, display: 'flex', alignItems: 'center' }}>
                  <img src={invertedcomma} alt="Inverted Comma" style={{ height: '2.5rem', width: '2.5rem' }} />
                </span>
                <span style={{
                  ...typography.body,
                  color: colors.textDark,
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  margin: 0,
                  textAlign: 'left',
                  display: 'block',
                }}>
                  {testimonial.text}
                </span>
              </div>
              <div style={{
                paddingTop: '0.2rem',
              }}>
                <p style={{
                  fontWeight: 600,
                  color: colors.textDark,
                  marginLeft: '3.5rem',
                  margin: 0,
                }}>
                  —— {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;