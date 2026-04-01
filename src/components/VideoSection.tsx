import React from 'react';
import { colors } from '../styles/colors';
import crimage from '../assets/crimage.svg';

const VideoSection: React.FC = () => {
  return (
    <>
      <style>
        {`
          .video-section {
            padding: 5rem 5rem;
          }
          .video-container {
            height: 600px;
            position: relative;
          }
          .play-button {
            position: absolute;
            left: 4%;
            bottom: 5%;
            transform: none !important;
            width: 80px;
            height: 80px;
            background-color: ${colors.navy};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          }
          @media (max-width: 768px) {
            .video-section {
              padding: 3rem 1rem;
            }
            .video-container {
              height: 300px;
            }
            .play-button {
              left: 4%;
              bottom: 5%;
              width: 50px;
              height: 50px;
            }
          }
        `}
      </style>
      <section className="video-section">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div className="video-container" style={{
            position: 'relative',
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}>
            <img 
              src= {crimage}
              alt="Field team"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="play-button" style={{
              position: 'absolute',
              left: '4%',
              bottom: '5%',
              width: '80px',
              height: '80px',
              backgroundColor: colors.navy,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{
                width: 0,
                height: 0,
                borderLeft: `20px solid ${colors.white}`,
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                marginLeft: '5px',
              }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;