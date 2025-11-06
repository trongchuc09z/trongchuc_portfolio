// Simple interactivity: theme toggle, language toggle, year, form validation, smooth scrolling
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const langToggle = document.getElementById('langToggle');
  const year = document.getElementById('year');
  const form = document.getElementById('contactForm');

  // Language translations
  const translations = {
    vi: {
      nav: {
        intro: 'Giới thiệu',
        projects: 'Dự án',
        experience: 'Kinh nghiệm',
        skills: 'Kỹ năng'
      },
      hero: {
        greeting: 'Xin chào, tôi là',
        description: 'Mình là một Game Developer đam mê tạo ra những trải nghiệm tương tác độc đáo. Mình yêu thích việc kết hợp lập trình, thiết kế và sáng tạo để biến ý tưởng thành những trò chơi sống động. Với nền tảng vững chắc về ngôn ngữ lập trình và tư duy logic, mình luôn nỗ lực học hỏi công nghệ mới để mang đến sản phẩm chất lượng và hấp dẫn hơn.',
        viewProjects: 'Xem dự án',
        viewSkills: 'Kỹ năng',
        downloadCV: 'Tải xuống CV'
      },
      projects: {
        title: 'Dự án tiêu biểu',
        project1Title: 'Game platform bằng Unity',
        project1Desc: 'Đây là một trò chơi hành động , trong đó mục tiêu cốt lõi là di chuyển nhân vật người chơi giữa các điểm trong môi trường và đánh bại quái vật để mở khóa các kĩ năng tiềm ẩn.',
        project2Title: 'Game online bằng Unity',
        project2Desc: 'Là một trò chơi hành động lấy ý tưởng từ game PUBG, mỗi đội sẽ có từ 3 đê 5 thành viên được trang bị súng và lựu đạn, nhiệm vụ là sẽ tiêu diệt kẻ địch nếu đội nào đạt được tổng số kill nhất định trước sẽ chiến thắng.'
      },
      about: {
        subtitle: 'ABOUT',
        title: 'Học vấn và kinh nghiệm của mình',
        educationTitle: 'Học vấn',
        education1Name: 'Học viện Công nghệ Bưu chính Viễn thông',
        education1Status: 'Hiện vẫn đang theo học',
        education1Desc: 'Sinh viên ngành Công nghệ đa phương tiện, chuyên ngành Phát triển ứng dụng / Game.',
        education2Name: 'Trung học Phổ thông Thanh Miện',
        certificateTitle: 'Chứng chỉ'
      },
      skills: {
        title: 'Kỹ năng',
        professionalTitle: 'Kỹ năng chuyên môn',
        softTitle: 'Kỹ năng mềm',
        skill1: 'Ngôn ngữ: C / C++ / C# / Java / Python',
        skill6: 'TIN HỌC VĂN PHÒNG',
        skill6Detail: 'Word, Excel, Powerpoint, Canva',
        skill7: 'Công cụ hỗ trợ: Blender, Photoshop, Figma',
        skill8: 'Quản lý và làm việc đội nhóm',
        skill9: 'Điều hành cuộc họp, phân chia nhiệm vụ'
      },
      footer: {
        rights: '. All rights reserved.',
        email: 'Email',
        phone: 'Điện thoại',
        address: 'Địa chỉ'
      }
    },
    en: {
      nav: {
        intro: 'About',
        projects: 'Projects',
        experience: 'Experience',
        skills: 'Skills'
      },
      hero: {
        greeting: 'Hello, I am',
        description: 'I am a passionate Game Developer who loves creating unique interactive experiences. I enjoy combining programming, design, and creativity to turn ideas into vibrant games. With a solid foundation in programming languages and logical thinking, I constantly strive to learn new technologies to deliver higher quality and more engaging products.',
        viewProjects: 'View Projects',
        viewSkills: 'Skills',
        downloadCV: 'Download CV'
      },
      projects: {
        title: 'Featured Projects',
        project1Title: 'Unity Platform Game',
        project1Desc: 'This is an action game where the core objective is to move the player character between points in the environment and defeat monsters to unlock hidden skills.',
        project2Title: 'Unity Online Game',
        project2Desc: 'An action game inspired by PUBG, each team has 3 to 5 members equipped with guns and grenades. The mission is to eliminate enemies - the team that reaches the required kill count first wins.'
      },
      about: {
        subtitle: 'ABOUT',
        title: 'My Education and Experience',
        educationTitle: 'Education',
        education1Name: 'Posts and Telecommunications Institute of Technology',
        education1Status: 'Currently studying',
        education1Desc: 'Student majoring in Multimedia Technology, specializing in Application/Game Development.',
        education2Name: 'Thanh Mien High School',
        certificateTitle: 'Certificates'
      },
      skills: {
        title: 'Skills',
        professionalTitle: 'Professional Skills',
        softTitle: 'Soft Skills',
        skill1: 'Languages: C / C++ / C# / Java / Python',
        skill6: 'OFFICE SKILLS',
        skill6Detail: 'Word, Excel, Powerpoint, Canva',
        skill7: 'Support Tools: Blender, Photoshop, Figma',
        skill8: 'Team management and collaboration',
        skill9: 'Meeting management, task delegation'
      },
      footer: {
        rights: '. All rights reserved.',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      }
    }
  };

  // set year
  if(year) year.textContent = new Date().getFullYear();

  // Language toggle
  function setLanguage(lang) {
    const t = translations[lang];
    
    // Update nav
    document.querySelectorAll('.nav a')[0].textContent = t.nav.intro;
    document.querySelectorAll('.nav a')[1].textContent = t.nav.projects;
    document.querySelectorAll('.nav a')[2].textContent = t.nav.experience;
    document.querySelectorAll('.nav a')[3].textContent = t.nav.skills;
    
    // Update hero
    document.querySelector('.hero h1').innerHTML = t.hero.greeting + ' <span class="accent">Nguyễn Trọng Chức</span>';
    document.querySelector('.lead').textContent = t.hero.description;
    document.querySelectorAll('.hero-actions .btn')[0].textContent = t.hero.viewProjects;
    document.querySelectorAll('.hero-actions .btn')[1].textContent = t.hero.viewSkills;
    document.querySelectorAll('.hero-actions .btn')[2].textContent = t.hero.downloadCV;
    
    // Update projects
    document.querySelector('#projects h2').textContent = t.projects.title;
    document.querySelectorAll('.project-card h3')[0].textContent = t.projects.project1Title;
    document.querySelectorAll('.project-card p')[0].textContent = t.projects.project1Desc;
    document.querySelectorAll('.project-card h3')[1].textContent = t.projects.project2Title;
    document.querySelectorAll('.project-card p')[1].textContent = t.projects.project2Desc;
    
    // Update about
    document.querySelector('.section-sub').textContent = t.about.subtitle;
    document.querySelector('.section-title').textContent = t.about.title;
    document.querySelectorAll('.col-title')[0].textContent = t.about.educationTitle;
    document.querySelectorAll('.about-col .card h4')[0].textContent = t.about.education1Name;
    document.querySelectorAll('.about-col .card .muted')[1].textContent = t.about.education1Status;
    document.querySelectorAll('.about-col .card p')[1].textContent = t.about.education1Desc;
    document.querySelectorAll('.about-col .card h4')[1].textContent = t.about.education2Name;
    document.querySelectorAll('.col-title')[1].textContent = t.about.certificateTitle;
    
    // Update skills
    document.querySelector('#skills h2').textContent = t.skills.title;
    document.querySelectorAll('.skills-category-title')[0].textContent = t.skills.professionalTitle;
    document.querySelectorAll('.skills-category-title')[1].textContent = t.skills.softTitle;
    document.querySelectorAll('.skill-box')[0].textContent = t.skills.skill1;
    document.querySelectorAll('.skill-box')[5].innerHTML = '<strong>' + t.skills.skill6 + '</strong><br/>' + t.skills.skill6Detail;
    document.querySelectorAll('.skill-box')[6].textContent = t.skills.skill7;
    document.querySelectorAll('.skill-box')[7].textContent = t.skills.skill8;
    document.querySelectorAll('.skill-box')[8].textContent = t.skills.skill9;
    
    // Update footer
    document.querySelector('.footer-tagline').textContent = t.footer.rights;
    
    // Update language toggle button
    langToggle.textContent = lang === 'vi' ? '🇻🇳' : '🇺🇸';
    langToggle.setAttribute('title', lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt');
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
    document.documentElement.setAttribute('lang', lang === 'vi' ? 'vi' : 'en');
  }

  // Initialize language
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  setLanguage(savedLang);
  
  // Language toggle click handler
  if(langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = localStorage.getItem('preferredLang') || 'vi';
      const newLang = currentLang === 'vi' ? 'en' : 'vi';
      setLanguage(newLang);
    });
  }

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

  // Scroll reveal animation for sections
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
  });

  // Also observe hero section
  const heroSection = document.querySelector('.hero');
  if(heroSection) {
    heroSection.style.opacity = '0';
    heroSection.style.transform = 'translateY(30px)';
    heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        } else {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(30px)';
        }
      });
    }, observerOptions);
    
    heroObserver.observe(heroSection);
  }
})();