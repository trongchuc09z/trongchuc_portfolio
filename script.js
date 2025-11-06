// Simple interactivity: theme toggle, year, form validation, smooth scrolling
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  const form = document.getElementById('contactForm');

  // set year
  if(year) year.textContent = new Date().getFullYear();

  // theme: remember in localStorage
  function setTheme(isLight){
    if(isLight) document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
    toggle.textContent = isLight ? '🌞' : '🌙';
    localStorage.setItem('prefLight', isLight ? '1' : '0');
  }
  const pref = localStorage.getItem('prefLight');
  setTheme(pref === '1');
  toggle.addEventListener('click', ()=> setTheme(!document.documentElement.classList.contains('light')));

  // form validation (demo): show success message and reset
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name||!email||!message){
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
      }
      // In real project, send via API. Here we just simulate.
      alert('Cảm ơn ' + name + '! Tin nhắn đã được gửi (giả lập).');
      form.reset();
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#') return;
      const el = document.querySelector(href);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // make header fixed (add .scrolled) when user scrolls down; add body padding to avoid layout jump
  const header = document.querySelector('.site-header');
  if(header){
    const onScroll = () => {
      const threshold = 40; // px scrolled before fixing header
      if(window.scrollY > threshold){
        if(!header.classList.contains('scrolled')){
          header.classList.add('scrolled');
          // prevent content jump by adding top padding equal to header height
          document.body.style.paddingTop = header.offsetHeight + 'px';
        }
      } else {
        if(header.classList.contains('scrolled')){
          header.classList.remove('scrolled');
          document.body.style.paddingTop = '';
        }
      }
    };
    // run once to initialize based on current scroll position
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    // also handle resize (header height might change)
    window.addEventListener('resize', () => {
      if(header.classList.contains('scrolled')){
        document.body.style.paddingTop = header.offsetHeight + 'px';
      }
    });
  }
})();