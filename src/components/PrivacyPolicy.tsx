import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    { title: '1. Scope of This Policy', content: 'This Policy applies to all data collected through our websites, platforms, applications, research activities, field operations, onboarding programs, surveys, and community-driven engagements. It covers data related to clients, partners, gig workers, field associates, consumers, merchants, and other stakeholders.' },
    { title: '2. Types of Data We Collect', content: 'We may collect personal, professional, and business-related information including names, contact details, location data, device information, identification details, and responses collected during surveys or onboarding. Data collected is limited to what is necessary for legitimate business and operational purposes.' },
    { title: '3. Data Collection Methods', content: 'Data may be collected directly through forms, registrations, contracts, surveys, interviews, and digital platforms. In some cases, data is collected through field teams or community members during on-ground execution. We ensure that such collection follows lawful and transparent practices.' },
    { title: '4. Purpose of Data Collection', content: 'Data is collected to enable market research, product analysis, consumer and merchant onboarding, service delivery, compliance, payments, reporting, and communication. We also use data to improve service quality, operational efficiency, and market insights for our clients.' },
    { title: '5. Legal Basis for Processing', content: 'We process data based on consent, contractual necessity, legal obligations, and legitimate business interests. Where required, explicit consent is obtained before collecting or processing personal information. Users have the right to withdraw consent subject to legal and contractual limitations.' },
    { title: '6. Use of Data for Research & Market Analysis', content: 'Data collected through surveys and field activities may be aggregated and anonymized for research and analytical purposes. Such insights help clients understand Indian market behavior without identifying individual respondents. Personally identifiable data is not published without consent.' },
    { title: '7. Data Sharing With Clients', content: 'Data collected as part of client engagements may be shared with the respective client strictly for the agreed scope of work. Clients are contractually obligated to use such data responsibly and in compliance with applicable laws. Teams4U does not sell personal data to third parties.' },
    { title: '8. Data Sharing With Service Providers', content: 'We may share limited data with trusted service providers such as payment processors, technology partners, and compliance vendors. These providers are bound by confidentiality and data protection obligations and may only process data for specified purposes.' },
    { title: '9. Confidentiality of Client Information', content: 'All client strategies, research outputs, methodologies, reports, and business information are treated as strictly confidential. Access is restricted to authorized personnel only. Confidential information is never disclosed without prior written authorization.' },
    { title: '10. Data Security Measures', content: 'We implement reasonable technical, administrative, and organizational safeguards to protect data against unauthorized access, loss, misuse, or alteration. These include access controls, encryption where appropriate, monitoring, and internal data handling protocols.' },
    { title: '11. Responsibility of Users & Field Teams', content: 'Users, partners, gig workers, and field associates are required to handle data responsibly and securely. Unauthorized storage, copying, sharing, or misuse of data is strictly prohibited. Any suspected data breach must be reported to Teams4U immediately.' },
    { title: '12. Data Retention', content: 'We retain personal and business data only for as long as necessary to fulfill the purposes for which it was collected or as required by law. Once the purpose is fulfilled, data is securely deleted, anonymized, or archived in accordance with legal requirements.' },
    { title: '13. Data Accuracy', content: 'We rely on users and clients to provide accurate and updated information. Teams4U is not responsible for inaccuracies arising from incorrect or outdated data provided by external parties. Reasonable steps are taken to maintain data accuracy during processing.' },
    { title: '14. Cookies & Digital Tracking', content: 'Our website and platforms may use cookies or similar technologies to improve user experience, analyze traffic, and enhance functionality. Users may manage cookie preferences through browser settings. Disabling cookies may affect certain features.' },
    { title: '15. Cross-Border Data Transfers', content: 'Where data is shared with global clients or partners, appropriate safeguards are implemented to ensure compliance with applicable data protection laws. Cross-border transfers are limited to what is necessary for service delivery and legal compliance.' },
    { title: '16. Data Subject Rights', content: 'Subject to applicable laws, individuals may request access, correction, deletion, or restriction of their personal data. Requests may be denied where retention is required by law or contractual obligations. Requests can be submitted via official contact channels.' },
    { title: '17. Children\'s Data', content: 'Teams4U does not knowingly collect personal data from individuals below the age of 18. If such data is identified, it will be promptly deleted. Our services are intended for adults capable of entering legal agreements.' },
    { title: '18. Data Breach Management', content: 'In the event of a data breach, Teams4U will take immediate steps to contain and assess the impact. Where legally required, affected parties and authorities will be notified. We continuously improve safeguards to reduce future risks.' },
    { title: '19. Compliance With Indian Laws', content: 'Teams4U complies with applicable Indian data protection and privacy laws, including evolving regulations. Clients and partners are expected to ensure that any data shared with us is lawfully obtained and compliant with relevant regulations.' },
    { title: '20. Limitation of Liability', content: 'While we take reasonable measures to protect data, Teams4U shall not be liable for breaches caused by factors beyond reasonable control, including user negligence, device compromise, or third-party failures. Liability, if any, is limited as per governing agreements.' },
    { title: '21. Policy Updates', content: 'This Privacy & Data Protection Policy may be updated periodically to reflect legal, operational, or technological changes. Updated versions will be published on our website. Continued use of our services constitutes acceptance of the revised Policy.' },
  ];

  return (
    <>
      <style>
        {`
          .policy-section {
            padding: 8rem 5rem 5rem;
          }
          .policy-header {
            text-align: center;
            margin-bottom: 4rem;
          }
          .policy-content {
            max-width: 900px;
            margin: 0 auto;
          }
          .policy-card {
            background: ${colors.white};
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(27, 20, 100, 0.08);
          }
          .contact-card {
            background: linear-gradient(135deg, ${colors.navy} 0%, ${colors.darkNavy} 100%);
            border-radius: 12px;
            padding: 2rem;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
          @media (max-width: 768px) {
            .policy-section {
              padding: 7rem 1rem 3rem;
            }
            .policy-card {
              padding: 1.5rem;
            }
          }
        `}
      </style>

      <section className="policy-section" style={{ backgroundColor: colors.lightGray }}>
        <div className="policy-content">
          <div className="policy-header">
            <h1 style={{
              ...typography.h1,
              color: colors.navy,
              marginBottom: '1rem',
            }}>
              Privacy & Data Protection Policy
            </h1>
            <p style={{
              ...typography.body,
              color: colors.textGray,
            }}>
              Teams4U Solutions Private Limited
            </p>
          </div>

          <div className="policy-card">
            <p style={{ ...typography.body, color: colors.textDark }}>
              At Teams4U Solutions Private Limited ("Teams4U", "Company", "We", "Us", "Our"), we respect the privacy of all individuals and organizations that interact with us. This Privacy & Data Protection Policy explains how we collect, use, store, process, share, and protect personal and business data in connection with our services.
            </p>
            <p style={{ ...typography.body, color: colors.textDark, marginTop: '1rem' }}>
              By accessing our website, platform, or engaging with our services, you consent to the practices described in this Policy.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="policy-card">
              <h3 style={{ ...typography.h3, color: colors.navy, marginBottom: '1rem' }}>
                {section.title}
              </h3>
              <p style={{ ...typography.body, color: colors.textDark }}>
                {section.content}
              </p>
            </div>
          ))}

          <div className="contact-card">
            <h3 style={{ ...typography.h3, color: colors.white, marginBottom: '1rem' }}>
              22. Contact Information
            </h3>
            <p style={{ ...typography.body, color: colors.white, marginBottom: '1rem' }}>
              For privacy-related questions, data access requests, or concerns, please contact:
            </p>
            <p style={{ ...typography.body, color: colors.white, fontWeight: 600 }}>
              Teams4U Solutions Private Limited<br />
              Email: info@teams4u.in<br />
              Website: www.Teams4U.in
            </p>
          </div>

          <div className="policy-card" style={{ textAlign: 'center', background: colors.paleGreen }}>
            <h4 style={{ ...typography.h3, color: colors.navy, marginBottom: '0.5rem' }}>Acceptance</h4>
            <p style={{ ...typography.body, color: colors.textDark }}>
              By accessing Teams4U's website, platforms, or services, you acknowledge that you have read, understood, and agreed to this Privacy & Data Protection Policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
