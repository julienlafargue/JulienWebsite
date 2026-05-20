/* ═══════════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════════ */
const i18n = {
  en: {
    "nav.about":      "About",
    "nav.experience": "Experience",
    "nav.skills":     "Skills",
    "nav.education":  "Education",
    "nav.contact":    "Contact",

    "hero.available": "Open to opportunities from October 2025",
    "hero.title":     "Full Stack Developer & Project Manager",
    "hero.desc":      "Epitech student building innovative digital solutions — web, mobile, AI & project management across multiple industries.",
    "hero.cta1":      "Get in touch",
    "hero.cta2":      "View my work",
    "hero.stat1":     "Internships",
    "hero.stat2":     "Years at Epitech",
    "hero.stat3":     "Countries",

    "about.label":     "// about me",
    "about.title":     "Who am I?",
    "about.p1":        "I'm a 5th-year Epitech student specializing in Full Stack Development and Project Management, currently looking for my first position from October 2025.",
    "about.p2":        "My journey spans Unity game development, AI-based train simulations, CRM configuration at Capgemini, and building a sign language community platform from scratch. I love tackling complex problems in dynamic, innovative teams.",
    "about.p3":        "I spent a year at the Technological University of Dublin, sharpening my English and expanding my perspective. When I'm not coding, you'll find me on a marathon track (Paris 2025 finisher! 🏅), a rugby pitch, or exploring new countries.",
    "about.location":  "Location",
    "about.school":    "School",
    "about.availability": "Availability",
    "about.from":      "From October 2025",
    "about.languages": "Languages",
    "about.interests": "Interests",
    "about.hobbies":   "Marathon · Rugby · Football · Travel",

    "exp.label":  "// experience",
    "exp.title":  "My Journey",
    "exp.capgemini.role": "CRM Consultant Intern",
    "exp.capgemini.date": "Mar 2025 – Sep 2025",
    "exp.capgemini.desc": "Configured Microsoft Dynamics CRM and built an AI ChatBot using Copilot Studio. Worked in an enterprise environment on large-scale CRM deployments.",
    "exp.sii.role": "Full Stack Developer Intern",
    "exp.sii.date": "Sep 2024 – Feb 2025",
    "exp.sii.desc": "Built an interactive 3D train simulation powered by a predictive maintenance AI. Combined React frontend with Three.js 3D rendering and a Python AI backend.",
    "exp.eoy.badge": "Featured Project",
    "exp.eoy.role": "Project Manager — End-of-Study Project",
    "exp.eoy.date": "2022 – 2025",
    "exp.eoy.desc": "Led the creation of a community platform for broadcasting and creating sign language videos — making digital content more accessible. Managed a full development team from conception to delivery.",
    "exp.cat.role": "Full Stack Developer Intern",
    "exp.cat.date": "Apr 2023 – Jul 2023",
    "exp.cat.desc": "Developed Python programs and data pipelines, and built interactive simulations using Unity 3D with C#.",
    "exp.iseg.role": "Teaching Assistant",
    "exp.iseg.date": "Apr 2023",
    "exp.iseg.desc": "Guided communication students through their first steps in web development, teaching fundamentals of HTML, CSS, PHP, and SQL.",
    "exp.nature.role": "Unity Developer Intern",
    "exp.nature.date": "Jul 2021 – Dec 2021",
    "exp.nature.desc": "Developed interactive Kinect motion-tracking modules integrated into Unity 3D environments.",

    "skills.label":    "// skills",
    "skills.title":    "Tech Stack",
    "skills.web":      "Web Development",
    "skills.mobile":   "Mobile Development",
    "skills.backend":  "Backend & Databases",
    "skills.creative": "3D & Creative",
    "skills.pm":       "Project Management",
    "skills.ai":       "AI & Automation",
    "skills.proficient":   "Proficient",
    "skills.intermediate": "Intermediate",
    "skills.familiar":     "Familiar",

    "edu.label":   "// education",
    "edu.title":   "Education",
    "edu.epitech.degree": "Expert in Information Technology",
    "edu.epitech.desc":   "5-year engineering program focused on project-based learning. No traditional courses — pure hands-on development in teams, building real-world applications from day one.",
    "edu.dublin.degree":  "Diploma in IT Management (CPD in Business Computing)",
    "edu.dublin.desc":    "International exchange year in Ireland, deepening expertise in IT management and business computing while immersing in an English-speaking environment.",
    "edu.languages": "Languages",
    "edu.french":    "French",
    "edu.english":   "English",
    "edu.native":    "Native",

    "int.label":   "// interests",
    "int.title":   "Beyond the Code",
    "int.marathon":      "Marathon",
    "int.marathon.desc": "Paris 2025 Finisher — running as a discipline of consistency and endurance.",
    "int.rugby":         "Rugby",
    "int.rugby.desc":    "Team sport that taught me collaboration, strategy, and resilience.",
    "int.football":      "Football",
    "int.football.desc": "Passion since childhood — the beautiful game never gets old.",
    "int.travel":        "Travel",
    "int.travel.desc":   "Exploring new cultures and perspectives. Ireland was just the beginning.",

    "contact.label": "// contact",
    "contact.title": "Let's Work Together",
    "contact.sub":   "I'm actively looking for opportunities from October 2025. Feel free to reach out!",
    "contact.email": "Email",
    "contact.phone": "Phone",

    "footer.text": "Designed & built with ❤️ — Julien Lafargue 2025",
  },

  fr: {
    "nav.about":      "À propos",
    "nav.experience": "Expériences",
    "nav.skills":     "Compétences",
    "nav.education":  "Formation",
    "nav.contact":    "Contact",

    "hero.available": "Disponible à partir d'octobre 2025",
    "hero.title":     "Développeur Full Stack & Chef de Projet",
    "hero.desc":      "Étudiant Epitech passionné par la création de solutions numériques innovantes — web, mobile, IA et gestion de projet.",
    "hero.cta1":      "Me contacter",
    "hero.cta2":      "Voir mon parcours",
    "hero.stat1":     "Stages",
    "hero.stat2":     "Ans à Epitech",
    "hero.stat3":     "Pays",

    "about.label":    "// à propos",
    "about.title":    "Qui suis-je ?",
    "about.p1":       "Je suis étudiant en 5e année à Epitech, spécialisé en Développement Full Stack et Gestion de Projet. Je suis à la recherche de mon premier emploi à partir d'octobre 2025.",
    "about.p2":       "Mon parcours couvre le développement Unity, la simulation de train basée sur l'IA, la configuration CRM chez Capgemini, et la création d'une plateforme communautaire en langue des signes. J'aime relever des défis complexes au sein d'équipes dynamiques.",
    "about.p3":       "J'ai passé une année à la Technological University of Dublin pour perfectionner mon anglais et élargir ma perspective. En dehors du code, je cours des marathons (finisher Paris 2025 ! 🏅), je joue au rugby et j'explore de nouveaux pays.",
    "about.location":  "Localisation",
    "about.school":    "École",
    "about.availability": "Disponibilité",
    "about.from":      "À partir d'octobre 2025",
    "about.languages": "Langues",
    "about.interests": "Centres d'intérêt",
    "about.hobbies":   "Marathon · Rugby · Football · Voyages",

    "exp.label":  "// expériences",
    "exp.title":  "Mon Parcours",
    "exp.capgemini.role": "Stage Consultant CRM",
    "exp.capgemini.date": "Mars 2025 – Sept. 2025",
    "exp.capgemini.desc": "Configuration du CRM Microsoft Dynamics et création d'un ChatBot IA via Copilot Studio. Travail en environnement grand compte sur des déploiements CRM à grande échelle.",
    "exp.sii.role": "Stage Développeur Full Stack",
    "exp.sii.date": "Sept. 2024 – Fév. 2025",
    "exp.sii.desc": "Création d'une simulation de train interactive 3D alimentée par une IA de maintenance prédictive. Combinaison d'un frontend React avec Three.js et d'un backend Python/IA.",
    "exp.eoy.badge": "Projet phare",
    "exp.eoy.role": "Chef de Projet — Projet de Fin d'Étude",
    "exp.eoy.date": "2022 – 2025",
    "exp.eoy.desc": "Direction de la création d'une plateforme communautaire de diffusion et création de vidéos en langue des signes — pour rendre le contenu numérique plus accessible. Gestion d'une équipe complète de la conception à la livraison.",
    "exp.cat.role": "Stage Développeur Full Stack",
    "exp.cat.date": "Avr. 2023 – Juil. 2023",
    "exp.cat.desc": "Développement de programmes Python et de pipelines de données, et création de simulations interactives avec Unity 3D en C#.",
    "exp.iseg.role": "Accompagnateur Pédagogique",
    "exp.iseg.date": "Avr. 2023",
    "exp.iseg.desc": "Accompagnement d'étudiants en communication dans leurs premiers pas en développement web, enseignement des bases d'HTML, CSS, PHP et SQL.",
    "exp.nature.role": "Stage Développeur Unity",
    "exp.nature.date": "Juil. 2021 – Déc. 2021",
    "exp.nature.desc": "Développement de modules interactifs de capture de mouvement Kinect intégrés dans des environnements Unity 3D.",

    "skills.label":    "// compétences",
    "skills.title":    "Stack Technique",
    "skills.web":      "Développement Web",
    "skills.mobile":   "Développement Mobile",
    "skills.backend":  "Backend & Bases de données",
    "skills.creative": "3D & Créatif",
    "skills.pm":       "Gestion de Projet",
    "skills.ai":       "IA & Automatisation",
    "skills.proficient":   "Maîtrisé",
    "skills.intermediate": "Intermédiaire",
    "skills.familiar":     "Notions",

    "edu.label":   "// formation",
    "edu.title":   "Formation",
    "edu.epitech.degree": "Expert en Technologies de l'Information",
    "edu.epitech.desc":   "Programme d'ingénierie de 5 ans basé sur l'apprentissage par projet. Pas de cours traditionnels — du développement en équipe, en conditions réelles, dès le premier jour.",
    "edu.dublin.degree":  "Diplôme en Gestion de l'IT (CPD en Business Computing)",
    "edu.dublin.desc":    "Année d'échange en Irlande, approfondissement en gestion de l'IT et en informatique de gestion, dans un environnement anglophone.",
    "edu.languages": "Langues",
    "edu.french":    "Français",
    "edu.english":   "Anglais",
    "edu.native":    "Natif",

    "int.label":   "// centres d'intérêt",
    "int.title":   "Au-delà du Code",
    "int.marathon":      "Marathon",
    "int.marathon.desc": "Finisher Paris 2025 — la course comme discipline de constance et d'endurance.",
    "int.rugby":         "Rugby",
    "int.rugby.desc":    "Sport collectif qui m'a appris la collaboration, la stratégie et la résilience.",
    "int.football":      "Football",
    "int.football.desc": "Passion depuis l'enfance — le beau jeu ne vieillit jamais.",
    "int.travel":        "Voyages",
    "int.travel.desc":   "Découverte de nouvelles cultures et perspectives. L'Irlande n'était qu'un début.",

    "contact.label": "// contact",
    "contact.title": "Travaillons Ensemble",
    "contact.sub":   "Je recherche activement des opportunités à partir d'octobre 2025. N'hésitez pas à me contacter !",
    "contact.email": "E-mail",
    "contact.phone": "Téléphone",

    "footer.text": "Conçu & développé avec ❤️ — Julien Lafargue 2025",
  }
};

/* ═══════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════ */
let currentLang  = localStorage.getItem('jl-lang')  || 'en';
let currentTheme = localStorage.getItem('jl-theme') || 'dark';

/* ═══════════════════════════════════════════════════
   LANGUAGE
═══════════════════════════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('jl-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  document.getElementById('langToggle').textContent = lang === 'en' ? 'FR' : 'EN';
  document.title = lang === 'en'
    ? 'Julien Lafargue — Full Stack Developer & Project Manager'
    : 'Julien Lafargue — Développeur Full Stack & Chef de Projet';
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'fr' : 'en');
});

/* ═══════════════════════════════════════════════════
   THEME
═══════════════════════════════════════════════════ */
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('jl-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

/* ═══════════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════
   NAVBAR SCROLL
═══════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ═══════════════════════════════════════════════════
   REVEAL ON SCROLL
═══════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════════════
   LANGUAGE BAR ANIMATION
═══════════════════════════════════════════════════ */
const langBarObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.lang-fill').forEach(bar => {
          bar.classList.add('animated');
        });
        langBarObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const langSection = document.querySelector('.lang-section');
if (langSection) langBarObserver.observe(langSection);

/* ═══════════════════════════════════════════════════
   SMOOTH NAV LINK ACTIVE STATE
═══════════════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}`
            ? 'var(--accent)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => activeObserver.observe(s));

/* ═══════════════════════════════════════════════════
   SKILL TAG HOVER INTERACTION
═══════════════════════════════════════════════════ */
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.transform = 'translateY(-3px) scale(1.05)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.transform = '';
  });
});

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
applyTheme(currentTheme);
applyLang(currentLang);
