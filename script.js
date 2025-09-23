/* ---------------- PARTICLES ---------------- */
particlesJS('particles-js', {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 900 } },
    color: { value: '#ff2d2d' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#ff2d2d', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 1.6, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { grab: { distance: 170, line_linked: { opacity: 0.6 } }, push: { particles_nb: 3 } }
  },
  retina_detect: true
});

/* ---------------- TEXTOS MULTIDIOMA ---------------- */
const texts = {
  es: {
    menu: ["Inicio","Formación","Proyectos","Habilidades","Contacto"],
    habilidades: "HABILIDADES",
    formacion: "FORMACIÓN",
    portfolio: "PROYECTOS",
    contacto: "CONTACTO",
    vermas: "Ver más proyectos",
    vermasFormacion: "Ver más formación",
    formulario: {
      nombre: "Tu nombre",
      email: "Tu correo",
      asunto: "Asunto",
      mensaje: "Mensaje",
      boton: "Enviar",
      mensajeEnviado: "¡Mensaje enviado!",
      errorEnvio: "Error al enviar"
    },
    proyectos: [
      {
        titulo: "WebLA-Django",
        descripcion: "Plataforma web desarrollada en Django para mostrar información detallada sobre datos extraídos desde APIs externas y JSON locales."
      },
      {
        titulo: "Casino-2FA-JsonDB-Python",
        descripcion: "Casino creado en Python. Completamente funcional basado en juegos de azar, guardado de cuentas con contraseña y 2FA, con base de datos alojada en JSON."
      },
      {
        titulo: "GSenku - C++",
        descripcion: "Famoso juego chino recreado en C++. Con distintos tipos de tablero y movimientos habilitados, se maneja a través de la terminal o un compilador de C++."
      }
    ],
    estudios: [
      { key: "grado", titulo: "Grado Universitario", descripcion: "Grado en Ingeniería Informática - Unizar" },
      { key: "python", titulo: "Curso de Python", descripcion: "Formación online de 86 horas de Python para desarrollo de scripts, automatización y desarrollo web." },
      { key: "ingles", titulo: "Ruta de Cursos de JavaScript", descripcion: "Formación online de 39 horas de JavaScript enfocada a la optimización web y debugging." }
    ],
    bannerTitle: "Hey, soy Víctor...",
    bannerDesc: 'Tengo <span class="highlight-accent">19 años</span> y soy estudiante de <span class="highlight-accent">Ingeniería Informática</span>. Me apasiona la <span class="highlight-secondary">IA</span> y la <span class="highlight-secondary">ciberseguridad</span>.',
    btnMail: "Correo",
    btnGitHub: "GitHub",
    btnLinkedIn: "LinkedIn",
    btnCV: "Descargar CV"
  },
  en: {
    menu: ["Home","Education","Projects","Skills","Contact"],
    habilidades: "SKILLS",
    formacion: "EDUCATION",
    portfolio: "PROJECTS",
    contacto: "CONTACT",
    vermas: "View more projects",
    vermasFormacion: "View more education",
    formulario: {
      nombre: "Your name",
      email: "Your email",
      asunto: "Subject",
      mensaje: "Message",
      boton: "Send",
      mensajeEnviado: "Message sent!",
      errorEnvio: "Error sending message"
    },
    proyectos: [
      {
        titulo: "WebLA-Django",
        descripcion: "Web platform built in Django that displays detailed information fetched from external APIs and local JSON files."
      },
      {
        titulo: "Casino-2FA-JsonDB-Python",
        descripcion: "Python-based casino with functional gambling games, account storage with password and 2FA, using a JSON file as database."
      },
      {
        titulo: "GSenku - C++",
        descripcion: "Popular Chinese peg solitaire game implemented in C++. Supports various board types and moves, operated via terminal or C++ IDE."
      }
    ],
    estudios: [
      { key: "grado", titulo: "University Degree", descripcion: "Computer Engineering Degree" },
      { key: "python", titulo: "Python Course", descripcion: "Online Python course covering scripting and automation." },
      { key: "ingles", titulo: "English B2 Certificate", descripcion: "B2 level certification granted by Cambridge English." }
    ],
    bannerTitle: "Hey, I’m Victor...",
    bannerDesc: 'I am <span class="highlight-accent">19 years old</span> and a <span class="highlight-accent">Computer Engineering</span> student. I love <span class="highlight-secondary">AI</span> and <span class="highlight-secondary">Cybersecurity</span>.',
    btnMail: "Mail",
    btnGitHub: "GitHub",
    btnLinkedIn: "LinkedIn",
    btnCV: "Download CV"
  },
  ca: {
    menu: ["Inici","Formació","Projectes","Habilitats","Contacte"],
    habilidades: "HABILITATS",
    formacion: "FORMACIÓ",
    portfolio: "PROJECTES",
    contacto: "CONTACTE",
    vermas: "Veure més projectes",
    vermasFormacion: "Veure més formació",
    formulario: {
      nombre: "El teu nom",
      email: "El teu correu",
      asunto: "Assumpte",
      mensaje: "Missatge",
      boton: "Enviar",
      mensajeEnviado: "Missatge enviat!",
      errorEnvio: "Error enviant missatge"
    },
    proyectos: [
      {
        titulo: "WebLA-Django",
        descripcion: "Plataforma web desenvolupada en Django per mostrar informació detallada obtinguda d’APIs externes i fitxers JSON locals."
      },
      {
        titulo: "Casino-2FA-JsonDB-Python",
        descripcion: "Casino creat en Python. Totalment funcional amb jocs d’atzar, emmagatzematge de comptes amb contrasenya i 2FA, i base de dades en JSON."
      },
      {
        titulo: "GSenku - C++",
        descripcion: "Famos joc xinès recreat en C++. Amb diversos tipus de taulell i moviments, gestionat des de la terminal o IDE de C++."
      }
    ],
    estudios: [
      { key: "grado", titulo: "Grau Universitari", descripcion: "Grau en Enginyeria Informàtica" },
      { key: "python", titulo: "Curs de Python", descripcion: "Formació online de Python per a scripts i automatització." },
      { key: "ingles", titulo: "Certificat Anglès B2", descripcion: "Certificació nivell B2 atorgada per Cambridge English." }
    ],
    bannerTitle: "Hey, sóc Víctor...",
    bannerDesc: 'Tinc <span class="highlight-accent">19 anys</span> i sóc estudiant d’<span class="highlight-accent">Enginyeria Informàtica</span>. M’apassiona la <span class="highlight-secondary">IA</span> i la <span class="highlight-secondary">ciberseguretat</span>.',
    btnMail: "Correu",
    btnGitHub: "GitHub",
    btnLinkedIn: "LinkedIn",
    btnCV: "Descarregar CV"
  },
  fr: {
    menu: ["Accueil","Formation","Projets","Compétences","Contact"],
    habilidades: "COMPÉTENCES",
    formacion: "FORMATION",
    portfolio: "PROJETS",
    contacto: "CONTACT",
    vermas: "Voir plus de projets",
    vermasFormacion: "Voir plus de formation",
    formulario: {
      nombre: "Votre nom",
      email: "Votre email",
      asunto: "Sujet",
      mensaje: "Message",
      boton: "Envoyer",
      mensajeEnviado: "Message envoyé!",
      errorEnvio: "Erreur d’envoi"
    },
    proyectos: [
      {
        titulo: "WebLA-Django",
        descripcion: "Plateforme web développée en Django affichant des informations détaillées extraites d’APIs externes et de fichiers JSON locaux."
      },
      {
        titulo: "Casino-2FA-JsonDB-Python",
        descripcion: "Casino codé en Python. Entièrement fonctionnel avec jeux de hasard, stockage de comptes avec mot de passe et 2FA, base de données JSON."
      },
      {
        titulo: "GSenku - C++",
        descripcion: "Célèbre jeu chinois de solitaire implémenté en C++. Plusieurs types de plateau et mouvements disponibles, utilisé via terminal ou IDE C++."
      }
    ],
    estudios: [
      { key: "grado", titulo: "Diplôme Universitaire", descripcion: "Licence d'Informatique" },
      { key: "python", titulo: "Cours Python", descripcion: "Cours Python en ligne pour scripting et automatisation." },
      { key: "ingles", titulo: "Certificat Anglais B2", descripcion: "Certification niveau B2 délivrée par Cambridge English." }
    ],
    bannerTitle: "Salut, je suis Victor...",
    bannerDesc: 'J’ai <span class="highlight-accent">19 ans</span> et je suis étudiant en <span class="highlight-accent">Génie Informatique</span>. J’adore l’<span class="highlight-secondary">IA</span> et la <span class="highlight-secondary">cybersécurité</span>.',
    btnMail: "Email",
    btnGitHub: "GitHub",
    btnLinkedIn: "LinkedIn",
    btnCV: "Télécharger CV"
  },
  it: {
    menu: ["Home","Formazione","Progetti","Abilità","Contatto"],
    habilidades: "ABILITÀ",
    formacion: "FORMAZIONE",
    portfolio: "PROGETTI",
    contacto: "CONTATTO",
    vermas: "Mostra più progetti",
    vermasFormacion: "Mostra più formazione",
    formulario: {
      nombre: "Il tuo nome",
      email: "La tua email",
      asunto: "Oggetto",
      mensaje: "Messaggio",
      boton: "Invia",
      mensajeEnviado: "Messaggio inviato!",
      errorEnvio: "Errore invio"
    },
    proyectos: [
      {
        titulo: "WebLA-Django",
        descripcion: "Piattaforma web sviluppata in Django che mostra informazioni dettagliate ottenute da API esterne e file JSON locali."
      },
      {
        titulo: "Casino-2FA-JsonDB-Python",
        descripcion: "Casino creato in Python. Completamente funzionale con giochi d’azzardo, gestione account con password e 2FA, database in JSON."
      },
      {
        titulo: "GSenku - C++",
        descripcion: "Famoso gioco cinese del solitario implementato in C++. Con vari tipi di scacchiera e mosse, gestito via terminale o IDE C++."
      }
    ],
    estudios: [
      { key: "grado", titulo: "Laurea Universitaria", descripcion: "Laurea in Ingegneria Informatica" },
      { key: "python", titulo: "Corso di Python", descripcion: "Corso online di Python per scripting e automazione." },
      { key: "ingles", titulo: "Certificato Inglese B2", descripcion: "Certificazione B2 rilasciata da Cambridge English." }
    ],
    bannerTitle: "Hey, sono Victor...",
    bannerDesc: 'Ho <span class="highlight-accent">19 anni</span> e sono studente di <span class="highlight-accent">Ingegneria Informatica</span>. Amo l’<span class="highlight-secondary">IA</span> e la <span class="highlight-secondary">Cybersecurity</span>.',
    btnMail: "Email",
    btnGitHub: "GitHub",
    btnLinkedIn: "LinkedIn",
    btnCV: "Scarica CV"
  },
  de: {
    menu: ["Start","Ausbildung","Projekte","Fähigkeiten","Kontakt"],
    habilidades: "FÄHIGKEITEN",
    formacion: "AUSBILDUNG",
    portfolio: "PROJEKTE",
    contacto: "KONTAKT",
    vermas: "Mehr Projekte anzeigen",
    vermasFormacion: "Mehr Ausbildung anzeigen",
    formulario: {
      nombre: "Dein Name",
      email: "Deine E-Mail",
      asunto: "Betreff",
      mensaje: "Nachricht",
      boton: "Senden",
      mensajeEnviado: "Nachricht gesendet!",
      errorEnvio: "Fehler beim Senden"
    },
    proyectos: [
      {
        titulo: "WebLA-Django",
        descripcion: "Webplattform in Django zur Anzeige detaillierter Informationen aus externen APIs und lokalen JSON-Dateien."
      },
      {
        titulo: "Casino-2FA-JsonDB-Python",
        descripcion: "Python-basiertes Casino mit funktionalen Glücksspiel-Spielen, Kontospeicherung mit Passwort und 2FA, JSON-Datenbank."
      },
      {
        titulo: "GSenku - C++",
        descripcion: "Bekanntes chinesisches Peg-Solitaire-Spiel in C++ umgesetzt. Verschiedene Brett-Typen und Züge, bedienbar über Terminal oder C++ IDE."
      }
    ],
    estudios: [
      { key: "grado", titulo: "Universitätsabschluss", descripcion: "Studium der Informatik" },
      { key: "python", titulo: "Python-Kurs", descripcion: "Online-Python-Kurs für Skripterstellung und Automatisierung." },
      { key: "ingles", titulo: "Englisch-Zertifikat B2", descripcion: "B2-Zertifikat ausgestellt von Cambridge English." }
    ],
    bannerTitle: "Hey, ich bin Victor...",
    bannerDesc: 'Ich bin <span class="highlight-accent">19 Jahre alt</span> und studiere <span class="highlight-accent">Informatik</span>. Ich liebe <span class="highlight-secondary">KI</span> und <span class="highlight-secondary">Cybersicherheit</span>.',
    btnMail: "Mail",
    btnGitHub: "GitHub",
    btnLinkedIn: "LinkedIn",
    btnCV: "CV herunterladen"
  },
  pt: {
    menu: ["Início","Formação","Projetos","Habilidades","Contato"],
    habilidades: "HABILIDADES",
    formacion: "FORMAÇÃO",
    portfolio: "PROJETOS",
    contacto: "CONTATO",
    vermas: "Ver mais projetos",
    vermasFormacion: "Ver mais formação",
    formulario: {
      nombre: "Seu nome",
      email: "Seu email",
      asunto: "Assunto",
      mensaje: "Mensagem",
      boton: "Enviar",
      mensajeEnviado: "Mensagem enviada!",
      errorEnvio: "Erro ao enviar"
    },
    proyectos: [
      {
        titulo: "WebLA-Django",
        descripcion: "Plataforma web em Django que exibe informações detalhadas obtidas de APIs externas e arquivos JSON locais."
      },
      {
        titulo: "Casino-2FA-JsonDB-Python",
        descripcion: "Cassino desenvolvido em Python. Totalmente funcional com jogos de azar, contas protegidas por senha e 2FA, usando JSON como banco."
      },
      {
        titulo: "GSenku - C++",
        descripcion: "Famoso jogo chinês do tipo peg solitaire em C++. Vários tipos de tabuleiro e movimentos, operável via terminal ou IDE C++."
      }
    ],
    estudios: [
      { key: "grado", titulo: "Grau Universitário", descripcion: "Licenciatura em Engenharia Informática" },
      { key: "python", titulo: "Curso de Python", descripcion: "Curso online de Python para scripts e automação." },
      { key: "ingles", titulo: "Certificado Inglês B2", descripcion: "Certificação B2 emitida pela Cambridge English." }
    ],
    bannerTitle: "Oi, sou Victor...",
    bannerDesc: 'Tenho <span class="highlight-accent">19 anos</span> e sou estudante de <span class="highlight-accent">Engenharia de Computação</span>. Adoro <span class="highlight-secondary">IA</span> e <span class="highlight-secondary">Cibersegurança</span>.',
    btnMail: "Email",
    btnGitHub: "GitHub",
    btnLinkedIn: "LinkedIn",
    btnCV: "Baixar CV"
  }
};

/* ---------------- TYPEWRITER ---------------- */
function typeText(el, text, speed = 21) {
  el.innerHTML = '';
  el.style.visibility = 'visible';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  el.appendChild(cursor);
  let i = 0;
  function step() {
    if (i < text.length) {
      const char = text.charAt(i);
      if (char === '\n') {
        el.insertBefore(document.createElement('br'), cursor);
      } else {
        el.insertBefore(document.createTextNode(char), cursor);
      }
      i++;
      setTimeout(step, speed);
    } else {
      cursor.remove();
    }
  }
  step();
}

function queueWriters(els) {
  let delay = 0;
  els.forEach(el => {
    const txt = el.getAttribute('data-typer') || '';
    setTimeout(() => typeText(el, txt), delay);
    delay += Math.min(1800, 120 + txt.length * 6);
  });
}

function typer(el) {
  const txt = el.getAttribute('data-typer') || '';
  typeText(el, txt, 60);
}

/* ---------------- OBSERVERS ---------------- */
const sections = Array.from(document.querySelectorAll('section'));
const typedSet = new WeakSet();
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const els = Array.from(entry.target.querySelectorAll('.typewriter[data-typer]'))
        .filter(el => !typedSet.has(el));
      if (els.length) {
        queueWriters(els);
        els.forEach(el => typedSet.add(el));
      }
    }
  });
}, { threshold: 0.25 });
sections.forEach(s => io.observe(s));
window.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('#info');
  if (first) {
    const els = Array.from(first.querySelectorAll('.typewriter[data-typer]'));
    queueWriters(els);
    els.forEach(el => typedSet.add(el));
  }
});

/* ---------------- NAVBAR ACTIVE ---------------- */
const navLinks = document.querySelectorAll('nav a');
const secciones = Array.from(navLinks).map(a => document.querySelector(a.getAttribute('href')));
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link =>
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)
      );
    }
  });
}, { threshold: 0.5 });
secciones.forEach(section => {
  if (section) sectionObserver.observe(section);
});

/* ---------------- MENU HAMBURGUESA ---------------- */
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => menu.classList.toggle('show'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('show')));
  document.addEventListener('click', e => {
    const inside = menu.contains(e.target) || menuToggle.contains(e.target);
    if (!inside) menu.classList.remove('show');
  });
}

/* ---------------- EMAILJS + FORMULARIO ---------------- */
emailjs.init("MclWiiwxOuM5eq6ca");
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contacto form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const { nombre, email, asunto, mensaje } = form;
      emailjs.send("service_4p1yfgr", "template_dpssliw", {
        from_name: nombre.value.trim(),
        from_email: "victormnjfan@gmail.com",
        reply_to: email.value.trim(),
        subject: asunto.value.trim(),
        message: mensaje.value.trim()
      })
      .then(() => {
        form.reset();
        showPopup(form.dataset.popupEnviado, false);
      })
      .catch(() => showPopup(form.dataset.popupError, true));
    });
  }

  function showPopup(text, isError) {
    const popup = document.createElement('div');
    popup.textContent = text;
    Object.assign(popup.style, {
      position: 'fixed',
      left: '50%',
      bottom: '30px',
      transform: 'translateX(-50%) translateY(50px)',
      background: isError ? '#ff2d2d' : 'var(--card)',
      color: isError ? '#fff' : 'var(--fg)',
      border: isError ? '1px solid rgba(255,45,45,0.5)' : '1px solid var(--card-border)',
      padding: '16px 24px',
      borderRadius: '12px',
      boxShadow: isError ? '0 12px 36px rgba(255,45,45,0.3)' : '0 12px 36px rgba(255,45,45,.14)',
      fontWeight: '700',
      fontSize: '16px',
      zIndex: '9999',
      textAlign: 'center',
      opacity: '0',
      transition: 'opacity 0.4s ease, transform 0.4s ease'
    });
    document.body.appendChild(popup);
    requestAnimationFrame(() => {
      popup.style.opacity = '1';
      popup.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
      popup.style.opacity = '0';
      popup.style.transform = 'translateX(-50%) translateY(50px)';
      setTimeout(() => popup.remove(), 400);
    }, isError ? 2500 : 2000);
  }
});

/* ---------------- BANNER ---------------- */
function updateBanner(lang) {
  const titleEl = document.querySelector('.nombre');
  if (titleEl && texts[lang].bannerTitle) {
    titleEl.setAttribute('data-typer', texts[lang].bannerTitle);
    titleEl.textContent = '';
    typer(titleEl);
  }
  const descEl = document.querySelector('.subtitulo');
  if (descEl && texts[lang].bannerDesc) {
    descEl.innerHTML = texts[lang].bannerDesc;
  }
  const buttons = [
    { sel: '.btn-mail span', key: 'btnMail' },
    { sel: '.btn-github span', key: 'btnGitHub' },
    { sel: '.btn-linkedin span', key: 'btnLinkedIn' },
    { sel: '.btn-cv', key: 'btnCV' }
  ];
  buttons.forEach(({ sel, key }) => {
    const el = document.querySelector(sel);
    if (!el || !texts[lang][key]) return;
    if (sel === '.btn-cv') {
      const svg = '<svg xmlns="http://www.w3.org/2000/svg" class="icon-download" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/></svg>';
      const href = `CV/CV_Victor_Menjon_${lang.toUpperCase()}.pdf`;
      el.setAttribute('href', href);
      el.setAttribute('download', '');
      el.innerHTML = `${svg}<span>${texts[lang][key]}</span>`;
    } else {
      el.textContent = texts[lang][key];
    }
  });
}

/* ---------------- FORMACIÓN ---------------- */
function updateFormacion(lang) {
  (texts[lang].estudios || []).forEach(est => {
    const tEl = document.querySelector(`[data-key="${est.key}-titulo"]`);
    const dEl = document.querySelector(`[data-key="${est.key}-desc"]`);
    if (tEl) tEl.textContent = est.titulo;
    if (dEl) dEl.textContent = est.descripcion;
  });
}

/* ---------------- CAMBIO DE IDIOMA ---------------- */
const dropdown = document.getElementById('language-selector');
const selected = dropdown?.querySelector('.language-selected');
const options = dropdown?.querySelector('.language-options');
const menuLinks = document.querySelectorAll('nav .menu a');

function changeLanguage(lang) {
  localStorage.setItem('preferredLang', lang);
  menuLinks.forEach((link, i) => {
    const txt = texts[lang].menu?.[i] || '';
    link.setAttribute('data-typer', txt);
    link.textContent = '';
    typeText(link, txt, 18);
  });

  updateBanner(lang);

  ['habilidades','formacion','portfolio','contacto'].forEach(key => {
    const sel = {
      habilidades: '#hab-apt .typewriter',
      formacion: '#formacion .typewriter',
      portfolio: '#portfolio .typewriter',
      contacto: '#contacto .typewriter'
    }[key];
    const el = document.querySelector(sel);
    if (el && texts[lang][key]) {
      el.setAttribute('data-typer', texts[lang][key]);
    }
  });

  const vmProy = document.querySelector('#portfolio .ver-mas .btn-vermas');
  if (vmProy) vmProy.textContent = texts[lang].vermas;

  const vmForm = document.querySelector('#formacion .ver-mas .btn-vermas');
  if (vmForm) vmForm.textContent = texts[lang].vermasFormacion;

  document.querySelectorAll('.portfolio-item').forEach((item,i) => {
    const p = texts[lang].proyectos?.[i];
    if (p) {
      item.querySelector('.portfolio-title').textContent = p.titulo;
      item.querySelector('.portfolio-desc').textContent = p.descripcion;
    }
  });
  
  // SOLUCIÓN: Traducir enlaces de la sección de contacto
  const contactGitHub = document.querySelector('.link-list a[href*="github"] span');
  if (contactGitHub) contactGitHub.textContent = texts[lang].btnGitHub;

  const contactLinkedIn = document.querySelector('.link-list a[href*="linkedin"] span');
  if (contactLinkedIn) contactLinkedIn.textContent = texts[lang].btnLinkedIn;


  const form = document.querySelector('#contacto form');
  if (form && texts[lang].formulario) {
    form.nombre.placeholder = texts[lang].formulario.nombre;
    form.email.placeholder = texts[lang].formulario.email;
    form.asunto.placeholder = texts[lang].formulario.asunto;
    form.mensaje.placeholder = texts[lang].formulario.mensaje;
    form.querySelector('button[type="submit"]').textContent = texts[lang].formulario.boton;
    form.dataset.popupEnviado = texts[lang].formulario.mensajeEnviado;
    form.dataset.popupError = texts[lang].formulario.errorEnvio;
  }

  updateFormacion(lang);

  // SOLUCIÓN: Limpieza de selectores redundantes
  const writers = [
    document.querySelector('#info .nombre'),
    document.querySelector('#hab-apt .typewriter'),
    document.querySelector('#formacion .typewriter'),
    document.querySelector('#portfolio .typewriter'),
    document.querySelector('#contacto .typewriter')
  ].filter(Boolean);
  queueWriters(writers);
}

/* ---------------- DROPDOWN IDIOMA ---------------- */
if (selected) {
  selected.addEventListener('click', () => {
    const open = dropdown.classList.toggle('open');
    dropdown.setAttribute('aria-expanded', open);
    options.setAttribute('aria-hidden', !open);
  });
}
document.addEventListener('click', e => {
  if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    dropdown.setAttribute('aria-expanded', 'false');
    options.setAttribute('aria-hidden', 'true');
  }
});
const optionDivs = options ? options.querySelectorAll('div[data-lang]') : [];
function updateVisibleOptions() {
  const cur = selected.getAttribute('data-lang');
  optionDivs.forEach(opt => {
    opt.classList.toggle('selected', opt.getAttribute('data-lang') === cur);
    opt.style.display = 'flex';
  });
}
optionDivs.forEach(opt => {
  opt.addEventListener('click', () => {
    const lang = opt.getAttribute('data-lang');
    const svg = opt.querySelector('svg')?.outerHTML || '';
    const txt = opt.textContent.trim();
    selected.innerHTML = svg + ' ' + txt;
    selected.setAttribute('data-lang', lang);
    dropdown.classList.remove('open');
    changeLanguage(lang);
    updateVisibleOptions();
    localStorage.setItem('preferredLang', lang);
  });
});

/* ---------------- INICIALIZACIÓN ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('preferredLang') || 'es';
  // Set dropdown display
  const opt = optionDivs && Array.from(optionDivs).find(o => o.getAttribute('data-lang') === lang);
  if (opt && selected) {
    const svg = opt.querySelector('svg')?.outerHTML || '';
    const txt = opt.textContent.trim();
    selected.innerHTML = svg + ' ' + txt;
    selected.setAttribute('data-lang', lang);
  }
  // Initialize CV href + text
  updateBanner(lang);
  // Initialize sections
  changeLanguage(lang);
});