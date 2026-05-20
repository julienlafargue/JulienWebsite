/* ═══════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════ */
const i18n = {
  en: {
    "nav.about": "About", "nav.experience": "Experience",
    "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact",

    "hero.greeting": "Hello, I'm",
    "hero.role1": "Microsoft Dynamics Consultant",
    "hero.role2": "Full Stack Developer",
    "hero.desc": "Building enterprise CRM solutions and innovative digital products at Capgemini. Epitech 2025 graduate, passionate about meaningful technology.",
    "hero.cta1": "Get in touch", "hero.cta2": "See my work",
    "hero.stat1": "Internships", "hero.stat2": "Epitech Grad", "hero.stat3": "Countries",
    "hero.card.status": "Currently employed", "hero.card.type": "CDI",
    "hero.card.role": "Microsoft Dynamics Consultant",

    "about.label": "About me", "about.title": "Who am I?",
    "about.p1": "I'm a Full Stack Developer & Microsoft Dynamics Consultant, currently working full-time (CDI) at Capgemini — they offered me a permanent position at the end of my internship. I build and configure enterprise CRM solutions, AI chatbots, and Power Platform automations for large-scale clients.",
    "about.p2": "I graduated from Epitech (Promo 2025) as Expert en ingénierie Logiciel — a rigorous 5-year program built entirely on hands-on, project-based learning. No lectures, just building real software from day one.",
    "about.p3": "Before my current role, I built a 3D AI-powered train simulation at Groupe SII, and led a team to create a sign language video platform as my end-of-study project. Outside the office: marathons, rugby, and travel.",

    "info.location": "Location", "info.status": "Status",
    "info.employed": "Full-time at Capgemini",
    "info.degree": "Degree", "info.degree.val": "Expert en ingénierie Logiciel",
    "info.languages": "Languages", "info.interests": "Interests",
    "info.hobbies": "Marathon · Rugby · Travel",

    "exp.label": "Experience", "exp.title": "My Journey",
    "exp.current": "Current position", "exp.featured": "Featured Project",
    "exp.capgemini.role": "Microsoft Dynamics Consultant",
    "exp.capgemini.date": "Oct 2025 – Present",
    "exp.capgemini.desc": "Configuring and deploying Microsoft Dynamics 365 CRM for enterprise clients. Building AI-powered ChatBots via Copilot Studio and Power Platform automations at scale.",
    "exp.sii.role": "Full Stack Developer Intern",
    "exp.sii.date": "Sep 2024 – Feb 2025",
    "exp.sii.desc": "Built an interactive 3D train simulation driven by a predictive maintenance AI. React + Three.js frontend with a Python AI backend.",
    "exp.eoy.role": "Project Manager — End-of-Study",
    "exp.eoy.date": "2022 – 2025",
    "exp.eoy.desc": "Led a team to build a community platform for broadcasting and creating sign language videos — making digital content more accessible. From conception to delivery over 3 years.",
    "exp.cat.role": "Full Stack Developer Intern",
    "exp.cat.date": "Apr – Jul 2023",
    "exp.cat.desc": "Developed Python data pipelines and built interactive 3D simulations using Unity with C#.",
    "exp.iseg.role": "Teaching Assistant",
    "exp.iseg.date": "Apr 2023",
    "exp.iseg.desc": "Guided communication students through web development fundamentals — HTML, CSS, PHP, SQL.",
    "exp.nature.role": "Unity Developer Intern",
    "exp.nature.date": "Jul – Dec 2021",
    "exp.nature.desc": "Developed Kinect motion-tracking modules integrated into Unity 3D environments.",

    "skills.label": "Skills", "skills.title": "Tech Stack",
    "skills.web": "Web Development", "skills.mobile": "Mobile",
    "skills.backend": "Backend", "skills.creative": "3D & Creative",
    "skills.pm": "Project Management", "skills.ai": "AI & Automation",
    "skills.high": "Proficient", "skills.mid": "Intermediate", "skills.low": "Familiar",

    "proj.label": "Projects", "proj.title": "Personal Projects",
    "proj.github": "View all on GitHub",
    "proj.gomoku.title": "Gomoku AI",
    "proj.gomoku.desc": "An artificial intelligence designed to master the Gomoku board game — built using advanced algorithms to compute the optimal move at every turn.",
    "proj.bomberman.title": "Indie Studio — Bomberman",
    "proj.bomberman.desc": "A faithful recreation of the classic Bomberman game, built entirely in C++ with a custom 3D rendering engine using Raylib.",
    "proj.marvin.title": "MarvinDash — Fighter Game",
    "proj.marvin.desc": "A complete fighting game with character selection, combat mechanics, and animations — a passion project exploring game engine fundamentals.",

    "edu.label": "Education", "edu.title": "Formation",
    "edu.epitech.degree": "Expert en ingénierie Logiciel",
    "edu.epitech.promo": "Promo 2025 · Bac+5",
    "edu.epitech.desc": "5-year engineering school built on project-based learning. No traditional lectures — pure hands-on development in teams from day one. The best preparation for the real world.",
    "edu.dublin.degree": "Diploma in IT Management",
    "edu.dublin.desc": "Exchange year in Ireland — deepening IT management knowledge in a fully English-speaking environment, expanding my professional and cultural perspective.",
    "edu.languages": "Languages", "edu.french": "French",
    "edu.english": "English", "edu.native": "Native",

    "int.label": "Beyond work", "int.title": "Beyond the Code",
    "int.marathon": "Marathon",
    "int.marathon.desc": "Paris 2025 Finisher — discipline, endurance, and the joy of pushing limits.",
    "int.rugby": "Rugby",
    "int.rugby.desc": "Team spirit, strategy and resilience — values I carry into every project.",
    "int.football": "Football",
    "int.football.desc": "A lifelong passion — the beautiful game never gets old.",
    "int.travel": "Travel",
    "int.travel.desc": "Exploring new cultures and perspectives. Ireland was just the beginning.",

    "contact.label": "Contact", "contact.title": "Get in touch",
    "contact.sub": "A question, a project, or just want to connect? I'd love to hear from you.",
    "contact.email": "Email", "contact.phone": "Phone",

    "footer.text": "Designed & built with ❤️ — Julien Lafargue 2025",
  },

  fr: {
    "nav.about": "À propos", "nav.experience": "Expériences",
    "nav.skills": "Compétences", "nav.projects": "Projets", "nav.contact": "Contact",

    "hero.greeting": "Bonjour, je suis",
    "hero.role1": "Consultant Microsoft Dynamics",
    "hero.role2": "Développeur Full Stack",
    "hero.desc": "Je construis des solutions CRM d'entreprise et des produits numériques innovants chez Capgemini. Diplômé Epitech 2025, passionné par la technologie utile.",
    "hero.cta1": "Me contacter", "hero.cta2": "Voir mes projets",
    "hero.stat1": "Stages", "hero.stat2": "Promo Epitech", "hero.stat3": "Pays",
    "hero.card.status": "En poste", "hero.card.type": "CDI",
    "hero.card.role": "Consultant Microsoft Dynamics",

    "about.label": "À propos", "about.title": "Qui suis-je ?",
    "about.p1": "Je suis Développeur Full Stack & Consultant Microsoft Dynamics, actuellement en CDI chez Capgemini — recrutés à la suite de mon stage. Je configure et déploie des solutions CRM d'entreprise, des ChatBots IA et des automatisations Power Platform pour des clients grands comptes.",
    "about.p2": "Diplômé d'Epitech (Promo 2025) avec le titre d'Expert en ingénierie Logiciel — un cursus de 5 ans entièrement basé sur l'apprentissage par projet. Pas de cours magistraux, que du concret dès le premier jour.",
    "about.p3": "Avant mon poste actuel, j'ai créé une simulation de train 3D basée sur l'IA chez Groupe SII, et j'ai dirigé une équipe pour créer une plateforme de vidéos en langue des signes. En dehors du bureau : marathons, rugby et voyages.",

    "info.location": "Localisation", "info.status": "Statut",
    "info.employed": "CDI chez Capgemini",
    "info.degree": "Diplôme", "info.degree.val": "Expert en ingénierie Logiciel",
    "info.languages": "Langues", "info.interests": "Centres d'intérêt",
    "info.hobbies": "Marathon · Rugby · Voyages",

    "exp.label": "Expériences", "exp.title": "Mon Parcours",
    "exp.current": "Poste actuel", "exp.featured": "Projet phare",
    "exp.capgemini.role": "Consultant Microsoft Dynamics",
    "exp.capgemini.date": "Oct. 2025 – Présent",
    "exp.capgemini.desc": "Configuration et déploiement de Microsoft Dynamics 365 CRM pour des clients grands comptes. Création de ChatBots IA via Copilot Studio et automatisations Power Platform à grande échelle.",
    "exp.sii.role": "Stage Développeur Full Stack",
    "exp.sii.date": "Sept. 2024 – Fév. 2025",
    "exp.sii.desc": "Création d'une simulation de train 3D interactive pilotée par une IA de maintenance prédictive. Frontend React + Three.js et backend Python/IA.",
    "exp.eoy.role": "Chef de Projet — Projet de Fin d'Étude",
    "exp.eoy.date": "2022 – 2025",
    "exp.eoy.desc": "Direction d'une équipe pour créer une plateforme communautaire de diffusion et création de vidéos en langue des signes. De la conception à la livraison sur 3 ans.",
    "exp.cat.role": "Stage Développeur Full Stack",
    "exp.cat.date": "Avr. – Juil. 2023",
    "exp.cat.desc": "Développement de pipelines Python et création de simulations 3D interactives avec Unity en C#.",
    "exp.iseg.role": "Accompagnateur Pédagogique",
    "exp.iseg.date": "Avr. 2023",
    "exp.iseg.desc": "Accompagnement d'étudiants en communication dans leurs premiers pas en développement web — HTML, CSS, PHP, SQL.",
    "exp.nature.role": "Stage Développeur Unity",
    "exp.nature.date": "Juil. – Déc. 2021",
    "exp.nature.desc": "Développement de modules de capture de mouvement Kinect intégrés dans des environnements Unity 3D.",

    "skills.label": "Compétences", "skills.title": "Stack Technique",
    "skills.web": "Développement Web", "skills.mobile": "Mobile",
    "skills.backend": "Backend", "skills.creative": "3D & Créatif",
    "skills.pm": "Gestion de Projet", "skills.ai": "IA & Automatisation",
    "skills.high": "Maîtrisé", "skills.mid": "Intermédiaire", "skills.low": "Notions",

    "proj.label": "Projets", "proj.title": "Projets Personnels",
    "proj.github": "Voir sur GitHub",
    "proj.gomoku.title": "Gomoku AI",
    "proj.gomoku.desc": "Une intelligence artificielle conçue pour maîtriser le jeu de Gomoku — construite avec des algorithmes avancés pour calculer le coup optimal à chaque tour.",
    "proj.bomberman.title": "Indie Studio — Bomberman",
    "proj.bomberman.desc": "Une reproduction fidèle du jeu Bomberman classique, entièrement en C++ avec un moteur de rendu 3D personnalisé utilisant Raylib.",
    "proj.marvin.title": "MarvinDash — Jeu de Combat",
    "proj.marvin.desc": "Un jeu de combat complet avec sélection de personnages, mécaniques de combat et animations — un projet passion explorant les fondamentaux du moteur de jeu.",

    "edu.label": "Formation", "edu.title": "Formation",
    "edu.epitech.degree": "Expert en ingénierie Logiciel",
    "edu.epitech.promo": "Promo 2025 · Bac+5",
    "edu.epitech.desc": "École d'ingénieurs de 5 ans basée sur l'apprentissage par projet. Pas de cours magistraux — du développement en équipe, en conditions réelles, dès le premier jour.",
    "edu.dublin.degree": "Diplôme en Gestion de l'IT",
    "edu.dublin.desc": "Année d'échange en Irlande — approfondissement en gestion de l'IT dans un environnement anglophone, élargissement de ma perspective professionnelle et culturelle.",
    "edu.languages": "Langues", "edu.french": "Français",
    "edu.english": "Anglais", "edu.native": "Natif",

    "int.label": "En dehors du travail", "int.title": "Au-delà du Code",
    "int.marathon": "Marathon",
    "int.marathon.desc": "Finisher Paris 2025 — discipline, endurance et le plaisir de repousser ses limites.",
    "int.rugby": "Rugby",
    "int.rugby.desc": "Esprit d'équipe, stratégie et résilience — des valeurs que j'apporte dans chaque projet.",
    "int.football": "Football",
    "int.football.desc": "Une passion depuis l'enfance — le beau jeu ne vieillit jamais.",
    "int.travel": "Voyages",
    "int.travel.desc": "Explorer de nouvelles cultures et perspectives. L'Irlande n'était qu'un début.",

    "contact.label": "Contact", "contact.title": "Prenons contact",
    "contact.sub": "Une question, un projet ou juste envie d'échanger ? Je serai ravi de vous répondre.",
    "contact.email": "E-mail", "contact.phone": "Téléphone",

    "footer.text": "Conçu & développé avec ❤️ — Julien Lafargue 2025",
  }
};

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let lang  = localStorage.getItem('jl-lang')  || 'en';
let theme = localStorage.getItem('jl-theme') || 'dark';

/* ═══════════════════════════════════════════
   LANGUAGE
═══════════════════════════════════════════ */
function applyLang(l) {
  lang = l;
  localStorage.setItem('jl-lang', l);
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = i18n[l][el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.getElementById('langToggle').textContent = l === 'en' ? 'FR' : 'EN';
  document.title = l === 'en'
    ? 'Julien Lafargue — Microsoft Dynamics Consultant & Full Stack Developer'
    : 'Julien Lafargue — Consultant Microsoft Dynamics & Développeur Full Stack';
}

document.getElementById('langToggle').addEventListener('click', () => applyLang(lang === 'en' ? 'fr' : 'en'));

/* ═══════════════════════════════════════════
   THEME
═══════════════════════════════════════════ */
function applyTheme(t) {
  theme = t;
  localStorage.setItem('jl-theme', t);
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeIcon').className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

document.getElementById('themeToggle').addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));

/* ═══════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ═══════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 20), { passive: true });

/* Active nav link */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ═══════════════════════════════════════════
   REVEAL ANIMATIONS
═══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal-up, .reveal-clip').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════════ */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = target > 100 ? 1800 : 1200;
  const start = Date.now();

  function tick() {
    const t = Math.min((Date.now() - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(animateCount);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.6 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

/* ═══════════════════════════════════════════
   LANGUAGE BAR ANIMATION
═══════════════════════════════════════════ */
const langBarObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.lang-fill').forEach(b => b.classList.add('animated'));
      langBarObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const langWrap = document.querySelector('.lang-wrap');
if (langWrap) langBarObs.observe(langWrap);

/* ═══════════════════════════════════════════
   CURSOR FOLLOWER
═══════════════════════════════════════════ */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = -100, my = -100, rx = -100, ry = -100;

window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .timeline-card, .project-card, .interest-card, .contact-item').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorRing.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorRing.classList.remove('hover'); });
});

/* ═══════════════════════════════════════════
   HERO BLOB PARALLAX
═══════════════════════════════════════════ */
const heroSection = document.getElementById('hero');
const blobs = document.querySelectorAll('.blob');

heroSection.addEventListener('mousemove', e => {
  const rect = heroSection.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 28;
  const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 28;
  blobs.forEach((b, i) => {
    const f = (i + 1) * 0.35;
    b.style.transform = `translate(${x * f}px, ${y * f}px)`;
  });
}, { passive: true });

heroSection.addEventListener('mouseleave', () => {
  blobs.forEach(b => b.style.transform = '');
});

/* ═══════════════════════════════════════════
   3D TILT ON CARDS
═══════════════════════════════════════════ */
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r   = card.getBoundingClientRect();
    const x   = ((e.clientX - r.left) / r.width  - 0.5) * 10;
    const y   = ((e.clientY - r.top)  / r.height - 0.5) * 10;
    card.style.transform = `perspective(900px) rotateX(${-y}deg) rotateY(${x}deg) translateZ(6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ═══════════════════════════════════════════
   MAGNETIC BUTTONS
═══════════════════════════════════════════ */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r  = btn.getBoundingClientRect();
    const x  = (e.clientX - r.left - r.width  / 2) * 0.3;
    const y  = (e.clientY - r.top  - r.height / 2) * 0.3;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ═══════════════════════════════════════════
   SKILL TAG STAGGER
═══════════════════════════════════════════ */
const skillCatObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stag').forEach((tag, i) => {
        setTimeout(() => {
          tag.style.opacity = '1';
          tag.style.transform = 'none';
        }, i * 50);
      });
      skillCatObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-cat').forEach(cat => {
  cat.querySelectorAll('.stag').forEach(t => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(10px)';
    t.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
  });
  skillCatObs.observe(cat);
});

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
applyTheme(theme);
applyLang(lang);
