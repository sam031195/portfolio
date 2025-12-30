interface LinkItem {
  websiteUrl?: string;
  researchPaperUrl?: string;
  liveUrl?: string;
  embedInModal?: boolean;
  title: string;
}

interface HandleLinkClickParams {
  item: LinkItem;
  onOpenModal: (url: string, title: string) => void;
}

// Domains that block iframe embedding (X-Frame-Options, CSP)
// These will open directly in a new tab instead of attempting to embed
const IFRAME_BLOCKED_DOMAINS = [
  'kaggle.com',
  'github.com',
  'linkedin.com',
  'medium.com',
  'colab.research.google.com',
  'youtube.com',
  'facebook.com',
  'twitter.com',
  'instagram.com',
] as const;

/**
 * Check if a URL's domain blocks iframe embedding
 */
const cannotEmbed = (url: string): boolean => {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    return IFRAME_BLOCKED_DOMAINS.some(domain => hostname.includes(domain));
  } catch {
    return false;
  }
};

/**
 * Generic handler for opening links in modal or new tab
 */
export const handleLinkClick = ({ item, onOpenModal }: HandleLinkClickParams): void => {
  // Priority 1: Website URL with embed flag
  if (item.websiteUrl && item.embedInModal) {
    // Check if this domain blocks iframe embedding
    if (cannotEmbed(item.websiteUrl)) {
      // Open directly in new tab instead of trying to embed
      window.open(item.websiteUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    onOpenModal(item.websiteUrl, item.title);
    return;
  }

  // Priority 2: Research paper URL (for research items)
  if (item.researchPaperUrl) {
    window.open(item.researchPaperUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  // Priority 3: Website URL without embed flag
  if (item.websiteUrl) {
    window.open(item.websiteUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  // Priority 4: Live URL (for project items)
  if (item.liveUrl && item.liveUrl !== '#') {
    window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Check if an item has any clickable action
 */
export const hasClickableAction = (item: LinkItem): boolean => {
  return !!(
    (item.websiteUrl && item.embedInModal) ||
    item.researchPaperUrl ||
    item.websiteUrl ||
    (item.liveUrl && item.liveUrl !== '#')
  );
};

