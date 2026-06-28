<!DOCTYPE html><html class="light" lang="th" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Wish Wall &amp; Future Plans</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&amp;family=Plus+Jakarta+Sans:wght@400;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<!-- Tailwind Configuration -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-highest": "#f3dce7",
                    "surface-variant": "#f3dce7",
                    "on-tertiary-fixed": "#281800",
                    "on-surface-variant": "#504349",
                    "inverse-on-surface": "#ffecf4",
                    "on-background": "#24181f",
                    "primary-fixed-dim": "#fab1d4",
                    "outline-variant": "#d4c2c8",
                    "on-surface": "#24181f",
                    "surface-container-low": "#fff0f5",
                    "surface-container-high": "#f9e2ec",
                    "secondary-fixed": "#ffd9e2",
                    "background": "#fff8f9",
                    "surface-dim": "#ebd4de",
                    "tertiary-fixed": "#fedeb0",
                    "surface-container-lowest": "#ffffff",
                    "on-secondary-container": "#792345",
                    "tertiary-container": "#e6c79b",
                    "primary-fixed": "#ffd8e8",
                    "on-tertiary-fixed-variant": "#584321",
                    "on-secondary-fixed": "#3e001c",
                    "on-secondary": "#ffffff",
                    "outline": "#827379",
                    "on-error": "#ffffff",
                    "surface-container": "#ffe8f2",
                    "secondary-fixed-dim": "#ffb1c7",
                    "primary": "#864c6a",
                    "secondary": "#9b3e60",
                    "on-primary-fixed-variant": "#6b3552",
                    "on-tertiary": "#ffffff",
                    "on-error-container": "#93000a",
                    "inverse-primary": "#fab1d4",
                    "surface": "#fff8f9",
                    "on-primary-fixed": "#370925",
                    "surface-tint": "#864c6a",
                    "on-primary-container": "#7c4361",
                    "tertiary": "#725b37",
                    "tertiary-fixed-dim": "#e1c296",
                    "on-tertiary-container": "#69522f",
                    "error": "#ba1a1a",
                    "on-secondary-fixed-variant": "#7d2648",
                    "surface-bright": "#fff8f9",
                    "on-primary": "#ffffff",
                    "error-container": "#ffdad6",
                    "secondary-container": "#fe8eb2",
                    "inverse-surface": "#3a2c34",
                    "primary-container": "#ffb6d9"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "8px",
                    "lg": "24px",
                    "xs": "4px",
                    "xl": "32px",
                    "md": "16px",
                    "gutter": "16px",
                    "section-gap-mobile": "48px",
                    "section-gap-desktop": "80px"
            },
            "fontFamily": {
                    "body-base": ["Plus Jakarta Sans"],
                    "headline-md": ["Playfair Display"],
                    "label-caps": ["Plus Jakarta Sans"],
                    "display-lg-mobile": ["Playfair Display"],
                    "display-lg": ["Playfair Display"],
                    "body-bold": ["Plus Jakarta Sans"]
            },
            "fontSize": {
                    "body-base": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "headline-md": ["28px", {"lineHeight": "36px", "fontWeight": "700"}],
                    "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "display-lg-mobile": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "body-bold": ["16px", {"lineHeight": "24px", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .glass-card {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1.5px solid rgba(252, 238, 244, 0.8);
        }

        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        .floating-note {
            animation: float 6s ease-in-out infinite;
        }

        .floating-note:nth-child(2n) {
            animation-delay: -2s;
        }

        .floating-note:nth-child(3n) {
            animation-delay: -4s;
        }

        .progress-bar {
            height: 4px;
            background: linear-gradient(90deg, #864c6a, #9b3e60);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            transition: width 0.2s ease-out;
        }

        .shining-node {
            box-shadow: 0 0 15px rgba(255, 182, 217, 0.6);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-base overflow-x-hidden min-h-screen pb-24">
<!-- Scroll Progress Bar -->
<div class="progress-bar" id="scrollProgress" style="width: 0%"></div>
<!-- Background Shader -->
<div class="fixed inset-0 -z-10 opacity-30 pointer-events-none">
</div>
<!-- Top AppBar (from JSON) -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-gutter py-md bg-surface/80 backdrop-blur-md shadow-[0_4px_20px_rgba(255,182,217,0.2)]">
<div class="flex items-center justify-center w-full relative">
<span class="material-symbols-outlined absolute left-0 text-primary transition-all duration-500 ease-in-out hover:scale-110">card_giftcard</span>
<h1 class="font-headline-md text-headline-md-mobile text-primary tracking-tight">สำหรับคุณ</h1>
<span class="material-symbols-outlined absolute right-0 text-primary transition-all duration-500 ease-in-out hover:scale-110">celebration</span>
</div>
</nav>
<main class="max-w-4xl mx-auto px-gutter pt-32 space-y-section-gap-mobile md:space-y-section-gap-desktop">
<!-- Hero: Wish Wall -->
<section class="text-center relative">
<div class="mb-12">
<h2 class="font-display-lg-mobile md:font-display-lg text-primary mb-4">Wish Wall</h2>
<p class="text-on-surface-variant max-w-lg mx-auto">กำแพงความปรารถนา... ทุกความรู้สึกที่อยากบอกคุณ ถูกรวบรวมไว้ที่นี่</p>
</div>
<!-- Virtual Notes Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative px-4">
<!-- Note 1 -->
<div class="floating-note glass-card p-8 rounded-[32px] shadow-[0_4px_20px_rgba(255,182,217,0.2)] rotate-[-1deg]">
<div class="text-primary-container mb-4">
<span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">favorite</span>
</div>
<p class="font-body-base italic text-on-surface-variant">"ขอให้ปีนี้เป็นปีที่เธอมีความสุขที่สุด ขอบคุณที่มาเป็นความสดใสให้กันในทุกๆ วันนะ"</p>
<div class="mt-6 text-right font-label-caps text-secondary">From Me, With Love</div>
</div>
<!-- Note 2 -->
<div class="floating-note glass-card p-8 rounded-[32px] shadow-[0_4px_20px_rgba(255,182,217,0.2)] rotate-[2deg] md:mt-12">
<div class="text-tertiary mb-4">
<span class="material-symbols-outlined text-4xl">star</span>
</div>
<p class="font-body-base italic text-on-surface-variant">"ภูมิใจในตัวเธอเสมอ ไม่ว่าเธอจะทำอะไร อยากให้รู้ว่ามีเราคอยซัพพอร์ตอยู่ข้างๆ ตลอดไป"</p>
<div class="mt-6 text-right font-label-caps text-secondary">Always Yours</div>
</div>
<!-- Note 3 -->
<div class="floating-note glass-card p-8 rounded-[32px] shadow-[0_4px_20px_rgba(255,182,217,0.2)] rotate-[-2deg]">
<div class="text-secondary-container mb-4">
<span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
</div>
<p class="font-body-base italic text-on-surface-variant">"Happy Birthday! ขอให้รอยยิ้มของเธอไม่เคยจางหายไป และขอให้ได้เจอแต่เรื่องราวดีๆ นะ"</p>
<div class="mt-6 text-right font-label-caps text-secondary">Heartfelt Wishes</div>
</div>
<!-- Note 4 -->
<div class="floating-note glass-card p-8 rounded-[32px] shadow-[0_4px_20px_rgba(255,182,217,0.2)] rotate-[1deg] md:mt-[-20px]">
<div class="text-primary mb-4">
<span class="material-symbols-outlined text-4xl">celebration</span>
</div>
<p class="font-body-base italic text-on-surface-variant">"อยากเติบโตไปพร้อมกับเธอแบบนี้ในทุกๆ ปีเลยนะ สุขสันต์วันเกิดคนเก่งของฉัน"</p>
<div class="mt-6 text-right font-label-caps text-secondary">Infinite Love</div>
</div>
</div>
</section>
<!-- Section 1: Future Plans (Bucket List) -->
<section class="space-y-12 pb-12">
<div class="text-center">
<h3 class="font-headline-md text-primary mb-2">สิ่งที่อยากทำกับคุณในปีนี้</h3>
<div class="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
</div>
<div class="space-y-6 max-w-2xl mx-auto">
<!-- Item 1 -->
<div class="flex items-center p-6 bg-surface-container-low rounded-2xl transition-transform hover:scale-[1.02] duration-300 group">
<div class="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<span class="material-symbols-outlined text-3xl">flight_takeoff</span>
</div>
<div class="ml-6 flex-grow">
<h4 class="font-body-bold text-lg text-on-surface">ทริปไปเที่ยวที่ที่ยังไม่เคยไป</h4>
<p class="text-on-surface-variant text-sm">วางแผนเดินทางไปเที่ยวและสำรวจสถานที่ใหม่ๆ ที่เรายังไม่เคยไปร่วมกัน</p>
</div>
<div class="shining-node w-3 h-3 bg-secondary rounded-full"></div>
</div>
<!-- Item 2 -->
<div class="flex items-center p-6 bg-surface-container-low rounded-2xl transition-transform hover:scale-[1.02] duration-300 group">
<div class="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<span class="material-symbols-outlined text-3xl">restaurant</span>
</div>
<div class="ml-6 flex-grow">
<h4 class="font-body-bold text-lg text-on-surface">กินอาหารอร่อยๆที่ยังไม่เคยกิน</h4>
<p class="text-on-surface-variant text-sm">หาร้านอร่อยๆ และเมนูพิเศษใหม่ๆ ที่เราสองคนยังไม่เคยลิ้มลอง</p>
</div>
<div class="shining-node w-3 h-3 bg-secondary rounded-full"></div>
</div>
<!-- Item 3 -->
<div class="flex items-center p-6 bg-surface-container-low rounded-2xl transition-transform hover:scale-[1.02] duration-300 group">
<div class="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<span class="material-symbols-outlined text-3xl">movie</span>
</div>
<div class="ml-6 flex-grow">
<h4 class="font-body-bold text-lg text-on-surface">ใช้เวลาทำสิ่งใหม่ๆด้วยกัน</h4>
<p class="text-on-surface-variant text-sm">ลองทำกิจกรรมใหม่ๆ หรือสิ่งที่เรายังไม่มีโอกาสได้ลองทำด้วยกัน</p>
</div>
<div class="shining-node w-3 h-3 bg-secondary rounded-full"></div>
</div>
<!-- Item 4 -->
<div class="flex items-center p-6 bg-surface-container-low rounded-2xl transition-transform hover:scale-[1.02] duration-300 group">
<div class="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<span class="material-symbols-outlined text-3xl">camera_outdoor</span>
</div>
<div class="ml-6 flex-grow">
<h4 class="font-body-bold text-lg text-on-surface">ถ่ายรูปเก็บความทรงจำ</h4>
<p class="text-on-surface-variant text-sm">ถ่ายภาพบันทึกเรื่องราวและรอยยิ้มในทุกๆ ทริปและกิจกรรมที่เราได้ไปทำร่วมกัน</p>
</div>
<div class="shining-node w-3 h-3 bg-secondary rounded-full"></div>
</div>
</div>
</section>
<!-- Closing Message -->
<section class="text-center py-20 space-y-6">
<div class="inline-block p-4 bg-primary-container/20 rounded-full mb-4">
<span class="material-symbols-outlined text-primary text-5xl animate-pulse">volunteer_activism</span>
</div>
<h2 class="font-display-lg-mobile text-secondary">คุณคือของขวัญที่ดีที่สุด</h2>
<p class="text-on-surface-variant font-body-base leading-relaxed max-w-md mx-auto">
                ขอบคุณที่ร่วมเดินทางมาด้วยกัน หวังว่า Wish Wall นี้จะทำให้คุณยิ้มได้ และเราจะมาทำให้ Future Plans เหล่านี้เป็นจริงด้วยกันนะ
            </p>
<button class="mt-8 px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-body-bold shadow-lg hover:scale-110 transition-transform active:scale-95 duration-300">
                ส่งความรักกลับไป
            </button>
</section>
</main>
<!-- Bottom Navigation Bar (from JSON) -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-safe-bottom h-20 bg-surface-container-low/90 backdrop-blur-lg shadow-[0_-4px_20px_rgba(255,182,217,0.15)] rounded-t-xl"><!-- Home -->
<button class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors"><span class="material-symbols-outlined">card_giftcard</span></button>
<!-- Gift/Memories -->
<button class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors"><span class="material-symbols-outlined">auto_stories</span></button>
<!-- Stories -->
<button class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors"><span class="material-symbols-outlined">image</span></button>
<!-- Active: Wish Wall (Spark Icon) -->
<button class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 scale-110 shadow-md transition-all duration-500">
<span class="material-symbols-outlined">auto_awesome</span>
</button></nav>
<script>
        // Progress Bar Logic
        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("scrollProgress").style.width = scrolled + "%";
        };

        // Micro-interactions for Bucket List items
        document.querySelectorAll('.group').forEach(item => {
            item.addEventListener('mouseenter', () => {
                const node = item.querySelector('.shining-node');
                node.style.boxShadow = "0 0 25px rgba(155, 62, 96, 0.8)";
            });
            item.addEventListener('mouseleave', () => {
                const node = item.querySelector('.shining-node');
                node.style.boxShadow = "0 0 15px rgba(255, 182, 217, 0.6)";
            });
        });
    </script>
</body></html>