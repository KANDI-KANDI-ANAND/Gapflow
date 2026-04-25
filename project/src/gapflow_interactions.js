
/*! Gapflow.ai Interactions v0.1.0 (desktop-first) */
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /** ------------------------------
   *  Scroll Reveal (fade-up)
   *  Add class .reveal to any section to enable.
   *  CSS should animate .reveal.reveal-visible
   * ------------------------------ */
  function setupScrollReveal(){
    const items = Array.from(document.querySelectorAll('section.reveal, [data-reveal]'));
    if (!('IntersectionObserver' in window) || prefersReduced){
      items.forEach(el => el.classList.add('reveal-visible'));
      return;
    }
    const io = new IntersectionObserver((entries)=>{
      for (const e of entries){
        if (e.isIntersecting){
          e.target.classList.add('reveal-visible');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
    items.forEach(el => io.observe(el));
  }

  /** ------------------------------
   *  Use-Case Tabs
   *  Expected markup:
   *  .tabs > button[data-tab="marketing"]  (toggle buttons)
   *  [data-tab-panel="marketing"]          (panel container)
   * ------------------------------ */
  function setupTabs(){
    const tabsRoot = document.querySelector('.tabs');
    if(!tabsRoot) return;
    const buttons = Array.from(tabsRoot.querySelectorAll('button[data-tab]'));
    const panels  = Array.from(document.querySelectorAll('[data-tab-panel]'));
    if(buttons.length === 0 || panels.length === 0) return;

    function activate(id){
      buttons.forEach(b => {
        const on = b.getAttribute('data-tab') === id;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.setAttribute('tabindex', on ? '0' : '-1');
      });
      panels.forEach(p => {
        const on = p.getAttribute('data-tab-panel') === id;
        p.style.display = on ? '' : 'none';
        p.classList.toggle('panel-active', on);
      });
    }

    // keyboard support
    buttons.forEach((b, i) => {
      b.addEventListener('click', () => activate(b.getAttribute('data-tab')));
      b.addEventListener('keydown', (e)=>{
        const idx = buttons.indexOf(document.activeElement);
        if (e.key === 'ArrowRight'){ buttons[(idx+1)%buttons.length].focus(); }
        if (e.key === 'ArrowLeft'){  buttons[(idx-1+buttons.length)%buttons.length].focus(); }
        if (e.key === 'Enter' || e.key === ' '){
          activate(b.getAttribute('data-tab'));
        }
      });
    });

    // initial
    const first = buttons[0]?.getAttribute('data-tab');
    if(first) activate(first);
  }

  /** ------------------------------
   *  Hero Flow Canvas Animation
   *  Works with: <canvas id="flow-hero"></canvas>
   *  If Bolt injects nodes/edges as JSON to #flow-hero.dataset.graph,
   *  it will draw edges; otherwise shows constellation particles.
   * ------------------------------ */
  function setupHeroFlow(){
    const canvas = document.getElementById('flow-hero');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, dpr;

    function resize(){
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.floor(rect.width * dpr);
      h = Math.floor(360 * dpr); // fixed height as per CSS
      canvas.width = w; canvas.height = h;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = '360px';
    }
    resize();
    window.addEventListener('resize', resize);

    // Particle constellation fallback
    const COUNT = 60;
    const parts = new Array(COUNT).fill(0).map(()=> ({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
      r: 1 + Math.random()*2
    }));

    const mouse = { x:-9999, y:-9999 };
    canvas.addEventListener('mousemove', (e)=>{
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (window.devicePixelRatio || 1);
      mouse.y = (e.clientY - rect.top) * (window.devicePixelRatio || 1);
    });
    canvas.addEventListener('mouseleave', ()=>{ mouse.x = mouse.y = -9999; });

    const hasGraph = !!canvas.dataset.graph;
    let graph = null;
    if (hasGraph){
      try { graph = JSON.parse(canvas.dataset.graph); } catch(e){ graph = null; }
    }

    function drawGradientBg(){
      const g = ctx.createLinearGradient(0,0,w,h);
      g.addColorStop(0, 'rgba(107,75,255,0.08)');
      g.addColorStop(1, 'rgba(154,104,255,0.04)');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);
    }

    function step(){
      ctx.clearRect(0,0,w,h);
      drawGradientBg();

      if (graph && Array.isArray(graph.nodes) && Array.isArray(graph.edges)){
        // Draw nodes
        for(const n of graph.nodes){
          const x = n.x * dpr, y = n.y * dpr;
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI*2);
          ctx.fillStyle = (n.state === 'success') ? 'rgba(50,211,138,0.9)' :
                          (n.state === 'active') ? 'rgba(255,255,255,0.95)' :
                          'rgba(255,255,255,0.6)';
          ctx.fill();
          // Pulse ring on hover
          const dx = mouse.x - x, dy = mouse.y - y;
          if (dx*dx + dy*dy < 30*30*dpr){
            ctx.beginPath(); ctx.arc(x,y,12,0,Math.PI*2);
            ctx.strokeStyle = 'rgba(201,198,249,0.45)'; ctx.lineWidth = 2; ctx.stroke();
          }
        }
        // Draw edges
        ctx.lineWidth = 1.2;
        for(const e of graph.edges){
          const a = graph.nodes.find(n=>n.id===e.from);
          const b = graph.nodes.find(n=>n.id===e.to);
          if(!a||!b) continue;
          ctx.strokeStyle = 'rgba(201,198,249,0.35)';
          ctx.beginPath();
          ctx.moveTo(a.x * dpr, a.y * dpr);
          ctx.lineTo(b.x * dpr, b.y * dpr);
          ctx.stroke();
        }
      } else {
        // Constellation mode
        parts.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x<0||p.x>w) p.vx*=-1;
          if (p.y<0||p.y>h) p.vy*=-1;
        });
        // Connect near particles
        for (let i=0;i<COUNT;i++){
          for (let j=i+1;j<COUNT;j++){
            const a=parts[i], b=parts[j];
            const dx=a.x-b.x, dy=a.y-b.y;
            const dist = Math.hypot(dx,dy);
            if (dist < 120){
              const alpha = 1 - (dist/120);
              ctx.strokeStyle = `rgba(201,198,249,${0.25*alpha})`;
              ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
            }
          }
        }
        // Draw particles
        parts.forEach(p=>{
          ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
          ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fill();
        });
      }

      if (!prefersReduced) requestAnimationFrame(step);
    }
    if (!prefersReduced) requestAnimationFrame(step);
  }

  /** ------------------------------
   *  Init
   * ------------------------------ */
  document.addEventListener('DOMContentLoaded', function(){
    setupScrollReveal();
    setupTabs();
    setupHeroFlow();
  });

})();
