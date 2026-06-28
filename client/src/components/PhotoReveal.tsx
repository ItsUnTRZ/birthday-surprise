import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
}

interface PhotoRevealProps {
  photos: Photo[];
}

export default function PhotoReveal({ photos }: PhotoRevealProps) {
  const [revealed, setRevealed] = useState<boolean[]>(new Array(photos.length).fill(false));
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleReveal = (index: number) => {
    const newRevealed = [...revealed];
    newRevealed[index] = !newRevealed[index];
    setRevealed(newRevealed);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentIndex];
  const isRevealed = revealed[currentIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Photo Container */}
      <div className="relative bg-gradient-to-br from-pink-100 to-white rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-video">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-xl"
          style={{ backgroundImage: `url(${currentPhoto.url})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Reveal State */}
        {!isRevealed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-white">
            <div className="text-center space-y-4">
              <div className="text-6xl animate-bounce">💗</div>
              <h3 className="text-2xl md:text-3xl font-bold text-pink-700 font-playfair">
                {currentPhoto.title}
              </h3>
              <p className="text-pink-600 font-poppins text-sm md:text-base">
                {currentPhoto.description}
              </p>
              <button
                onClick={() => toggleReveal(currentIndex)}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-semibold font-poppins hover:shadow-lg hover:scale-105 transition-all duration-300 glow-pulse"
              >
                ✨ เปิดเผยรูป ✨
              </button>
            </div>
          </div>
        ) : (
          <img
            src={currentPhoto.url}
            alt={currentPhoto.title}
            className="w-full h-full object-cover fade-in-up"
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prevPhoto}
          className="p-3 rounded-full bg-pink-200 hover:bg-pink-300 text-pink-700 transition-colors"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>

        {/* Indicator */}
        <div className="flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setRevealed(new Array(photos.length).fill(false));
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-pink-500 w-8'
                  : 'bg-pink-200 hover:bg-pink-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextPhoto}
          className="p-3 rounded-full bg-pink-200 hover:bg-pink-300 text-pink-700 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
