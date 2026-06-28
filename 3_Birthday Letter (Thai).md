<!DOCTYPE html><html class="scroll-smooth" lang="th" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>ข้อความพิเศษสำหรับคุณ</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&amp;family=Plus+Jakarta+Sans:wght@400;600;700&amp;display=swap" rel="stylesheet">
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "secondary-fixed": "#ffd9e2",
                    "on-secondary": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "surface-container-high": "#f9e2ec",
                    "primary-fixed-dim": "#fab1d4",
                    "surface-container": "#ffe8f2",
                    "on-primary": "#ffffff",
                    "on-tertiary-fixed-variant": "#584321",
                    "surface-bright": "#fff8f9",
                    "primary-container": "#ffb6d9",
                    "inverse-surface": "#3a2c34",
                    "inverse-on-surface": "#ffecf4",
                    "secondary": "#9b3e60",
                    "tertiary-fixed": "#fedeb0",
                    "surface": "#fff8f9",
                    "on-primary-container": "#7c4361",
                    "error": "#ba1a1a",
                    "secondary-fixed-dim": "#ffb1c7",
                    "inverse-primary": "#fab1d4",
                    "on-background": "#24181f",
                    "on-secondary-fixed-variant": "#7d2648",
                    "error-container": "#ffdad6",
                    "surface-tint": "#864c6a",
                    "tertiary": "#725b37",
                    "on-surface-variant": "#504349",
                    "on-error": "#ffffff",
                    "primary-fixed": "#ffd8e8",
                    "surface-dim": "#ebd4de",
                    "on-surface": "#24181f",
                    "surface-variant": "#f3dce7",
                    "outline": "#827379",
                    "surface-container-highest": "#f3dce7",
                    "tertiary-fixed-dim": "#e1c296",
                    "outline-variant": "#d4c2c8",
                    "surface-container-lowest": "#ffffff",
                    "tertiary-container": "#e6c79b",
                    "primary": "#864c6a",
                    "on-tertiary-fixed": "#281800",
                    "on-secondary-fixed": "#3e001c",
                    "surface-container-low": "#fff0f5",
                    "background": "#fff8f9",
                    "on-primary-fixed-variant": "#6b3552",
                    "on-tertiary-container": "#69522f",
                    "on-secondary-container": "#792345",
                    "secondary-container": "#fe8eb2",
                    "on-error-container": "#93000a",
                    "on-primary-fixed": "#370925"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "section-gap-mobile": "48px",
                    "section-gap-desktop": "80px",
                    "xs": "4px",
                    "xl": "32px",
                    "md": "16px",
                    "sm": "8px",
                    "gutter": "16px",
                    "lg": "24px"
            },
            "fontFamily": {
                    "headline-md": ["Playfair Display"],
                    "display-lg-mobile": ["Playfair Display"],
                    "display-lg": ["Playfair Display"],
                    "label-caps": ["Plus Jakarta Sans"],
                    "body-bold": ["Plus Jakarta Sans"],
                    "body-base": ["Plus Jakarta Sans"]
            },
            "fontSize": {
                    "headline-md": ["28px", {"lineHeight": "36px", "fontWeight": "700"}],
                    "display-lg-mobile": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "body-bold": ["16px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "body-base": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        .paper-texture {
            background-color: #fffcf7;
            background-image: url("https://www.transparenttextures.com/patterns/parchment.png");
            position: relative;
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(252, 238, 244, 0.5);
        }

        .floating-accent {
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }

        .progress-bar-fill {
            transition: width 0.1s ease-out;
        }

        .letter-content {
            column-width: 100%;
            line-height: 2;
        }

        /* Narrative fade-in on scroll */
        .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s ease-out;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
<!-- Progress Bar (Special Effect) -->
<div class="fixed top-0 left-0 w-full h-1 z-[60] bg-surface-container-low">
<div class="h-full bg-gradient-to-r from-primary to-secondary progress-bar-fill" id="scrollProgress" style="width: 0%"></div>
</div>
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 grid grid-cols-[1fr_auto_1fr] items-center px-gutter py-md bg-surface/80 backdrop-blur-md shadow-[0_4px_20px_rgba(255,182,217,0.2)]">
  <!-- Left Icon -->
  <div class="flex items-center">
    <span class="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">card_giftcard</span>
  </div>
  <!-- Centered Title -->
  <h1 class="font-headline-md text-headline-md text-primary text-center">สำหรับคุณ</h1>
  <!-- Right Icon -->
  <div class="flex items-center justify-end">
    <span class="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">celebration</span>
  </div>
</header>
<!-- Main Content Canvas -->
<main class="min-h-screen pt-24 pb-32 paper-texture overflow-hidden">
<!-- Animated Background Decor -->
<div class="absolute inset-0 pointer-events-none overflow-hidden">
<div class="floating-accent absolute top-20 left-[10%] opacity-20 text-secondary" style="font-size: 64px;">
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">favorite</span>
</div>
<div class="floating-accent absolute top-60 right-[5%] opacity-15 text-primary" style="animation-delay: 2s; font-size: 80px;">
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">local_florist</span>
</div>
<div class="floating-accent absolute bottom-40 left-[5%] opacity-20 text-tertiary" style="animation-delay: 4s; font-size: 50px;">
<span class="material-symbols-outlined">auto_awesome</span>
</div>
</div>
<!-- Letter Container -->
<article class="max-w-3xl mx-auto px-gutter relative z-10">
<!-- Hero Header -->
<div class="text-center mb-16 reveal active">
<div class="inline-block p-4 rounded-full bg-primary-container/30 mb-md">
<span class="material-symbols-outlined text-primary text-[48px]" style="font-variation-settings: &quot;FILL&quot; 1;">volunteer_activism</span>
</div>
<h2 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-sm italic">
                    ถึงคนสำคัญที่สุดของฉัน...
                </h2>
<p class="font-label-caps text-label-caps text-secondary tracking-widest uppercase">บทบันทึกวันเกิดครั้งสำคัญเพื่อคุณโดยเฉพาะ</p>
</div>
<!-- Heartfelt Letter Content -->
<div class="glass-card p-lg md:p-xl rounded-[32px] shadow-sm mb-section-gap-desktop">
<div class="letter-content font-body-base text-body-base text-on-surface-variant space-y-md first-letter:text-5xl first-letter:font-headline-md first-letter:mr-3 first-letter:float-left first-letter:text-primary">
<p class="reveal active">
                        เมื่อคุณตื่นขึ้นมาในวันนี้ ฉันหวังว่าโลกจะดูอบอุ่นขึ้นอีกนิด แสงแดดจะสดใสขึ้นอีกหน่อย และคุณจะได้รับรู้ถึงความรักมากมายมหาศาลที่โอบล้อมรอบตัวคุณ วันเกิดไม่ใช่เพียงแค่ตัวเลขที่บอกผ่านกาลเวลา แต่เป็นการเฉลิมฉลองให้กับแสงสว่างอันสวยงามที่คุณมอบให้แก่ทุกคนที่ได้พบเจอ
                    </p>
<div class="reveal py-md flex justify-center active">
<div class="w-24 h-[1px] bg-outline-variant/30"></div>
</div>
<p class="reveal active">
                        เมื่อมองย้อนกลับไปในปีที่ผ่านมา ฉันรู้สึกประทับใจในความเข้มแข็ง ความใจดี และความใส่ใจที่คุณมีให้กับทุกคนอย่างเงียบเชียบ ไม่ว่าจะเป็นเสียงหัวเราะยามดึก หรือช่วงเวลาที่เราเพียงแค่นั่งอยู่ด้วยกันท่ามกลางความเงียบที่แสนสบายใจ ทุกวินาทีที่มีคุณคือของขวัญที่ฉันทะนุถนอมเกินกว่าจะบรรยายเป็นคำพูดได้
                    </p>
<!-- Embedded Photo Memory -->
<div class="reveal my-xl group relative active">
<div class="aspect-[3/4] max-w-sm mx-auto w-full rounded-xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white">
<img class="w-full h-full object-cover object-center" data-alt="ภาพคู่หวานๆ ของเราที่ร้านชาไข่มุก" src="letter_couple.jpg">
</div>
<div class="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary shadow-md transform rotate-12">
<span class="material-symbols-outlined text-3xl">favorite</span>
</div>
</div>
<p class="reveal active">
                        ฉันอยากจะเขียนสิ่งนี้เพื่อเตือนให้คุณรู้ว่า คุณมีความสามารถที่จะทำสิ่งที่น่าทึ่งได้มากมาย ขอให้การเดินทางรอบดวงอาทิตย์ครั้งต่อไปนี้ นำพาการผจญภัยที่ทำให้หัวใจของคุณเต้นแรงและความสงบที่หยั่งรากลึกลงในจิตวิญญาณมาให้ จำไว้ว่าไม่ว่าเส้นทางจะนำพาไปที่ไหน ฉันจะอยู่ตรงนี้เคียงข้างคุณเสมอ และจะเป็นคนที่คอยเชียร์คุณเสียงดังที่สุด
                    </p>
<p class="reveal italic font-body-bold text-primary active">
                        "สิ่งที่ดีที่สุดยังมาไม่ถึง และการเดินทางจะยิ่งหวานล้ำขึ้นเสมอ เพราะเราเดินไปพร้อมกัน"
                    </p>
<p class="reveal active">
                        มีความสุขกับทุกนาทีในวันพิเศษของคุณนะ ทานเค้กเพิ่มอีกชิ้น เต้นรำไปกับเพลงโปรดของคุณ (ถึงแม้ว่าคุณจะเป็นคนเดียวที่เต้นก็ตาม) และจงรับรู้ไว้ว่าคุณเป็นที่รักอย่างมากมายเกินกว่าจะวัดได้
                    </p>
</div>
<!-- Sign-off -->
<div class="mt-xl pt-xl border-t border-outline-variant/20 flex flex-col items-end reveal active">
<p class="font-body-base text-secondary italic mb-xs">ด้วยรักทั้งหมดที่มี,</p>
<p class="font-headline-md text-headline-md text-primary">ฉันคนเดิมเสมอ</p>
</div>
</div>
<!-- Interactive Memory Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-md mb-section-gap-desktop">
<a class="reveal glass-card p-md rounded-xl text-center group cursor-pointer hover:bg-white/60 transition-all active" href="{{DATA:SCREEN:SCREEN_6}}">
<span class="material-symbols-outlined text-tertiary mb-sm text-4xl">auto_stories</span>
<h3 class="font-body-bold text-on-surface mb-xs">เรื่องราวของเรา</h3>
<p class="text-sm opacity-70">ย้อนรอยช่วงเวลาที่นิยามความเป็นเรา</p>
</a>
<div class="reveal glass-card p-md rounded-xl text-center group cursor-pointer hover:bg-white/60 transition-all active">
<span class="material-symbols-outlined text-primary mb-sm text-4xl">queue_music</span>
<h3 class="font-body-bold text-on-surface mb-xs">เพลย์ลิสต์</h3>
<p class="text-sm opacity-70">บทเพลงที่ไพเราะเหมือนรอยยิ้มของคุณ</p>
</div>
</div>
<!-- Closing Action -->
<div class="text-center reveal pb-20 active">
<a class="bg-gradient-to-r from-primary to-secondary text-on-primary px-xl py-md rounded-full font-body-bold shadow-lg shadow-primary/20 hover:scale-110 transition-transform active:scale-95 flex items-center gap-sm mx-auto w-max" href="{{DATA:SCREEN:SCREEN_6}}">
<span class="">ดูเซอร์ไพรส์ต่อไป</span>
<span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</article>
</main>
<!-- Bottom Navigation (Shared Component Integration) -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-safe-bottom h-20 bg-surface-container-low/90 backdrop-blur-lg shadow-[0_-4px_20px_rgba(255,182,217,0.15)] md:hidden"><a class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors" href="{{DATA:SCREEN:SCREEN_1}}">
  <span class="material-symbols-outlined" data-icon="card_giftcard">card_giftcard</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 scale-110 shadow-md" href="{{DATA:SCREEN:SCREEN_15}}">
  <span class="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
</a>
<a class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors" href="{{DATA:SCREEN:SCREEN_9}}">
  <span class="material-symbols-outlined" data-icon="photo_library">photo_library</span>
</a>
<a class="flex flex-col items-center justify-center text-secondary p-3 hover:text-primary transition-colors" href="#">
  <span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</a></nav>
<script>
        // Scroll Progress Handler
        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("scrollProgress").style.width = scrolled + "%";
        };

        // Scroll Reveal Intersection Observer
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        };

        const observer = new IntersectionObserver(revealCallback, {
            threshold: 0.1
        });

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Micro-interactions for buttons
        document.querySelectorAll('button, a').forEach(el => {
            el.addEventListener('mousedown', () => {
                el.style.transform = 'scale(0.95)';
            });
            el.addEventListener('mouseup', () => {
                el.style.transform = '';
            });
        });
    </script>








</body></html>