/* =========================================================
   Shadrach Jimice Jr — Portfolio
   Vanilla JS. No dependencies, no build step.
   ========================================================= */
(function () {
  'use strict';

  /* ---- Configuration ------------------------------------------------
     FORM_ENDPOINT: leave empty and the contact form opens the visitor's
     mail client with everything pre-filled (works on GitHub Pages with
     zero backend). To collect submissions in an inbox instead, create a
     free form at https://formspree.io and paste the endpoint URL here:
       var FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
  ------------------------------------------------------------------- */
  var FORM_ENDPOINT = '';
  var CONTACT_EMAIL = 'jimicejrs@gmail.com';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- Theme toggle (persisted) ---------- */
  (function theme() {
    var root = document.documentElement;
    var btn = $('#themeToggle');
    var stored = null;
    try { stored = localStorage.getItem('sjj-theme'); } catch (e) { /* private mode */ }

    var initial = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    apply(initial);

    function apply(mode) {
      root.setAttribute('data-theme', mode);
      if (btn) btn.setAttribute('aria-label', 'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode');
      var meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', mode === 'dark' ? '#0A0C10' : '#FAF9F7');
    }

    if (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        apply(next);
        try { localStorage.setItem('sjj-theme', next); } catch (e) { /* ignore */ }
      });
    }
  })();

  /* ---------- Mobile navigation ---------- */
  (function nav() {
    var btn = $('#menuBtn'), menu = $('#nav'), scrim = $('#navScrim');
    if (!btn || !menu) return;

    function setOpen(open) {
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('nav-open', open);
      if (scrim) scrim.hidden = !open;
    }

    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    if (scrim) scrim.addEventListener('click', function () { setOpen(false); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  })();

  /* ---------- Header state + scroll progress ---------- */
  (function scrollChrome() {
    var header = $('#header'), bar = $('#scrollProgress'), ticking = false;

    function update() {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle('stuck', y > 24);
      if (bar) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* ---------- Reveal on scroll ---------- */
  (function reveal() {
    var items = $$('.reveal');
    if (!items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    // Stagger siblings so groups cascade rather than pop in together.
    items.forEach(function (el) {
      var siblings = el.parentElement ? $$('.reveal', el.parentElement) : [el];
      var i = siblings.indexOf(el);
      if (i > 0 && i < 8) el.style.transitionDelay = (i * 0.07) + 's';
      io.observe(el);
    });
  })();

  /* ---------- Active nav link ---------- */
  (function activeLink() {
    var links = $$('.nav a[href^="#"]');
    var sections = links
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { io.observe(s); });
  })();

  /* ---------- Role rotator ---------- */
  (function roles() {
    var el = $('#roleRotator');
    if (!el) return;

    var words = [
      'Full-Stack Developer',
      'Laravel & React Engineer',
      'Flutter Mobile Developer',
      'Database Administrator',
      'ICT Lecturer & Trainer'
    ];

    if (reduceMotion) { el.textContent = words[0]; return; }

    var w = 0, c = 0, deleting = false;

    (function tick() {
      var word = words[w];
      c += deleting ? -1 : 1;
      el.textContent = word.slice(0, c);

      var delay = deleting ? 35 : 70;
      if (!deleting && c === word.length) { deleting = true; delay = 1600; }
      else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 260; }

      setTimeout(tick, delay);
    })();
  })();

  /* ---------- Animated stat counters ---------- */
  (function counters() {
    var stats = $$('.stats strong[data-count]');
    if (!stats.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);

        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var start = performance.now(), dur = 1100;

        (function step(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        })(start);
      });
    }, { threshold: 0.6 });

    stats.forEach(function (s) { io.observe(s); });
  })();

  /* ---------- Copy-to-clipboard ---------- */
  (function copy() {
    $$('.copy-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.getAttribute('data-copy') || '';
        var done = function () {
          btn.classList.add('copied');
          btn.setAttribute('aria-label', 'Copied');
          setTimeout(function () {
            btn.classList.remove('copied');
            btn.setAttribute('aria-label', 'Copy email address');
          }, 1800);
        };

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(done).catch(fallback);
        } else {
          fallback();
        }

        function fallback() {
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); done(); } catch (e) { /* nothing to do */ }
          document.body.removeChild(ta);
        }
      });
    });
  })();

  /* ---------- Contact form ---------- */
  (function form() {
    var el = $('#contactForm');
    if (!el) return;
    var status = $('#formStatus');

    function fieldOf(input) { return input.closest('.field'); }

    function setError(input, msg) {
      var field = fieldOf(input);
      var err = field ? $('.err', field) : null;
      if (field) field.classList.toggle('invalid', Boolean(msg));
      if (err) err.textContent = msg || '';
      return !msg;
    }

    function validate() {
      var ok = true;
      var name = $('#cf-name'), email = $('#cf-email'), message = $('#cf-message');

      ok = setError(name, name.value.trim() ? '' : 'Please tell me your name.') && ok;
      ok = setError(email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())
        ? '' : 'A valid email so I can reply.') && ok;
      ok = setError(message, message.value.trim().length >= 10
        ? '' : 'A sentence or two about the project.') && ok;

      return ok;
    }

    // Clear an error as soon as the visitor starts fixing it.
    $$('input, textarea', el).forEach(function (input) {
      input.addEventListener('input', function () {
        var field = fieldOf(input);
        if (field && field.classList.contains('invalid')) setError(input, '');
      });
    });

    function say(msg, kind) {
      if (!status) return;
      status.textContent = msg;
      status.className = 'form-status' + (kind ? ' ' + kind : '');
    }

    el.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) { say('Please fix the highlighted fields.', 'bad'); return; }

      var data = {
        name: $('#cf-name').value.trim(),
        email: $('#cf-email').value.trim(),
        type: $('#cf-type').value,
        message: $('#cf-message').value.trim()
      };
      var btn = $('button[type="submit"]', el);

      if (FORM_ENDPOINT) {
        say('Sending…');
        if (btn) btn.disabled = true;

        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(function (res) {
          if (!res.ok) throw new Error('Bad response');
          el.reset();
          say('Thank you — your brief is with me. I reply within 24 hours.', 'ok');
        }).catch(function () {
          say('That did not send. Please email ' + CONTACT_EMAIL + ' directly.', 'bad');
        }).then(function () {
          if (btn) btn.disabled = false;
        });
        return;
      }

      // No endpoint configured: hand off to the visitor's mail client.
      var subject = 'Project enquiry — ' + data.type + ' — ' + data.name;
      var body =
        'Name: ' + data.name + '\n' +
        'Email: ' + data.email + '\n' +
        'Needs: ' + data.type + '\n\n' +
        data.message + '\n';

      window.location.href = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      say('Opening your email app with the brief filled in — just press send.', 'ok');
    });
  })();

  /* ---------- Footer year ---------- */
  (function year() {
    var el = $('#year');
    if (el) el.textContent = String(new Date().getFullYear());
  })();

})();
