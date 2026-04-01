import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import cr1 from '../assets/CR_1.svg';
import cr2 from '../assets/CR_2.svg';
import cr3 from '../assets/CR_3.svg';

const CommunityOverview: React.FC = () => {
  const teams = [
    {
      icon: cr1,
      title: 'Field Team',
      description: 'Field teams engage directly with community members through in-person visits, building trust and rapport while assessing needs and providing services such as health screenings and educational workshops.',
    },
    {
      icon: cr2,
      title: 'Telephonic Team',
      description: 'Telephonic teams facilitate remote communication, enabling them to reach a broader audience efficiently and offer support, guidance, and resources.',
    },
    {
      icon: cr3,
      title: 'Integrating Both',
      description: 'By integrating both approaches, organizations can ensure that services are accessible and tailored to the unique needs of diverse populations, ultimately fostering stronger community ties and improving overall effectiveness.',
    },
  ];

  return (
    <>
      <style>
        {`
          .community-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 3rem;
            border-radius: 16px;
          }
          .community-card {
            padding: 4.5rem;
            text-align: left;
          }
          .community-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }
          .community-section {
            padding: 5rem 5rem;
          }
          @media (max-width: 768px) {
            .community-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            .community-card {
              padding: 2rem;
            }
            .community-section {
              padding: 3rem 1rem;
            }
          }
        `}
      </style>
      <section id="community" className="community-section" style={{
        backgroundColor: colors.white,
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <span style={{
          backgroundColor: colors.primary,
          color: colors.white,
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: 600,
          display: 'inline-block',
          marginBottom: '1rem',
        }}>
          Your Idea Our Team
        </span>
        <h2 style={{
          ...typography.h2,
          color: colors.navy,
          marginBottom: '1rem',
        }}>
          Community Overview
        </h2>
        <p style={{
          ...typography.body,
          color: colors.textGray,
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem',
        }}>
          Field and telephonic teams play crucial roles in community outreach and service delivery, each with distinct functions
        </p>
        <div className="community-grid" style={{
          backgroundColor: colors.paleGreen,
        }}>
          {teams.map((team, index) => (
            <div key={index} className="community-card">
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                height: '50px',
                width: '50px',
                display: 'flex',
                alignItems: 'center',
              }}>
                <img src={team.icon} alt={team.title + ' icon'} style={{ height: '50px', width: '50px', objectFit: 'contain' }} />
              </div>
              <h3 style={{
                ...typography.h3,
                color: colors.navy,
                marginBottom: '1rem',
              }}>
                {team.title}
              </h3>
              <p style={{
                ...typography.small,
                color: colors.textGray,
              }}>
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CommunityOverview;