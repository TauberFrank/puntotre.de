(function () {
  'use strict';

  var config = window.WPEShowroomConfig;
  var adapter = window.WPEShowroomAdapter || {};
  if (!config) return;

  var state = {
    heroIndex: 0,
    heroTimer: null,
    currentWorld: null,
    currentItems: [],
    currentIndex: 0,
    lastTrigger: null,
    favorites: readFavorites()
  };

  function byId(id) { return document.getElementById(id); }
  function setText(id, value) {
    var node = byId(id);
    if (node) node.textContent = value || '';
  }
  function splitTitle(value) {
    return String(value || '').split('\n').map(function (line, index) {
      return '<span' + (index ? ' class="ws-title-italic"' : '') + '>' + escapeHtml(line) + '</span>';
    }).join('');
  }
  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  function safeUrl(value) {
    var url = String(value || '#').trim();
    if (/^(https?:\/\/|\/|#)/i.test(url)) return url;
    if (/^[a-z0-9][a-z0-9/_\-.]*(?:[?#].*)?$/i.test(url)) return url;
    return '#';
  }
  function linkFor(key) {
    if (typeof adapter.resolveLink === 'function') {
      var resolved = adapter.resolveLink(key, config.links[key]);
      if (resolved) return resolved;
    }
    return config.links[key] || '#';
  }
  function itemLink(item) {
    if (typeof adapter.resolveItemLink === 'function') {
      var resolved = adapter.resolveItemLink(item);
      if (resolved) return resolved;
    }
    return item.detailUrl || linkFor('allIdeas');
  }

  function renderHeader() {
    var brand = byId('ws-brand');
    brand.textContent = config.brand.label;
    brand.href = safeUrl(config.brand.homeUrl);
    byId('ws-nav-plan').href = safeUrl(linkFor('plan'));
  }

  function renderHero() {
    setText('ws-hero-eyebrow', config.hero.eyebrow);
    byId('ws-hero-title').innerHTML = splitTitle(config.hero.title);
    setText('ws-hero-intro', config.hero.intro);

    var media = byId('ws-hero-media');
    var progress = byId('ws-hero-progress');
    config.hero.slides.forEach(function (slide, index) {
      var picture = document.createElement('div');
      picture.className = 'ws-hero-slide' + (index === 0 ? ' is-active' : '');
      picture.style.backgroundImage = 'url("' + safeUrl(slide.image) + '")';
      picture.setAttribute('role', 'img');
      picture.setAttribute('aria-label', slide.alt || '');
      media.appendChild(picture);

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'ws-hero-dot' + (index === 0 ? ' is-active' : '');
      button.setAttribute('aria-label', 'Motiv ' + (index + 1) + ' zeigen');
      button.addEventListener('click', function () {
        setHero(index);
        restartHero();
      });
      progress.appendChild(button);
    });

    if (!prefersReducedMotion()) restartHero();
  }

  function setHero(index) {
    var slides = document.querySelectorAll('.ws-hero-slide');
    var dots = document.querySelectorAll('.ws-hero-dot');
    if (!slides.length) return;
    state.heroIndex = (index + slides.length) % slides.length;
    Array.prototype.forEach.call(slides, function (slide, i) {
      slide.classList.toggle('is-active', i === state.heroIndex);
    });
    Array.prototype.forEach.call(dots, function (dot, i) {
      dot.classList.toggle('is-active', i === state.heroIndex);
      dot.setAttribute('aria-current', i === state.heroIndex ? 'true' : 'false');
    });
  }

  function restartHero() {
    window.clearInterval(state.heroTimer);
    state.heroTimer = window.setInterval(function () {
      setHero(state.heroIndex + 1);
    }, 7200);
  }

  function renderStatement() {
    setText('ws-statement-eyebrow', config.statement.eyebrow);
    setText('ws-statement-title', config.statement.title);
    setText('ws-statement-copy', config.statement.copy);
  }

  function renderWorlds() {
    setText('ws-worlds-eyebrow', config.worldsIntro.eyebrow);
    setText('ws-worlds-title', config.worldsIntro.title);
    var list = byId('ws-world-list');

    config.worlds.forEach(function (world, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'ws-world ws-reveal' + (index % 2 ? ' is-shifted' : '');
      button.setAttribute('data-world', world.id);
      button.setAttribute('aria-haspopup', 'dialog');
      button.innerHTML =
        '<img src="' + safeUrl(world.image) + '" alt="" loading="lazy" style="object-position:' + escapeHtml(world.position || 'center') + '">' +
        '<span class="ws-world-shade" aria-hidden="true"></span>' +
        '<span class="ws-world-copy">' +
          '<span class="ws-world-number">' + escapeHtml(world.number) + '</span>' +
          '<strong>' + escapeHtml(world.title) + '</strong>' +
          '<span class="ws-world-subtitle">' + escapeHtml(world.subtitle) + '</span>' +
          '<span class="ws-world-open">Welt betreten <i aria-hidden="true">↗</i></span>' +
        '</span>';
      button.addEventListener('click', function () { openWorld(world, button); });
      list.appendChild(button);
    });
  }

  function renderShowcase() {
    setText('ws-showcase-eyebrow', config.showcase.eyebrow);
    setText('ws-showcase-title', config.showcase.title);
    setText('ws-showcase-copy', config.showcase.copy);
    var grid = byId('ws-showcase-grid');

    config.showcase.items.forEach(function (item) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'ws-showcase-item ws-showcase-' + (item.size || 'standard') + ' ws-reveal';
      button.innerHTML = '<img src="' + safeUrl(item.image) + '" alt="' + escapeHtml(item.alt) + '" loading="lazy">';
      button.addEventListener('click', function () {
        var world = findWorld(item.world);
        if (world) openWorld(world, button);
      });
      grid.appendChild(button);
    });
  }

  function renderMaterials() {
    setText('ws-materials-eyebrow', config.materials.eyebrow);
    setText('ws-materials-title', config.materials.title);
    setText('ws-materials-copy', config.materials.copy);
    var grid = byId('ws-material-grid');

    config.materials.items.forEach(function (item, index) {
      var figure = document.createElement('figure');
      figure.className = 'ws-material ws-reveal';
      figure.style.setProperty('--ws-delay', (index * 70) + 'ms');
      figure.innerHTML =
        '<img src="' + safeUrl(item.image) + '" alt="" loading="lazy">' +
        '<figcaption>' + escapeHtml(item.label) + '</figcaption>';
      grid.appendChild(figure);
    });
  }

  function renderIndividual() {
    setText('ws-individual-eyebrow', config.individual.eyebrow);
    setText('ws-individual-title', config.individual.title);
    setText('ws-individual-copy', config.individual.copy);
    byId('ws-individual-media').style.backgroundImage = 'url("' + safeUrl(config.individual.image) + '")';
  }

  function renderPlanning() {
    setText('ws-planning-eyebrow', config.planning.eyebrow);
    setText('ws-planning-title', config.planning.title);
    setText('ws-planning-copy', config.planning.copy);
    var actions = byId('ws-planning-actions');
    config.planning.actions.forEach(function (action) {
      var link = document.createElement('a');
      link.className = 'ws-button ' + (action.style === 'light' ? 'ws-button-light' : 'ws-button-line');
      link.href = safeUrl(linkFor(action.urlKey));
      link.textContent = action.label;
      actions.appendChild(link);
    });
  }

  function findWorld(id) {
    return config.worlds.filter(function (world) { return world.id === id; })[0] || null;
  }

  function openWorld(world, trigger) {
    state.currentWorld = world;
    state.currentItems = world.items || [];
    state.currentIndex = 0;
    state.lastTrigger = trigger || null;
    setText('ws-dialog-world', world.number + ' · ' + world.title);
    buildThumbs();
    showItem(0);
    var dialog = byId('ws-dialog');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    document.documentElement.classList.add('ws-dialog-open');
  }

  function closeWorld() {
    var dialog = byId('ws-dialog');
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    document.documentElement.classList.remove('ws-dialog-open');
    if (state.lastTrigger) state.lastTrigger.focus();
  }

  function showItem(index) {
    if (!state.currentItems.length) return;
    state.currentIndex = (index + state.currentItems.length) % state.currentItems.length;
    var item = state.currentItems[state.currentIndex];
    var image = byId('ws-dialog-image');
    image.classList.add('is-loading');
    image.onload = function () { image.classList.remove('is-loading'); };
    image.onerror = function () { image.classList.remove('is-loading'); };
    image.src = safeUrl(item.image);
    image.alt = item.name + ': ' + item.mood;
    setText('ws-dialog-count', (state.currentIndex + 1) + ' / ' + state.currentItems.length);
    setText('ws-dialog-eyebrow', state.currentWorld.title);
    setText('ws-dialog-title', item.name);
    setText('ws-dialog-mood', item.mood);
    byId('ws-dialog-link').href = safeUrl(itemLink(item));
    renderDetails(item);
    renderFavorite(item);
    Array.prototype.forEach.call(byId('ws-dialog-thumbs').children, function (thumb, i) {
      thumb.classList.toggle('is-active', i === state.currentIndex);
      thumb.setAttribute('aria-current', i === state.currentIndex ? 'true' : 'false');
    });
  }

  function buildThumbs() {
    var thumbs = byId('ws-dialog-thumbs');
    thumbs.innerHTML = '';
    state.currentItems.forEach(function (item, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'ws-dialog-thumb';
      button.setAttribute('aria-label', item.name + ' zeigen');
      button.innerHTML = '<img src="' + safeUrl(item.thumb || item.image) + '" alt="" loading="lazy">';
      button.addEventListener('click', function () { showItem(index); });
      thumbs.appendChild(button);
    });
  }

  function renderDetails(item) {
    var details = byId('ws-product-details');
    details.innerHTML = '';
    [
      ['Serie', item.series],
      ['Hersteller', item.manufacturer],
      ['Ausführung', item.material],
      ['Charakter', item.character]
    ].forEach(function (pair) {
      if (!pair[1]) return;
      var dt = document.createElement('dt');
      var dd = document.createElement('dd');
      dt.textContent = pair[0];
      dd.textContent = pair[1];
      details.appendChild(dt);
      details.appendChild(dd);
    });
  }

  function renderFavorite(item) {
    var button = byId('ws-favorite');
    var active = state.favorites.indexOf(item.id) !== -1;
    button.classList.toggle('is-active', active);
    button.textContent = active ? 'Gemerkt ✓' : 'Merken';
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  }

  function toggleFavorite() {
    var item = state.currentItems[state.currentIndex];
    if (!item) return;
    var index = state.favorites.indexOf(item.id);
    var active;
    if (index === -1) {
      state.favorites.push(item.id);
      active = true;
    } else {
      state.favorites.splice(index, 1);
      active = false;
    }
    writeFavorites();
    renderFavorite(item);
    if (typeof adapter.onFavorite === 'function') adapter.onFavorite(item, active);
    window.dispatchEvent(new CustomEvent('wpe-showroom:favorite', { detail: { item: item, active: active } }));
  }

  function readFavorites() {
    if (typeof adapter.readFavorites === 'function') return adapter.readFavorites() || [];
    try {
      var parsed = JSON.parse(window.localStorage.getItem('wpe-showroom-favorites') || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function writeFavorites() {
    if (typeof adapter.writeFavorites === 'function') {
      adapter.writeFavorites(state.favorites.slice());
      return;
    }
    try { window.localStorage.setItem('wpe-showroom-favorites', JSON.stringify(state.favorites)); } catch (_) {}
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function setupReveal() {
    var items = document.querySelectorAll('.ws-reveal');
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(items, function (item) { item.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
    Array.prototype.forEach.call(items, function (item) { observer.observe(item); });
  }

  function setupHeader() {
    var header = byId('ws-header');
    function update() { header.classList.toggle('is-scrolled', window.scrollY > 40); }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function setupDialog() {
    var dialog = byId('ws-dialog');
    byId('ws-dialog-close').addEventListener('click', closeWorld);
    byId('ws-dialog-prev').addEventListener('click', function () { showItem(state.currentIndex - 1); });
    byId('ws-dialog-next').addEventListener('click', function () { showItem(state.currentIndex + 1); });
    byId('ws-favorite').addEventListener('click', toggleFavorite);
    dialog.addEventListener('cancel', function (event) { event.preventDefault(); closeWorld(); });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) closeWorld(); });
    dialog.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') { event.preventDefault(); showItem(state.currentIndex - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); showItem(state.currentIndex + 1); }
    });
  }

  function init() {
    document.documentElement.classList.add('ws-has-js');
    renderHeader();
    renderHero();
    renderStatement();
    renderWorlds();
    renderShowcase();
    renderMaterials();
    renderIndividual();
    renderPlanning();
    setupHeader();
    setupDialog();
    setupReveal();
    window.requestAnimationFrame(function () { document.body.classList.add('ws-ready'); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
}());
