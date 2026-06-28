import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Try to autoplay with muted first, then unmute
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay failed, will need user interaction
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Background music - using a free romantic music URL */}
      <audio
        ref={audioRef}
        loop
        crossOrigin="anonymous"
      >
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-xl"
        title={isPlaying ? 'ปิดเพลง' : 'เปิดเพลง'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
}
