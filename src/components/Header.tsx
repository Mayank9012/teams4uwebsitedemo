import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../styles/colors';
import logo from '../assets/Logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMenuItemId = (item: string) => {
    return item.toLowerCase().replace(/\s+/g, '-');
  };

  const isActive = (item: string) => {
    if (item === 'About Us' && location.pathname === '/aboutus') return true;
    if (item === 'What We Do' && location.pathname === '/what-we-do') return true;
    if (item === 'Join Us' && location.pathname === '/joinus') return true;
    if (item === 'Offerings' && location.pathname === '/offerings') return true;
    
    if (location.pathname === '/') {
      const itemId = getMenuItemId(item);
      return activeSection === itemId;
    }
    
    return false;
  };

  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);
    if (item !== 'About Us' && item !== 'Join Us' && location.pathname !== '/') {
      window.location.href = '/#' + getMenuItemId(item);
    }
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .header {
              padding: 0.3rem 0.5rem !important;
              min-height: 32px !important;
            }
            .nav-menu {
              display: ${isMenuOpen ? 'flex' : 'none'} !important;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background-color: rgba(255, 255, 255, 0.98);
              flex-direction: column;
              padding: 0.5rem 0.5rem;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .nav-menu li {
              margin-bottom: 0.7rem;
            }
            .hamburger {
              display: block !important;
            }
            .logo-img {
              height: 20px !important;
              border-radius: 5px !important;
            }
          }
          @media (min-width: 769px) {
            .header {
              padding: 1.2rem 0.2rem !important;
              min-height: 24px !important;
            }
            .logo-img {
              height: 28px !important;
              border-radius: 3px !important;
            }
            .nav-menu {
              gap: 1rem !important;
            }
            .nav-menu li a, .nav-menu li .active, .nav-menu li Link {
              font-size: 0.80rem !important;
              line-height: 1 !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .hamburger {
              display: none !important;
            }
          }
        `}
      </style>
      <header className="header" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        zIndex: 1000,
        padding: '0',
        minHeight: '0',
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          padding: '0',
          minHeight: '0',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.12rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Teams4U Logo" className="logo-img" style={{ height: '20px', borderRadius: '3px', cursor: 'pointer' }} />
            </Link>
          </div>
          <button 
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
              color: colors.textDark,
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <ul className="nav-menu" style={{
            display: 'flex',
            gap: '1rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center',
            minHeight: 0,
          }}>
            {['Home', 'Offerings', 'About Us', 'What We Do','Join Us'].map((item) => {
              const isRoute = item === 'About Us' || item === 'What We Do' || item === 'Join Us' || item === 'Offerings';
              const href = item === 'About Us' ? '/aboutus' : item === 'Offerings' ? '/offerings' : item === 'What We Do' ? '/what-we-do' : item === 'Join Us' ? '/joinus' : item === 'Home' ? '/' : `#${getMenuItemId(item)}`;
              
              return (
                <li key={item}>
                  {isRoute || item === 'Home' ? (
                    <Link
                      to={href}
                      style={{
                        textDecoration: 'none',
                        color: isActive(item) ? colors.primary : colors.textDark,
                        fontWeight: isActive(item) ? 600 : 400,
                        fontSize: '0.78rem',
                        lineHeight: '1',
                        padding: 0,
                        margin: 0,
                        transition: 'color 0.3s ease',
                      }}
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      style={{
                        textDecoration: 'none',
                        color: isActive(item) ? colors.primary : colors.textDark,
                        fontWeight: isActive(item) ? 600 : 400,
                        fontSize: '0.85rem',
                        transition: 'color 0.3s ease',
                      }}
                      onClick={() => handleNavClick(item)}
                    >
                      {item}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;