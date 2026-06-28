<!DOCTYPE html><html class="scroll-smooth" lang="th" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>เรื่องราวของเรา | Ethereal Bloom</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&amp;family=Plus+Jakarta+Sans:wght@400;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-surface-variant": "#504349",
                    "surface-container-high": "#f9e2ec",
                    "background": "#fff8f9",
                    "on-primary": "#ffffff",
                    "inverse-surface": "#3a2c34",
                    "on-tertiary-container": "#69522f",
                    "outline": "#827379",
                    "inverse-primary": "#fab1d4",
                    "secondary-container": "#fe8eb2",
                    "on-primary-fixed-variant": "#6b3552",
                    "tertiary-container": "#e6c79b",
                    "on-tertiary": "#ffffff",
                    "surface-container-lowest": "#ffffff",
                    "secondary-fixed": "#ffd9e2",
                    "on-primary-container": "#7c4361",
                    "surface": "#fff8f9",
                    "on-error-container": "#93000a",
                    "error": "#ba1a1a",
                    "surface-tint": "#864c6a",
                    "primary-fixed": "#ffd8e8",
                    "on-secondary": "#ffffff",
                    "on-tertiary-fixed": "#281800",
                    "primary-fixed-dim": "#fab1d4",
                    "surface-bright": "#fff8f9",
                    "error-container": "#ffdad6",
                    "surface-container-low": "#fff0f5",
                    "surface-container": "#ffe8f2",
                    "surface-container-highest": "#f3dce7",
                    "on-secondary-fixed-variant": "#7d2648",
                    "on-background": "#24181f",
                    "primary-container": "#ffb6d9",
                    "inverse-on-surface": "#ffecf4",
                    "tertiary-fixed": "#fedeb0",
                    "outline-variant": "#d4c2c8",
                    "on-secondary-fixed": "#3e001c",
                    "on-tertiary-fixed-variant": "#584321",
                    "on-primary-fixed": "#370925",
                    "on-secondary-container": "#792345",
                    "surface-variant": "#f3dce7",
                    "tertiary-fixed-dim": "#e1c296",
                    "tertiary": "#725b37",
                    "surface-dim": "#ebd4de",
                    "on-surface": "#24181f",
                    "on-error": "#ffffff",
                    "secondary-fixed-dim": "#ffb1c7",
                    "primary": "#864c6a",
                    "secondary": "#9b3e60"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "xl": "32px",
                    "section-gap-mobile": "48px",
                    "md": "16px",
                    "gutter": "16px",
                    "lg": "24px",
                    "sm": "8px",
                    "section-gap-desktop": "80px",
                    "xs": "4px"
            },
            "fontFamily": {
                    "headline-md": ["Playfair Display"],
                    "display-lg": ["Playfair Display"],
                    "label-caps": ["Plus Jakarta Sans"],
                    "body-bold": ["Plus Jakarta Sans"],
                    "body-base": ["Plus Jakarta Sans"],
                    "display-lg-mobile": ["Playfair Display"]
            },
            "fontSize": {
                    "headline-md": ["28px", {"lineHeight": "36px", "fontWeight": "700"}],
                    "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "body-bold": ["16px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "body-base": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "display-lg-mobile": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        .timeline-gradient-line {
            background: linear-gradient(to bottom, transparent, var(--tw-color-primary-container), var(--tw-color-secondary-container), transparent);
            width: 2px;
        }

        .glass-card {
            background: rgba(255, 248, 249, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(252, 238, 244, 1);
        }

        .shimmer {
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
            background-size: 200% 100%;
            animation: shimmer 3s infinite linear;
        }

        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }

        .floating-heart {
            animation: float 6s ease-in-out infinite;
            position: absolute;
            z-index: 0;
            pointer-events: none;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
            50% { transform: translateY(-20px) rotate(15deg); opacity: 0.4; }
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-background text-on-surface font-body-base min-h-screen overflow-x-hidden">
<!-- Progress Bar -->
<div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] transition-all duration-300" id="scroll-progress" style="width: 0%"></div>
<!-- Top App Bar -->
<header class="fixed top-0 w-full z-50 flex items-center px-gutter py-md bg-surface/80 backdrop-blur-md shadow-[0_4px_20px_rgba(255,182,217,0.2)]"><div class="w-full max-w-4xl mx-auto flex items-center justify-between px-4"><span class="material-symbols-outlined text-primary">card_giftcard</span><h1 class="font-headline-md text-headline-md text-primary text-center flex-1">สำหรับคุณ</h1><span class="material-symbols-outlined text-primary">celebration</span></div></header>
<!-- Background Elements -->
<div class="fixed inset-0 pointer-events-none z-0">
<span class="material-symbols-outlined floating-heart text-primary-container" style="top: 15%; left: 10%; font-size: 40px; animation-delay: 0s;">favorite</span>
<span class="material-symbols-outlined floating-heart text-secondary-container" style="top: 40%; right: 5%; font-size: 60px; animation-delay: 2s;">favorite</span>
<span class="material-symbols-outlined floating-heart text-tertiary-container" style="top: 70%; left: 8%; font-size: 32px; animation-delay: 4s;">favorite</span>
<span class="material-symbols-outlined floating-heart text-primary-container" style="bottom: 10%; right: 15%; font-size: 50px; animation-delay: 1s;">favorite</span>
</div>
<!-- Main Content -->
<main class="relative z-10 pt-24 pb-32 px-gutter max-w-4xl mx-auto">
<!-- Hero Section -->
<section class="text-center mb-16 px-4">
<h2 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-4">การเดินทางที่สวยงามของเรา</h2>
<p class="text-body-base text-on-surface-variant max-w-lg mx-auto">การย้อนรำลึกถึงความทรงจำที่แสนหวาน เฉลิมฉลองทุกจังหวะหัวใจ ทุกเสียงหัวเราะ และทุกเหตุการณ์สำคัญที่นำพาเรามาถึงจุดนี้</p>
</section>
<!-- Timeline -->
<div class="relative">
<!-- Central Line -->
<div class="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary-container via-secondary-container to-surface-variant"></div>
<!-- Milestone 1 -->
<div class="relative flex flex-col md:flex-row items-center justify-between mb-24 w-full">
<div class="w-full md:w-[45%] order-2 md:order-1">
<div class="glass-card p-6 rounded-[24px] shadow-[0_4px_20px_rgba(255,182,217,0.2)] hover:scale-[1.02] transition-transform duration-500 transition-all duration-1000 ease-out opacity-100 translate-y-0">
<span class="font-label-caps text-label-caps text-secondary mb-2 block uppercase tracking-widest">12 ตุลาคม 2021</span>
<h3 class="font-headline-md text-headline-md text-primary mb-3">จุดเริ่มต้นของเรา</h3>
<div class="aspect-video w-full rounded-xl overflow-hidden mb-4 shadow-sm">
<img class="w-full h-full object-cover" data-alt="ภาพถ่ายคนสองคนกำลังจิบกาแฟในคาเฟ่สไตล์ปารีสที่อาบไปด้วยแสงแดดยามเช้า" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwsc_L6Quxc1tpc4cuLXPiyjABgyJyCyLRVFefc7bas3q2X0F81qQO66-U-wZYdEgZjatoexN__PPzGjVrvltcOin_nhQPI54aTki2Dc70T_7-NsoN23dqbf-ltHM9uMz9f0ywp71QLTwKs2TfeAjx4mvljDvJrwXCx733ruJO5g2sddC6S1W8lf4LW4knR4eBCkJ7mLiylNMihLwaQybqgFu86F9gTHlfWtRaZsadWX1ubhrSGSoEAGq8aih4cJEGSluV21jtmNE">
</div>
<p class="text-body-base text-on-surface-variant">บ่ายวันที่ฝนตกที่เราพบกันครั้งแรกในคาเฟ่เล็กๆ ที่แสนอบอุ่น ฉันยังจำได้ดีว่าคุณใส่ชุดอะไร และรอยยิ้มของคุณทำให้ทั้งห้องสว่างไสวแค่ไหน</p>
</div>
</div>
<!-- Node -->
<div class="z-20 w-6 h-6 rounded-full bg-on-primary border-4 border-primary shadow-[0_0_15px_rgba(134,76,106,0.5)] my-6 md:my-0"></div>
<div class="hidden md:block w-[45%] order-3"></div>
</div>
<!-- Milestone 2 -->
<div class="relative flex flex-col md:flex-row items-center justify-between mb-24 w-full">
<div class="hidden md:block w-[45%]"></div>
<!-- Node -->
<div class="z-20 w-6 h-6 rounded-full bg-on-primary border-4 border-secondary shadow-[0_0_15px_rgba(155,62,96,0.5)] my-6 md:my-0"></div>
<div class="w-full md:w-[45%]">
<div class="glass-card p-6 rounded-[24px] shadow-[0_4px_20px_rgba(255,182,217,0.2)] hover:scale-[1.02] transition-transform duration-500 transition-all duration-1000 ease-out opacity-100 translate-y-0">
<span class="font-label-caps text-label-caps text-secondary mb-2 block uppercase tracking-widest">24 ธันวาคม 2021</span>
<h3 class="font-headline-md text-headline-md text-primary mb-3">หิมะแรกที่โปรยปราย</h3>
<div class="aspect-square w-full rounded-xl overflow-hidden mb-4 shadow-sm">
<img class="w-full h-full object-cover" data-alt="ภาพวาดดิจิทัลของเงาคนสองคนเดินผ่านดินแดนหิมะในตอนกลางคืน" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI9v9T4YHHKLa2bEZc-hLMBxr0dtnHdmHd3l750wsWlkyU-PqRiCbqQzqUhLXqYn0HlxsjwxzZEyZimKP9gSHnm5_46EoNFqql3mZSLMumy9otHVeqCrq7HEp4kmlcBdQKuTf6Kx2cpxbC720ht01udFqtI9ugRxN3WcZMvyDWOVpjb687FAexLrjkaglYGIJwMkObdxfFeyxnIoqAJ70acffVbEcfj3MZMTH2viadWOVy6ncMpyC9r-WtyWx-0wrd9UMZCFgLLbA">
</div>
<p class="text-body-base text-on-surface-variant">ท่ามกลางแสงไฟระยิบระยับในสวนสาธารณะ เราต่างรู้ดีว่าความรู้สึกนี้ช่างแสนพิเศษ คุณกุมมือฉันไว้ และชั่วขณะนั้น ราวกับโลกทั้งใบหยุดหมุน</p>
</div>
</div>
</div>
<!-- Milestone 3 -->
<div class="relative flex flex-col md:flex-row items-center justify-between mb-24 w-full">
<div class="w-full md:w-[45%] order-2 md:order-1">
<div class="glass-card p-6 rounded-[24px] shadow-[0_4px_20px_rgba(255,182,217,0.2)] hover:scale-[1.02] transition-transform duration-500 transition-all duration-1000 ease-out opacity-100 translate-y-0">
<span class="font-label-caps text-label-caps text-secondary mb-2 block uppercase tracking-widest">15 สิงหาคม 2022</span>
<h3 class="font-headline-md text-headline-md text-primary mb-3">การพักผ่อนในฤดูร้อน</h3>
<div class="aspect-video w-full rounded-xl overflow-hidden mb-4 shadow-sm">
<img class="w-full h-full object-cover" data-alt="ภาพถ่ายหน้าผาริมชายฝั่งเมดิเตอร์เรเนียนในยามพระอาทิตย์ตกดิน" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXAiDwXznq3EUtD5tPZGyVXwM3OmgKpt7DmkquTWHZvRoui0oKhc5akr4d6N4-JA1n-FPBezAH41U7ZjEapaf_6K1toU_LjP2t45whZiEn4bPYdRRARBWugegUEKQEImrML2CkaXOH5qvhRrFfPa6BWy5kRFLoxqmYSOb8pthg3GcfTIaPGOlyuT6o4DN6oTshL_q307u06QQ3ifSqwDpOk5PZoEPYGVTV7KVeQUgSir_vOw4wsJHN99kUuCT8duDgb-G8knkzTRI">
</div>
<p class="text-body-base text-on-surface-variant">สำรวจชายหาดที่ซ่อนตัวอยู่ริมชายฝั่ง หลงทางไปกับการผจญภัย แต่กลับได้พบความสุขในหัวใจของกันและกัน ฤดูร้อนปีนั้นช่างน่ามหัศจรรย์เหลือเกิน</p>
</div>
</div>
<!-- Node -->
<div class="z-20 w-6 h-6 rounded-full bg-on-primary border-4 border-tertiary shadow-[0_0_15px_rgba(114,91,55,0.5)] my-6 md:my-0"></div>
<div class="hidden md:block w-[45%] order-3"></div>
</div>
<!-- Milestone 4 -->
<div class="relative flex flex-col md:flex-row items-center justify-between mb-8 w-full">
<div class="hidden md:block w-[45%]"></div>
<!-- Node -->
<div class="z-20 w-8 h-8 rounded-full bg-primary border-4 border-on-primary shadow-[0_0_25px_rgba(134,76,106,0.6)] my-6 md:my-0 flex items-center justify-center">
<span class="material-symbols-outlined text-[14px] text-white" style="font-variation-settings: 'FILL' 1;">favorite</span>
</div>
<div class="w-full md:w-[45%]">
<div class="glass-card p-8 rounded-[24px] border-2 border-primary-container shadow-[0_8px_30px_rgba(255,182,217,0.3)] hover:scale-[1.02] transition-transform duration-500 transition-all duration-1000 ease-out opacity-100 translate-y-0">
<span class="font-label-caps text-label-caps text-primary mb-2 block uppercase tracking-widest">วันนี้</span>
<h3 class="font-headline-md text-headline-md text-primary mb-3">บทใหม่ของเรื่องราว</h3>
<p class="text-body-base text-on-surface-variant italic mb-6">"ทุกเรื่องราวนั้นสวยงาม แต่เรื่องราวของเราคือสิ่งที่ฉันรักที่สุด"</p>
<a class="w-full py-4 px-6 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary font-body-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center gap-2" href="{{DATA:SCREEN:SCREEN_10}}">
<span class="">ฟังเพลงพิเศษของเรา</span>
<span class="material-symbols-outlined" data-icon="library_music">library_music</span>
</a>
</div>
</div>
</div>
</div>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-safe-bottom h-20 bg-surface-container-low/90 backdrop-blur-lg shadow-[0_-4px_20px_rgba(255,182,217,0.15)] rounded-t-xl"><a class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined" data-icon="card_giftcard">card_giftcard</span></a><a class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined" data-icon="auto_stories">auto_stories</span></a><a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 scale-110 shadow-md transition-all duration-500 ease-in-out" href="#"><span class="material-symbols-outlined" data-icon="photo_library" style="font-variation-settings: &quot;FILL&quot; 1;">photo_library</span></a><a class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span></a></nav>
<script>
        // Simple scroll progress indicator
        window.addEventListener('scroll', () => {
            const h = document.documentElement, 
                  b = document.body,
                  st = 'scrollTop',
                  sh = 'scrollHeight';
            const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            document.getElementById('scroll-progress').style.width = percent + '%';
        });

        // Intersection Observer for animation entrance
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.glass-card').forEach(card => {
            card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
            observer.observe(card);
        });
    </script>




</body></html>