import { useState, useRef, useCallback, useEffect } from 'react';
import { personalInfo, experiences, awards, memberships, techStack, aboutContent } from '../data';
import { Card, ListItem, IconBox } from './ui';
import { trackEvent } from '../utils';
import { MdContentCopy } from 'react-icons/md';
import './About.css';
import profileImage from '../assets/images/profile/profile_image_surbhi.jpg';

const About = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      trackEvent('email_copy', { location: 'about' });
      setCopied(true);
      
      // Clear existing timeout if any
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch (error) {
      trackEvent('email_copy_failed', { location: 'about' });
      // Fallback for browsers that don't support clipboard API
      // Only log in development to avoid exposing errors in production
      if (import.meta.env.DEV) {
        console.error('Failed to copy email to clipboard:', error);
      }
      // Could show a toast notification here in the future
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Header with Name and Bio */}
        <div className="about-header">
          <h1 className="about-name">{personalInfo.name}</h1>
          <p className="about-intro">{personalInfo.bio}</p>
        </div>

        {/* Profile Image Section */}
        <div className="about-headshot">
          <img 
            src={profileImage}
            alt={personalInfo.name}
            className="headshot-image"
          />
        </div>

        {/* Summary and About Me Section */}
        <div className="about-content-grid">
          <div className="about-summary">
            <p className="summary-text">{personalInfo.summary || aboutContent.fallbackSummary}</p>
          </div>
          <div className="about-me">
            <p className="about-me-text">
              {personalInfo.aboutMe || personalInfo.bio}
            </p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="about-experience">
          <div className="experience-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-date">
                  <span className="date-text">{exp.duration}</span>
                </div>
                <div className="experience-details">
                  <h3 className="experience-role">{exp.company}, {exp.title}.</h3>
                  <p className="experience-location">{exp.location || aboutContent.fallbackLocation}</p>
                  <p className="experience-description">{exp.description[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="about-contact">
          <h2 className="contact-heading">
            <span>{aboutContent.contactHeading[0]}</span>
            <span>{aboutContent.contactHeading[1]}</span>
          </h2>
          <div className="contact-email-container">
            <button className="contact-email-btn" onClick={handleCopy}>
              {personalInfo.email}
              <MdContentCopy size={16} />
            </button>
            {copied && <span className="copy-feedback">{aboutContent.copyFeedback}</span>}
          </div>
        </div>

        {/* Awards Section */}
        <div className="about-awards">
          {/* add border to card   */}
          <Card className="awards-card" border paddedLg>
            <h2 className="section-title">{aboutContent.sectionTitles.awards}</h2>
            <p className="section-description">
              {aboutContent.sectionDescriptions.awards}
            </p>
            <div className="list-vertical">
              {awards.map((award) => {
                return (
                  <ListItem
                    key={award.id}
                    icon={<IconBox className="award-icon">{aboutContent.getAwardIcon(award.icon)}</IconBox>}
                    title={award.title}
                    subtitle={award.category}
                    alignStart
                  />
                );
              })}
            </div>
          </Card>
        </div>

        {/* Membership Section */}
        <Card className="about-membership" border padded>
          <div className="membership-card">
            <div className="membership-content">
              <h2 className="section-title">{aboutContent.sectionTitles.membership}</h2>
              <p className="section-description">
                {aboutContent.sectionDescriptions.membership}
              </p>
            </div>
            <div className="membership-row">
              <div className="membership-images" hidden={true}>
                <div className="membership-image-placeholder"></div>
                <div className="membership-image-placeholder"></div>
              </div>
              <div className="list-vertical">
                {memberships.map((membership) => (
                  <ListItem
                    key={membership.id}
                    icon={
                      <div className="membership-logo">
                        <img src={membership.logoUrl} alt={membership.company} />
                      </div>
                    }
                    title={membership.company}
                    subtitle={membership.role}
                    alignStart
                    className="membership-item"
                  >
                    <span className="membership-duration">{membership.duration}</span>
                  </ListItem>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Tech Stack Section */}
        <div className="about-techstack">
          <Card>
            <h2 className="section-title">{aboutContent.sectionTitles.techStack}</h2>
            <p className="section-description">
              {aboutContent.sectionDescriptions.techStack}
            </p>
            <div className="techstack-categories">
              {aboutContent.techStackCategories.map((category) => {
                const categoryItems = techStack.filter(item => item.category === category);
                return (
                  <Card key={category} rounded padded className="techstack-category">
                    <h3 className="techstack-category-title">{category}</h3>
                    <div className="techstack-items">
                      {categoryItems.map((item) => (
                        <ListItem
                          key={item.id}
                          icon={
                            <div className="techstack-logo">
                              <img src={item.logoUrl} alt={item.name} />
                            </div>
                          }
                          title={item.name}
                          subtitle={item.description}
                        />
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
