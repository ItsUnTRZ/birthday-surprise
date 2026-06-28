import { useState, useEffect } from 'react';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  emoji: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: '2023',
    title: 'วันที่เจอกันครั้งแรก',
    description: 'ชีวิตของฉันเปลี่ยนไปตั้งแต่วันนั้น',
    emoji: '💫',
  },
  {
    id: 2,
    date: '2024',
    title: 'วันแรกที่คบกัน',
    description: 'เริ่มต้นของเรื่องราวรักที่สวยงาม',
    emoji: '💕',
  },
  {
    id: 3,
    date: '2024',
    title: 'ความทรงจำดีๆ ร่วมกัน',
    description: 'ทุกช่วงเวลากับเธอคือสิ่งที่ล้ำค่า',
    emoji: '🌟',
  },
  {
    id: 4,
    date: '2025',
    title: 'วันนี้ - วันเกิดของเธอ',
    description: 'ฉันอยากฉลองความพิเศษของเธอ',
    emoji: '🎂',
  },
];

export default function MemoryTimeline() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);

  useEffect(() => {
    timelineEvents.forEach((_, index) => {
      setTimeout(() => {
        setVisibleEvents((prev) => [...prev, index]);
      }, index * 400);
    });
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-pink-600">
          ความทรงจำของเรา
        </h2>
        <p className="text-lg font-poppins text-gray-600">
          เส้นทางของความรักที่สวยงาม
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-pink-200" />

        {/* Timeline events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`transform transition-all duration-500 ${
                visibleEvents.includes(index)
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              <div
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{event.emoji}</span>
                      <span className="text-sm font-bold font-poppins text-pink-600 bg-pink-200 px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-playfair text-pink-700 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 font-poppins">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-8">
        <p className="text-lg md:text-xl font-poppins text-gray-600 italic">
          และยังมีอีกมากมายที่รอเราข้างหน้า... 💕
        </p>
      </div>
    </div>
  );
}
