<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container nav-wrapper">
      <div class="logo">&lt;Dev/Ops&gt;</div>
      <nav>
        <a href="#hero">首頁</a>
        <a href="#skills">技術堆疊</a>
        <a href="#certs">專業認證</a>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>© 2025 Professional IT Portfolio. Built with Vue 3.</p>
  </footer>
</template>

<style lang="scss">
/* --- 全域變數定義 (淺色系主題) --- */
:root {
  /* 背景與基底 */
  --bg-color: #f8fafc;       /* 淺灰白背景 (Slate 50) */
  --card-bg: #ffffff;        /* 純白卡片背景 */
  
  /* 文字顏色 */
  --text-main: #1e293b;      /* 主要深色文字 (Slate 800) - 比純黑更柔和 */
  --text-muted: #64748b;     /* 次要灰色文字 (Slate 500) */
  
  /* 強調色 */
  --accent: #2563eb;         /* 專業科技藍 (Blue 600) - 取代原本的螢光藍 */
  --accent-hover: #1d4ed8;   /* 按鈕懸停深藍 */
  
  /* 功能色 */
  --success: #10b981;        /* 成功/運行中綠色 */
  
  /* 陰影 (用於淺色系製造層次感) */
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
  line-height: 1.7;
}

.container {
  max-width: 1100px; /* 稍微縮窄一點讓閱讀更舒適 */
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header 淺色化 */
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.9); /* 半透明白色 */
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e2e8f0;     /* 淺灰色邊框 */
  z-index: 100;
  padding: 1rem 0;

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: 'Fira Code', monospace;
    font-weight: 700;
    color: var(--accent); /* 使用科技藍 */
    font-size: 1.5rem;
    letter-spacing: -0.5px;
  }

  nav a {
    color: var(--text-muted);
    text-decoration: none;
    margin-left: 2rem;
    font-weight: 600;
    font-size: 0.95rem;
    transition: color 0.3s;
    position: relative;

    &:hover {
      color: var(--accent);
    }
  }
}

main {
  padding-top: 80px;
}

footer {
  background: #fff;
  text-align: center;
  padding: 3rem 2rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 4rem;
}
</style>