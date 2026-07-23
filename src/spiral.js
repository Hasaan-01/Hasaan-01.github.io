// 3D Spiral Projects Visualization using Three.js
function init3DSpiral() {
  const container = document.getElementById('spiral-container');
  const canvas = document.getElementById('spiral-canvas');
  const infoBox = document.getElementById('project-info');
  if (!container || !canvas) return;

  // Project data
  const projects = [
    {
      title: 'AI-Powered Learning Analytics',
      subtitle: 'LARS Chatbot',
      url: 'project-lars-chatbot.html',
      thumbnail: 'images/lars-chatbot/thumbnail.png',
      color: '#a855f7',
      gradient: ['#a855f7', '#ec4899'],
      tags: ['Azure OpenAI', 'Python', 'Vector DB']
    },
    {
      title: 'Department Analytics',
      subtitle: 'Multi-Source BI Platform',
      url: 'project-department-dashboard.html',
      thumbnail: 'images/department-dashboard/thumbnail.png',
      color: '#3b82f6',
      gradient: ['#3b82f6', '#06b6d4'],
      tags: ['Power BI', 'Python ETL', 'RLS']
    },
    {
      title: 'DevOps Platform',
      subtitle: 'AWS & GitHub Monitoring',
      url: 'project-devops-dashboard.html',
      thumbnail: 'images/devops-dashboard/thumbnail.png',
      color: '#6366f1',
      gradient: ['#6366f1', '#a855f7'],
      tags: ['AWS', 'CloudTrail', 'GitHub API']
    },
    {
      title: 'Attendance System',
      subtitle: 'SQL Automation Pipeline',
      url: 'project-attendance-system.html',
      thumbnail: 'images/attendance-system/thumbnail.png',
      color: '#10b981',
      gradient: ['#10b981', '#14b8a6'],
      tags: ['SQL', 'Automation', 'Power BI']
    },
    {
      title: 'Leave Management',
      subtitle: 'Power Apps Solution',
      url: 'project-leave-app.html',
      thumbnail: 'images/leave-app/thumbnail.png',
      color: '#059669',
      gradient: ['#059669', '#14b8a6'],
      tags: ['Power Apps', 'Power Automate', '70% Time Saved']
    },
    {
      title: 'Skills Dashboard',
      subtitle: 'Workforce Analytics',
      url: 'project-employee-skills.html',
      thumbnail: 'images/employee-skills/thumbnail.png',
      color: '#f59e0b',
      gradient: ['#f59e0b', '#FF6B2B'],
      tags: ['Power Apps', 'Analytics', '50+ Skills']
    }
  ];

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, container.offsetWidth / container.offsetHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
  scene.background = null;

  // Camera position
  camera.position.z = 12;
  camera.position.y = 2;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);
  const pointLight1 = new THREE.PointLight(0xffffff, 0.6, 100);
  pointLight1.position.set(10, 10, 10);
  scene.add(pointLight1);
  const pointLight2 = new THREE.PointLight(0xffffff, 0.4, 100);
  pointLight2.position.set(-10, -5, 5);
  scene.add(pointLight2);

  // Create project cards in spiral
  const cards = [];
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const textureLoader = new THREE.TextureLoader();

  const isDark = document.documentElement.classList.contains('dark');
  const borderColor = isDark ? 0x18181b : 0xf4f4f5;

  projects.forEach((project, i) => {
    const geometry = new THREE.BoxGeometry(3.2, 1.8, 0.02);
    const texture = textureLoader.load(project.thumbnail);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.2,
      roughness: 0.5
    });
    const card = new THREE.Mesh(geometry, material);

    // Thin borders
    const borderThickness = 0.015;
    const borderDepth = 0.025;
    const glowMaterial = new THREE.MeshStandardMaterial({
      color: borderColor,
      metalness: 0,
      roughness: 1
    });

    // Add borders
    const borders = [
      { geo: [3.2 + borderThickness * 2, borderThickness, borderDepth], pos: [0, 0.9 + borderThickness / 2, 0] },
      { geo: [3.2 + borderThickness * 2, borderThickness, borderDepth], pos: [0, -0.9 - borderThickness / 2, 0] },
      { geo: [borderThickness, 1.8, borderDepth], pos: [-1.6 - borderThickness / 2, 0, 0] },
      { geo: [borderThickness, 1.8, borderDepth], pos: [1.6 + borderThickness / 2, 0, 0] }
    ];

    borders.forEach(b => {
      const border = new THREE.Mesh(new THREE.BoxGeometry(...b.geo), glowMaterial);
      border.position.set(...b.pos);
      card.add(border);
    });

    const angle = (i / projects.length) * Math.PI * 2;
    const radius = 5;
    const height = i * 1.0 - 2.5;
    card.position.x = Math.cos(angle) * radius;
    card.position.z = Math.sin(angle) * radius;
    card.position.y = height;
    card.lookAt(0, height, 0);
    card.userData = { project, originalY: height, hovered: false };
    cards.push(card);
    scene.add(card);
  });

  // Power BI logo in center
  const logoGroup = new THREE.Group();
  const logoSize = 6.0;
  const svgDataUrl = 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1000px" height="1000px"><path fill="#eda503" d="M38,44H26c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v38 C39,43.552,38.552,44,38,44z"/><path fill="#ffca28" d="M30,44H18c-0.552,0-1-0.448-1-1V15c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v28 C31,43.552,30.552,44,30,44z"/><path fill="#ffe082" d="M22,44H10c-0.552,0-1-0.448-1-1V25c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v18 C23,43.552,22.552,44,22,44z"/></svg>');

  const canvas2D = document.createElement('canvas');
  canvas2D.width = 512;
  canvas2D.height = 512;
  const ctx = canvas2D.getContext('2d');
  const img = new Image();
  img.onload = function() {
    ctx.clearRect(0, 0, 512, 512);
    ctx.drawImage(img, 0, 0, 512, 512);
    const texture = new THREE.CanvasTexture(canvas2D);
    texture.needsUpdate = true;
    const logoMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      metalness: 0.2,
      roughness: 0.6
    });
    const logoPlane = new THREE.Mesh(new THREE.PlaneGeometry(logoSize, logoSize), logoMaterial);
    logoGroup.add(logoPlane);
  };
  img.src = svgDataUrl;
  logoGroup.position.set(0, 0, 0);
  scene.add(logoGroup);

  // Interaction state
  let isDragging = false;
  let previousMouseX = 0, previousMouseY = 0;
  let mouseDownX = 0, mouseDownY = 0;
  let hasMoved = false;
  let rotationY = 0, targetRotationY = 0;
  let cameraOffsetY = 0, targetCameraOffsetY = 0;
  let autoRotate = true;
  let hoveredCard = null;
  let isVisible = true;

  function onMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    if (isDragging) {
      const deltaX = event.clientX - previousMouseX;
      const deltaY = event.clientY - previousMouseY;
      if (Math.abs(event.clientX - mouseDownX) > 5 || Math.abs(event.clientY - mouseDownY) > 5) {
        hasMoved = true;
      }
      targetRotationY -= deltaX * 0.005;
      targetCameraOffsetY += deltaY * 0.01;
      targetCameraOffsetY = Math.max(-5, Math.min(5, targetCameraOffsetY));
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
      autoRotate = false;
    } else {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cards);
      if (hoveredCard && (!intersects.length || intersects[0].object !== hoveredCard)) {
        hoveredCard.userData.hovered = false;
        hoveredCard = null;
        if (infoBox) infoBox.style.opacity = '0';
        canvas.style.cursor = 'grab';
      }
      if (intersects.length > 0) {
        const card = intersects[0].object;
        if (card !== hoveredCard) {
          hoveredCard = card;
          card.userData.hovered = true;
          if (infoBox) {
            infoBox.querySelector('p').textContent = card.userData.project.title;
            infoBox.style.opacity = '1';
          }
          canvas.style.cursor = 'pointer';
        }
      }
    }
  }

  function onMouseDown(event) {
    isDragging = true;
    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
    mouseDownX = event.clientX;
    mouseDownY = event.clientY;
    hasMoved = false;
    canvas.style.cursor = 'grabbing';
  }

  function onMouseUp() {
    isDragging = false;
    canvas.style.cursor = hoveredCard ? 'pointer' : 'grab';
  }

  function onClick() {
    if (hoveredCard && !hasMoved) {
      window.location.href = hoveredCard.userData.project.url;
    }
    hasMoved = false;
  }

  // Event listeners
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('click', onClick);

  // Touch support
  let touchStartX = 0, touchStartY = 0;
  let touchPrevX = 0, touchPrevY = 0;
  let touchMoved = false;

  canvas.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchPrevX = touchStartX;
    touchPrevY = touchStartY;
    touchMoved = false;
    autoRotate = false;
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - touchPrevX;
    const deltaY = e.touches[0].clientY - touchPrevY;
    if (Math.abs(e.touches[0].clientX - touchStartX) > 5 || Math.abs(e.touches[0].clientY - touchStartY) > 5) {
      touchMoved = true;
    }
    targetRotationY -= deltaX * 0.005;
    targetCameraOffsetY += deltaY * 0.01;
    targetCameraOffsetY = Math.max(-5, Math.min(5, targetCameraOffsetY));
    touchPrevX = e.touches[0].clientX;
    touchPrevY = e.touches[0].clientY;
  }, { passive: true });

  canvas.addEventListener('touchend', () => {
    if (!touchMoved && hoveredCard) {
      window.location.href = hoveredCard.userData.project.url;
    }
    touchMoved = false;
  });

  canvas.style.cursor = 'grab';

  // Animation loop with visibility check
  function animate() {
    if (!isVisible) return;
    requestAnimationFrame(animate);

    if (autoRotate) targetRotationY -= 0.003;
    rotationY += (targetRotationY - rotationY) * 0.1;
    cameraOffsetY += (targetCameraOffsetY - cameraOffsetY) * 0.1;
    camera.position.y = 2 + cameraOffsetY;

    cards.forEach((card, i) => {
      const angle = (i / projects.length) * Math.PI * 2 + rotationY;
      const radius = 5;
      card.position.x = Math.cos(angle) * radius;
      card.position.z = Math.sin(angle) * radius;
      card.lookAt(0, card.position.y, 0);

      if (card.userData.hovered) {
        card.position.y += (card.userData.originalY + 0.3 - card.position.y) * 0.1;
        card.scale.x += (1.1 - card.scale.x) * 0.1;
        card.scale.y += (1.1 - card.scale.y) * 0.1;
      } else {
        card.position.y += (card.userData.originalY - card.position.y) * 0.1;
        card.scale.x += (1 - card.scale.x) * 0.1;
        card.scale.y += (1 - card.scale.y) * 0.1;
      }
    });

    logoGroup.lookAt(camera.position);
    logoGroup.rotation.z += 0.003;
    renderer.render(scene, camera);
  }

  animate();

  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  });

  // Pause when not visible (performance)
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
      if (isVisible) animate();
    });
  }, { threshold: 0 });
  visibilityObserver.observe(container);
}
