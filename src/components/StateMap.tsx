import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import map from '../assets/map.svg';

const StateMap: React.FC = () => {
  return (
    <>
      <style>
        {`
          .state-map-section {
            padding: 5rem 5rem;
          }
          .state-map-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: center;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
            margin-bottom: 2rem;
          }
          @media (max-width: 768px) {
            .state-map-section {
              padding: 3rem 1rem;
            }
            .state-map-grid {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
          }
        `}
      </style>
      <section className="state-map-section" style={{
        backgroundColor: colors.paleBlue,
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
          State-Wise Community Map
        </h2>
        <div className="state-map-grid">
          <div style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img 
              src={map} 
              alt="India Map" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <h3 style={{
              ...typography.h3,
              color: colors.textDark,
              marginBottom: '1rem',
            }}>
              Covering the length, breadth and depth of India.
            </h3>
            <p style={{
              ...typography.body,
              color: colors.textDark,
              marginBottom: '2rem',
            }}>
                From Kutch to Kamakhya, from Kashmir to Kanyakumari, we have got it covered. We cover the urban and the rural, a daily wager or a professional, a kid or a senior. This unique and unparalleled direct reach to people helps us create magic for you.            </p>
            <div className="stats-grid">
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: colors.primary,
                  backgroundColor: colors.white,
                  textAlign: 'center',
                  borderTopLeftRadius: '2px',
                  borderTopRightRadius: '2px',
                  paddingTop: '0.5rem',
                }}>
                  100,982
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: colors.primary,
                  backgroundColor: colors.white,
                  textAlign: 'center',
                  borderBottomLeftRadius: '2px',
                  borderBottomRightRadius: '2px',
                  paddingBottom: '0.5rem',
                }}>
                  Community Size
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: colors.primary,
                  backgroundColor: colors.white,
                  textAlign: 'center',
                  borderTopLeftRadius: '2px',
                  borderTopRightRadius: '2px',
                  paddingTop: '0.5rem',
                }}>
                  12
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: colors.primary,
                  backgroundColor: colors.white,
                  textAlign: 'center',
                  borderBottomLeftRadius: '2px',
                  borderBottomRightRadius: '2px',
                  paddingBottom: '0.5rem',
                }}>
                  Awards
                </div>
              </div>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: colors.textDark,
                marginBottom: '0.4rem',
              }}>
                Recent Activities:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                <li style={{
                  marginBottom: '0.6rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  lineHeight: '1.4',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.7rem',
                    width: '6px',
                    height: '6px',
                    backgroundColor: colors.textDark,
                    borderRadius: '50%',
                  }} />
                  <strong>Urban Gardening Initiative [August 2024]:</strong> Partnered with local community centers to create 150 urban gardens in underserved neighborhoods in NYC, promoting food security and sustainable agriculture.
                </li>
                <li style={{
                  marginBottom: '0.6rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  lineHeight: '1.4',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.7rem',
                    width: '6px',
                    height: '6px',
                    backgroundColor: colors.textDark,
                    borderRadius: '50%',
                  }} />
                  <strong>Sustainability Workshops [September 2024]:</strong> Hosted 10 workshops on reducing carbon footprints, recycling, and sustainable living, attended by over 500 residents.
                </li>
                <li style={{
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  lineHeight: '1.4',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.7rem',
                    width: '6px',
                    height: '6px',
                    backgroundColor: colors.textDark,
                    borderRadius: '50%',
                  }} />
                  <strong>Green Building Tour [October 2024]:</strong> Conducted tours of eco-friendly buildings and sustainable architecture in Manhattan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default StateMap;