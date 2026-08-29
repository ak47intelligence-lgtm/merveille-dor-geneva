/* ============================================
   MERVEILLE D'OR — APP.JS
   3D Coin · GSAP Animations · Lenis Scroll · i18n
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================

const translations = {
  fr: {
    'nav.philosophy': 'Philosophie',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.established': 'Genève · Établie 2026',
    'hero.subtitle': "Le comptoir que Genève fait confiance pour rendre l'or lisible — sourcé honnêtement, traité avec transparence, conservé en sécurité.",
    'hero.scroll': 'Défiler',
    'cta.buy': 'Acheter',
    'cta.sell': 'Vendre',
    'cta.contact': 'Nous contacter',
    'philosophy.eyebrow': 'Notre vision',
    'philosophy.title': "Une merveille d'or, tenue à un standard genevois.",
    'philosophy.body1': "Merveille D'Or Geneva SA existe au point de rencontre de deux mondes : la discipline d'un comptoir suisse agréé de métaux précieux, et l'émerveillement que son propre nom implique — une merveille d'or.",
    'philosophy.body2': "L'identité est construite pour tenir ces deux vérités à la fois. Elle emprunte l'autorité discrète des banques privées genevoises — marine profond, typographie disciplinée, espace généreux — et fait passer à travers cela un seul matériau chaud : une ligne dorée à facettes qui ne crie jamais.",
    'philosophy.attr1': 'Agréé',
    'philosophy.attr1desc': 'Réglementé, audité et précis — jamais de raccourci en marché gris.',
    'philosophy.attr2': 'Lumineux',
    'philosophy.attr2desc': 'Un seul matériau chaud sur un marine discipliné — retenue, pas décoration.',
    'philosophy.attr3': 'Genevois',
    'philosophy.attr3desc': 'Sous-stimé, exact, bâti sur une réputation plus longue que tout cycle.',
    'services.eyebrow': 'Nos services',
    'services.title': 'Or physique, traité avec la précision suisse.',
    'services.buy.title': 'Acheter',
    'services.buy.body': "Lingots et pièces d'or physiques de qualité bullion, sourcés selon les standards OECD. Traçabilité complète par hachage SHA-256, de la mine au comptoir.",
    'services.buy.cta': 'En savoir plus',
    'services.sell.title': 'Vendre',
    'services.sell.body': 'Vente de métaux précieux avec évaluation transparente et tarifs indexés sur le marché spot. Processus de due diligence conforme aux normes AGS et LBMA.',
    'services.sell.cta': 'En savoir plus',
    'services.advisory.title': 'Conseil',
    'services.advisory.body': "Accompagnement personnalisé pour la constitution et la gestion de réserves en métaux précieux. Stratégies d'allocation adaptées à votre profil de risque.",
    'services.advisory.cta': 'En savoir plus',
    'quote.text': "Le comptoir que Genève fait confiance pour rendre l'or lisible.",
    'quote.cite': "— Merveille D'Or Geneva SA",
    'contact.eyebrow': 'Contact',
    'contact.title': 'Prenons rendez-vous.',
    'contact.body': "Notre équipe est à votre disposition pour discuter de vos besoins en or physique et métaux précieux. La discrétion et la confiance sont au cœur de notre relation client.",
    'contact.address.label': 'Adresse',
    'contact.address.value': 'Genève, Suisse',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Téléphone',
    'form.firstname': 'Prénom',
    'form.lastname': 'Nom',
    'form.email': 'Email',
    'form.subject': 'Sujet',
    'form.subject.buy': "Achat d'or",
    'form.subject.sell': "Vente d'or",
    'form.subject.advisory': 'Conseil',
    'form.subject.other': 'Autre',
    'form.message': 'Message',
    'form.submit': 'Envoyer',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    'footer.legal': 'Mentions légales'
  },
  en: {
    'nav.philosophy': 'Philosophy',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.established': 'Geneva · Established 2026',
    'hero.subtitle': 'The counter Geneva trusts to make gold legible — sourced honestly, dealt transparently, held securely.',
    'hero.scroll': 'Scroll',
    'cta.buy': 'Buy',
    'cta.sell': 'Sell',
    'cta.contact': 'Contact Us',
    'philosophy.eyebrow': 'Our Vision',
    'philosophy.title': 'A marvel of gold, held to a Genevan standard.',
    'philosophy.body1': "Merveille D'Or Geneva SA exists at the meeting point of two worlds: the discipline of a licensed Swiss precious metals counter, and the wonder implied by its own name — a marvel of gold.",
    'philosophy.body2': "The identity is built to hold both truths at once. It borrows the quiet authority of Geneva's private banks — deep navy, disciplined type, generous space — and threads a single warm material through it: a faceted line of gold that never shouts.",
    'philosophy.attr1': 'Licensed',
    'philosophy.attr1desc': 'Regulated, audited, and precise — never a grey-market shortcut.',
    'philosophy.attr2': 'Luminous',
    'philosophy.attr2desc': 'One warm material against disciplined navy — restraint, not decoration.',
    'philosophy.attr3': 'Genevan',
    'philosophy.attr3desc': 'Understated, exact, built on a reputation longer than any cycle.',
    'services.eyebrow': 'Our Services',
    'services.title': 'Physical gold, handled with Swiss precision.',
    'services.buy.title': 'Buy',
    'services.buy.body': 'Bullion-quality physical gold bars and coins, sourced to OECD standards. Full traceability via SHA-256 hashing, from mine to counter.',
    'services.buy.cta': 'Learn More',
    'services.sell.title': 'Sell',
    'services.sell.body': 'Precious metals sales with transparent valuation and spot-market-indexed pricing. Due diligence process compliant with AGS and LBMA standards.',
    'services.sell.cta': 'Learn More',
    'services.advisory.title': 'Advisory',
    'services.advisory.body': 'Personalized guidance for building and managing precious metals reserves. Allocation strategies tailored to your risk profile.',
    'services.advisory.cta': 'Learn More',
    'quote.text': 'The counter Geneva trusts to make gold legible.',
    'quote.cite': "— Merveille D'Or Geneva SA",
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's meet.",
    'contact.body': 'Our team is available to discuss your physical gold and precious metals needs. Discretion and trust are at the heart of our client relationships.',
    'contact.address.label': 'Address',
    'contact.address.value': 'Geneva, Switzerland',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'form.firstname': 'First Name',
    'form.lastname': 'Last Name',
    'form.email': 'Email',
    'form.subject': 'Subject',
    'form.subject.buy': 'Gold Purchase',
    'form.subject.sell': 'Gold Sale',
    'form.subject.advisory': 'Advisory',
    'form.subject.other': 'Other',
    'form.message': 'Message',
    'form.submit': 'Send',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.legal': 'Legal Notice'
  },
  de: {
    'nav.philosophy': 'Philosophie',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    'hero.established': 'Genf · Gegründet 2026',
    'hero.subtitle': 'Der Tresor, dem Genf vertraut, um Gold lesbar zu machen — ehrlich bezogen, transparent gehandelt, sicher verwahrt.',
    'hero.scroll': 'Scrollen',
    'cta.buy': 'Kaufen',
    'cta.sell': 'Verkaufen',
    'cta.contact': 'Kontakt',
    'philosophy.eyebrow': 'Unsere Vision',
    'philosophy.title': 'Ein Wunder aus Gold, gehalten an einem Genfer Standard.',
    'philosophy.body1': "Merveille D'Or Geneva SA existiert am Schnittpunkt zweier Welten: der Disziplin einer lizenzierten Schweizer Edelmetallhandlung und dem Staunen, das ihr eigener Name impliziert — ein Wunder aus Gold.",
    'philosophy.body2': "Die Identität ist so gebaut, dass sie beide Wahrheiten gleichzeitig trägt. Sie leiht sich die stille Autorität der Genfer Privatbanken — tiefes Marineblau, disziplinierte Typografie, großzügiger Raum — und fädelt ein einziges warmes Material hindurch: eine facettierte Goldlinie, die nie schreit.",
    'philosophy.attr1': 'Lizenziert',
    'philosophy.attr1desc': 'Reguliert, geprüft und präzise — nie eine Abkürzung über den Graumarkt.',
    'philosophy.attr2': 'Leuchtend',
    'philosophy.attr2desc': 'Ein warmes Material gegen diszipliniertes Marineblau — Zurückhaltung, nicht Dekoration.',
    'philosophy.attr3': 'Genfer',
    'philosophy.attr3desc': 'Untertrieben, exakt, gebaut auf einer Reputation, die länger ist als jeder Zyklus.',
    'services.eyebrow': 'Unsere Dienstleistungen',
    'services.title': 'Physisches Gold, verarbeitet mit Schweizer Präzision.',
    'services.buy.title': 'Kaufen',
    'services.buy.body': 'Bullion-qualitative physische Goldbarren und -münzen, bezogen nach OECD-Standards. Vollständige Rückverfolgbarkeit via SHA-256-Hashing, von der Mine bis zur Handlung.',
    'services.buy.cta': 'Mehr erfahren',
    'services.sell.title': 'Verkaufen',
    'services.sell.body': 'Verkauf von Edelmetallen mit transparenter Bewertung und spotmarktindexierten Preisen. Due-Diligence-Prozess nach AGS- und LBMA-Standards.',
    'services.sell.cta': 'Mehr erfahren',
    'services.advisory.title': 'Beratung',
    'services.advisory.body': 'Persönliche Begleitung beim Aufbau und der Verwaltung von Edelmetallreserven. Anlagestrategien angepasst an Ihr Risikoprofil.',
    'services.advisory.cta': 'Mehr erfahren',
    'quote.text': 'Der Tresor, dem Genf vertraut, um Gold lesbar zu machen.',
    'quote.cite': "— Merveille D'Or Geneva SA",
    'contact.eyebrow': 'Kontakt',
    'contact.title': 'Lassen Sie uns treffen.',
    'contact.body': 'Unser Team steht Ihnen zur Verfügung, um Ihre Bedürfnisse an physischem Gold und Edelmetallen zu besprechen. Diskretion und Vertrauen stehen im Mittelpunkt unserer Kundenbeziehungen.',
    'contact.address.label': 'Adresse',
    'contact.address.value': 'Genf, Schweiz',
    'contact.email.label': 'E-Mail',
    'contact.phone.label': 'Telefon',
    'form.firstname': 'Vorname',
    'form.lastname': 'Nachname',
    'form.email': 'E-Mail',
    'form.subject': 'Betreff',
    'form.subject.buy': 'Goldkauf',
    'form.subject.sell': 'Goldverkauf',
    'form.subject.advisory': 'Beratung',
    'form.subject.other': 'Sonstiges',
    'form.message': 'Nachricht',
    'form.submit': 'Senden',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'Bedingungen',
    'footer.legal': 'Impressum'
  },
  it: {
    'nav.philosophy': 'Filosofia',
    'nav.services': 'Servizi',
    'nav.contact': 'Contatto',
    'hero.established': 'Ginevra · Fondata nel 2026',
    'hero.subtitle': "Il bancone di cui Ginevra si fida per rendere l'oro leggibile — proveniente onestamente, trattato con trasparenza, custodito in sicurezza.",
    'hero.scroll': 'Scorri',
    'cta.buy': 'Acquista',
    'cta.sell': 'Vendi',
    'cta.contact': 'Contattaci',
    'philosophy.eyebrow': 'La Nostra Visione',
    'philosophy.title': "Una meraviglia d'oro, mantenuta a uno standard ginevrino.",
    'philosophy.body1': "Merveille D'Or Geneva SA esiste al punto d'incontro di due mondi: la disciplina di un bancone svizzero autorizzato di metalli preziosi, e lo stupore che il suo stesso nome implica — una meraviglia d'oro.",
    'philosophy.body2': "L'identità è costruita per mantenere entrambe le verità contemporaneamente. Prende in prestito l'autorità silenziosa delle banche private ginevrine — blu marino profondo, tipografia disciplinata, spazio generoso — e vi fa passare attraverso un solo materiale caldo: una linea d'oro sfaccettata che non urla mai.",
    'philosophy.attr1': 'Autorizzato',
    'philosophy.attr1desc': 'Regolamentato, auditato e preciso — mai una scorciatoia del mercato grigio.',
    'philosophy.attr2': 'Luminoso',
    'philosophy.attr2desc': 'Un solo materiale caldo contro il blu marino disciplinato — sobrietà, non decorazione.',
    'philosophy.attr3': 'Ginevrino',
    'philosophy.attr3desc': 'Sottostimato, esatto, costruito su una reputazione più lunga di qualsiasi ciclo.',
    'services.eyebrow': 'I Nostri Servizi',
    'services.title': "Oro fisico, trattato con la precisione svizzera.",
    'services.buy.title': 'Acquista',
    'services.buy.body': "Lingotti e monete d'oro fisico di qualità bullion, provenienti secondo gli standard OECD. Tracciabilità completa tramite hashing SHA-256, dalla miniera al bancone.",
    'services.buy.cta': 'Scopri di più',
    'services.sell.title': 'Vendi',
    'services.sell.body': 'Vendita di metalli preziosi con valutazione trasparente e prezzi indicizzati al mercato spot. Processo di due diligence conforme agli standard AGS e LBMA.',
    'services.sell.cta': 'Scopri di più',
    'services.advisory.title': 'Consulenza',
    'services.advisory.body': 'Assistenza personalizzata per la costituzione e la gestione di riserve in metalli preziosi. Strategie di allocazione adattate al tuo profilo di rischio.',
    'services.advisory.cta': 'Scopri di più',
    'quote.text': "Il bancone di cui Ginevra si fida per rendere l'oro leggibile.",
    'quote.cite': "— Merveille D'Or Geneva SA",
    'contact.eyebrow': 'Contatto',
    'contact.title': 'Fissiamo un appuntamento.',
    'contact.body': "Il nostro team è a tua disposizione per discutere le tue esigenze di oro fisico e metalli preziosi. La discrezione e la fiducia sono al centro della nostra relazione con il cliente.",
    'contact.address.label': 'Indirizzo',
    'contact.address.value': 'Ginevra, Svizzera',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Telefono',
    'form.firstname': 'Nome',
    'form.lastname': 'Cognome',
    'form.email': 'Email',
    'form.subject': 'Oggetto',
    'form.subject.buy': "Acquisto d'oro",
    'form.subject.sell': "Vendita d'oro",
    'form.subject.advisory': 'Consulenza',
    'form.subject.other': 'Altro',
    'form.message': 'Messaggio',
    'form.submit': 'Invia',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Termini',
    'footer.legal': 'Note legali'
  }
};

let currentLang = 'fr';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ============================================
// LOADER
// ============================================

const loader = document.getElementById('loader');
const loaderPercent = document.querySelector('.loader-percent');
const loaderLineH = document.querySelector('.loader-line-h');
const loaderLineV = document.querySelector('.loader-line-v');
const loaderLogo = document.querySelector('.loader-logo');

let loadProgress = 0;

function updateLoader(pct) {
  loadProgress = pct;
  loaderPercent.textContent = Math.round(pct);
  loaderLineH.style.width = `${pct}%`;
  loaderLineV.style.height = `${pct}%`;
}

// Simulate loading sequence
function runLoader() {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          loader.style.display = 'none';
          initEntranceAnimations();
        }
      });
    }
  });
  
  tl.to({}, { duration: 0.3 })
    .to(loaderLineH, { width: '60%', duration: 0.6, ease: 'power2.inOut', onUpdate: function() { updateLoader(this.progress() * 60); } })
    .to(loaderLineV, { height: '60%', duration: 0.5, ease: 'power2.inOut' }, '-=0.3')
    .to(loaderLogo, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    .to(loaderLineH, { width: '100%', duration: 0.4, ease: 'power2.inOut', onUpdate: function() { updateLoader(60 + this.progress() * 40); } })
    .to(loaderLineV, { height: '100%', duration: 0.4, ease: 'power2.inOut' }, '-=0.3')
    .to({}, { duration: 0.3 });
}

// ============================================
// LENIS SMOOTH SCROLL
// ============================================

let lenis;

function initLenis() {
  lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.8
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  // Connect Lenis to GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// ============================================
// CUSTOM CURSOR
// ============================================

const cursorWrapper = document.querySelector('.cursor-wrapper');
const cursorDot = document.querySelector('.cursor-dot');
const cursorText = document.querySelector('.cursor-text');

let cursorX = 0, cursorY = 0;
let targetX = 0, targetY = 0;

function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  
  cursorWrapper.style.display = 'block';
  
  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });
  
  function animateCursor() {
    cursorX += (targetX - cursorX) * 0.15;
    cursorY += (targetY - cursorY) * 0.15;
    cursorWrapper.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  // Hover states
  const hoverElements = document.querySelectorAll('a, button, .service-card, .form-input, .form-select');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorWrapper.classList.add('hovering');
      if (el.classList.contains('service-card')) {
        cursorText.textContent = 'Explorer';
      } else if (el.tagName === 'A') {
        cursorText.textContent = 'Voir';
      }
    });
    el.addEventListener('mouseleave', () => {
      cursorWrapper.classList.remove('hovering');
      cursorText.textContent = 'Explorer';
    });
  });
}

// ============================================
// THREE.JS 3D GOLD COIN
// ============================================

let scene, camera, renderer, coinGroup;
let coinRotationX = 0;
let coinRotationY = 0;
let targetRotationX = 0;
let targetRotationY = 0;
let autoRotateSpeed = 0.003;
let isInteracting = false;
let interactionTimeout = null;

function initCoin() {
  const canvas = document.getElementById('coin-canvas');
  const container = document.querySelector('.hero-canvas-container');
  
  scene = new THREE.Scene();
  
  // Camera
  const aspect = container.clientWidth / container.clientHeight;
  camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 100);
  camera.position.set(0, 0, 7);
  
  // Renderer
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    antialias: true, 
    alpha: true 
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.outputEncoding = THREE.sRGBEncoding;
  
  // Coin group
  coinGroup = new THREE.Group();
  scene.add(coinGroup);
  
  // Create coin textures
  const coinRadius = 1.6;
  const coinThickness = 0.18;
  const segments = 128;
  
  // Front face texture
  const frontCanvas = document.createElement('canvas');
  frontCanvas.width = 1024;
  frontCanvas.height = 1024;
  const frontCtx = frontCanvas.getContext('2d');
  drawCoinFace(frontCtx, 'front');
  const frontTexture = new THREE.CanvasTexture(frontCanvas);
  frontTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  
  // Back face texture
  const backCanvas = document.createElement('canvas');
  backCanvas.width = 1024;
  backCanvas.height = 1024;
  const backCtx = backCanvas.getContext('2d');
  drawCoinFace(backCtx, 'back');
  const backTexture = new THREE.CanvasTexture(backCanvas);
  backTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  
  // Edge texture (ridged pattern)
  const edgeCanvas = document.createElement('canvas');
  edgeCanvas.width = 64;
  edgeCanvas.height = 512;
  const edgeCtx = edgeCanvas.getContext('2d');
  drawCoinEdge(edgeCtx);
  const edgeTexture = new THREE.CanvasTexture(edgeCanvas);
  edgeTexture.wrapS = THREE.RepeatWrapping;
  edgeTexture.wrapT = THREE.RepeatWrapping;
  edgeTexture.repeat.set(1, 4);
  
  // Materials
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xC9A84C,
    metalness: 1.0,
    roughness: 0.15,
    envMapIntensity: 1.5,
  });
  
  const frontMaterial = new THREE.MeshStandardMaterial({
    color: 0xC9A84C,
    metalness: 0.95,
    roughness: 0.2,
    map: frontTexture,
    bumpMap: frontTexture,
    bumpScale: 0.02,
    envMapIntensity: 1.2,
  });
  
  const backMaterial = new THREE.MeshStandardMaterial({
    color: 0xC9A84C,
    metalness: 0.95,
    roughness: 0.2,
    map: backTexture,
    bumpMap: backTexture,
    bumpScale: 0.02,
    envMapIntensity: 1.2,
  });
  
  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: 0xB8943F,
    metalness: 1.0,
    roughness: 0.25,
    map: edgeTexture,
    bumpMap: edgeTexture,
    bumpScale: 0.01,
    envMapIntensity: 1.0,
  });
  
  // Build coin from separate geometries for proper material assignment
  
  // 1. Side/edge (cylinder without caps)
  const edgeGeometry = new THREE.CylinderGeometry(coinRadius, coinRadius, coinThickness, segments, 1, true);
  const edgeMesh = new THREE.Mesh(edgeGeometry, edgeMaterial);
  edgeMesh.rotation.x = Math.PI / 2;
  coinGroup.add(edgeMesh);
  
  // 2. Front face (circle)
  const faceGeometry = new THREE.CircleGeometry(coinRadius, segments);
  const frontMesh = new THREE.Mesh(faceGeometry, frontMaterial);
  frontMesh.position.z = coinThickness / 2;
  coinGroup.add(frontMesh);
  
  // 3. Back face (circle) - flip for correct orientation
  const backMesh = new THREE.Mesh(faceGeometry.clone(), backMaterial);
  backMesh.position.z = -coinThickness / 2;
  backMesh.rotation.y = Math.PI;
  coinGroup.add(backMesh);
  
  // 4. Front rim (raised edge ring)
  const rimGeom = new THREE.TorusGeometry(coinRadius - 0.02, 0.04, 16, 128);
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0xD4B85A,
    metalness: 1.0,
    roughness: 0.08,
  });
  const frontRim = new THREE.Mesh(rimGeom, rimMat);
  frontRim.position.z = coinThickness / 2 + 0.005;
  coinGroup.add(frontRim);
  
  // 5. Back rim
  const backRim = new THREE.Mesh(rimGeom.clone(), rimMat.clone());
  backRim.position.z = -coinThickness / 2 - 0.005;
  coinGroup.add(backRim);
  
  // 6. Subtle bevel rings for realism
  const bevelGeom = new THREE.TorusGeometry(coinRadius, 0.015, 12, 128);
  const bevelMat = new THREE.MeshStandardMaterial({
    color: 0xE0C868,
    metalness: 1.0,
    roughness: 0.1,
  });
  const frontBevel = new THREE.Mesh(bevelGeom, bevelMat);
  frontBevel.position.z = coinThickness / 2;
  coinGroup.add(frontBevel);
  
  const backBevel = new THREE.Mesh(bevelGeom.clone(), bevelMat.clone());
  backBevel.position.z = -coinThickness / 2;
  coinGroup.add(backBevel);
  
  
  // Lighting setup for realistic gold
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);
  
  const keyLight = new THREE.DirectionalLight(0xfff8e7, 2.0);
  keyLight.position.set(5, 5, 8);
  scene.add(keyLight);
  
  const fillLight = new THREE.DirectionalLight(0xc8d4e8, 0.6);
  fillLight.position.set(-5, 3, 5);
  scene.add(fillLight);
  
  const rimLight = new THREE.DirectionalLight(0xffe4b5, 1.2);
  rimLight.position.set(0, -5, 3);
  scene.add(rimLight);
  
  const backLight = new THREE.PointLight(0x445566, 0.8, 20);
  backLight.position.set(-3, 2, -5);
  scene.add(backLight);
  
  // Environment map simulation (simple cube)
  const envGeometry = new THREE.BoxGeometry(50, 50, 50);
  const envMaterials = [
    new THREE.MeshBasicMaterial({ color: 0x0a1a30, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ color: 0x0c2040, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ color: 0x081828, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ color: 0x0a2038, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ color: 0x0e2848, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ color: 0x081830, side: THREE.BackSide }),
  ];
  const envCube = new THREE.Mesh(envGeometry, envMaterials);
  scene.add(envCube);
  
  // Mouse interaction
  container.addEventListener('mousemove', onMouseMove);
  container.addEventListener('mouseleave', onMouseLeave);
  container.addEventListener('touchmove', onTouchMove, { passive: false });
  container.addEventListener('touchend', onMouseLeave);
  
  // Start animation loop
  animateCoin();
}

function drawCoinFace(ctx, face) {
  const w = 1024;
  const h = 1024;
  const cx = w / 2;
  const cy = h / 2;
  
  // Base gold gradient
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w / 2);
  grad.addColorStop(0, '#E8D070');
  grad.addColorStop(0.5, '#C9A84C');
  grad.addColorStop(0.85, '#B8943F');
  grad.addColorStop(1, '#9A7A30');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
  
  // Outer ring
  ctx.strokeStyle = '#D4B85A';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(cx, cy, 480, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.strokeStyle = '#A08030';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, 465, 0, Math.PI * 2);
  ctx.stroke();
  
  // Decorative dots ring
  const dotCount = 80;
  ctx.fillStyle = '#B8943F';
  for (let i = 0; i < dotCount; i++) {
    const angle = (i / dotCount) * Math.PI * 2;
    const r = 445;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Inner ring
  ctx.strokeStyle = '#C4A84A';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, 420, 0, Math.PI * 2);
  ctx.stroke();
  
  if (face === 'front') {
    // Center star emblem (MDR logo inspired)
    ctx.save();
    ctx.translate(cx, cy - 30);
    
    // Draw 8-pointed star
    ctx.fillStyle = '#8B7028';
    drawStar(ctx, 0, 0, 8, 120, 55);
    
    ctx.fillStyle = '#6B5820';
    drawStar(ctx, 0, 0, 8, 90, 40);
    
    ctx.fillStyle = '#D4B85A';
    drawStar(ctx, 0, 0, 8, 60, 25);
    
    // Center circle
    ctx.fillStyle = '#E8D070';
    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
    
    // Text
    ctx.fillStyle = '#6B5820';
    ctx.font = 'bold 48px "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MERVEILLE D\'OR', cx, cy + 160);
    
    ctx.font = '28px "Times New Roman", serif';
    ctx.fillStyle = '#8B7028';
    ctx.fillText('GENEVA', cx, cy + 210);
    
    ctx.font = '22px "Times New Roman", serif';
    ctx.fillStyle = '#9A8038';
    ctx.fillText('· ESTABLISHED 2026 ·', cx, cy + 250);
    
    // Top and bottom decorative text
    ctx.font = 'bold 20px "Times New Roman", serif';
    ctx.fillStyle = '#7A6828';
    ctx.fillText('PHYSICAL GOLD', cx, cy - 280);
    
    // Leaf/wreath decorations
    drawWreath(ctx, cx, cy, 380);
  } else {
    // Back face - simpler, geometric
    ctx.save();
    ctx.translate(cx, cy);
    
    // Concentric circles
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(139, 112, 40, ${0.3 - i * 0.05})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, 100 + i * 60, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Central lozenge shape
    ctx.strokeStyle = '#8B7028';
    ctx.lineWidth = 3;
    ctx.beginPath();
    const s = 100;
    ctx.moveTo(0, -s);
    ctx.lineTo(s, 0);
    ctx.lineTo(0, s);
    ctx.lineTo(-s, 0);
    ctx.closePath();
    ctx.stroke();
    
    ctx.strokeStyle = '#A08030';
    ctx.lineWidth = 1;
    ctx.beginPath();
    const s2 = 80;
    ctx.moveTo(0, -s2);
    ctx.lineTo(s2, 0);
    ctx.lineTo(0, s2);
    ctx.lineTo(-s2, 0);
    ctx.closePath();
    ctx.stroke();
    
    ctx.restore();
    
    // Weight marking
    ctx.fillStyle = '#6B5820';
    ctx.font = 'bold 56px "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('1 OZ', cx, cy + 180);
    
    ctx.font = '32px "Times New Roman", serif';
    ctx.fillStyle = '#8B7028';
    ctx.fillText('FINE GOLD', cx, cy + 230);
    
    ctx.font = 'bold 24px "Times New Roman", serif';
    ctx.fillStyle = '#9A8038';
    ctx.fillText('999.9', cx, cy + 270);
  }
  
  // Add subtle noise/texture
  addTexture(ctx, w, h);
}

function drawStar(ctx, cx, cy, points, outerR, innerR) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

function drawWreath(ctx, cx, cy, radius) {
  ctx.save();
  ctx.strokeStyle = '#7A6820';
  ctx.lineWidth = 2;
  
  // Simple laurel wreath effect
  const leaves = 24;
  for (let i = 0; i < leaves; i++) {
    const angle = (i / leaves) * Math.PI * 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle + Math.PI / 2);
    ctx.beginPath();
    ctx.ellipse(0, 0, 8, 16, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  
  ctx.restore();
}

function addTexture(ctx, w, h) {
  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 8;
    data[i] = Math.max(0, Math.min(255, data[i] + noise));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
  }
  ctx.putImageData(imageData, 0, 0);
}

function drawCoinEdge(ctx) {
  const w = 64;
  const h = 512;
  
  for (let y = 0; y < h; y++) {
    const stripe = Math.floor(y / 8) % 2;
    const brightness = stripe === 0 ? 180 : 140;
    ctx.fillStyle = `rgb(${brightness + 20}, ${brightness - 10}, ${brightness - 50})`;
    ctx.fillRect(0, y, w, 1);
  }
  
  // Add subtle horizontal striations
  for (let y = 0; y < h; y += 2) {
    ctx.fillStyle = 'rgba(100, 80, 30, 0.15)';
    ctx.fillRect(0, y, w, 1);
  }
}

function onMouseMove(e) {
  const container = document.querySelector('.hero-canvas-container');
  const rect = container.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  
  // Map to rotation angles with reduced range for subtlety
  targetRotationY = (x - 0.5) * Math.PI * 0.8;
  targetRotationX = (y - 0.5) * Math.PI * 0.3;
  
  isInteracting = true;
  
  clearTimeout(interactionTimeout);
  interactionTimeout = setTimeout(() => {
    isInteracting = false;
  }, 150);
}

function onTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const container = document.querySelector('.hero-canvas-container');
  const rect = container.getBoundingClientRect();
  const x = (touch.clientX - rect.left) / rect.width;
  const y = (touch.clientY - rect.top) / rect.height;
  
  targetRotationY = (x - 0.5) * Math.PI * 0.8;
  targetRotationX = (y - 0.5) * Math.PI * 0.3;
  
  isInteracting = true;
  clearTimeout(interactionTimeout);
  interactionTimeout = setTimeout(() => {
    isInteracting = false;
  }, 150);
}

function onMouseLeave() {
  targetRotationX = 0;
  targetRotationY = 0;
  isInteracting = false;
}

function animateCoin() {
  requestAnimationFrame(animateCoin);
  
  if (!coinGroup) return;
  
  // Smooth interpolation with inertia
  const lerpFactor = isInteracting ? 0.08 : 0.03;
  
  coinRotationX += (targetRotationX - coinRotationX) * lerpFactor;
  coinRotationY += (targetRotationY - coinRotationY) * lerpFactor;
  
  // Apply rotations
  coinGroup.rotation.x = coinRotationX;
  coinGroup.rotation.y = coinRotationY + (Date.now() * autoRotateSpeed);
  
  // Subtle vertical float
  coinGroup.position.y = Math.sin(Date.now() * 0.001) * 0.08;
  
  renderer.render(scene, camera);
}

// Resize handler for coin
window.addEventListener('resize', () => {
  if (!renderer || !camera) return;
  const container = document.querySelector('.hero-canvas-container');
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

// ============================================
// GSAP ENTRANCE ANIMATIONS
// ============================================

function initEntranceAnimations() {
  const tl = gsap.timeline();
  
  tl.to('.hero-label', {
    opacity: 1,
    y: 0,
    duration: 1.0,
    ease: 'power3.out'
  })
  .to('.hero-title-line', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power3.out'
  }, '-=0.7')
  .to('.hero-logo', {
    opacity: 1,
    scale: 1,
    duration: 1.0,
    ease: 'power3.out'
  }, '-=0.8')
  .to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1.0,
    ease: 'power3.out'
  }, '-=0.6')
  .to('.hero-actions', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .to('.hero-scroll-hint', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.3');
}

// ============================================
// GSAP SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
  // Philosophy section
  gsap.from('.philosophie .section-eyebrow', {
    scrollTrigger: {
      trigger: '.philosophie',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  gsap.from('.philosophie .section-title', {
    scrollTrigger: {
      trigger: '.philosophie',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 40,
    duration: 1.0,
    ease: 'power3.out'
  });
  
  gsap.from('.philosophie .section-body', {
    scrollTrigger: {
      trigger: '.philosophie',
      start: 'top 65%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  });
  
  gsap.from('.attribute', {
    scrollTrigger: {
      trigger: '.philosophie-attributes',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  });
  
  gsap.from('.philosophie-emblem', {
    scrollTrigger: {
      trigger: '.philosophie-visual',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    scale: 0.9,
    rotation: -10,
    duration: 1.2,
    ease: 'power3.out'
  });
  
  // Services section
  gsap.from('.services .section-eyebrow', {
    scrollTrigger: {
      trigger: '.services',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  gsap.from('.services-title', {
    scrollTrigger: {
      trigger: '.services',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 40,
    duration: 1.0,
    ease: 'power3.out'
  });
  
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.service-cards',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 1.0,
    stagger: 0.2,
    ease: 'power3.out'
  });
  
  // Quote section
  gsap.from('.quote-text', {
    scrollTrigger: {
      trigger: '.quote',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: 'power3.out'
  });
  
  gsap.from('.quote-cite', {
    scrollTrigger: {
      trigger: '.quote',
      start: 'top 65%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3,
    ease: 'power3.out'
  });
  
  // Contact section
  gsap.from('.contact-info .section-eyebrow', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  gsap.from('.contact-info .section-title', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 40,
    duration: 1.0,
    ease: 'power3.out'
  });
  
  gsap.from('.contact-detail', {
    scrollTrigger: {
      trigger: '.contact-details',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  });
  
  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 65%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: 30,
    duration: 1.0,
    ease: 'power3.out'
  });
}

// ============================================
// NAV SCROLL BEHAVIOR
// ============================================

function initNav() {
  const nav = document.getElementById('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
  
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target && lenis) {
        lenis.scrollTo(target, { offset: -80 });
      }
    });
  });
}

// ============================================
// FORM HANDLING
// ============================================

function initForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = translations[currentLang]['form.submit'] === 'Envoyer' ? 'Envoyé' : 
                             translations[currentLang]['form.submit'] === 'Send' ? 'Sent' :
                             translations[currentLang]['form.submit'] === 'Senden' ? 'Gesendet' : 'Inviato';
    submitBtn.style.backgroundColor = '#55606E';
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = '';
      form.reset();
    }, 2000);
  });
}

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all systems
  initLenis();
  initCursor();
  initCoin();
  initNav();
  initForm();
  initScrollAnimations();
  
  // Run loader
  runLoader();
});