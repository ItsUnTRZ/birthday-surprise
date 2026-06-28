import { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function DigitalCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSaveCard = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
      });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'birthday-card-ice.png';
      link.click();
    } catch (error) {
      console.error('Error saving card:', error);
      alert('ไม่สามารถบันทึกการ์ดได้ กรุณาลองใหม่');
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-pink-600">
          การ์ดอวยพรดิจิทัล
        </h2>
        <p className="text-lg font-poppins text-gray-600">
          บันทึกการ์ดนี้ไว้เก็บตลอดไป
        </p>
      </div>

      {/* Digital Card */}
      <div className="flex justify-center">
        <div
          ref={cardRef}
          className="w-full max-w-md aspect-video bg-gradient-to-br from-pink-100 via-white to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-200 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-4xl opacity-30">💗</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-30">🌸</div>
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 text-5xl opacity-20">✨</div>

          {/* Card content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center space-y-6">
            <div className="text-6xl">🎂</div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-pink-600">
                สุขสันต์วันเกิด
              </h1>
              <h2 className="text-3xl md:text-4xl font-playfair text-pink-500">
                ที่รัก 💕
              </h2>
            </div>

            <div className="space-y-2 text-sm md:text-base font-poppins text-gray-700">
              <p>9 กรกฎาคม</p>
              <p className="italic">
                "ทุกวันที่มีเธอคือของขวัญ"
              </p>
            </div>

            <div className="pt-4 border-t-2 border-pink-300 w-full">
              <p className="text-sm font-poppins text-pink-600">
                ด้วยรักจากใจ
              </p>
              <p className="text-lg font-bold font-playfair text-pink-700">
                อั๋น ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-center">
        <button
          onClick={handleSaveCard}
          className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold font-poppins text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2"
        >
          📥 บันทึกการ์ด
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm font-poppins text-gray-500">
          คลิกปุ่มเพื่อบันทึกการ์ดเป็นรูปภาพ
        </p>
      </div>
    </div>
  );
}
