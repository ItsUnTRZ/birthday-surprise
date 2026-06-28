import { useState, useEffect } from 'react';

interface Card {
  id: number;
  pair: number;
  flipped: boolean;
  matched: boolean;
}

interface HeartMatchGameProps {
  onComplete?: () => void;
}

export default function HeartMatchGame({ onComplete }: HeartMatchGameProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    // Initialize game
    const pairs = [0, 0, 1, 1, 2, 2, 3, 3];
    const shuffled = pairs.sort(() => Math.random() - 0.5);
    const newCards = shuffled.map((pair, index) => ({
      id: index,
      pair,
      flipped: false,
      matched: false,
    }));
    setCards(newCards);
  }, []);

  useEffect(() => {
    if (matched.length === 8) {
      setGameWon(true);
    }
  }, [matched]);

  const handleCardClick = (id: number) => {
    if (flipped.includes(id) || matched.includes(id) || flipped.length === 2) {
      return;
    }

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);

      const [first, second] = newFlipped;
      if (cards[first].pair === cards[second].pair) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 600);
      }
    }
  };

  const handleReset = () => {
    const pairs = [0, 0, 1, 1, 2, 2, 3, 3];
    const shuffled = pairs.sort(() => Math.random() - 0.5);
    const newCards = shuffled.map((pair, index) => ({
      id: index,
      pair,
      flipped: false,
      matched: false,
    }));
    setCards(newCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  const hearts = ['💗', '💕', '💖', '💝'];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-2 sm:space-y-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-playfair text-pink-600">
          เกมจับคู่หัวใจ
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-poppins text-gray-600">
          ชนะเกมนี้เพื่อเปิดเซอร์ไพรส์ต่อไป
        </p>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="text-center">
          <p className="text-sm font-poppins text-gray-600">ครั้งที่พยายาม</p>
          <p className="text-2xl sm:text-3xl font-bold text-pink-600">{moves}</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-poppins text-gray-600">คู่ที่จับได้</p>
          <p className="text-2xl sm:text-3xl font-bold text-pink-600">{matched.length / 2}/4</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square rounded-lg sm:rounded-2xl font-bold text-xl sm:text-3xl md:text-4xl transition-all duration-300 transform ${
              flipped.includes(card.id) || matched.includes(card.id)
                ? 'bg-gradient-to-br from-pink-200 to-pink-100 scale-100'
                : 'bg-gradient-to-br from-pink-400 to-pink-500 hover:scale-110 cursor-pointer'
            } ${matched.includes(card.id) ? 'opacity-50' : ''} shadow-lg`}
            disabled={gameWon}
          >
            {flipped.includes(card.id) || matched.includes(card.id)
              ? hearts[card.pair]
              : '?'}
          </button>
        ))}
      </div>

      {gameWon && (
        <div className="text-center space-y-6 animate-bounce">
          <div className="text-6xl">🎉</div>
          <p className="text-2xl md:text-2xl sm:text-3xl font-bold font-playfair text-pink-600">
            ยอดเยี่ยม! ชนะแล้ว!
          </p>
          <p className="text-sm sm:text-base md:text-lg font-poppins text-gray-600">
            ใช้เวลา {moves} ครั้ง
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-bold font-poppins hover:bg-gray-300 transition-all"
            >
              เล่นใหม่
            </button>
            <button
              onClick={onComplete}
              className="px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins hover:shadow-lg transition-all"
            >
              ต่อไป →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
