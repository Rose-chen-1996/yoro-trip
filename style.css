/* --- デザインベース：Snow Peak × 無印良品 × ことりっぷ --- */

:root {
    --bg-color: #fcfbfa;       
    --text-main: #3e3a35;     
    --text-sub: #766e65;      
    --primary: #52614b;       /* モスグリーン */
    --accent: #c4a47a;        /* ベージュ */
    --card-bg: #ffffff;
    --border-color: #eae7e2;  
    --radius: 12px;           
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans JP", sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
    letter-spacing: 0.04em;
}

.container {
    max-width: 500px; 
    margin: 0 auto;
    padding: 0 20px 60px 20px;
}

/* --- TOP HERO SECTION (グラデーション背景強化) --- */
.hero {
    position: relative;
    width: 100%;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    overflow: hidden;
    margin-bottom: 40px;
    background: linear-gradient(135deg, #3e3a35 0%, #52614b 50%, #8a9a5b 100%);
    box-shadow: inset 0 0 100px rgba(0,0,0,0.3);
}

.hero-content {
    padding: 20px;
}

.hero-date {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
    opacity: 0.9;
}

.hero-title {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 16px;
}

.hero-title .sub-font {
    font-size: 1.4rem;
    font-weight: 300;
    display: block;
    margin-top: 4px;
    letter-spacing: 0.05em;
}

.hero-subtitle {
    font-size: 0.95rem;
    font-weight: 300;
    background: rgba(255, 255, 255, 0.2);
    padding: 6px 16px;
    border-radius: 20px;
    display: inline-block;
    backdrop-filter: blur(4px);
}

/* --- HEADINGS --- */
.day-section {
    margin-bottom: 48px;
}

.section-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 8px;
}

.day-badge {
    background-color: var(--primary);
    color: #fff;
    font-size: 0.75rem;
    padding: 3px 10px;
    border-radius: 4px;
    font-weight: 500;
}

/* --- TIMELINE --- */
.timeline {
    position: relative;
    padding-left: 24px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 6px;
    bottom: 6px;
    width: 1px;
    background-color: var(--border-color);
}

.timeline-item {
    position: relative;
    margin-bottom: 22px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -23px;
    top: 7px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #c4a47a;
    border: 2px solid var(--bg-color);
    box-shadow: 0 0 0 2px #c4a47a;
}

.timeline-item.highlight::before {
    background-color: var(--primary);
    box-shadow: 0 0 0 2px var(--primary);
}

.time {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 2px;
}

.event {
    font-size: 0.95rem;
}

.route-info {
    font-size: 0.85rem;
    color: var(--text-sub);
    font-weight: 500;
}

.sub-text {
    font-size: 0.8rem;
    color: var(--text-sub);
    margin-top: 2px;
}

.info-box {
    background-color: #f3f0ea;
    padding: 12px 16px;
    border-radius: 8px;
    margin-top: 10px;
}
.info-box::before { display: none; }

.alert-box {
    background-color: #f5ece3;
    border-left: 3px solid #d4a373;
}

/* --- SPOT CARDS (自然を意識した個別グラデーション) --- */
.spots-section {
    margin-bottom: 48px;
}

.spots-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.spot-card {
    background-color: var(--card-bg);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(62, 58, 53, 0.05);
    border: 1px solid var(--border-color);
}

.card-img-wrap {
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.05em;
    text-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

/* スポット別背景デザイン */
.bg-awamata   { background: linear-gradient(135deg, #a3b19b, #52614b); } /* 滝・新緑 */
.bg-gelateria { background: linear-gradient(135deg, #dfd7c2, #c4a47a); } /* ジェラート・カフェ */
.bg-goriyaku  { background: linear-gradient(135deg, #7d6b58, #5c5346); } /* 温泉・里山 */
.bg-fika      { background: linear-gradient(135deg, #52614b, #3e3a35); } /* キャンプ・焚き火 */
.bg-tunnel    { background: linear-gradient(135deg, #3e3a35, #7d6b58); } /* トンネル・光 */
.bg-nakase    { background: linear-gradient(135deg, #8a9a5b, #a3b19b); } /* 新緑・遊歩道 */
.bg-lunch     { background: linear-gradient(135deg, #dfd7c2, #7d6b58); } /* レストラン */

.card-body {
    padding: 18px;
}

.card-body h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
}

.card-body p {
    font-size: 0.85rem;
    color: var(--text-sub);
    margin-bottom: 16px;
}

.map-btn {
    display: block;
    width: 100%;
    text-align: center;
    background-color: #f4f3ef;
    color: var(--text-main);
    text-decoration: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: background-color 0.2s;
    border: 1px solid var(--border-color);
}

.map-btn:active { background-color: #eae8e1; }
.btn-group { display: flex; gap: 10px; }
.map-btn.sm { flex: 1; }

/* --- PACKING LIST --- */
.packing-section {
    margin-bottom: 20px;
}

.section-intro {
    font-size: 0.8rem;
    color: var(--text-sub);
    margin-bottom: 16px;
}

.packing-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px;
}

.check-item {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s, border-color 0.2s;
}

.check-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: var(--primary);
    cursor: pointer;
}

.check-item.checked {
    background-color: #f5f6f4;
    border-color: #d0d7ce;
}

.check-item.checked span {
    text-decoration: line-through;
    color: #a09b95;
}

/* --- FOOTER --- */
footer {
    text-align: center;
    padding: 40px 20px;
    font-size: 0.75rem;
    color: var(--text-sub);
    border-top: 1px solid var(--border-color);
    background-color: #f4f3ef;
}

@media (min-width: 600px) {
    .hero {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0 0 var(--radius) var(--radius);
    }
}
