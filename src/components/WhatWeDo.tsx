import React, { useEffect } from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const WhatWeDo: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const sections = [
    {
      title: 'Bridging Global Strategy and Indian Market Reality',
      content: 'Organizations often approach India with well-defined global strategies, proven products, and strong capital backing. However, these strategies frequently fail when applied uniformly across India\'s diverse regions. Our role is to bridge this gap by interpreting global intent through the lens of Indian consumer behavior, regional diversity, and local operational constraints. Teams4U ensures that strategic decisions are informed by ground intelligence, allowing companies to move from theoretical planning to practical execution with clarity and confidence.'
    },
    {
      title: 'Acting as an Extension of Client Teams in India',
      content: 'We do not operate as an external vendor working in isolation. Instead, we function as an extension of our clients\' internal teams, embedded within their India market journey. We collaborate closely with leadership, product, marketing, and operations teams to align objectives, expectations, and execution frameworks. This integrated approach allows clients to benefit from local expertise without building large, permanent on-ground teams, significantly reducing cost, complexity, and execution risk.'
    },
    {
      title: 'Reducing Market Entry and Expansion Risk',
      content: 'India presents immense opportunity, but it also carries high execution risk if approached without local understanding. Our role is to de-risk India market entry and expansion by validating assumptions before scale, testing products in real environments, and identifying barriers early in the journey. By conducting pilots, phased rollouts, and region-specific execution, we help organizations avoid costly missteps and focus investments where adoption potential is highest.'
    },
    {
      title: 'Translating Products into Locally Accepted Solutions',
      content: 'A product that performs well in one country does not automatically succeed in India. Our role is to translate products into solutions that Indian consumers, merchants, and partners can understand, trust, and adopt. This includes aligning pricing expectations, communication styles, onboarding flows, and usage behaviors with local realities. We help ensure that products are not merely introduced into India, but integrated into everyday usage patterns.'
    },
    {
      title: 'Building Trust at the Last Mile',
      content: 'Trust is a fundamental driver of adoption in India, particularly in Tier 2, Tier 3, and emerging markets. Our role involves building this trust at the last mile through human-led engagement, local language communication, and community participation. By leveraging our distributed community network, we ensure that brands are represented by people who understand local culture, speak the local language, and operate within existing social trust structures.'
    },
    {
      title: 'Executing at Scale Without Losing Local Relevance',
      content: 'India demands scale, but scale without localization leads to failure. Teams4U plays the role of an execution engine that enables national-level rollout with local relevance. We balance centralized planning with decentralized execution, allowing consistent brand messaging while respecting regional nuances. This approach enables clients to scale rapidly without sacrificing authenticity or effectiveness.'
    },
    {
      title: 'Providing Continuous Market Feedback and Learning',
      content: 'Markets in India evolve quickly, and static strategies become obsolete fast. Our role includes acting as a continuous feedback loop between the market and the client. We collect real-time insights from consumers, merchants, and partners, analyze adoption barriers, and communicate actionable learnings back to decision-makers. This ensures that strategies remain adaptive, responsive, and aligned with market realities.'
    },
    {
      title: 'Supporting Long-Term Market Establishment',
      content: 'Our role does not end with initial market entry or early traction. We support clients in building long-term market presence by strengthening ecosystems, enabling sustained onboarding, and helping brands become part of daily consumer behavior. We focus on durable adoption rather than short-term visibility, helping organizations establish themselves as trusted participants in the Indian market.'
    },
    {
      title: 'Enabling Sustainable Growth, Not Just Fast Growth',
      content: 'Fast growth without structural grounding often leads to churn and brand erosion in India. Teams4U\'s role is to enable sustainable, resilient growth by aligning execution with cultural acceptance, operational feasibility, and trust-building mechanisms. We prioritize long-term value creation over short-term metrics.'
    }
  ];

  return (
    <>
      <style>
        {`
          .whatwedo-section {
            padding: 8rem 5rem 5rem;
          }
          .whatwedo-hero {
            text-align: center;
            margin-bottom: 4rem;
          }
          .whatwedo-content {
            max-width: 900px;
            margin: 0 auto;
          }
          .intro-card {
            background: linear-gradient(135deg, ${colors.navy} 0%, ${colors.darkNavy} 100%);
            border-radius: 12px;
            padding: 2.5rem;
            margin-bottom: 3rem;
            text-align: center;
          }
          .whatwedo-card {
            background: ${colors.white};
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(27, 20, 100, 0.08);
            border-left: 4px solid ${colors.primary};
          }
          .commitment-card {
            background: linear-gradient(135deg, ${colors.paleGreen} 0%, ${colors.paleBlue} 100%);
            border-radius: 12px;
            padding: 2.5rem;
            margin-top: 3rem;
            text-align: center;
          }
          @media (max-width: 768px) {
            .whatwedo-section {
              padding: 7rem 1rem 3rem;
            }
            .intro-card,
            .whatwedo-card,
            .commitment-card {
              padding: 1.5rem;
            }
          }
        `}
      </style>

      <section className="whatwedo-section" style={{ backgroundColor: colors.lightGray }}>
        <div className="whatwedo-content">
          <div className="whatwedo-hero">
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
              Our Role
            </span>
            <h1 style={{
              ...typography.h1,
              color: colors.navy,
              marginBottom: '1rem',
            }}>
              What We Do
            </h1>
          </div>

          <div className="intro-card">
            <p style={{ ...typography.body, color: colors.white, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Entering and scaling in India is not only a strategic decision—it is an execution challenge that unfolds on the ground, every day, across thousands of micro-markets. The role of Teams4U Solutions Pvt. Ltd. is to operate precisely at this intersection between strategy and reality, where plans must adapt to people, culture, infrastructure, and trust dynamics.
            </p>
            <p style={{ ...typography.body, color: colors.white, fontSize: '1.1rem', lineHeight: 1.8, marginTop: '1rem' }}>
              We act as a dedicated India market execution partner, ensuring that global and national strategies are translated into actions that work in real Indian conditions.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="whatwedo-card">
              <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>
                {section.title}
              </h3>
              <p style={{ ...typography.body, color: colors.textDark, lineHeight: 1.7 }}>
                {section.content}
              </p>
            </div>
          ))}

          <div className="commitment-card">
            <h2 style={{ ...typography.h2, color: colors.navy, marginBottom: '1rem' }}>
              Our Commitment
            </h2>
            <p style={{ ...typography.body, color: colors.textDark, marginBottom: '1rem', fontSize: '1.1rem' }}>
              At Teams4U Solutions Pvt. Ltd., our role is defined by accountability, transparency, and execution excellence. We stand alongside our clients as partners in one of the world's most complex and rewarding markets.
            </p>
            <p style={{ ...typography.h3, color: colors.navy, fontSize: '1.2rem', fontWeight: 700, marginTop: '1.5rem' }}>
              We do not simply help companies enter India — we help them belong in India.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
