import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { LAYOUT } from '../constants';
import './Header.css';
import { personalInfo, headerContent } from '../data';
import { trackEvent } from '../utils';
import { HeaderFestival } from './HolidayEffects';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  /**
   * Sets up scroll listener to update active section based on scroll position
   */
  useEffect(() => {
    const handleScroll = (): void => {
      try {
        const currentScrollY = window.scrollY;
        const sections = headerContent.navItems.map(item => document.getElementById(item.id));
        const scrollPosition = currentScrollY + LAYOUT.SCROLL_OFFSET;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(headerContent.navItems[i].id);
            break;
          }
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error('Error in scroll handler:', error);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  /**
   * Smoothly scrolls to a section by its ID
   * @param id - The ID of the section element to scroll to
   */
  const scrollToSection = (id: string): void => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (import.meta.env.DEV) {
        console.warn(`Section with id "${id}" not found`);
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error scrolling to section:', error);
      }
    }
  };

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    trackEvent('theme_toggle', { theme: nextTheme });
    setIsDark(prev => !prev);
  };

  const handleContactClick = () => {
    trackEvent('contact_click', { location: 'header', destination: 'linkedin' });
    window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header className="header">
        <HeaderFestival />
        <div className="header-left">
          <img 
            src={personalInfo.profileImage} 
            alt={personalInfo.name}
            className="avatar"
          />
          <span className="name">{personalInfo.name}</span>
        </div>
        
        <nav className="nav desktop-nav">
          {headerContent.navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                trackEvent('nav_click', { section: item.id, label: item.label });
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <BsSun size={18} />
            ) : (
              <BsMoon size={18} />
            )}
          </button>
          
          <button
            className="contact-btn"
            onClick={handleContactClick}
            aria-label="Connect on LinkedIn"
          >
            {headerContent.contactButton}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
