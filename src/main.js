import './style.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
const phone = 'tel:+41417904141';
const maps = 'https://www.google.com/maps/search/?api=1&query=Luzernerstrasse+10%2C+6343+Rotkreuz';
const arrow = '<span aria-hidden="true">↗</span>';

const menus = {
  mittag: { title: 'Mittagskarte', subtitle: 'Eine genussvolle Pause mitten am Tag.', file: asset('menus/mittag.pdf'), label: 'Mittagskarte als PDF öffnen' },
  abend: { title: 'Abendkarte', subtitle: 'Zeit für einen besonderen Abend.', file: asset('menus/abend.pdf'), label: 'Abendkarte als PDF öffnen' },
};

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="site-header" id="top">
    <div class="header-inner container">
      <a class="brand" href="#top" aria-label="Dragon Schatz – zur Startseite">
        <span class="brand-seal" aria-hidden="true">龍</span>
        <span class="brand-type"><strong>DRAGON SCHATZ</strong><small>RESTAURANT · ROTKREUZ</small></span>
      </a>
      <nav class="desktop-nav" aria-label="Hauptnavigation">
        <a href="#ueber-uns">Über uns</a><a href="#speisekarte">Speisekarte</a><a href="#kontakt">Kontakt</a>
      </nav>
      <a class="header-call" href="${phone}">Tisch reservieren <span aria-hidden="true">↗</span></a>
      <button class="menu-toggle" type="button" aria-label="Menü öffnen" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile Navigation" hidden>
      <a href="#ueber-uns">Über uns</a><a href="#speisekarte">Speisekarte</a><a href="#kontakt">Kontakt</a><a href="${phone}">Tisch reservieren ↗</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <div class="hero-copy-inner">
          <div class="eyebrow light"><span class="eyebrow-line"></span> CHINESISCHE KÜCHE IN ROTKREUZ</div>
          <h1 id="hero-title">Ein Stück China.<br><em>Mitten in</em><br>Rotkreuz.</h1>
          <p>Gute Küche, herzliche Gastfreundschaft und Momente, die bleiben. Willkommen im Dragon Schatz.</p>
          <div class="hero-actions"><a class="button button-gold" href="#speisekarte">Speisekarte entdecken <span aria-hidden="true">↗</span></a><a class="text-link light-link" href="${phone}">Jetzt reservieren <span aria-hidden="true">→</span></a></div>
          <div class="hero-bottom"><span>EST. 2013</span><span class="hero-bottom-rule"></span><span>ROT KREUZ · SCHWEIZ</span></div>
        </div>
      </div>
      <div class="hero-visual"><img src="${asset('images/hero.jpg')}" alt="Chinesisches Gericht mit Sesam im Restaurant Dragon Schatz" fetchpriority="high" /><div class="hero-image-label"><span class="label-symbol">✦</span><span>Mit Liebe zubereitet<br>für besondere Momente</span></div></div>
    </section>

    <div class="intro-strip"><div class="container intro-strip-inner"><span>AUTHENTISCH GENIESSEN</span><span class="strip-star">✳</span><span>GEMEINSAM ZEIT VERBRINGEN</span><span class="strip-star">✳</span><span>SEIT 2013 IN ROTKREUZ</span></div></div>

    <section class="welcome section-space" id="ueber-uns" aria-labelledby="welcome-title">
      <div class="container welcome-grid">
        <div class="welcome-images"><img class="welcome-main" src="${asset('images/table.jpg')}" alt="Chinesische Spezialitäten auf dem gedeckten Tisch" loading="lazy" /><div class="welcome-inset"><img src="${asset('images/lantern.jpg')}" alt="Chinesische Laterne im Restaurant" loading="lazy" /></div><div class="year-badge"><strong>2013</strong><span>SEIT</span></div></div>
        <div class="welcome-copy"><div class="eyebrow"><span class="eyebrow-line"></span> WILLKOMMEN BEI UNS</div><h2 id="welcome-title">Ein Ort zum<br><em>Ankommen</em><span class="red-dot">.</span></h2><p class="lead">Seit 2013 freuen wir uns, unsere Gäste in Rotkreuz mit chinesischen Spezialitäten zu verwöhnen.</p><p>Ob ein gemütliches Mittagessen, ein Abend mit Familie und Freunden oder etwas Feines für zu Hause: Bei uns stehen guter Geschmack und eine herzliche Atmosphäre im Mittelpunkt.</p><div class="signature"><span class="signature-mark">龍</span><span>Wir freuen uns auf Ihren Besuch.<br><strong>Duc-Nguon Huynh & das Dragon Schatz Team</strong></span></div><a class="under-link" href="#kontakt">Besuchen Sie uns <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <section class="menu-section section-space" id="speisekarte" aria-labelledby="menu-title">
      <div class="container"><div class="menu-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> FÜR JEDEN APPETIT</div><h2 id="menu-title">Unsere <em>Speisekarte</em><span class="red-dot">.</span></h2></div><p>Von der Mittagspause bis zum ausgedehnten Abendessen. Entdecken Sie unsere chinesischen Spezialitäten – auch zum Mitnehmen.</p></div>
        <div class="menu-grid">
          <article class="menu-card lunch"><div class="menu-card-photo"><img src="${asset('images/dish.jpg')}" alt="Frisch zubereitetes chinesisches Gericht" loading="lazy" /></div><div class="menu-card-content"><span class="menu-number">01 / MITTAG</span><div><h3>Die Mittagskarte</h3><p>Eine genussvolle Pause mitten am Tag.</p></div><button class="round-arrow menu-select" type="button" data-menu="mittag" aria-label="Mittagskarte ansehen">↗</button></div></article>
          <article class="menu-card dinner"><div class="menu-card-photo"><img src="${asset('images/hero.jpg')}" alt="Chinesisches Gericht mit Sesam und Gemüse" loading="lazy" /></div><div class="menu-card-content"><span class="menu-number">02 / ABEND</span><div><h3>Die Abendkarte</h3><p>Zeit für einen besonderen Abend.</p></div><button class="round-arrow menu-select" type="button" data-menu="abend" aria-label="Abendkarte ansehen">↗</button></div></article>
        </div>
        <div class="menu-note"><span>Alle Speisen gibt es auch zum Mitnehmen.</span><a href="${asset('menus/deklaration.pdf')}" target="_blank" rel="noopener noreferrer">Deklaration ansehen ${arrow}</a></div>
      </div>
    </section>

    <section class="takeaway" aria-labelledby="takeaway-title"><div class="container takeaway-inner"><div class="takeaway-icon" aria-hidden="true">✳</div><div><div class="eyebrow light">LIEBER ZU HAUSE GENIESSEN?</div><h2 id="takeaway-title">Dragon Schatz <em>zum Mitnehmen.</em></h2><p>Unsere Speisen bieten wir auch als Takeaway an. Einfach anrufen und bestellen.</p></div><a class="button button-outline" href="${phone}">Takeaway bestellen <span aria-hidden="true">↗</span></a></div></section>

    <section class="visit section-space" id="kontakt" aria-labelledby="visit-title"><div class="container visit-grid"><div class="visit-copy"><div class="eyebrow"><span class="eyebrow-line"></span> WIR FREUEN UNS AUF SIE</div><h2 id="visit-title">Schön, wenn Sie<br><em>vorbeikommen</em><span class="red-dot">.</span></h2><p>Ein Platz am Tisch wartet auf Sie. Für Reservationen und Takeaway erreichen Sie uns telefonisch.</p><div class="visit-details"><div class="detail"><span class="detail-icon" aria-hidden="true">⌖</span><div><h3>Adresse</h3><address>Restaurant Dragon Schatz<br>Luzernerstrasse 10<br>6343 Rotkreuz</address><a href="${maps}" target="_blank" rel="noopener noreferrer">Route planen ${arrow}</a></div></div><div class="detail"><span class="detail-icon" aria-hidden="true">◷</span><div><h3>Öffnungszeiten</h3><div class="hours"><span>Mo – Fr</span><span>11:00 – 14:00<br>18:00 – 22:00</span><span>Sa</span><span>17:30 – 23:00</span><span>So</span><span>Ruhetag</span></div></div></div></div><a class="phone-large" href="${phone}"><span>RESERVATIONEN & TAKEAWAY</span>041 790 41 41 <span aria-hidden="true">↗</span></a></div><div class="visit-photo"><img src="${asset('images/owner.jpg')}" alt="Duc-Nguon Huynh, Inhaber des Restaurant Dragon Schatz" loading="lazy" /><div class="visit-photo-caption">PERSÖNLICH. HERZLICH. DRAGON SCHATZ.</div></div></div></section>
  </main>

  <footer class="footer"><div class="container"><div class="footer-top"><div><a class="brand footer-brand" href="#top"><span class="brand-seal" aria-hidden="true">龍</span><span class="brand-type"><strong>DRAGON SCHATZ</strong><small>RESTAURANT · ROTKREUZ</small></span></a><p>Chinesische Spezialitäten.<br>Mit Freude serviert in Rotkreuz.</p></div><div class="footer-links"><span>ENTDECKEN</span><a href="#ueber-uns">Über uns</a><a href="#speisekarte">Speisekarte</a><a href="#kontakt">Kontakt</a></div><div class="footer-links"><span>BESUCHEN</span><a href="${maps}" target="_blank" rel="noopener noreferrer">Luzernerstrasse 10<br>6343 Rotkreuz</a><a href="${phone}">041 790 41 41</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Restaurant Dragon Schatz</span><a href="https://www.dragonschatz.ch/impressum" target="_blank" rel="noopener noreferrer">Impressum & Datenschutz ↗</a><a href="#top">Nach oben ↑</a></div></div></footer>

  <dialog class="menu-dialog" aria-labelledby="dialog-title"><div class="dialog-head"><div><span class="eyebrow">DRAGON SCHATZ · SPEISEKARTE</span><h2 id="dialog-title"></h2><p id="dialog-subtitle"></p></div><button class="dialog-close" type="button" aria-label="Speisekarte schliessen">×</button></div><div class="dialog-actions"><a class="button button-red" id="dialog-pdf" href="#" target="_blank" rel="noopener noreferrer">PDF in neuem Tab öffnen ↗</a><a class="dialog-call" href="${phone}">Für Takeaway anrufen →</a></div><iframe id="menu-frame" title="Speisekarte Vorschau" loading="lazy"></iframe><p class="dialog-fallback">Keine Vorschau sichtbar? Öffnen Sie die Speisekarte über den PDF-Link oben.</p></dialog>
`;

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
function closeMobile() { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Menü öffnen'); mobileNav.hidden = true; }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menü schliessen' : 'Menü öffnen');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobile));
window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMobile(); });

const dialog = document.querySelector('.menu-dialog');
document.querySelectorAll('.menu-select').forEach(button => button.addEventListener('click', () => {
  const menu = menus[button.dataset.menu];
  document.querySelector('#dialog-title').textContent = menu.title;
  document.querySelector('#dialog-subtitle').textContent = menu.subtitle;
  document.querySelector('#dialog-pdf').href = menu.file;
  document.querySelector('#dialog-pdf').setAttribute('aria-label', menu.label);
  document.querySelector('#menu-frame').src = `${menu.file}#toolbar=0`;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { document.querySelector('#menu-frame').removeAttribute('src'); });
