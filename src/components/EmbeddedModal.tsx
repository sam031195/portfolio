import { useEffect, useState } from 'react';
import { trackEvent } from '../utils';
import EmbeddedViewer from './EmbeddedViewer';
import './EmbeddedModal.css';

interface EmbeddedModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

const EmbeddedModal = ({ isOpen, onClose, url, title = "Content" }: EmbeddedModalProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    trackEvent('modal_close', { title, url });
    document.body.style.overflow = 'unset';
    setShouldRender(false);
    onClose();
  };

  if (!shouldRender) return null;

  return (
    <div 
      className="embedded-modal-overlay" 
      onClick={handleClose}
    >
      <div 
        className="embedded-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="embedded-modal-header">
          <h2 className="embedded-modal-title">{title}</h2>
          <button 
            className="embedded-modal-close" 
            onClick={handleClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="embedded-modal-content">
          <EmbeddedViewer url={url} title={title} onClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default EmbeddedModal;

