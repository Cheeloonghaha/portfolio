// Styles (Tailwind + our custom CSS, bundled by Vite)
import './style.css';

// Self-hosted Inter font (replaces the old Google Fonts CDN <link>)
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

// AOS (Animate On Scroll), installed via npm instead of a CDN <script>
import AOS from 'aos';
import 'aos/dist/aos.css';

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Dark mode toggle (persisted in localStorage) =====
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

function applyTheme(isDark) {
  root.classList.toggle('dark', isDark);
  iconSun.classList.toggle('hidden', !isDark);
  iconMoon.classList.toggle('hidden', isDark);
}

(function initTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem('theme');
  } catch (e) {
    // localStorage unavailable (e.g. privacy mode) - fall back to system preference each load
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored ? stored === 'dark' : prefersDark);
})();

themeToggle.addEventListener('click', () => {
  const isDark = !root.classList.contains('dark');
  applyTheme(isDark);
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch (e) {
    // ignore if storage is blocked
  }
});

// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

// Close mobile menu after clicking a link
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  });
});

// ===== AOS (Animate On Scroll) =====
AOS.init({
  duration: 700,
  once: true,
  offset: 60,
});

// ===== Scroll progress bar =====
const scrollProgress = document.getElementById('scroll-progress');

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = `${percent}%`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// ===== Active nav link highlighting on scroll =====
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link[data-nav]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.dataset.nav === id);
        });
      }
    });
  },
  { rootMargin: '-45% 0px -45% 0px' } // triggers when a section crosses the middle of the viewport
);

sections.forEach((section) => sectionObserver.observe(section));
