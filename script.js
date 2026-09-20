const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
document.querySelectorAll('.photo').forEach((photo) => {
  photo.addEventListener('click', () => {
    const image = photo.querySelector('img');
    dialogImage.src = photo.dataset.full;
    dialogImage.alt = image.alt;
    dialog.showModal();
  });
});

document.querySelectorAll('.masonry').forEach((track, index) => {
  const shell = document.createElement('div');
  shell.className = 'slider-shell';
  track.parentNode.insertBefore(shell, track);
  shell.appendChild(track);

  const controls = document.createElement('div');
  controls.className = 'slider-controls';
  controls.innerHTML = '<button class="slider-arrow" type="button" aria-label="Previous photographs">←</button><button class="slider-arrow" type="button" aria-label="Next photographs">→</button>';
  shell.parentNode.insertBefore(controls, shell);

  const [previous, next] = controls.querySelectorAll('button');
  const slide = (direction) => track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.82, 720), behavior: 'smooth' });
  previous.addEventListener('click', () => slide(-1));
  next.addEventListener('click', () => slide(1));
  track.setAttribute('aria-label', `Photography collection ${index + 1}`);
});

const translations = {
  en: {
    navPortfolio: 'Portfolio', navAbout: 'About', navContact: 'Contact', heroEyebrow: 'Photography · Netherlands',
    heroTitle: 'Capture what<br><em>matters.</em>', heroText: 'Portraits, celebrations and beautifully unexpected moments—photographed with colour, warmth and intention.', heroButton: 'Explore the portfolio', frameLabel: 'The tools behind the stories · RobaLens.co',
    portfolioEyebrow: 'Explore the portfolio', portfolioTitle: 'Choose what<br>catches your eye.', portfolioText: 'Browse by collection—from expressive portraits and celebrations to food, places and wildlife.',
    portraits: 'Portraits', portraitsText: 'Presence, personality and natural expression.', celebrations: 'Celebrations', celebrationsText: 'Movement, connection and the joy around the room.', details: 'Flavours & details', detailsText: 'The small arrangements that make a scene memorable.', places: 'Places & streets', placesText: 'Character found in architecture and everyday movement.', wildlife: 'Nature & wildlife', wildlifeText: 'Curious creatures, caught in motion and stillness.',
    aboutEyebrow: 'Behind the lens', aboutTitle: 'Observing first.<br>Photographing second.', aboutTextOne: 'I’m the photographer behind RobaLens.co. I photograph people, celebrations, places and the unexpected details that give a moment its character.', aboutTextTwo: 'My approach is relaxed and attentive: preserving genuine expression while giving every image a refined finish.', tagline: '— Capture what matters', contactEyebrow: 'Let’s create', contactTitle: 'Have a story<br>worth keeping?', footerText: 'Photography · Netherlands', previous: 'Previous photographs', next: 'Next photographs'
  },
  nl: {
    navPortfolio: 'Portfolio', navAbout: 'Over mij', navContact: 'Contact', heroEyebrow: 'Fotografie · Nederland',
    heroTitle: 'Leg vast wat<br><em>ertoe doet.</em>', heroText: 'Portretten, vieringen en prachtig onverwachte momenten—gefotografeerd met kleur, warmte en aandacht.', heroButton: 'Bekijk het portfolio', frameLabel: 'De camera achter de verhalen · RobaLens.co',
    portfolioEyebrow: 'Ontdek het portfolio', portfolioTitle: 'Kies wat<br>je aandacht trekt.', portfolioText: 'Bekijk de collecties—van expressieve portretten en vieringen tot eten, locaties en dieren.',
    portraits: 'Portretten', portraitsText: 'Uitstraling, persoonlijkheid en natuurlijke expressie.', celebrations: 'Vieringen', celebrationsText: 'Beweging, verbinding en de vreugde in de ruimte.', details: 'Smaken & details', detailsText: 'De kleine composities die een scène onvergetelijk maken.', places: 'Locaties & straat', placesText: 'Karakter gevonden in architectuur en alledaagse beweging.', wildlife: 'Natuur & dieren', wildlifeText: 'Nieuwsgierige dieren, gevangen in beweging en stilte.',
    aboutEyebrow: 'Achter de lens', aboutTitle: 'Eerst observeren.<br>Dan fotograferen.', aboutTextOne: 'Ik ben de fotograaf achter RobaLens.co. Ik fotografeer mensen, vieringen, locaties en de onverwachte details die een moment karakter geven.', aboutTextTwo: 'Mijn werkwijze is ontspannen en aandachtig: echte expressie behouden en elk beeld verfijnd afwerken.', tagline: '— Leg vast wat ertoe doet', contactEyebrow: 'Laten we creëren', contactTitle: 'Heb je een verhaal<br>dat bewaard mag blijven?', footerText: 'Fotografie · Nederland', previous: 'Vorige foto’s', next: 'Volgende foto’s'
  },
  fr: {
    navPortfolio: 'Portfolio', navAbout: 'À propos', navContact: 'Contact', heroEyebrow: 'Photographie · Pays-Bas',
    heroTitle: 'Saisir ce qui<br><em>compte.</em>', heroText: 'Portraits, célébrations et instants merveilleusement inattendus—photographiés avec couleur, chaleur et intention.', heroButton: 'Découvrir le portfolio', frameLabel: 'L’appareil derrière les histoires · RobaLens.co',
    portfolioEyebrow: 'Explorez le portfolio', portfolioTitle: 'Choisissez ce qui<br>attire votre regard.', portfolioText: 'Parcourez les collections—des portraits expressifs et célébrations à la cuisine, aux lieux et à la faune.',
    portraits: 'Portraits', portraitsText: 'Présence, personnalité et expression naturelle.', celebrations: 'Célébrations', celebrationsText: 'Mouvement, liens et joie partagée.', details: 'Saveurs & détails', detailsText: 'Les petits arrangements qui rendent une scène mémorable.', places: 'Lieux & rue', placesText: 'Le caractère de l’architecture et du mouvement quotidien.', wildlife: 'Nature & animaux', wildlifeText: 'Des créatures curieuses, saisies en mouvement et au repos.',
    aboutEyebrow: 'Derrière l’objectif', aboutTitle: 'Observer d’abord.<br>Photographier ensuite.', aboutTextOne: 'Je suis le photographe derrière RobaLens.co. Je photographie les personnes, les célébrations, les lieux et les détails inattendus qui donnent son caractère à un moment.', aboutTextTwo: 'Mon approche est détendue et attentive : préserver les expressions sincères tout en apportant à chaque image une finition raffinée.', tagline: '— Saisir ce qui compte', contactEyebrow: 'Créons ensemble', contactTitle: 'Une histoire<br>à préserver ?', footerText: 'Photographie · Pays-Bas', previous: 'Photos précédentes', next: 'Photos suivantes'
  },
  de: {
    navPortfolio: 'Portfolio', navAbout: 'Über mich', navContact: 'Kontakt', heroEyebrow: 'Fotografie · Niederlande',
    heroTitle: 'Festhalten, was<br><em>zählt.</em>', heroText: 'Porträts, Feiern und wunderschön unerwartete Momente—fotografiert mit Farbe, Wärme und Gefühl.', heroButton: 'Portfolio entdecken', frameLabel: 'Die Kamera hinter den Geschichten · RobaLens.co',
    portfolioEyebrow: 'Portfolio entdecken', portfolioTitle: 'Wählen Sie, was<br>ins Auge fällt.', portfolioText: 'Entdecken Sie die Sammlungen—von ausdrucksstarken Porträts und Feiern bis zu Essen, Orten und Tierwelt.',
    portraits: 'Porträts', portraitsText: 'Präsenz, Persönlichkeit und natürlicher Ausdruck.', celebrations: 'Feiern', celebrationsText: 'Bewegung, Verbundenheit und Freude im Raum.', details: 'Genuss & Details', detailsText: 'Die kleinen Arrangements, die eine Szene unvergesslich machen.', places: 'Orte & Straße', placesText: 'Charakter in Architektur und alltäglicher Bewegung.', wildlife: 'Natur & Tierwelt', wildlifeText: 'Neugierige Tiere, in Bewegung und Ruhe eingefangen.',
    aboutEyebrow: 'Hinter der Linse', aboutTitle: 'Erst beobachten.<br>Dann fotografieren.', aboutTextOne: 'Ich bin der Fotograf hinter RobaLens.co. Ich fotografiere Menschen, Feiern, Orte und unerwartete Details, die einem Moment Charakter geben.', aboutTextTwo: 'Meine Arbeitsweise ist entspannt und aufmerksam: echte Ausdrücke bewahren und jedem Bild ein edles Finish verleihen.', tagline: '— Festhalten, was zählt', contactEyebrow: 'Lassen Sie uns gestalten', contactTitle: 'Eine Geschichte,<br>die bleiben soll?', footerText: 'Fotografie · Niederlande', previous: 'Vorherige Fotos', next: 'Nächste Fotos'
  },
  ro: {
    navPortfolio: 'Portofoliu', navAbout: 'Despre mine', navContact: 'Contact', heroEyebrow: 'Fotografie · Țările de Jos',
    heroTitle: 'Surprinde ceea ce<br><em>contează.</em>', heroText: 'Portrete, sărbători și momente frumos neașteptate—fotografiate cu culoare, căldură și intenție.', heroButton: 'Descoperă portofoliul', frameLabel: 'Aparatul din spatele poveștilor · RobaLens.co',
    portfolioEyebrow: 'Explorează portofoliul', portfolioTitle: 'Alege ceea ce<br>îți atrage privirea.', portfolioText: 'Descoperă colecțiile—de la portrete expresive și sărbători la gastronomie, locuri și animale.',
    portraits: 'Portrete', portraitsText: 'Prezență, personalitate și expresie naturală.', celebrations: 'Sărbători', celebrationsText: 'Mișcare, conexiune și bucuria din jur.', details: 'Gusturi & detalii', detailsText: 'Micile aranjamente care fac o scenă memorabilă.', places: 'Locuri & stradă', placesText: 'Caracter descoperit în arhitectură și mișcarea cotidiană.', wildlife: 'Natură & animale', wildlifeText: 'Creaturi curioase, surprinse în mișcare și repaus.',
    aboutEyebrow: 'În spatele obiectivului', aboutTitle: 'Mai întâi observ.<br>Apoi fotografiez.', aboutTextOne: 'Sunt fotograful din spatele RobaLens.co. Fotografiez oameni, sărbători, locuri și detaliile neașteptate care dau caracter unui moment.', aboutTextTwo: 'Abordarea mea este relaxată și atentă: păstrez expresia autentică și ofer fiecărei imagini un finisaj rafinat.', tagline: '— Surprinde ceea ce contează', contactEyebrow: 'Să creăm împreună', contactTitle: 'Ai o poveste<br>care merită păstrată?', footerText: 'Fotografie · Țările de Jos', previous: 'Fotografiile anterioare', next: 'Fotografiile următoare'
  }
};

const languageSelect = document.querySelector('#language-select');
const applyLanguage = (language) => {
  const copy = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = copy[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = copy[element.dataset.i18nHtml]; });
  document.querySelectorAll('.slider-controls').forEach((controls) => {
    const [previous, next] = controls.querySelectorAll('button');
    previous.setAttribute('aria-label', copy.previous);
    next.setAttribute('aria-label', copy.next);
  });
  window.localStorage.setItem('robalens-language', language);
};

const savedLanguage = window.localStorage.getItem('robalens-language');
if (savedLanguage && translations[savedLanguage]) languageSelect.value = savedLanguage;
applyLanguage(languageSelect.value);
languageSelect.addEventListener('change', (event) => applyLanguage(event.target.value));
dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
