import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const TermsOfService: React.FC = () => {
  const sections = [
    { title: '1. Nature of Services', content: 'Teams4U provides India-focused market access and execution services designed to help organizations enter, understand, and scale across Indian markets. Our services include research, analysis, localization support, field execution, and community-driven onboarding. All services are customized based on client requirements and market conditions.' },
    { title: '2. Market Complexity Disclaimer', content: 'India is a diverse and dynamic market influenced by cultural, economic, regional, and regulatory factors. While Teams4U applies best practices and ground intelligence, market outcomes may vary. Clients acknowledge that no two regions behave the same and results depend on multiple external variables.' },
    { title: '3. No Guarantee of Commercial Outcomes', content: 'Teams4U does not guarantee sales figures, revenue growth, market share, or customer retention. Our responsibility is to deliver services as per agreed scope and best-effort execution standards. Commercial success depends on product quality, pricing, competition, and consumer acceptance beyond our control.' },
    { title: '4. Engagement & Execution Model', content: 'Teams4U operates through a hybrid model involving internal teams, independent contractors, field associates, and community members. These individuals act as independent service providers and not as employees or agents of the client. No partnership, joint venture, or agency relationship is implied.' },
    { title: '5. Scope Definition & Modifications', content: 'The scope of work is defined through proposals, work orders, or agreements. Due to evolving market conditions, Teams4U reserves the right to recommend changes in execution approach. Any major scope changes will be mutually discussed and documented.' },
    { title: '6. Client Responsibilities', content: 'Clients are responsible for providing accurate product information, branding guidelines, compliance disclosures, and timely approvals. Any delays or inaccuracies from the client side may impact timelines and outcomes. Teams4U is not liable for issues arising from incomplete or misleading client inputs.' },
    { title: '7. Payments & Commercial Terms', content: 'Commercial terms, including fees and payment schedules, are defined in separate agreements or proposals. Payments may be milestone-based, retainer-based, or outcome-linked. Delays may occur due to verification, audit processes, or client-side approvals.' },
    { title: '8. Verification & Quality Control', content: 'All work performed by Teams4U is subject to internal quality checks and validation. We reserve the right to audit data, conduct back-checks, and reject outputs that fail verification standards. Quality control decisions made by Teams4U are final and binding.' },
    { title: '9. Data Collection & Ownership', content: 'All data collected during research, surveys, onboarding, or execution activities is the exclusive property of Teams4U and/or its clients. Such data may not be reused, shared, sold, or published without prior written authorization. Unauthorized use will attract legal action.' },
    { title: '10. Confidentiality Obligations', content: 'All strategies, research findings, execution plans, methodologies, and client information are strictly confidential. Parties must not disclose such information to third parties without written consent. Confidentiality obligations survive termination of the engagement.' },
    { title: '11. Intellectual Property Rights', content: 'All frameworks, methodologies, community models, tools, content, training materials, reports, and branding developed or used by Teams4U are its exclusive intellectual property. No license or ownership rights are transferred unless explicitly agreed in writing. All rights are fully and irrevocably reserved with Teams4U Solutions Pvt. Ltd.' },
    { title: '12. Ethical Conduct & Representation', content: 'All parties must act ethically and professionally while representing Teams4U or its clients. Misrepresentation, coercion, inducement, or misleading communication with consumers or partners is strictly prohibited. Violations may result in immediate termination and legal consequences.' },
    { title: '13. Use of Technology & Platforms', content: 'Users may not misuse Teams4U\'s digital platforms, dashboards, or tools. Unauthorized access, data scraping, reverse engineering, or credential sharing is prohibited. Teams4U reserves the right to monitor usage for security and compliance purposes.' },
    { title: '14. Compliance With Laws', content: 'All activities conducted under Teams4U engagements must comply with applicable Indian laws and regulations. This includes consumer protection, data privacy, advertising standards, and local regulatory requirements. Responsibility for non-compliance arising from client-provided content rests with the client.' },
    { title: '15. Suspension & Termination', content: 'Teams4U may suspend or terminate access or engagement in cases of breach, misconduct, fraud, or legal risk. Termination may occur without prior notice in serious violations. Outstanding payments, if any, will be settled subject to verification and compliance.' },
    { title: '16. Limitation of Liability', content: 'Teams4U shall not be liable for indirect, incidental, or consequential damages, including loss of profits or business opportunities. Any liability, if established, shall be limited to the fees paid for the specific service giving rise to the claim.' },
    { title: '17. Indemnification', content: 'Clients and partners agree to indemnify Teams4U against any claims, losses, or damages arising from misuse of services, violation of laws, or third-party rights. This includes claims resulting from inaccurate product claims or regulatory non-compliance.' },
    { title: '18. Force Majeure', content: 'Teams4U shall not be held responsible for delays or failures caused by events beyond reasonable control. This includes natural disasters, government actions, network failures, pandemics, or civil disturbances. Obligations will resume once normal conditions are restored.' },
    { title: '19. Dispute Resolution', content: 'In the event of a dispute, parties shall first attempt amicable resolution through discussion. If unresolved, disputes shall be referred to arbitration under Indian law. The arbitration seat and venue shall be decided by Teams4U unless otherwise agreed.' },
    { title: '20. Governing Law & Jurisdiction', content: 'These Terms shall be governed by and interpreted in accordance with the laws of India. Courts jurisdiction in Delhi shall have exclusive jurisdiction over all matters arising from these Terms.' },
    { title: '21. Amendments', content: 'Teams4U reserves the right to modify these Terms at any time to reflect operational, legal, or market changes. Continued engagement after such updates constitutes acceptance of the revised Terms.' },
    { title: '22. Entire Agreement', content: 'These Terms, along with any signed agreements or work orders, constitute the entire understanding between the parties. They supersede all prior discussions, communications, or representations.' },
  ];

  return (
    <>
      <style>
        {`
          .terms-section {
            padding: 8rem 5rem 5rem;
          }
          .terms-header {
            text-align: center;
            margin-bottom: 4rem;
          }
          .terms-content {
            max-width: 900px;
            margin: 0 auto;
          }
          .terms-card {
            background: ${colors.white};
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(27, 20, 100, 0.08);
          }
          .acceptance-card {
            background: linear-gradient(135deg, ${colors.paleGreen} 0%, ${colors.paleGreen} 100%);
            border-radius: 12px;
            padding: 2.5rem;
            margin-top: 3rem;
            text-align: center;
          }
          @media (max-width: 768px) {
            .terms-section {
              padding: 7rem 1rem 3rem;
            }
            .terms-card {
              padding: 1.5rem;
            }
          }
        `}
      </style>

      <section className="terms-section" style={{ backgroundColor: colors.lightGray }}>
        <div className="terms-content">
          <div className="terms-header">
            <h1 style={{
              ...typography.h1,
              color: colors.navy,
              marginBottom: '1rem',
            }}>
              Terms & Conditions
            </h1>
            <p style={{
              ...typography.body,
              color: colors.textGray,
            }}>
              Teams4U Solutions Private Limited
            </p>
          </div>

          <div className="terms-card">
            <p style={{ ...typography.body, color: colors.textDark }}>
              These Terms and Conditions ("Terms") govern all engagements, services, platforms, research activities, field operations, and interactions carried out by Teams4U Solutions Private Limited ("Teams4U", "Company", "We", "Us", "Our").
            </p>
            <p style={{ ...typography.body, color: colors.textDark, marginTop: '1rem' }}>
              By accessing our website, platform, or engaging our services in any capacity, you agree to be bound by these Terms.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="terms-card">
              <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>
                {section.title}
              </h3>
              <p style={{ ...typography.body, color: colors.textDark }}>
                {section.content}
              </p>
            </div>
          ))}

          <div className="acceptance-card">
            <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>
              Final Acceptance
            </h3>
            <p style={{ ...typography.body, color: colors.textDark, fontSize: '1rem' }}>
              By accessing Teams4U's services, platforms, or engaging in any assignment or project, you acknowledge that you have read, understood, and agreed to these Terms & Conditions in full.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
