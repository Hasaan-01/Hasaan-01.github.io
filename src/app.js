// Portfolio App - Alpine.js data and initialization
function app() {
  return {
    dark: false,
    mm: false,
    sc: false,
    s: 'hero',

    init() {
      // Dark mode - check localStorage or system preference
      this.dark = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.$watch('dark', v => localStorage.setItem('theme', v ? 'dark' : 'light'));

      // Scroll handler - nav background + section tracking
      window.addEventListener('scroll', () => {
        this.sc = window.scrollY > 20;
        this.updateSection();
      }, { passive: true });

      // Reveal on scroll - intersection observer
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal').forEach(el => io.observe(el));

      // Year in footer
      const yr = document.getElementById('yr');
      if (yr) yr.textContent = new Date().getFullYear();

      // Init 3D spiral only when visible (lazy load)
      this.initSpiral();
    },

    initSpiral() {
      const spiralContainer = document.getElementById('spiral-container');
      if (!spiralContainer || !('IntersectionObserver' in window)) {
        if (spiralContainer) spiralContainer.style.display = 'none';
        return;
      }

      const spiralObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            spiralObserver.unobserve(entry.target);
            window.loadThreeJS().then(() => {
              try { init3DSpiral(); } catch (e) { entry.target.style.display = 'none'; }
            }).catch(() => { entry.target.style.display = 'none'; });
          }
        });
      }, { rootMargin: '200px 0px' });

      spiralObserver.observe(spiralContainer);
    },

    updateSection() {
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 60;
      if (atBottom) { this.s = 'contact'; return; }

      const ids = ['contact', 'about', 'work', 'services', 'hero'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          this.s = id;
          return;
        }
      }
    }
  };
}

// Three.js loader - deferred until needed
window.threeJSLoaded = false;
window.loadThreeJS = function() {
  if (window.threeJSLoaded) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    script.onload = () => { window.threeJSLoaded = true; resolve(); };
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(() => {}); // Silently fail
  });
}
