import { useState, useEffect } from 'react';
import { personalInfo } from '../data';
import './EmbeddedViewer.css';

interface EmbeddedViewerProps {
  url: string;
  title?: string;
  onClose?: () => void;
}

const EmbeddedViewer = ({ url, title = "Content", onClose }: EmbeddedViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [url]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="embedded-viewer">
      {isLoading && (
        <div className="embedded-viewer-loading">
          <div className="spinner"></div>
          <p>Loading content...</p>
        </div>
      )}
      
      {hasError && (
        <div className="embedded-viewer-error">
          <p>Unable to load content. The external site may not allow embedding.</p>
        </div>
      )}

      <iframe
        src={url}
        title={title}
        className="embedded-viewer-iframe"
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        allow="fullscreen"
        referrerPolicy="no-referrer"
      />
      
      {/* Mini header overlay to hide "Made in Framer" badge and provide close button */}
      {onClose && (
        <div className="embedded-viewer-overlay">
          <div className="embedded-viewer-mini-header">
            <div className="embedded-viewer-mini-left">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="embedded-viewer-mini-avatar"
              />
              <span className="embedded-viewer-mini-name">{personalInfo.name}</span>
            </div>
            <button 
              className="embedded-viewer-mini-close" 
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmbeddedViewer;

