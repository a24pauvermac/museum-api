<script setup>
import TheNavBar from './nav-bar/TheNavBar.vue'
</script>

<template>
  <div id="app">
    <header class="app-header">
      <div class="header-content">
        <div class="title-section">
          <h1 class="main-title">🎵 Museu de Música</h1>
          <p class="subtitle">Descubre artistas y explora tu música favorita</p>
        </div>
        <div class="route-info">
          <span class="route-path">{{ $route.fullPath }}</span>
        </div>
      </div>
      <TheNavBar />
    </header>
    
    <main class="main-content">
      <RouterView />
    </main>
    
    <footer class="app-footer">
      <p>&copy; 2024 Museu de Música. Tu biblioteca musical digital.</p>
    </footer>
  </div>
</template>

<style>
/* Estilos globales minimalistas pero notorios */
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #666;
  --accent-color: #6366f1;
  --accent-hover: #4f46e5;
  --background-color: #ffffff;
  --card-background: #f8fafc;
  --border-color: #e2e8f0;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', -apple-system, sans-serif;
  background-color: var(--background-color);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header con más impacto */
.app-header {
  background: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.title-section {
  flex: 1;
  min-width: 300px;
}

.main-title {
  font-size: 2.75rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
}

.route-info {
  background: var(--card-background);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: 1px solid var(--border-color);
}

.route-path {
  color: var(--accent-color);
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Contenido principal */
.main-content {
  flex: 1;
  padding: 3rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
  min-height: calc(100vh - 200px);
}

/* Footer elegante */
.app-footer {
  background: var(--text-primary);
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

.app-footer p {
  opacity: 0.8;
  font-size: 0.9rem;
  font-weight: 300;
}

/* Utilidades globales */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Efectos de hover y transiciones */
.app-header, .route-info, .main-title {
  transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem 1rem;
  }
  
  .main-title {
    font-size: 2.25rem;
  }
  
  .route-info {
    width: 100%;
    max-width: 300px;
  }
  
  .main-content {
    padding: 2rem 0;
  }
}

/* Scroll suave */
html {
  scroll-behavior: smooth;
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}
</style>