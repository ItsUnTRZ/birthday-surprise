import { useState, useEffect } from 'react';
import FloatingElements from '@/components/FloatingElements';
import ConfettiEffect from '@/components/ConfettiEffect';
import PhotoReveal from '@/components/PhotoReveal';
import TypewriterEffect from '@/components/TypewriterEffect';
import PageTransition from '@/components/PageTransition';
import CountdownTimer from '@/components/CountdownTimer';
import ReasonsPage from '@/components/ReasonsPage';
import HeartMatchGame from '@/components/HeartMatchGame';
import MemoryTimeline from '@/components/MemoryTimeline';
import DigitalCard from '@/components/DigitalCard';
import BackgroundMusic from '@/components/BackgroundMusic';

type Page = 'intro' | 'countdown' | 'buildup' | 'reasons' | 'game' | 'timeline' | 'memories' | 'card' | 'finale';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('intro');
  const [showConfetti, setShowConfetti] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollProgress((scrolled / scrollHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const photos = [
    {
      id: 1,
      url: '/manus-storage/couple-garden_92c60c64.jpg',
      title: '🌿 ในสวน',
      description: 'ความสุขของเรา ในธรรมชาติ',
    },
    {
      id: 2,
      url: '/manus-storage/ice-teddy_b77edd92.jpg',
      title: '🧸 วิดีโอคอล',
      description: 'ที่รักกับตุ๊กตาหมีที่รัก',
    },
    {
      id: 3,
      url: '/manus-storage/ice-heart_20939209.jpg',
      title: '💗 ท่าทางรัก',
      description: 'หัวใจของที่รัก',
    },
    {
      id: 4,
      url: '/manus-storage/couple-aurora_312bb16e.jpg',
      title: '🌌 แสงเหนือ',
      description: 'ความสวยงามของเรา ใต้ท้องฟ้า',
    },
  ];

  const handleNextPage = () => {
    const pageSequence: Page[] = ['intro', 'countdown', 'buildup', 'reasons', 'game', 'timeline', 'memories', 'card', 'finale'];
    const currentIndex = pageSequence.indexOf(currentPage);
    if (currentIndex < pageSequence.length - 1) {
      const nextPage = pageSequence[currentIndex + 1];
      setCurrentPage(nextPage);
      setTypewriterComplete(false);
      if (nextPage === 'finale') {
        triggerConfetti();
      }
    }
  };

  const handlePrevPage = () => {
    const pageSequence: Page[] = ['intro', 'countdown', 'buildup', 'reasons', 'game', 'timeline', 'memories', 'card', 'finale'];
    const currentIndex = pageSequence.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(pageSequence[currentIndex - 1]);
      setTypewriterComplete(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
      {/* Background Music */}
      <BackgroundMusic />

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-pink-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Elements Background */}
      <FloatingElements />

      {/* Page 1: Intro */}
      {currentPage === 'intro' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-pink-200 rounded-full blur-3xl opacity-20" />

          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 text-center space-y-8 sm:space-y-12 max-w-2xl w-full">
              <div className="text-6xl sm:text-8xl animate-bounce">💌</div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair text-pink-600 leading-tight">
                  <TypewriterEffect
                    text="ที่รัก..."
                    speed={80}
                    className="text-pink-600"
                  />
                </h1>

                <p className="text-base sm:text-lg md:text-2xl font-poppins text-gray-700 min-h-8 sm:min-h-12">
                  <TypewriterEffect
                    text="มีอะไรอยากบอก"
                    speed={60}
                    onComplete={() => setTypewriterComplete(true)}
                    className="text-gray-700"
                  />
                </p>
              </div>

              {typewriterComplete && (
                <button
                  onClick={handleNextPage}
                  className="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins text-base sm:text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 glow-pulse animate-bounce active:scale-95"
                >
                  ✨ กดเพื่อไปต่อ ✨
                </button>
              )}

              <div className="text-pink-400 text-2xl sm:text-3xl animate-bounce mt-8 sm:mt-12">↓</div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Page 2: Countdown */}
      {currentPage === 'countdown' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 max-w-2xl w-full space-y-8 sm:space-y-12">
              <div className="text-center space-y-2 sm:space-y-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-playfair text-pink-600 leading-tight">
                  นับถอยหลังถึงวันพิเศษ
                </h2>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-pink-200">
                <CountdownTimer />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handlePrevPage}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-full font-bold font-poppins text-sm sm:text-base hover:bg-gray-300 transition-all active:scale-95"
                >
                  ← ย้อนกลับ
                </button>
                <button
                  onClick={handleNextPage}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins text-sm sm:text-base hover:shadow-lg transition-all active:scale-95"
                >
                  ต่อไป →
                </button>
              </div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Page 3: Build-up */}
      {currentPage === 'buildup' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-3xl w-full">
              <div className="text-5xl sm:text-7xl">💕</div>

              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-playfair text-pink-600 leading-tight">
                  ความทรงจำที่หวงแหน่
                </h2>

                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-poppins text-gray-700 leading-relaxed">
                  <p className="fade-in-up" style={{ animationDelay: '0s' }}>
                    <TypewriterEffect
                      text="วันที่เรารู้จักกัน ชีวิตของฉันเปลี่ยนไป..."
                      speed={40}
                      className="text-gray-700"
                    />
                  </p>

                  <p className="fade-in-up" style={{ animationDelay: '2s' }}>
                    เธอคือแสงสว่างในวันที่มืดมัว
                  </p>

                  <p className="fade-in-up" style={{ animationDelay: '3s' }}>
                    เธอคือเหตุผลของยิ้มที่บนหน้าของฉัน
                  </p>

                  <p className="fade-in-up" style={{ animationDelay: '4s' }}>
                    และวันนี้... คือวันพิเศษของคนพิเศษ
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-pink-200 fade-in-up" style={{ animationDelay: '5s' }}>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold font-playfair text-pink-700">
                    9 กรกฎาคม ✨
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
                  <button
                    onClick={handlePrevPage}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-full font-bold font-poppins text-sm sm:text-base hover:bg-gray-300 transition-all active:scale-95"
                  >
                    ← ย้อนกลับ
                  </button>
                  <button
                    onClick={handleNextPage}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins text-sm sm:text-base hover:shadow-lg transition-all fade-in-up active:scale-95"
                    style={{ animationDelay: '6s' }}
                  >
                    ต่อไป →
                  </button>
                </div>
              </div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Page 4: Reasons */}
      {currentPage === 'reasons' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 max-w-4xl w-full">
              <ReasonsPage onComplete={handleNextPage} />
              <div className="flex gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
                <button
                  onClick={handlePrevPage}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-full font-bold font-poppins text-sm sm:text-base hover:bg-gray-300 transition-all active:scale-95"
                >
                  ← ย้อนกลับ
                </button>
              </div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Page 5: Game */}
      {currentPage === 'game' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 max-w-2xl w-full">
              <HeartMatchGame onComplete={handleNextPage} />
              <div className="flex gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
                <button
                  onClick={handlePrevPage}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-full font-bold font-poppins text-sm sm:text-base hover:bg-gray-300 transition-all active:scale-95"
                >
                  ← ย้อนกลับ
                </button>
              </div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Page 6: Timeline */}
      {currentPage === 'timeline' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 max-w-4xl w-full">
              <MemoryTimeline />
              <div className="flex gap-4 justify-center pt-8">
                <button
                  onClick={handlePrevPage}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-bold font-poppins hover:bg-gray-300 transition-all"
                >
                  ← ย้อนกลับ
                </button>
                <button
                  onClick={handleNextPage}
                  className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins hover:shadow-lg transition-all"
                >
                  ต่อไป →
                </button>
              </div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Page 7: Memories */}
      {currentPage === 'memories' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 max-w-4xl w-full space-y-8 sm:space-y-12">
              <div className="text-center space-y-2 sm:space-y-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-playfair text-pink-600 leading-tight">
                  ภาพที่เต็มไปด้วยรัก
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-poppins">
                  แต่ละภาพคือเรื่องราวของความสุข
                </p>
              </div>

              <div className="fade-in-up">
                <PhotoReveal photos={photos} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handlePrevPage}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-full font-bold font-poppins text-sm sm:text-base hover:bg-gray-300 transition-all active:scale-95"
                >
                  ← ย้อนกลับ
                </button>
                <button
                  onClick={handleNextPage}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins text-sm sm:text-base hover:shadow-lg transition-all active:scale-95"
                >
                  ต่อไป →
                </button>
              </div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Page 8: Digital Card */}
      {currentPage === 'card' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 max-w-4xl w-full">
              <DigitalCard />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
                <button
                  onClick={handlePrevPage}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-700 rounded-full font-bold font-poppins text-sm sm:text-base hover:bg-gray-300 transition-all active:scale-95"
                >
                  ← ย้อนกลับ
                </button>
                <button
                  onClick={handleNextPage}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins text-sm sm:text-base hover:shadow-lg transition-all active:scale-95"
                >
                  ต่อไป →
                </button>
              </div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Page 9: Finale */}
      {currentPage === 'finale' && (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
          <PageTransition isActive={true} direction="up">
            <div className="relative z-10 text-center space-y-8 sm:space-y-12 max-w-2xl w-full">
              {/* Confetti Effect */}
              {showConfetti && <ConfettiEffect />}

              {/* Finale Content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex justify-center gap-2 sm:gap-3 text-4xl sm:text-5xl md:text-6xl animate-bounce">
                  <span>🎉</span>
                  <span>💗</span>
                  <span>🎂</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-playfair bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 bg-clip-text text-transparent leading-tight">
                  สุขสันต์วันเกิด
                </h1>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair text-pink-600">
                  ที่รัก 💕
                </h2>

                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-pink-200 space-y-4 sm:space-y-6 fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold font-playfair text-pink-700">
                    ข้อความจากอั๋น
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-poppins text-gray-700 leading-relaxed">
                    ที่รัก วันนี้คือวันที่เราฉลองความพิเศษของเธอ เธอคือแสงสว่างในชีวิตของฉัน และทุกวันกับเธอคือของขวัญ
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-poppins text-pink-600 font-semibold">
                    ขอให้วันนี้เต็มไปด้วยความสุข ความรัก และความหัวเราะ 💕
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-poppins text-gray-600 italic">
                    — อั๋น 🎂✨
                  </p>
                </div>

                <div className="flex justify-center gap-1 sm:gap-2 text-3xl sm:text-4xl md:text-5xl fade-in-up" style={{ animationDelay: '1s' }}>
                  <span>💗</span>
                  <span>🎉</span>
                  <span>🌸</span>
                  <span>✨</span>
                  <span>💗</span>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-bold font-playfair text-pink-600 fade-in-up" style={{ animationDelay: '1.5s' }}>
                  รักเธอ 💕
                </p>

                <button
                  onClick={() => setCurrentPage('intro')}
                  className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins text-base sm:text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
                >
                  🔄 เริ่มต้นใหม่
                </button>
              </div>
            </div>
          </PageTransition>
        </section>
      )}

      {/* Footer */}
      <footer className="relative py-12 px-4 text-center border-t border-pink-100">
        <p className="font-poppins text-gray-500 text-sm">
          Made with 💗 by Aun for Ice
        </p>
        <p className="font-poppins text-pink-400 text-xs mt-2">
          Happy Birthday! 🎉✨
        </p>
      </footer>
    </div>
  );
}
