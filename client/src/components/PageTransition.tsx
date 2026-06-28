import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  isActive: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export default function PageTransition({
  children,
  isActive,
  direction = 'up',
  duration = 600,
}: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
    }
  }, [isActive]);

  const getTransformClass = () => {
    if (!isVisible) return '';
    if (direction === 'up') return 'translate-y-0 opacity-100';
    if (direction === 'down') return 'translate-y-0 opacity-100';
    if (direction === 'left') return 'translate-x-0 opacity-100';
    if (direction === 'right') return 'translate-x-0 opacity-100';
    return 'opacity-100';
  };

  const getInitialClass = () => {
    if (direction === 'up') return 'translate-y-20 opacity-0';
    if (direction === 'down') return '-translate-y-20 opacity-0';
    if (direction === 'left') return 'translate-x-20 opacity-0';
    if (direction === 'right') return '-translate-x-20 opacity-0';
    return 'opacity-0';
  };

  return (
    <div
      className={`transition-all ${getInitialClass()} ${
        isVisible ? getTransformClass() : ''
      }`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
