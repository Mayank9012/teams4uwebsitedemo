import React from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import logo from '../assets/Logo.png';
import Facebook from '../assets/Facebook.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/offerings/#contact-form-section');
  };

  return (
    <>
      <style>
        {`
          .footer-email-input::placeholder {
            color: ${colors.white};
            opacity: 0.7;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 2fr;
            gap: 3rem;
            margin-bottom: 3rem;
          }
          .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .social-icons {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            .footer-bottom {
              flex-direction: column;
              gap: 2rem;
              text-align: center;
            }
            .social-icons {
              flex-direction: row;
              justify-content: center;
            }
          }
        `}
      </style>
      <footer style={{
        backgroundColor: colors.white,
        padding: '4rem 2rem 2rem',
        borderTop: `1px solid ${colors.border}`,
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img src={logo} alt="Teams4U Logo" style={{ height: '40px', width: '160px', borderRadius: '8px' }} />
            </div>
            <p style={{
              ...typography.small,
              color: colors.textDark,
              marginBottom: '1rem',
            }}>
              At Teams4U, our journey began with a simple yet powerful vision: to harness the power of technology.
            </p>
            <a href="mailto:hello@teams4u.com" style={{
              color: colors.textDark,
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              hello@teams4u.com →
            </a>
          </div>
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: colors.textDark,
              marginBottom: '1rem',
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {['Job Categories', 'Delivery Partner Jobs', 'Exam Invigilator (Offline)', 'Exam Invigilator (Online)', 'Sales and Marketing'].map((link) => (
                <li key={link} style={{ marginBottom: '0.75rem' }}>
                  <a href="#" style={{
                    color: colors.textDark,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                  }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: colors.textDark,
              marginBottom: '1rem',
            }}>
              Useful Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="/privacy-policy" style={{
                  color: colors.textDark,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}>
                  Privacy Policy
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="/terms-of-service" style={{
                  color: colors.textDark,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}>
                  Terms of Service
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#contact-form-section" onClick={handleContactClick} style={{
                  color: colors.textDark,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
          </div>
        </div>
        <div className="footer-bottom" style={{
          borderTop: `1px solid ${colors.textDark}`,
          paddingTop: '2rem',
        }}>
          <p style={{
            ...typography.small,
            color: colors.textDark,
            margin: 0,
          }}>
            © Copyright 2024. All Right Reserved
          </p>
          <div className="social-icons">
            <span style={{ color: colors.textDark, fontSize: '0.95rem', fontWeight: 700 }}>Follow Us On</span>
            {[linkedin, Facebook, twitter].map((icon, index) => (
              <a key={index} href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}>
                <img src={icon} alt="social-icon" style={{ 
                  width: '36px', 
                  height: '36px',
                }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;