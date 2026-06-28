import { useState, useEffect } from 'react';

const reasons = [
  '💗 รอยยิ้มของเธอทำให้วันของฉันสดใส',
  '💕 เธอเข้าใจฉันโดยไม่ต้องพูด',
  '🌟 ทุกวันที่มีเธอคือวันที่ดีที่สุด',
  '✨ เธอทำให้ฉันอยากเป็นคนที่ดีขึ้น',
  '💝 ฉันโชคดีที่สุดที่มีเธอ',
  '🎀 เธอคือแสงสว่างในวันที่มืดมัว',
  '🌹 ทุกช่วงเวลากับเธอคือของขวัญ',
  '💖 เธอทำให้ฉันรู้ว่าความรักคืออะไร',
  '🎵 เสียงหัวเราะของเธอคือเพลงที่ฉันชอบ',
  '👑 เธอคือสิ่งที่ดีที่สุดที่เกิดขึ้นกับฉัน',
];

interface ReasonsPageProps {
  onComplete?: () => void;
}

export default function ReasonsPage({ onComplete }: ReasonsPageProps) {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);

  useEffect(() => {
    reasons.forEach((_, index) => {
      setTimeout(() => {
        setVisibleReasons((prev) => [...prev, index]);
      }, index * 300);
    });
  }, []);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-2 sm:space-y-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-playfair text-pink-600 leading-tight">
          เหตุผลที่รักเธอ
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-poppins text-gray-600">
          ไม่ได้มีแค่หนึ่งเหตุผล... มีมากมายเลย
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ${
              visibleReasons.includes(index)
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-pink-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-base md:text-lg font-poppins text-gray-700 leading-relaxed">
                {reason}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleReasons.length === reasons.length && onComplete && (
        <div className="text-center pt-6 sm:pt-8">
          <button
            onClick={onComplete}
            className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins text-base sm:text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 glow-pulse animate-bounce active:scale-95"
          >
            ❤️ ต่อไป ❤️
          </button>
        </div>
      )}
    </div>
  );
}
