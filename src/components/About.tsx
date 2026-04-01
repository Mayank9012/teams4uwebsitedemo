import React, { useEffect } from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const navigate = useNavigate();
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/offerings/#contact-form-section');
  };

  return (
    <>
      <style>
        {`
          .about-section {
            padding: 8rem 5rem 5rem;
          }
          .about-hero {
            text-align: center;
            margin-bottom: 4rem;
          }
          .about-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
            align-items: start;
          }
          .about-card {
            background: ${colors.white};
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 12px rgba(27, 20, 100, 0.08);
          }
          .sidebar-card {
            background: ${colors.white};
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(27, 20, 100, 0.08);
            position: sticky;
            top: 100px;
          }
          .highlight-card {
            background: linear-gradient(135deg, ${colors.paleGreen} 0%, ${colors.paleBlue} 100%);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .capabilities-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
          }
          .capability-card {
            background: ${colors.lightGray};
            padding: 1.5rem;
            border-radius: 10px;
            border-left: 4px solid ${colors.primary};
          }
          @media (max-width: 900px) {
            .about-section {
              padding: 7rem 1rem 3rem;
            }
            .about-grid {
              grid-template-columns: 1fr;
            }
            .capabilities-grid {
              grid-template-columns: 1fr;
            }
            .sidebar-card {
              position: static;
            }
          }
        `}
      </style>

      <section id="about-us" className="about-section" style={{ backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="about-hero">
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
              Who We Are
            </span>
            <h1 style={{
              ...typography.h1,
              color: colors.navy,
              marginBottom: '1rem',
            }}>
              Teams4U Solutions Private Limited
            </h1>
            <p style={{
              ...typography.body,
              color: colors.textGray,
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              India-focused market access, expansion, and execution company enabling organizations to succeed in one of the world's most complex markets.
            </p>
          </div>

          <div className="about-grid">
            <div>
              <div className="about-card">
                <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>Who We Are</h3>
                <p style={{ ...typography.body, color: colors.textDark, marginBottom: '1rem' }}>
                  Teams4U Solutions Private Limited is an India-focused market access, expansion, and execution company that enables global enterprises, multinational corporations, Indian corporates, startups, and institutions to enter, understand, penetrate, and establish themselves across the Indian market.
                </p>
                <p style={{ ...typography.body, color: colors.textDark }}>
                  We act as a strategic and operational bridge between global ambition, corporate strategy and on-ground Indian market reality. Our strength lies in combining deep research, contextual understanding, and community-powered execution to convert market opportunity into real adoption and sustained presence.
                </p>
              </div>

              <div className="about-card">
                <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>Our Purpose</h3>
                <p style={{ ...typography.body, color: colors.textDark, marginBottom: '1rem' }}>
                  Our purpose is simple yet powerful: To help organizations succeed in India by replacing assumptions with ground truth and strategy with execution.
                </p>
                <p style={{ ...typography.body, color: colors.textDark, marginBottom: '0.5rem' }}>
                  We believe that India rewards:
                </p>
                <ul style={{ ...typography.body, color: colors.textDark, paddingLeft: '1.5rem', marginBottom: '0' }}>
                  <li>Patience over speed</li>
                  <li>Trust over noise</li>
                  <li>Presence over promotion</li>
                  <li>Local relevance over global uniformity</li>
                </ul>
              </div>

              <div className="about-card">
                <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>What Problem We Solve</h3>
                <p style={{ ...typography.body, color: colors.textDark, marginBottom: '1rem' }}>
                  Many companies entering or operating in India face challenges such as:
                </p>
                <ul style={{ ...typography.body, color: colors.textDark, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li>Poor product adoption despite strong marketing</li>
                  <li>Difficulty understanding regional consumer behavior</li>
                  <li>High customer acquisition costs with low retention</li>
                  <li>Inability to scale uniformly across states</li>
                  <li>Lack of reliable on-ground execution partners</li>
                  <li>Fragmented data and misleading feedback</li>
                </ul>
                <p style={{ ...typography.body, color: colors.textDark }}>
                  Teams4U addresses these challenges by building structured, local, and scalable market access frameworks that are designed specifically for India.
                </p>
              </div>

              <div className="about-card">
                <h2 style={{ ...typography.h2, color: colors.navy, marginBottom: '1.5rem' }}>WHAT WE DO</h2>
                <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>Our Core Capabilities</h3>
                
                <div className="capabilities-grid">
                  <div className="capability-card">
                    <h4 style={{ ...typography.h3, fontSize: '1rem', color: colors.navy, marginBottom: '0.5rem' }}>Market Research & Ground Intelligence</h4>
                    <p style={{ ...typography.small, color: colors.textGray }}>
                      In-depth India-specific research combining field surveys, interviews and data analysis to understand consumer behaviour, demand patterns and cultural factors.
                    </p>
                  </div>
                  <div className="capability-card">
                    <h4 style={{ ...typography.h3, fontSize: '1rem', color: colors.navy, marginBottom: '0.5rem' }}>Product Understanding & Context Mapping</h4>
                    <p style={{ ...typography.small, color: colors.textGray }}>
                      We map how a product fits within Indian consumer habits and infrastructure, ensuring realistic positioning for the market.
                    </p>
                  </div>
                  <div className="capability-card">
                    <h4 style={{ ...typography.h3, fontSize: '1rem', color: colors.navy, marginBottom: '0.5rem' }}>Product–Market Fit Analysis</h4>
                    <p style={{ ...typography.small, color: colors.textGray }}>
                      Analyze product performance across regions, identify readiness gaps and recommend changes prior to scale.
                    </p>
                  </div>
                  <div className="capability-card">
                    <h4 style={{ ...typography.h3, fontSize: '1rem', color: colors.navy, marginBottom: '0.5rem' }}>India-Specific Go-To-Market Strategy</h4>
                    <p style={{ ...typography.small, color: colors.textGray }}>
                      Customized GTM strategies with pilot launches, phased expansion and regional prioritization balancing speed with sustainability.
                    </p>
                  </div>
                  <div className="capability-card">
                    <h4 style={{ ...typography.h3, fontSize: '1rem', color: colors.navy, marginBottom: '0.5rem' }}>Localization & Adaptation</h4>
                    <p style={{ ...typography.small, color: colors.textGray }}>
                      Adapt products and messaging to Indian realities through pricing, language, communication style, and support models.
                    </p>
                  </div>
                  <div className="capability-card">
                    <h4 style={{ ...typography.h3, fontSize: '1rem', color: colors.navy, marginBottom: '0.5rem' }}>Community-Powered Execution</h4>
                    <p style={{ ...typography.small, color: colors.textGray }}>
                      Leverage distributed network of community members for authentic on-ground presence with local relevance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-card">
                <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>OUR ROLE IN YOUR INDIA JOURNEY</h3>
                <p style={{ ...typography.body, color: colors.textDark, marginBottom: '1rem' }}>
                  Teams4U acts as a strategic execution partner, not just a service provider. We translate global strategy into local action by aligning products with Indian realities.
                </p>
                <p style={{ ...typography.body, color: colors.textDark }}>
                  Our role is to reduce risk, increase adoption, and enable sustainable growth in one of the world's most complex markets.
                </p>
              </div>

              <div className="about-card">
                <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>Who We Serve</h3>
                <ul style={{ ...typography.body, color: colors.textDark, paddingLeft: '1.5rem' }}>
                  <li>Global enterprises entering India</li>
                  <li>Multinational corporations expanding India footprint</li>
                  <li>Indian corporates scaling across states</li>
                  <li>Startups validating Indian market fit</li>
                  <li>Government and institutional initiatives</li>
                </ul>
              </div>
            </div>

            <aside>
              <div className="highlight-card">
                <h4 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>Our Mission</h4>
                <p style={{ ...typography.body, color: colors.textDark }}>
                  To help organizations succeed in India by replacing assumptions with ground truth and strategy with execution.
                </p>
              </div>

              <div className="sidebar-card">
                <h4 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>Quick Snapshot</h4>
                <ul style={{ ...typography.small, color: colors.textDark, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Community-powered on-ground presence</li>
                  <li style={{ marginBottom: '0.5rem' }}>India-specific GTM & localization</li>
                  <li style={{ marginBottom: '0.5rem' }}>Scalable execution frameworks</li>
                  <li>Long-term market establishment</li>
                </ul>
              </div>

              <div className="sidebar-card" style={{ background: colors.navy }}>
                <h4 style={{ ...typography.h3, color: colors.white, marginBottom: '1rem' }}>Ready to Enter India?</h4>
                <p style={{ ...typography.small, color: colors.white, marginBottom: '1.5rem' }}>
                  Reach out to discuss your market entry and execution plans.
                </p>
                <button style={{
                  width: '100%',
                  backgroundColor: colors.primary,
                  color: colors.white,
                  border: 'none',
                  padding: '0.875rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
                onClick={handleContactClick}
                >
                  Contact Us
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
