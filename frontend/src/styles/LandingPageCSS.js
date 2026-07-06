export default `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap');
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
  :root {
    --navy: #1a2744;
    --navy-light: #2d3f6b;
    --green: #2ecc71;
    --green-dark: #27ae60;
    --green-glow: rgba(46,204,113,0.25);
    --white: #ffffff;
    --gray-50: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-400: #94a3b8;
    --gray-600: #475569;
    --gray-800: #1e293b;
    --radius: 16px;
    --radius-sm: 8px;
    --shadow: 0 4px 24px rgba(26,39,68,0.08);
    --shadow-lg: 0 16px 64px rgba(26,39,68,0.14);
  }
 
  html { scroll-behavior: smooth; }
 
  body {
    font-family: 'Inter', sans-serif;
    background: var(--white);
    color: var(--navy);
    overflow-x: hidden;
    line-height: 1.6;
  }
 
  /* ── CURSOR ── */
  .cursor {
    width: 12px; height: 12px;
    background: var(--green);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease, opacity 0.2s;
    mix-blend-mode: multiply;
  }
  .cursor-ring {
    width: 36px; height: 36px;
    border: 1.5px solid var(--green);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.35s ease, width 0.3s, height 0.3s, opacity 0.2s;
    opacity: 0.5;
  }
  .cursor.hovered { transform: scale(2.5); }
  .cursor-ring.hovered { width: 56px; height: 56px; opacity: 0.2; }
 
  /* ── NAV ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 48px;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(226,232,240,0.6);
    transition: padding 0.3s, box-shadow 0.3s;
  }
  .nav.scrolled { padding: 12px 48px; box-shadow: var(--shadow); }
  .nav-logo {
    display: flex; align-items: center; gap: 8px;
    font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800;
    color: var(--navy); text-decoration: none;
  }
  .nav-logo .plus { color: var(--green); font-size: 24px; margin-right: 2px; }
  .nav-logo .medi { color: var(--green); }
  .nav-login {
    padding: 10px 28px;
    background: var(--navy);
    color: #fff;
    border: none; border-radius: 50px;
    font-size: 14px; font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    letter-spacing: 0.02em;
  }
  .nav-login:hover {
    background: var(--navy-light);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(26,39,68,0.2);
  }
 
  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center;
    padding: 120px 24px 60px;
    position: relative;
    overflow: hidden;
  }
  .hero-bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .orb-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(46,204,113,0.12), transparent 70%);
    top: -100px; left: -150px;
    animation: orbFloat 8s ease-in-out infinite;
  }
  .orb-2 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(26,39,68,0.08), transparent 70%);
    bottom: 0; right: -100px;
    animation: orbFloat 10s ease-in-out infinite reverse;
  }
  @keyframes orbFloat {
    0%,100% { transform: translate(0,0) scale(1); }
    50% { transform: translate(30px,-30px) scale(1.05); }
  }
 
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gray-100);
    border: 1px solid var(--gray-200);
    border-radius: 50px;
    padding: 6px 16px;
    font-size: 12px; font-weight: 600;
    color: var(--gray-600);
    letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeSlideUp 0.6s ease 0.2s forwards;
  }
  .badge-dot {
    width: 6px; height: 6px;
    background: var(--green);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%,100% { box-shadow: 0 0 0 0 var(--green-glow); }
    50% { box-shadow: 0 0 0 6px transparent; }
  }
 
  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(42px, 7vw, 88px);
    font-weight: 800;
    line-height: 1.08;
    color: var(--navy);
    max-width: 900px;
    margin-bottom: 24px;
    opacity: 0;
    animation: fadeSlideUp 0.7s ease 0.4s forwards;
  }
  .hero-title .accent { color: var(--green); }
 
  .hero-sub {
    font-size: clamp(16px, 2vw, 19px);
    color: var(--gray-600);
    max-width: 560px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 44px;
    opacity: 0;
    animation: fadeSlideUp 0.7s ease 0.6s forwards;
  }
 
  .hero-cta-row {
    display: flex; gap: 14px; flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
    animation: fadeSlideUp 0.7s ease 0.8s forwards;
  }
  .btn-primary {
    padding: 15px 36px;
    background: var(--navy);
    color: #fff;
    border: none; border-radius: 50px;
    font-size: 15px; font-weight: 600;
    cursor: pointer;
    transition: all 0.25s;
    position: relative; overflow: hidden;
  }
  .btn-primary::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(46,204,113,0.25), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(26,39,68,0.22); }
  .btn-primary:hover::after { opacity: 1; }
 
  .btn-secondary {
    padding: 15px 36px;
    background: transparent;
    color: var(--navy);
    border: 1.5px solid var(--gray-200);
    border-radius: 50px;
    font-size: 15px; font-weight: 600;
    cursor: pointer;
    transition: all 0.25s;
  }
  .btn-secondary:hover {
    border-color: var(--navy);
    background: var(--gray-50);
    transform: translateY(-2px);
  }
 
  @keyframes fadeSlideUp {
    from { opacity:0; transform: translateY(24px); }
    to { opacity:1; transform: translateY(0); }
  }
 
  /* ── DASHBOARD PREVIEW ── */
  .hero-preview {
    margin-top: 72px;
    width: 100%; max-width: 1100px;
    opacity: 0;
    animation: fadeSlideUp 0.9s ease 1s forwards;
    position: relative;
  }
  .preview-frame {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 32px 80px rgba(26,39,68,0.14), 0 0 0 1px rgba(226,232,240,0.8);
    overflow: hidden;
    position: relative;
  }
  .preview-topbar {
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
    padding: 12px 20px;
    display: flex; align-items: center; gap: 8px;
  }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-r { background: #fc5c65; }
  .dot-y { background: #fed330; }
  .dot-g { background: #26de81; }
  .preview-body {
    display: grid;
    grid-template-columns: 220px 1fr 260px;
    height: 380px;
    font-size: 12px;
  }
 
  /* left sidebar */
  .sidebar {
    background: var(--white);
    border-right: 1px solid var(--gray-200);
    overflow: hidden;
  }
  .sidebar-tabs {
    display: flex; border-bottom: 1px solid var(--gray-200);
    padding: 0 12px;
  }
  .stab {
    padding: 10px 8px;
    font-size: 11px; font-weight: 600;
    color: var(--gray-400);
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }
  .stab.active { color: var(--navy); border-color: var(--navy); }
  .chat-item {
    display: flex; align-items: flex-start;
    gap: 8px; padding: 10px 14px;
    border-bottom: 1px solid var(--gray-100);
    cursor: pointer;
    transition: background 0.15s;
    animation: fadeSlideUp 0.5s ease both;
  }
  .chat-item:hover { background: var(--gray-50); }
  .avatar {
    width: 30px; height: 30px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700; color: #fff;
    flex-shrink: 0;
  }
  .av-blue { background: #3b82f6; }
  .av-green { background: var(--green); }
  .av-purple { background: #8b5cf6; }
  .av-orange { background: #f97316; }
  .chat-meta { flex: 1; min-width: 0; }
  .chat-name { font-size: 11px; font-weight: 600; color: var(--navy); }
  .chat-preview { font-size: 10px; color: var(--gray-400); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .chat-badge {
    background: var(--green); color: #fff;
    border-radius: 50%; width: 16px; height: 16px;
    font-size: 9px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
  }
 
  /* center chat */
  .chat-main {
    background: var(--gray-50);
    display: flex; flex-direction: column;
    overflow: hidden;
  }
  .chat-header {
    background: #fff;
    border-bottom: 1px solid var(--gray-200);
    padding: 10px 16px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .chat-header-title { font-size: 13px; font-weight: 700; color: var(--navy); }
  .close-btn {
    background: #fee2e2; color: #ef4444;
    border: none; border-radius: 6px;
    padding: 4px 12px; font-size: 10px; font-weight: 600;
    cursor: pointer;
  }
  .messages {
    flex: 1; padding: 14px 16px;
    display: flex; flex-direction: column; gap: 10px;
    overflow-y: auto;
  }
  .msg { display: flex; gap: 8px; align-items: flex-end; }
  .msg.agent { flex-direction: row-reverse; }
  .msg-bubble {
    max-width: 70%;
    padding: 8px 12px;
    border-radius: 14px;
    font-size: 11px; line-height: 1.5;
  }
  .msg-bubble.user { background: #fff; color: var(--navy); box-shadow: var(--shadow); border-bottom-left-radius: 4px; }
  .msg-bubble.agent { background: var(--navy); color: #fff; border-bottom-right-radius: 4px; }
  .msg-bubble.typing { background: #fff; color: var(--gray-400); }
  .typing-dots span {
    display: inline-block;
    animation: blink 1.4s infinite both;
    font-size: 16px; line-height: 0.5;
  }
  .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
  .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes blink { 0%,80%,100% { opacity:0.2; } 40% { opacity:1; } }
 
  /* right info panel */
  .info-panel {
    background: #fff;
    border-left: 1px solid var(--gray-200);
    padding: 14px;
    overflow-y: auto;
  }
  .info-guest { font-size: 13px; font-weight: 700; color: var(--navy); }
  .info-loc { font-size: 10px; color: var(--gray-400); margin-bottom: 10px; }
  .info-summary { font-size: 10px; color: var(--gray-600); margin-bottom: 10px; line-height: 1.5; }
  .tag-row { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 10px; }
  .tag {
    padding: 2px 8px; border-radius: 50px;
    font-size: 9px; font-weight: 600;
    display: flex; align-items: center; gap: 4px;
  }
  .tag-filled { background: var(--navy); color: #fff; }
  .tag-outline { border: 1px solid var(--gray-200); color: var(--gray-600); }
  .tag-green { background: rgba(46,204,113,0.12); color: var(--green-dark); }
  .info-section { font-size: 10px; font-weight: 700; color: var(--gray-400); letter-spacing: 0.06em; text-transform: uppercase; margin: 10px 0 4px; }
  .info-row { font-size: 10px; color: var(--navy); margin-bottom: 2px; }
 
  /* ── STATS STRIP ── */
  .stats {
    padding: 48px 48px;
    display: flex; justify-content: center; gap: 0;
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-50);
    flex-wrap: wrap;
  }
  .stat-item {
    padding: 20px 56px;
    text-align: center;
    border-right: 1px solid var(--gray-200);
    flex: 1; min-width: 160px;
    transition: background 0.2s;
  }
  .stat-item:last-child { border-right: none; }
  .stat-item:hover { background: #fff; }
  .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 40px; font-weight: 800;
    color: var(--navy);
    display: block;
  }
  .stat-num .g { color: var(--green); }
  .stat-label { font-size: 12px; color: var(--gray-400); font-weight: 500; }
 
  /* ── FEATURES ── */
  .features {
    padding: 100px 48px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .section-eyebrow {
    font-size: 11px; font-weight: 700;
    color: var(--green-dark);
    letter-spacing: 0.12em; text-transform: uppercase;
    margin-bottom: 12px;
  }
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(30px, 4vw, 52px);
    font-weight: 800; line-height: 1.1;
    color: var(--navy);
    max-width: 540px;
    margin-bottom: 16px;
  }
  .section-sub {
    font-size: 16px; color: var(--gray-600);
    max-width: 480px; margin-bottom: 64px;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }
  .feature-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 32px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  }
  .feature-card::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--green-glow), transparent 60%);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .feature-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(46,204,113,0.3); }
  .feature-card:hover::before { opacity: 1; }
  .feature-icon {
    width: 44px; height: 44px;
    background: var(--gray-100);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 18px;
    font-size: 20px;
    transition: background 0.3s, transform 0.3s;
  }
  .feature-card:hover .feature-icon { background: var(--green-glow); transform: scale(1.1) rotate(-5deg); }
  .feature-title { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
  .feature-desc { font-size: 13px; color: var(--gray-600); line-height: 1.6; }
  .feature-visual {
    margin-top: 20px;
    height: 100px;
    background: var(--gray-50);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; position: relative;
  }
  /* mini chat bubbles */
  .mini-bubbles { display: flex; flex-direction: column; gap: 6px; padding: 10px; width: 100%; }
  .mini-bubble {
    height: 10px; border-radius: 6px;
    animation: shimmer 2.5s infinite;
    background: linear-gradient(90deg, var(--gray-200) 25%, var(--gray-100) 50%, var(--gray-200) 75%);
    background-size: 200% 100%;
  }
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  .mini-bubble.b1 { width: 70%; align-self: flex-start; animation-delay: 0s; }
  .mini-bubble.b2 { width: 55%; align-self: flex-end; background: var(--navy); opacity: 0.15; animation-delay: 0.3s; }
  .mini-bubble.b3 { width: 80%; align-self: flex-start; animation-delay: 0.6s; }
 
  /* sentiment badges */
  .sentiment-row { display: flex; gap: 6px; flex-wrap: wrap; padding: 10px; }
  .sent-badge {
    padding: 4px 10px; border-radius: 20px;
    font-size: 10px; font-weight: 600;
    animation: popIn 0.5s both;
  }
  .sent-red { background: #fee2e2; color: #dc2626; animation-delay: 0.1s; }
  .sent-green { background: #dcfce7; color: #16a34a; animation-delay: 0.3s; }
  .sent-yellow { background: #fef9c3; color: #b45309; animation-delay: 0.5s; }
  @keyframes popIn {
    from { transform: scale(0.6); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
 
  /* waveform */
  .waveform { display: flex; align-items: center; gap: 3px; padding: 10px; height: 100%; }
  .wave-bar {
    width: 4px; border-radius: 2px;
    background: var(--green);
    animation: waveDance 1.2s ease-in-out infinite;
  }
  @keyframes waveDance {
    0%,100% { height: 8px; }
    50% { height: 40px; }
  }
 
  /* ── HOW IT WORKS ── */
  .how {
    background: var(--gray-50);
    padding: 100px 48px;
  }
  .how-inner { max-width: 1100px; margin: 0 auto; }
  .steps-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0;
    margin-top: 64px;
    position: relative;
  }
  .steps-row::after {
    content: '';
    position: absolute;
    top: 28px; left: 60px; right: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--green), transparent);
    z-index: 0;
  }
  .step {
    text-align: center; padding: 0 24px;
    position: relative; z-index: 1;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    transform: translateY(20px);
  }
  .step.visible { opacity: 1; transform: translateY(0); }
  .step-num {
    width: 56px; height: 56px;
    background: var(--white);
    border: 2px solid var(--green);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 20px;
    font-family: 'Syne', sans-serif;
    font-size: 18px; font-weight: 800;
    color: var(--green);
    box-shadow: 0 0 0 6px rgba(46,204,113,0.1);
    transition: box-shadow 0.3s, transform 0.3s;
  }
  .step:hover .step-num { box-shadow: 0 0 0 12px rgba(46,204,113,0.12); transform: scale(1.08); }
  .step-title { font-size: 15px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
  .step-desc { font-size: 12px; color: var(--gray-600); line-height: 1.6; }
 
  /* ── FEATURE HIGHLIGHT ── */
  .highlight {
    padding: 100px 48px;
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
  }
  .highlight-text .section-title { max-width: 100%; }
  .highlight-list { list-style: none; margin-top: 28px; display: flex; flex-direction: column; gap: 14px; }
  .highlight-list li {
    display: flex; align-items: flex-start; gap: 12px;
    font-size: 14px; color: var(--gray-700);
  }
  .check {
    width: 22px; height: 22px; flex-shrink: 0;
    background: rgba(46,204,113,0.15);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; color: var(--green-dark); font-weight: 700;
    margin-top: 1px;
  }
  .highlight-visual {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 24px;
    position: relative;
    overflow: hidden;
    height: 360px;
  }
  .hl-card {
    background: #fff;
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    padding: 14px 16px;
    margin-bottom: 10px;
    font-size: 12px; color: var(--navy);
    box-shadow: var(--shadow);
    transition: transform 0.3s;
    cursor: default;
  }
  .hl-card:hover { transform: translateX(4px); }
  .hl-card-label { font-size: 9px; font-weight: 700; color: var(--green-dark); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px; }
  .hl-card-title { font-weight: 600; margin-bottom: 4px; }
  .hl-card-body { font-size: 11px; color: var(--gray-600); }
  .tag-strip { display: flex; gap: 4px; margin-top: 8px; flex-wrap: wrap; }
  .tiny-tag {
    padding: 2px 8px; border-radius: 50px;
    font-size: 9px; font-weight: 600;
    background: var(--gray-100); color: var(--gray-600);
  }
 
  /* ── CTA ── */
  .cta-section {
    background: var(--navy);
    padding: 100px 48px;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 100%, rgba(46,204,113,0.18), transparent 70%);
    pointer-events: none;
  }
  .cta-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(32px, 5vw, 64px);
    font-weight: 800; color: #fff;
    line-height: 1.1; margin-bottom: 16px;
    position: relative; z-index: 1;
  }
  .cta-title .accent { color: var(--green); }
  .cta-sub { font-size: 16px; color: rgba(255,255,255,0.6); margin-bottom: 40px; position: relative; z-index: 1; }
  .cta-btn {
    padding: 16px 48px;
    background: var(--green);
    color: var(--navy);
    border: none; border-radius: 50px;
    font-size: 16px; font-weight: 700;
    cursor: pointer;
    position: relative; z-index: 1;
    transition: all 0.25s;
    box-shadow: 0 4px 24px rgba(46,204,113,0.35);
  }
  .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 36px rgba(46,204,113,0.45); }
 
  /* ── FOOTER ── */
  .footer {
    padding: 48px;
    border-top: 1px solid var(--gray-200);
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 16px;
  }
  .footer-copy { font-size: 12px; color: var(--gray-400); }
  .footer-links { display: flex; gap: 24px; }
  .footer-links a { font-size: 12px; color: var(--gray-400); text-decoration: none; transition: color 0.2s; }
  .footer-links a:hover { color: var(--navy); }
 
  /* ── SCROLL REVEAL ── */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }
 
  @media (max-width: 768px) {
    .nav { padding: 14px 20px; }
    .hero { padding: 100px 20px 40px; }
    .preview-body { grid-template-columns: 1fr; height: auto; }
    .sidebar, .info-panel { display: none; }
    .highlight { grid-template-columns: 1fr; gap: 40px; }
    .stats { padding: 32px 20px; }
    .stat-item { padding: 16px 24px; border-right: none; border-bottom: 1px solid var(--gray-200); }
    .features, .how-inner { padding: 60px 20px; }
    .steps-row::after { display: none; }
    .cta-section { padding: 60px 20px; }
    .footer { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
  }
  `;