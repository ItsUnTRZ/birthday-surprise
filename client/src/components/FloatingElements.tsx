import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  type: 'heart' | 'flower';
  left: number;
  delay: number;
  duration: number;
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const floatingElements: FloatingElement[] = [];

    // Generate floating elements
    for (let i = 0; i < 12; i++) {
      floatingElements.push({
        id: i,
        type: i % 2 === 0 ? 'heart' : 'flower',
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 4,
      });
    }

    setElements(floatingElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute float-animation"
          style={{
            left: `${element.left}%`,
            top: '0',
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            opacity: 0.3,
          }}
        >
          {element.type === 'heart' ? (
            <div className="text-4xl">💗</div>
          ) : (
            <div className="text-4xl">🌸</div>
          )}
        </div>
      ))}
    </div>
  );
}
