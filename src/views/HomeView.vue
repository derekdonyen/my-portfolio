<script setup>
import { ref } from 'vue'

// 資料維持不變，顏色代碼依然適用
const certifications = ref([
  { title: 'ISO 27001 Lead Auditor', code: 'InfoSec', desc: '資訊安全管理系統主導稽核員', color: '#f59e0b' },
  { title: 'Cisco CCNA', code: 'Network', desc: '路由與交換核心技術認證', color: '#3b82f6' },
  { title: 'TOEIC 800+', code: 'Language', desc: '國際商務溝通與技術文檔能力', color: '#10b981' }
])

const skills = ref([
  { category: 'Network & Infra', items: ['Switching/Routing', 'Firewall Policy', 'VPN', 'Linux Admin', 'Docker'] },
  { category: 'Software Dev', items: ['Vue 3', 'Node.js', 'Python Scripting', 'RESTful API', 'Git Flow'] },
  { category: 'Management', items: ['IT Governance', 'Risk Assessment', 'Project Management', 'Tech Leadership'] }
])
</script>

<template>
  <div class="home-view">
    
    <section id="hero" class="hero-section container">
      <div class="hero-wrapper">
        <div class="hero-content">
          <div class="intro-badge">NetAdmin + Developer</div>
          <h1 class="role-title">
            Hi, I'm a <span class="highlight">Hybrid</span> IT Professional.
          </h1>
          <p class="hero-desc">
            結合 <strong>網管維運 (CCNA/ISO27001)</strong> 的穩定性與 <strong>軟體開發</strong> 的靈活性。<br>
            致力於構建可靠、安全且高效的自動化資訊系統。
          </p>

          <div class="tech-status">
            <div class="status-item">
              <span class="indicator green"></span> System Status: <span class="mono">Stable</span>
            </div>
            <div class="status-item">
               <span class="indicator blue"></span> Focus: <span class="mono">DevOps & SecOps</span>
            </div>
          </div>

          <div class="cta-group">
            <button class="btn primary">下載履歷</button>
            <a href="#certs" class="btn text-link">查看專業認證 →</a>
          </div>
        </div>

        <div class="hero-image-container">
          <img 
            src="../assets/profile.jpg" 
            alt="Professional Headshot" 
            class="profile-photo" 
          />
        </div>
      </div>
    </section>

    <section id="certs" class="section-block bg-white-section">
      <div class="container">
        <h2 class="section-title">Professional Credentials</h2>
        <p class="section-subtitle">驗證過的專業能力與國際標準合規知識</p>
        <div class="grid-3">
          <div v-for="cert in certifications" :key="cert.title" class="cert-card" :style="{ borderTopColor: cert.color }">
            <div class="cert-header">
              <span class="cert-badge" :style="{ backgroundColor: cert.color + '20', color: cert.color }">{{ cert.code }}</span>
            </div>
            <h3>{{ cert.title }}</h3>
            <p>{{ cert.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section-block container">
      <h2 class="section-title">Technical Matrix</h2>
       <p class="section-subtitle">跨領域的技術堆疊與管理能力</p>
      <div class="skills-grid cards-container">
        <div v-for="skill in skills" :key="skill.category" class="skill-card">
          <h3>{{ skill.category }}</h3>
          <ul>
            <li v-for="item in skill.items" :key="item">
              <span class="check-icon">✓</span> {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
/* --- Hero Section 重新設計 --- */
.hero-section {
  min-height: 85vh; /* 稍微增加高度 */
  display: flex;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;

  /* RWD: 手機版變垂直排列 */
  @media (max-width: 960px) {
    flex-direction: column-reverse; /* 照片在文字上方 */
    text-align: center;
    gap: 3rem;

    .hero-content {
      align-items: center; /* 讓 flex 子元素在手機版置中 */
    }
  }
}

/* 左側文字內容 */
.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 600px;

  .intro-badge {
    display: inline-block;
    background: #dbeafe; /* 淺藍色背景 */
    color: var(--accent);
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 30px;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    align-self: flex-start; /* 手機版需要 override */
    @media (max-width: 960px) { align-self: center; }
  }

  .role-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--text-main);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    
    .highlight { color: var(--accent); }
  }

  .hero-desc {
    font-size: 1.15rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
    
    strong { color: var(--text-main); font-weight: 600; }
  }
}

/* 科技感狀態列 (淺色版) */
.tech-status {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  background: #f1f5f9; /* 非常淺的灰色區塊 */
  padding: 10px 15px;
  border-radius: 8px;
  align-self: flex-start;
   @media (max-width: 960px) { align-self: center; }

  .status-item {
    display: flex;
    align-items: center;
  }
  .indicator {
    width: 8px; height: 8px; border-radius: 50%; margin-right: 8px;
    &.green { background: var(--success); box-shadow: 0 0 0 2px #dcfce7; }
    &.blue { background: var(--accent); box-shadow: 0 0 0 2px #dbeafe; }
  }
  .mono { font-family: 'Fira Code', monospace; font-weight: 600; color: var(--text-main); }
}

/* 按鈕組 */
.cta-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .btn {
    padding: 0.9rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1rem;

    &.primary {
      background: var(--accent);
      color: white;
      border: none;
      box-shadow: var(--shadow-md);
      &:hover { background: var(--accent-hover); transform: translateY(-2px); box-shadow: var(--shadow-lg); }
    }
    &.text-link {
      background: transparent;
      color: var(--text-main);
      text-decoration: none;
      padding: 0;
      &:hover { color: var(--accent); }
    }
  }
}

/* 右側照片容器 */
.hero-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;

  /* 裝飾性背景圓 */
  &::before {
    content: '';
    position: absolute;
    width: 350px; height: 350px;
    background: #e0f2fe; /* 淺藍色圓形背景 */
    border-radius: 50%;
    z-index: -1;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
}

/* 照片佔位符與實際照片樣式 */
.photo-placeholder, .profile-photo {
  width: 300px;
  height: 300px;
  border-radius: 50%; /* 圓形頭像 */
  object-fit: cover;
  border: 5px solid var(--card-bg); /* 白色邊框 */
  box-shadow: var(--shadow-lg);     /* 立體陰影 */
}
.photo-placeholder {
  background: #cbd5e1; /* 灰色佔位 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-weight: 600;
}

/* --- 通用區塊樣式 (淺色版) --- */
.section-block {
  padding: 5rem 0;
  &.bg-white-section { background: var(--card-bg); border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;}
}

.section-title {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 3.5rem;
  font-size: 1.1rem;
}

/* Grid 系統 */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

/* --- 卡片樣式更新 (淺色乾淨版) --- */
.cert-card {
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 16px;
  border-top: 5px solid transparent; /* 顏色由 inline style 控制 */
  box-shadow: var(--shadow-md);      /* 柔和陰影 */
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: #e2e8f0;
  }

  .cert-header { margin-bottom: 1.5rem; }
  .cert-badge {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    /* 背景色在 inline style 中動態設定了 */
  }

  h3 { margin-bottom: 0.8rem; font-size: 1.35rem; color: var(--text-main); }
  p { color: var(--text-muted); font-size: 1rem; line-height: 1.6; }
}

/* Skills 技能卡片 (淺色版) */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.skill-card {
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid #e2e8f0;

  h3 {
    color: var(--text-main);
    margin-bottom: 1.5rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid #f1f5f9;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    &::before {
       content: ''; display: inline-block; width: 8px; height: 24px; 
       background: var(--accent); margin-right: 12px; border-radius: 4px;
    }
  }

  ul { list-style: none; }
  
  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    color: var(--text-main);
    font-weight: 500;
    
    .check-icon { 
      color: var(--success); 
      margin-right: 12px; 
      font-weight: bold;
      background: #dcfce7;
      width: 24px; height: 24px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 50%;
      font-size: 0.8rem;
    }
  }
}
</style>