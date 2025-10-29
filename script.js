// Kai Odds — simple interactions: theme toggle + demo bet add
document.addEventListener('DOMContentLoaded', ()=> {
  const modeBtn = document.getElementById('modeToggle');
  const body = document.body;

  // restore theme
  const saved = localStorage.getItem('kai_theme') || 'light';
  body.classList.toggle('dark', saved === 'dark');
  modeBtn.textContent = saved === 'dark' ? '☀️' : '🌙';

  modeBtn.addEventListener('click', ()=>{
    const isDark = body.classList.toggle('dark');
    localStorage.setItem('kai_theme', isDark ? 'dark' : 'light');
    modeBtn.textContent = isDark ? '☀️' : '🌙';
  });

  // demo: clicking mini odds adds to bet slip (visual only)
  document.querySelectorAll('.mini').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const slip = document.querySelector('.bet-slip');
      const empty = slip.querySelector('.empty');
      if (empty) empty.remove();
      const el = document.createElement('div');
      el.className = 'slip-item glass';
      el.style.marginBottom='8px';
      el.style.padding='8px';
      el.innerHTML = '<strong>Selection</strong><div class="muted small">1 x stake</div><div style="margin-top:8px"><button class="btn outline" onclick="this.parentElement.parentElement.remove()">Remove</button></div>';
      slip.appendChild(el);
    });
  });
});
