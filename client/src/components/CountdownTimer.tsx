import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isBirthday: boolean;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthday: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Birthday is July 9
      let birthdayDate = new Date(currentYear, 6, 9); // Month is 0-indexed, so 6 = July
      
      // If birthday has passed this year, calculate for next year
      if (now > birthdayDate) {
        birthdayDate = new Date(currentYear + 1, 6, 9);
      }

      // Check if today is birthday
      const isBday = now.getDate() === 9 && now.getMonth() === 6;

      const difference = birthdayDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isBirthday: isBday,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isBirthday: true,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isBirthday) {
    return (
      <div className="text-center space-y-4">
        <div className="text-6xl animate-bounce">🎂</div>
        <p className="text-3xl md:text-4xl font-bold font-playfair text-pink-600">
          วันเกิดของที่รักแล้ว! 🎉
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-4">
      <p className="text-lg md:text-xl font-poppins text-gray-600">
        เหลือเวลาถึงวันเกิด
      </p>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-4 border-2 border-pink-200">
          <div className="text-2xl md:text-4xl font-bold text-pink-600">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm font-poppins text-pink-500 mt-1">
            วัน
          </div>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-4 border-2 border-pink-200">
          <div className="text-2xl md:text-4xl font-bold text-pink-600">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm font-poppins text-pink-500 mt-1">
            ชั่วโมง
          </div>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-4 border-2 border-pink-200">
          <div className="text-2xl md:text-4xl font-bold text-pink-600">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm font-poppins text-pink-500 mt-1">
            นาที
          </div>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-4 border-2 border-pink-200">
          <div className="text-2xl md:text-4xl font-bold text-pink-600">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm font-poppins text-pink-500 mt-1">
            วินาที
          </div>
        </div>
      </div>
    </div>
  );
}
