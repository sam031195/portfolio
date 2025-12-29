import { useEffect, useState } from 'react';
import './HolidayEffects.css';

type HolidayType = 'snow' | 'diwali' | null;

interface HolidayEffectsProps {
  enabled?: boolean;
}

// Festival configuration
interface FestivalConfig {
  id: HolidayType;
  name: string;
  emoji: string;
  particleCount: number;
  headerParticleCount: number;
  className: string;
  containerClass: string;
  baseOpacity: number;
  opacityRange: number;
  dateCheck: (month: number, date: number) => boolean;
}

const FESTIVALS: FestivalConfig[] = [
  {
    id: 'diwali',
    name: 'Diwali',
    emoji: '✨',
    particleCount: 50,
    headerParticleCount: 15,
    className: 'diwali-sparkle',
    containerClass: 'diwali-container',
    baseOpacity: 0.2,
    opacityRange: 0.4,
    dateCheck: (month, date) => month === 10 || (month === 11 && date <= 15),
  },
  {
    id: 'snow',
    name: 'Snow',
    emoji: '❄',
    particleCount: 50,
    headerParticleCount: 15,
    className: 'snowflake',
    containerClass: 'snow-container',
    baseOpacity: 0.2,
    opacityRange: 0.4,
    dateCheck: (month, date) => 
      (month === 12 && date >= 15) || (month === 1 && date <= 5) ||
      (month === 12 && date >= 28) || (month === 1 && date <= 7),
  },
];

// Global state for dev mode override
let globalDevMode: HolidayType | null = null;
const devModeListeners: Set<(value: HolidayType | null) => void> = new Set();

const setGlobalDevMode = (value: HolidayType | null) => {
  globalDevMode = value;
  devModeListeners.forEach(listener => listener(value));
};

const detectHoliday = (): HolidayType => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  // Check festivals in order (priority)
  for (const festival of FESTIVALS) {
    if (festival.dateCheck(month, date)) {
      return festival.id;
    }
  }
  
  return null;
};

// Hook to get current holiday (respects dev mode)
const useCurrentHoliday = () => {
  const [devMode, setDevMode] = useState<HolidayType | null>(globalDevMode);
  
  useEffect(() => {
    const listener = (value: HolidayType | null) => setDevMode(value);
    devModeListeners.add(listener);
    return () => {
      devModeListeners.delete(listener);
    };
  }, []);

  return import.meta.env.DEV && devMode !== null ? devMode : detectHoliday();
};

const HolidayEffects = ({ enabled = true }: HolidayEffectsProps) => {
  const [holiday, setHoliday] = useState<HolidayType>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [devMode, setDevMode] = useState<HolidayType | null>(null);

  useEffect(() => {
    if (!enabled) return;
    setHoliday(import.meta.env.DEV && devMode !== null ? devMode : detectHoliday());
  }, [enabled, devMode]);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => setIsAtTop(window.scrollY < 120);
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled]);

  if (!enabled || !holiday) {
    return import.meta.env.DEV ? <DevControlPanel onSelect={setDevMode} selected={devMode} /> : null;
  }

  const festival = FESTIVALS.find(f => f.id === holiday);
  if (!festival) return null;

  return (
    <>
      {import.meta.env.DEV && <DevControlPanel onSelect={setDevMode} selected={devMode} />}
      <div className={`holiday-effects holiday-${holiday} ${!isAtTop ? 'effect-hidden' : ''}`}>
        <FestivalEffect config={festival} />
      </div>
    </>
  );
};

// Dev-only control panel
const DevControlPanel = ({ 
  onSelect, 
  selected 
}: { 
  onSelect: (holiday: HolidayType) => void; 
  selected: HolidayType | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!import.meta.env.DEV) return null;

  const options = [
    { value: null as HolidayType, label: 'None (Auto)' },
    ...FESTIVALS.map(f => ({ value: f.id, label: f.name })),
  ];

  const handleSelect = (value: HolidayType) => {
    onSelect(value);
    setGlobalDevMode(value);
    setIsOpen(false);
  };

  return (
    <div className="dev-control-panel">
      <button 
        className="dev-control-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Test Holiday Effects"
      >
        🎨
      </button>
      {isOpen && (
        <div className="dev-control-menu">
          <div className="dev-control-header">Test Holiday Effects</div>
          {options.map((option) => (
            <button
              key={option.value || 'auto'}
              className={`dev-control-option ${selected === option.value ? 'active' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Generic festival effect component
const FestivalEffect = ({ config }: { config: FestivalConfig }) => (
  <div className={config.containerClass}>
    {Array.from({ length: config.particleCount }, (_, i) => (
      <div
        key={i}
        className={config.className}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
          opacity: config.baseOpacity + Math.random() * config.opacityRange,
        }}
      >
        {config.emoji}
      </div>
    ))}
  </div>
);

// Header festival effect
export const HeaderFestival = () => {
  const holiday = useCurrentHoliday();
  
  if (!holiday) return null;

  const festival = FESTIVALS.find(f => f.id === holiday);
  if (!festival) return null;

  const containerClass = `header-${festival.id}-container`;
  const particleClass = `header-${festival.className}`;

  return (
    <div className={containerClass}>
      {Array.from({ length: festival.headerParticleCount }, (_, i) => (
        <div
          key={i}
          className={particleClass}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            opacity: 0.4 + Math.random() * 0.3,
          }}
        >
          {festival.emoji}
        </div>
      ))}
    </div>
  );
};

// Legacy exports for backward compatibility
export const HeaderSnow = () => {
  const holiday = useCurrentHoliday();
  return holiday === 'snow' ? <HeaderFestival /> : null;
};

export const HeaderDiwali = () => {
  const holiday = useCurrentHoliday();
  return holiday === 'diwali' ? <HeaderFestival /> : null;
};

export default HolidayEffects;
