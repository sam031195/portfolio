import { projects, projectsContent } from '../data';
import { SectionHeader } from './ui';
import EmbeddedModal from './EmbeddedModal';
import { useEmbeddedModal } from '../hooks';
import { handleLinkClick, hasClickableAction, trackEvent } from '../utils';
import './Projects.css';

const Projects = () => {
  const { embeddedUrl, embeddedTitle, isOpen, openModal, closeModal } = useEmbeddedModal();

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <SectionHeader
          title={projectsContent.title}
          subtitle={projectsContent.subtitle}
        />

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const isClickable = hasClickableAction(project);
            
            return (
              <article 
                key={project.id} 
                className={`project-card ${isClickable ? 'project-card-clickable' : ''}`}
                onClick={isClickable ? () => handleLinkClick({ item: project, onOpenModal: openModal }) : undefined}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
              >
                <div className="project-image">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="project-image-img"
                    />
                  ) : (
                    <div className="project-image-placeholder"></div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-link">
                    {projectsContent.readMore} <span className="arrow">↗</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <span className="newsletter-label">{projectsContent.newsletter.label}</span>
          <h2 className="newsletter-title">
            <span>{projectsContent.newsletter.heading[0]}</span>
            <span>{projectsContent.newsletter.heading[1]}</span>
          </h2>
          <div className="newsletter-cta">
            <button
              className="newsletter-btn"
              onClick={() => trackEvent('newsletter_click', { section: 'projects' })}
            >
              {projectsContent.newsletter.buttonText} <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Modal for websites */}
      <EmbeddedModal
        isOpen={isOpen}
        onClose={closeModal}
        url={embeddedUrl || ''}
        title={embeddedTitle}
      />
    </section>
  );
};

export default Projects;

