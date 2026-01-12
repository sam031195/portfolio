import { personalInfo, lifestyleContent } from '../data';
import { CTASection } from './ui';
import './Lifestyle.css';
import cityImage from '../assets/images/lifestyle/20.jpg';
import readingImage from '../assets/images/lifestyle/sm_5.png';
import footballImage from '../assets/images/lifestyle/sm_3.webp';

const Lifestyle = () => {
  return (
    <section id="lifestyle" className="lifestyle">
      <div className="lifestyle-container">
        {/* Design Philosophy Section */}
        <div className="design-philosophy">
          <span className="philosophy-label">{lifestyleContent.philosophy.label}</span>
          <div className="philosophy-content">
            <div className="philosophy-image">
              {lifestyleContent.philosophy.imageUrl ? (
                <img 
                  src={lifestyleContent.philosophy.imageUrl} 
                  alt="Design Philosophy"
                  className="philosophy-image-img"
                />
              ) : (
                <div className="philosophy-image-placeholder"></div>
              )}
            </div>
            <div className="philosophy-text">
              <h2 className="philosophy-title">
                <span className="italic">{lifestyleContent.philosophy.words[0]}</span>
                <span className="bold">{lifestyleContent.philosophy.words[1]}</span>
                <span className="bold">{lifestyleContent.philosophy.words[2]}</span>
              </h2>
              <p className="philosophy-description">
                {lifestyleContent.philosophy.description}
              </p>
            </div>
          </div>
        </div>

        {/* Beyond Screen Section */}
        <div className="beyond-screen">
          <div className="beyond-screen-card">
            <h2 className="beyond-screen-title">{lifestyleContent.beyondScreen.title}</h2>
            <p className="beyond-screen-description">
              {lifestyleContent.beyondScreen.description}
            </p>
            <div className="beyond-screen-grid">
              <div className="beyond-item">
                <div className="beyond-image reading">
                  <img src={readingImage} alt="Reading" className="beyond-image-bg" />
                  <span className="beyond-label">{lifestyleContent.beyondScreen.items.reading}</span>
                </div>
              </div>
              <div className="beyond-item">
                <div className="beyond-image city">
                  <img src={cityImage} alt="City" className="beyond-image-bg" />
                  <span className="beyond-label">{lifestyleContent.beyondScreen.items.location}</span>
                </div>
              </div>
              <div className="beyond-item">
                <div className="beyond-image football">
                  <img src={footballImage} alt="Football" className="beyond-image-bg" />
                  <span className="beyond-label">{lifestyleContent.beyondScreen.items.football}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTASection
          title={lifestyleContent.cta.title}
          buttonText={lifestyleContent.cta.buttonText}
          onButtonClick={() => window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer')}
          className="lifestyle-cta"
        />
      </div>
    </section>
  );
};

export default Lifestyle;

