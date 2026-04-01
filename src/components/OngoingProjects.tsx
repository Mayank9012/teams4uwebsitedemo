import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import ongoing1 from '../assets/ongoing1.svg';
import ongoing2 from '../assets/ongoing2.svg';
import ongoing3 from '../assets/ongoing3.svg';
import ongoing4 from '../assets/ongoing4.svg';
import ongoing5 from '../assets/ongoing5.svg';
import ongoing6 from '../assets/ongoing6.svg';

const OngoingProjects: React.FC = () => {
  const projects = [
    {
      tag: 'Field Team',
      title: 'Project Sawarksha',
      description: 'Partners with leading last-mile and hyperlocal companies for delivery. Performance is measured by customer satisfaction, turnaround time, reporting...',
      image: ongoing1,
    },
    {
      tag: 'Field Work',
      title: 'Delivery Partner Jobs',
      description: 'You will lead delivery operations near your location. Performance is measured by customer satisfaction, turnaround time, reporting, and logistics costs.',
      image: ongoing2,
    },
    {
      tag: 'Telephonic Work',
      title: 'Tele Calling Jobs',
      description: 'Partners with leading last-mile and hyperlocal companies for delivery. Performance is measured by customer satisfaction, turnaround time, reporting...',
      image: ongoing3,
    },
    {
      tag: 'Field Team',
      title: 'Quick Money',
      description: 'Partners with leading last-mile and hyperlocal companies for delivery. Performance is measured by customer satisfaction, turnaround time, reporting...',
      image: ongoing4,
    },
    {
      tag: 'Field Work',
      title: 'Data Collection',
      description: 'You will lead delivery operations near your location. Performance is measured by customer satisfaction, turnaround time, reporting, and logistics costs.',
      image: ongoing5,
    },
    {
      tag: 'Telephonic Work',
      title: 'Exam Invigilator Jobs',
      description: 'Partners with leading last-mile and hyperlocal companies for delivery. Performance is measured by customer satisfaction, turnaround time, reporting...',
      image: ongoing6,
    },
  ];

  return (
    <>
      <style>
        {`
          .ongoing-section {
            padding: 5rem 5rem;
          }
          .ongoing-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
          }
          .filter-controls {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          @media (max-width: 768px) {
            .ongoing-section {
              padding: 3rem 1rem;
            }
            .ongoing-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 1.5rem;
            }
            .filter-controls {
              width: 100%;
              flex-direction: column;
              align-items: flex-start;
            }
            .filter-controls select {
              width: 100%;
            }
            .projects-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
          }
        `}
      </style>
      <section id="ongoing-projects" className="ongoing-section" style={{
        backgroundColor: colors.white,
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div className="ongoing-header">
          <h2 style={{
            ...typography.h2,
            color: colors.navy,
          }}>
            Ongoing Projects
          </h2>
          <div className="filter-controls">
            <span style={{ color: colors.textDark, fontWeight: 600 }}>Filter Projects</span>
            <select style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '8px',
              backgroundColor: colors.lightGray,
              border: `2px solid ${colors.border}`,
              fontSize: '1rem',
              cursor: 'pointer',
            }}>
              <option>All</option>
            </select>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} style={{
              border: `2px solid ${colors.primary}`,
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: colors.white,
            }}>
              <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
                <span style={{
                  backgroundColor: colors.bluegray,
                  color: colors.textGray,
                  padding: '0.375rem 0.875rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  display: 'inline-block',
                  marginBottom: '0rem',
                }}>
                  {project.tag}
                </span>
                <h3 style={{
                  ...typography.h3,
                  color: colors.textDark,
                  marginBottom: '0.1rem',
                  fontSize: '1.25rem',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  ...typography.small,
                  color: colors.textDark,
                  marginBottom: '1rem',
                }}>
                  {project.description}
                </p>
                <a href="#" style={{
                  color: colors.navy,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{textDecoration:'underline'}}>See More </span>→
                </a>
              </div>
              <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default OngoingProjects;