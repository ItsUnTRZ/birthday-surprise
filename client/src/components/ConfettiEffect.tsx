import { useEffect } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  color: string;
}

export default function ConfettiEffect() {
  useEffect(() => {
    const colors = ['#FFB6D9', '#FF8FB3', '#FAFAF8', '#F5D5A8', '#FFB6D9'];
    const pieces: ConfettiPiece[] = [];

    // Generate confetti pieces
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Create confetti elements
    pieces.forEach((piece) => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.cssText = `
        left: ${piece.left}%;
        top: -10px;
        width: 10px;
        height: 10px;
        background-color: ${piece.color};
        border-radius: 50%;
        animation: confetti-fall ${piece.duration}s linear ${piece.delay}s forwards;
        opacity: 0.8;
      `;
      document.body.appendChild(confetti);

      // Remove element after animation
      setTimeout(() => {
        confetti.remove();
      }, (piece.delay + piece.duration) * 1000);
    });
  }, []);

  return null;
}
