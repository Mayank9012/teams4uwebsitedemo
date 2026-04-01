import React, { useEffect } from 'react';
import {typography} from '../styles/typography.ts';
import ContactForm from './ContactForm';
import logo from '../assets/Logo.png';
import quoteIcon from '../assets/quote.svg';

const colors = {
  primary: '#15B715',
  navy: '#1B1464',
  darkNavy: '#1a2c5b',
  white: '#FFFFFF',
  lightGray: '#F5F7FA',
  paleBlue: '#e8eef5',
  lightBlueBg: '#e8f0f7',
  textDark: '#2d3748',
  textGray: '#5a5a72',
  iconGreen: '#4ade80',
  darkBlueFooter: '#1a2d4d',
};

const Offerings: React.FC = () => {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="24" height="28" rx="2" stroke="#4ade80" strokeWidth="2" fill="none"/>
          <path d="M16 8 L16 12 M24 8 L24 12" stroke="#4ade80" strokeWidth="2"/>
          <rect x="20" y="18" width="16" height="20" rx="2" stroke="#4ade80" strokeWidth="2" fill="none"/>
          <path d="M24 22 L32 22 M24 26 L32 26 M24 30 L28 30" stroke="#4ade80" strokeWidth="1.5"/>
        </svg>
      ),
      title: 'Market Entry & Expansion Programs',
      description: 'Design and scale your entry into India\'s complex markets confidently.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="#4ade80" strokeWidth="2" fill="none"/>
          <path d="M24 14 L24 24 L30 28" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="12" r="3" fill="#4ade80"/>
          <rect x="32" y="20" width="6" height="6" rx="1" fill="#4ade80"/>
        </svg>
      ),
      title: 'Field Research & Validation Surveys',
      description: 'Localized research and multilayered field survey–validated strategic assessment models.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M12 24 L24 14 L36 24 L36 36 L12 36 Z" stroke="#4ade80" strokeWidth="2" fill="none"/>
          <rect x="20" y="26" width="8" height="10" stroke="#4ade80" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="20" r="2" fill="#4ade80"/>
        </svg>
      ),
      title: 'On-Ground Deployment at Scale',
      description: 'Deploy trained, Pan-India teams with geo-tagged, photo-verified field research.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="10" y="16" width="28" height="20" rx="2" stroke="#4ade80" strokeWidth="2" fill="none"/>
          <path d="M14 20 L20 26 L34 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="16" y="10" width="16" height="4" fill="#4ade80"/>
        </svg>
      ),
      title: 'Audit & Compliance Assurance',
      description: 'Ensure operational integrity and regulatory adherence.',
    },
  ];

  const caseStudies = [
    {
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop',
      title: 'Fintech Merchant Onboarding',
      description: 'Digital payment adoption and wallet/card acquisition support enables teams across local, regional, and global markets.',
    },
    {
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop',
      title: 'Consumer Onboarding for Loyalty Platform',
      description: 'Field-based programs for acquisition, requisition, and integrated onboarding, including negotiations.',
    },
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop',
      title: 'Skill Development Field Programs',
      description: 'Field teams ensure career pathways, talent recruiting and upskilling, and facilitate alumni engagement while supporting governance and on-ground execution.',
    },
  ];

  const scrollToContactForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (window.location.hash === '#contact-form-section') {
      setTimeout(() => {
        const el = document.getElementById('contact-form-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }
          
          .offerings-container {
            font-family: ${typography.fontFamily};
            background-color: ${colors.white};
          }
          
          /* Hero Section */
          .hero-section {
            position: relative;
            min-height: 450px;
            display: flex;
            align-items: center;
            background: linear-gradient(to right, rgba(232, 240, 247, 0.95) 0%, rgba(232, 240, 247, 0.7) 60%, transparent 100%),
                        url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=600&fit=crop') center right/cover;
            padding: 4rem 6rem;
          }
          
          .hero-content {
            max-width: 650px;
            z-index: 2;
          }
          
          .hero-title {
            font-size: 3.25rem;
            font-weight: 600;
            line-height: 1.2;
            color: ${colors.darkNavy};
            margin-bottom: 1.5rem;
          }
          
          .hero-description {
            font-size: 1rem;
            color: ${colors.textDark};
            line-height: 1.7;
            margin-bottom: 2rem;
          }
          
          .hero-button {
            background-color: ${colors.primary};
            color: ${colors.white};
            border: none;
            padding: 0.875rem 2rem;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .hero-button:hover {
            background-color: #12a012;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(21, 183, 21, 0.3);
          }
          
          /* Services Section */
          .services-section {
            background: linear-gradient(to bottom, #f8f9fb 0%, #f0f3f8 50%, #e8eef5 100%);
            padding: 5rem 6rem;
            position: relative;
          }
          
          .services-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              radial-gradient(circle at 20% 50%, rgba(232, 240, 247, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(232, 240, 247, 0.3) 0%, transparent 50%);
            pointer-events: none;
          }
          
          .services-container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }
          
          .section-header {
            text-align: center;
            margin-bottom: 3.5rem;
          }
          
          .section-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: ${colors.darkNavy};
            margin-bottom: 1.25rem;
          }
          
          .section-description {
            font-size: 1rem;
            color: ${colors.textDark};
            max-width: 900px;
            margin: 0 auto;
            line-height: 1.7;
          }
          
          .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          
          .service-card {
            background-color: ${colors.white};
            padding: 2.5rem 2rem;
            border-radius: 8px;
            transition: all 0.3s ease;
          }
          
          .service-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          }
          
          .service-icon {
            margin-bottom: 1.5rem;
            height: 48px;
            display: flex;
            align-items: center;
          }
          
          .service-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: ${colors.darkNavy};
            margin-bottom: 1rem;
            line-height: 1.4;
          }
          
          .service-description {
            font-size: 0.875rem;
            color: ${colors.textGray};
            line-height: 1.6;
          }
          
          /* Case Studies Section */
          .case-studies-section {
            background: linear-gradient(to bottom, ${colors.white} 0%, ${colors.lightBlueBg} 100%);
            padding: 5rem 6rem;
          }
          
          .case-studies-wrapper {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 400px;
            gap: 4rem;
            align-items: start;
          }
          
          .case-studies-container {
            display: flex;
            flex-direction: column;
          }
          
          .case-studies-header {
            margin-bottom: 2.5rem;
          }
          
          .case-studies-title {
            font-size: 2rem;
            font-weight: 600;
            color: ${colors.darkNavy};
            margin-bottom: 0.75rem;
          }
          
          .case-studies-subtitle {
            font-size: 0.95rem;
            color: ${colors.textDark};
            line-height: 1.6;
            max-width: 500px;
          }
          
          .case-studies-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .case-study-card {
            background-color: ${colors.white};
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
          }
          
          .case-study-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          }
          
          .case-study-image {
            width: 100%;
            height: 160px;
            object-fit: cover;
          }
          
          .case-study-content {
            padding: 1.25rem;
          }
          
          .case-study-title {
            font-size: 0.95rem;
            font-weight: 600;
            color: ${colors.darkNavy};
            margin-bottom: 0.5rem;
            line-height: 1.3;
          }
          
          .case-study-description {
            font-size: 0.8rem;
            color: ${colors.textGray};
            line-height: 1.5;
          }
          
          .view-all-container {
            text-align: left;
            padding: 1rem 0 0;
          }
          
          .view-all-button {
            background-color: transparent;
            color: ${colors.textDark};
            border: none;
            padding: 0;
            font-size: 0.95rem;
            font-weight: 500;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          }
          
          .view-all-button:hover {
            color: ${colors.primary};
            gap: 0.75rem;
          }
          
          /* Testimonial Section */
          .testimonial-section {
            background-color: transparent;
            padding: 0;
          }
          
          .testimonial-container {
            background: linear-gradient(135deg, rgba(232, 240, 247, 0.5) 0%, rgba(232, 240, 247, 0.8) 100%);
            padding: 3rem 2.5rem;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            height: fit-content;
            position: sticky;
            top: 2rem;
          }
          
          .quote-icon {
            height: 50px;
            width: 50px;
            margin-bottom: 1.5rem;
          }
          
          .testimonial-content {
            flex: 1;
          }
          
          .testimonial-text {
            font-size: 1.25rem;
            font-weight: 500;
            color: ${colors.darkNavy};
            line-height: 1.5;
            margin-bottom: 2rem;
          }
          
          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: auto;
          }
          
          .author-logo {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: ${colors.white};
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          
          .author-logo-inner {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px dashed #93c5fd;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .author-info {
            display: flex;
            flex-direction: column;
          }
          
          .author-company {
            font-size: 0.8rem;
            font-weight: 600;
            color: ${colors.textDark};
            letter-spacing: 0.5px;
          }
          
          .author-title {
            font-size: 0.75rem;
            color: ${colors.textGray};
          }
          
          /* CTA Section */
          .cta-section {
            background: linear-gradient(135deg, ${colors.darkBlueFooter} 0%, #0f1d3a 100%),
                        url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=400&fit=crop') center/cover;
            background-blend-mode: multiply;
            padding: 4.5rem 6rem;
            text-align: center;
            color: ${colors.white};
          }
          
          .cta-container {
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .cta-title {
            font-size: 2.75rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
          }
          
          .cta-subtitle {
            font-size: 1.125rem;
            margin-bottom: 3rem;
            opacity: 0.95;
          }
          
          .cta-content {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 3rem;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .cta-features-left,
          .cta-features-right {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          
          .cta-features-left {
            align-items: flex-end;
            text-align: right;
          }
          
          .cta-features-right {
            align-items: flex-start;
            text-align: left;
          }
          
          .cta-feature {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.95rem;
          }
          
          .cta-features-left .cta-feature {
            flex-direction: row-reverse;
          }
          
          .cta-checkmark {
            color: ${colors.primary};
            font-weight: bold;
            font-size: 1.1rem;
            flex-shrink: 0;
          }
          
          .cta-button {
            background-color: ${colors.primary};
            color: ${colors.white};
            border: none;
            padding: 1.125rem 3rem;
            border-radius: 8px;
            font-size: 1.25rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
          }
          
          .cta-button:hover {
            background-color: #12a012;
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(21, 183, 21, 0.4);
          }
          
          /* Responsive Design */
          @media (max-width: 1200px) {
            .hero-section,
            .services-section,
            .case-studies-section,
            .cta-section {
              padding-left: 3rem;
              padding-right: 3rem;
            }
            
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .case-studies-wrapper {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            
            .testimonial-container {
              position: static;
            }
            
            .cta-content {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .cta-features-left,
            .cta-features-right {
              align-items: center;
              text-align: center;
            }
            
            .cta-features-left .cta-feature {
              flex-direction: row;
            }
          }
          
          @media (max-width: 768px) {
            .hero-section,
            .services-section,
            .case-studies-section,
            .cta-section {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
            
            .hero-title {
              font-size: 2.25rem;
            }
            
            .section-title,
            .case-studies-title {
              font-size: 1.875rem;
            }
            
            .services-grid {
              grid-template-columns: 1fr;
            }
            
            .case-studies-grid {
              grid-template-columns: 1fr;
            }
            
            .case-studies-wrapper {
              gap: 2rem;
            }
            
            .testimonial-text {
              font-size: 1.125rem;
            }
            
            .testimonial-container {
              padding: 2rem 1.5rem;
            }
            
            .cta-title {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <div className="offerings-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Strategic Execution Partner in India
            </h1>
            <p className="hero-description">
              Achieve market clarity and scalable growth with Teams4U, the global partner for precision field execution, high-fidelity market intelligence, and seamless India market entry.
            </p>
            <button className="hero-button" type="button" onClick={scrollToContactForm}>Contact Sales</button>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="services-container">
            <div className="section-header">
              <h2 className="section-title">
                Delivering End-to-End Market Solutions Across India
              </h2>
              <p className="section-description">
                We enable global organizations to enter, expand, and optimize their India market presence through insight-driven strategy and disciplined on-ground activation.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="case-studies-section">
          <div className="case-studies-wrapper">
            <div className="case-studies-container">
              <div className="case-studies-header">
                <h2 className="case-studies-title">Experience You Can Trust</h2>
                <p className="case-studies-subtitle">
                  End-to-end execution expertise enabled by an extensive, local intelligence network.
                </p>
              </div>
              <div className="case-studies-grid">
                {caseStudies.map((study, index) => (
                  <div key={index} className="case-study-card">
                    <img src={study.image} alt={study.title} className="case-study-image" />
                    <div className="case-study-content">
                      <h3 className="case-study-title">{study.title}</h3>
                      <p className="case-study-description">{study.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="view-all-container">
                <button className="view-all-button">
                  View All Engagements <span>→</span>
                </button>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="testimonial-section">
              <div className="testimonial-container">
                <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    Teams4U transformed our India go-to-market strategy into a scalable, execution-ready plan.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-logo">
                      <div className="author-logo-inner">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" fill="#93c5fd" opacity="0.3"/>
                        </svg>
                      </div>
                    </div>
                    <div className="author-info">
                      <img src ={logo} alt="Company Logo" style={{ height: '28px', marginBottom: '4px' }} />
                      <span className="author-title">Chief Operating Officer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">Thinking of Entering the India Market?</h2>
            <p className="cta-subtitle">
              Let's craft your India success story with a strategy designed for impact and a team dedicated to results.
            </p>
            <div className="cta-content">
              <div className="cta-features-left">
                <div className="cta-feature">
                  <span>Insight-led field execution tailored for India</span>
                  <span className="cta-checkmark">✓</span>
                </div>
                <div className="cta-feature">
                  <span>Scalable, ethical and compliant operations</span>
                  <span className="cta-checkmark">✓</span>
                </div>
              </div>
              
              <button className="cta-button" type="button" onClick={scrollToContactForm}>Contact Sales</button>
              
              <div className="cta-features-right">
                <div className="cta-feature">
                  <span className="cta-checkmark">✓</span>
                  <span>Resilient operational frameworks built to scale</span>
                </div>
                <div className="cta-feature">
                  <span className="cta-checkmark">✓</span>
                  <span>Enterprise-grade reporting and transparency</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <div className="cta-feature" style={{ justifyContent: 'center' }}>
                <span className="cta-checkmark">✓</span>
                <span>Fintech, FMCG results, and beyond</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <div id="contact-form-section">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Offerings;