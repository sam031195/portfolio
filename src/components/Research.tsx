import { researchProjects, skillCategories, personalInfo, researchContent } from '../data';
import { SectionHeader, CTASection, Card } from './ui';
import EmbeddedModal from './EmbeddedModal';
import { useEmbeddedModal } from '../hooks';
import { handleLinkClick, hasClickableAction } from '../utils';
import './Research.css';

const Research = () => {
  const { embeddedUrl, embeddedTitle, isOpen, openModal, closeModal } = useEmbeddedModal();

  return (
    <section id="research" className="research">
      <div className="research-container">
        <SectionHeader
          title={researchContent.title}
          subtitle={researchContent.subtitle}
        />

        <div className="research-grid">
          {researchProjects.map((project) => {
            const isClickable = hasClickableAction(project);
            return (
              <div
                key={project.id}
                className={`research-card-wrapper ${isClickable ? 'research-card-clickable' : ''}`}
                onClick={isClickable ? () => handleLinkClick({ item: project, onOpenModal: openModal }) : undefined}
              >
                <Card className="research-card" border>
                  {project.imageUrl && (
                    <div className="research-image">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="research-image-img"
                      />
                    </div>
                  )}
                  <div className="research-content">
                    <div className="research-info">
                      <p className="research-project-title">{project.title}</p>
                      <p className="research-category">{project.category}</p>
                      <div className="research-description-wrapper">
                        <p className="research-description">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <Card className="research-year-card" border>
                      <span className="research-year">{project.year}</span>
                    </Card>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <div className="skills-header">
            <h2 className="skills-title">{researchContent.skills.title}</h2>
            <p className="skills-description">
              {researchContent.skills.description}
            </p>
          </div>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <CTASection
          title={researchContent.cta.title}
          buttonText={researchContent.cta.buttonText}
          onButtonClick={() => window.location.href = `mailto:${personalInfo.email}`}
        />
      </div>

      {/* Embedded Modal */}
      <EmbeddedModal
        isOpen={isOpen}
        onClose={closeModal}
        url={embeddedUrl || ''}
        title={embeddedTitle}
      />
    </section>
  );
};

export default Research;

