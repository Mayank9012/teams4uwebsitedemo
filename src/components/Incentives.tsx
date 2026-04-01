import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import trophyIllustration from '../assets/Teamwork_Success.svg';

const Incentives: React.FC = () => {
  const incentiveItems = [
    {
      title: 'Refer a Friend:',
      description: 'Spread the word and earn points when your friend sign up. Earn 200 points for each successful referral',
    },
    {
      title: 'Complete Jobs or Activities:',
      description: 'Participate in exclusive challenges, polls, and surveys to earn points. These activities pop up regularly and are a fun way to boost your point balance.',
    },
    {
      title: 'Earn Bonus Points for Special Actions:',
      description: 'Complete 5+ items to your Wishlist and earn 50 points. Review a Project: Share your feedback and help others by reviewing products you\'ve purchased and earn 25 points for each review.',
    },
  ];

  return (
    <>
      <style>
        {`
          .incentives-section {
            padding: 5rem 5rem;
          }
          .incentives-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          @media (max-width: 768px) {
            .incentives-section {
              padding: 3rem 1rem;
            }
            .incentives-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            .incentives-image {
              order: -1;
            }
          }
        `}
      </style>
      <section id="incentives-&-rewards" className="incentives-section" style={{
        background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.darkNavy} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div className="incentives-grid">
        <div>
          <h2 style={{
            ...typography.h2,
            color: colors.white,
            marginBottom: '2rem',
          }}>
            Incentives & Rewards
          </h2>
          <div style={{
            marginBottom: '2rem',
          }}>
            <h3 style={{
              ...typography.h3,
              color: colors.primary,
              marginBottom: '1rem',
            }}>
              How to Earn Incentives and Rewards
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {incentiveItems.map((item, index) => (
                <li key={index} style={{
                  marginBottom: '1rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.3rem',
                    width: '8px',
                    height: '8px',
                    backgroundColor: colors.primary,
                    borderRadius: '50%',
                  }}></div>
                  <span style={{
                    color: colors.white,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}>
                    {item.title}
                  </span>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.95rem',
                    display: 'block',
                    marginTop: '0.5rem',
                    lineHeight: 1.6,
                  }}>
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Right side - Illustration */}
        <div className="incentives-image" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
            <img
              src={trophyIllustration}
              alt="Trophy Illustration"
              style={{
                width: '100%',
                height: '100%',
              }}
            />

        </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Incentives;