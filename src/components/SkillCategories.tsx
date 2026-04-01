import React from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import chatcircletext from '../assets/ChatCircleText.svg';
import puzzlepiece from '../assets/PuzzlePiece.svg';
import teamwork from '../assets/UsersThree.svg';
import lightbulb from '../assets/LightbulbFilament.svg';
import crown from '../assets/CrownSimple.svg';
import headcircuit from '../assets/HeadCircuit.svg';
import brain from '../assets/Brain.svg';


const SkillCategories: React.FC = () => {
  const skills = [
    { icon: <img src={chatcircletext} alt="Communication skills" />, name: 'Communication skills', span: 1 },
    { icon: <img src={brain} alt="Problem-solving" />, name: 'Problem-solving', span: 1 },
    { icon: <img src={puzzlepiece} alt="Adaptability and flexibility" />, name: 'Adaptability and flexibility', span: 2 },
    { icon: <img src={teamwork} alt="Teamwork and collaboration" />, name: 'Teamwork and collaboration', span: 2 },
    { icon: <img src={lightbulb} alt="Critical thinking" />, name: 'Critical thinking', span: 1 },
    { icon: <img src={headcircuit} alt="Emotional Intelligence" />, name: 'Emotional Intelligence', span: 1 },
    { icon: <img src={crown} alt="Leadership and Management" />, name: 'Leadership and Management', span: 1 },
  ];

  return (
    <>
      <style>
        {`
          .skills-section {
            padding: 5rem 5rem;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 140px;
            gap: 1rem;
            margin-bottom: 4rem;
          }
          .skill-icon {
            width: 40px;
            height: 40px;
          }
          .skill-name {
            font-size: 1.3rem;
          }
          @media (max-width: 1024px) and (min-width: 481px) {
            .skills-section {
              padding: 3rem 1rem;
            }
            .skills-grid {
              grid-auto-rows: 120px;
              gap: 0.75rem;
            }
            .skill-card {
              padding: 1.5rem !important;
              gap: 1rem !important;
            }
            .skill-icon {
              width: 30px;
              height: 30px;
              padding: 0.75rem !important;
            }
            .skill-icon img {
              width: 30px !important;
              height: 30px !important;
            }
            .skill-name {
              font-size: 0.95rem !important;
            }
          }
          @media (max-width: 480px) {
            .skills-section {
              padding: 3rem 1rem;
            }
            .skills-grid {
              grid-template-columns: 1fr;
              grid-auto-rows: auto;
            }
            .skill-card {
              flex-direction: row !important;
              justify-content: flex-start !important;
              text-align: left !important;
            }
            .skill-card span:last-child {
              text-align: left !important;
            }
          }
        `}
      </style>
      <section className="skills-section" style={{
        backgroundColor: colors.white,
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h2 style={{
          ...typography.h2,
          color: colors.navy,
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          Skill Development Categories
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{
              backgroundColor: colors.paleBlue,
              padding: '2rem',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: skill.span === 2 ? 'column' : 'row',
              alignItems: skill.span === 2 ? 'center' : 'center',
              justifyContent: skill.span === 2 ? 'center' : 'flex-start',
              gap: '1.5rem',
              gridRowEnd: `span ${skill.span}`,
              minWidth: 0,
            }}>
              <span className="skill-icon" style={{ backgroundColor: colors.white, borderRadius: '50%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{skill.icon}</span>
              <span className="skill-name" style={{
                fontWeight: 600,
                color: colors.textDark,
                lineHeight: '1.3',
                whiteSpace: 'normal',
                textAlign: skill.span === 2 ? 'center' : 'left',
                overflowWrap: 'break-word',
              }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default SkillCategories;