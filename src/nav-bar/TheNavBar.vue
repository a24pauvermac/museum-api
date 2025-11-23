<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="nav-link home-link">
        <span class="nav-text">Home</span>
      </RouterLink>
      
      <RouterLink to="/search" class="nav-link">
        <span class="nav-text">Search</span>
      </RouterLink>
      
      <RouterLink to="/favorite" class="nav-link">
        <span class="nav-text">Favorites</span>
      </RouterLink>
      
      <RouterLink to="/item/1" class="nav-link">
        <span class="nav-text">Details</span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: var(--background-color);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  padding: 0;
  margin: 0 auto;
  max-width: 1200px;
}

.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  padding: 0;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  position: relative;
  flex: 1;
  max-width: 140px;
}

.nav-link:hover {
  color: var(--accent-color);
  background: var(--card-background);
  border-bottom-color: var(--accent-color);
}

.nav-link.router-link-active {
  color: var(--accent-color);
  border-bottom-color: var(--accent-color);
  background: linear-gradient(to bottom, rgba(99, 102, 241, 0.05), transparent);
}

.nav-link.router-link-active .nav-icon {
  transform: scale(1.1);
}

.nav-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.nav-text {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.home-link {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent);
}

/* Efecto de burbuja en hover */
.nav-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--accent-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  opacity: 0;
}

.nav-link:hover::before {
  width: 60px;
  height: 60px;
  opacity: 0.1;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    flex-wrap: wrap;
    gap: 0;
  }
  
  .nav-link {
    padding: 1rem 1rem;
    min-width: 80px;
    flex: 1;
  }
  
  .nav-text {
    font-size: 0.75rem;
  }
  
  .nav-icon {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
}

@media (max-width: 480px) {
  .nav-link {
    padding: 0.75rem 0.5rem;
  }
  
  .nav-text {
    font-size: 0.7rem;
  }
  
  .nav-icon {
    font-size: 1.1rem;
  }
}

/* Animación sutil al cargar */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link {
  animation: fadeInUp 0.5s ease forwards;
}

.nav-link:nth-child(1) { animation-delay: 0.1s; }
.nav-link:nth-child(2) { animation-delay: 0.2s; }
.nav-link:nth-child(3) { animation-delay: 0.3s; }
.nav-link:nth-child(4) { animation-delay: 0.4s; }
</style>