/* אלגברה 1מ – אפליקציית לימוד (ללא תלות בספריות מלבד KaTeX) */
(function () {
  'use strict';

  const TOPICS = window.TOPICS || [];
  const THEOREMS = window.THEOREMS || {};
  const EXAMPLES = window.EXAMPLES || {};
  const PRACTICE = (window.PRACTICE || []).map((q, i) => Object.assign({ uid: 'q' + i }, q));
  const SOURCES = window.SOURCES || {};

  const LEARNED_KEY = 'alg1m-learned';
  const THEME_KEY = 'alg1m-theme';
  const FILTER_KEY = 'alg1m-filters';

  const TABS = [
    { id: 'theorems', label: 'משפטים והגדרות' },
    { id: 'examples', label: 'דוגמאות' },
    { id: 'practice', label: 'תרגול' }
  ];
  const KIND = { def: 'הגדרה', thm: 'משפט', prop: 'תכונות', formula: 'נוסחה', algo: 'שיטה', remark: 'הערה' };
  const QTYPE = { open: 'שאלה פתוחה', tf: 'הוכח/הפרך', mc: 'אמריקאית' };
  const LETTERS = ['א', 'ב', 'ג', 'ד', 'ה'];

  /* ---------- אחסון מקומי בטוח ---------- */
  function load(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* מצב פרטי – מתעלמים */ }
  }
  let learned = new Set(load(LEARNED_KEY, []));
  let filters = load(FILTER_KEY, { type: 'all', exam: 'all' });

  /* ---------- עזרים ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const srcLabel = (src) => (src || '').split('').map((k) => SOURCES[k]).filter(Boolean).join(', ');
  const topicById = (id) => TOPICS.find((t) => t.id === id);
  const checkSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function renderMath(el) {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false,
      strict: 'ignore'
    });
  }

  /* ---------- ערכת נושא ---------- */
  function currentTheme() {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  $('#themeBtn').addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  });

  /* ---------- תפריט נייד ---------- */
  const sidebar = $('#sidebar'), scrim = $('#scrim'), menuBtn = $('#menuBtn');
  function setMenu(open) {
    sidebar.classList.toggle('open', open);
    scrim.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  }
  menuBtn.addEventListener('click', () => setMenu(!sidebar.classList.contains('open')));
  scrim.addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- סימון נושאים שנלמדו ---------- */
  function toggleLearned(id) {
    if (learned.has(id)) learned.delete(id); else learned.add(id);
    save(LEARNED_KEY, [...learned]);
    renderSidebar();
    renderProgress();
    document.querySelectorAll('[data-learn="' + id + '"]').forEach((b) => b.setAttribute('aria-pressed', String(learned.has(id))));
    document.querySelectorAll('.tcard[data-topic="' + id + '"]').forEach((c) => c.classList.toggle('learned', learned.has(id)));
    const homeBar = $('#homeProgress');
    if (homeBar) homeBar.outerHTML = progressBlock();
  }

  function renderProgress() {
    $('#topProgress').textContent = 'נלמדו ' + learned.size + ' מתוך ' + TOPICS.length + ' נושאים';
  }

  function renderSidebar() {
    const route = parseRoute();
    $('.side-home').classList.toggle('active', !route.topic);
    $('#topicList').innerHTML = TOPICS.map((t) => {
      const isL = learned.has(t.id);
      const active = route.topic === t.id;
      return '<li class="topic-item' + (isL ? ' learned' : '') + (active ? ' active' : '') + '">' +
        '<a class="topic-link" href="#/t/' + t.id + '/' + (active ? route.tab : 'theorems') + '"' + (active ? ' aria-current="page"' : '') + '>' +
        '<span class="topic-num">' + t.num + '</span><span class="topic-name">' + esc(t.title) + '</span></a>' +
        '<button class="check" data-learn="' + t.id + '" aria-pressed="' + isL + '" aria-label="סמן את ' + esc(t.title) + ' כנלמד" title="סמן כנלמד">' + checkSvg + '</button>' +
        '</li>';
    }).join('');
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-learn]');
    if (b) { e.preventDefault(); toggleLearned(b.getAttribute('data-learn')); }
  });
  $('#topicList').addEventListener('click', (e) => { if (e.target.closest('.topic-link')) setMenu(false); });
  $('.side-home').addEventListener('click', () => setMenu(false));

  /* ---------- ניתוב ---------- */
  function parseRoute() {
    const parts = (location.hash || '#/').replace(/^#\/?/, '').split('/');
    if (parts[0] === 't' && topicById(parts[1])) {
      const tab = TABS.some((t) => t.id === parts[2]) ? parts[2] : 'theorems';
      return { topic: parts[1], tab };
    }
    return { topic: null };
  }

  function counts(id) {
    return {
      theorems: (THEOREMS[id] || []).length,
      examples: (EXAMPLES[id] || []).length,
      practice: PRACTICE.filter((q) => q.topic === id).length
    };
  }

  /* ---------- עמוד הבית ---------- */
  function progressBlock() {
    const pct = TOPICS.length ? Math.round((learned.size / TOPICS.length) * 100) : 0;
    return '<section class="progress-wrap" id="homeProgress" aria-label="התקדמות">' +
      '<div class="progress-row"><span>נלמדו ' + learned.size + ' מתוך ' + TOPICS.length + ' נושאים</span><span class="muted">' + pct + '%</span></div>' +
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><span style="width:' + pct + '%"></span></div>' +
      (learned.size ? '<button class="reset-btn" id="resetLearned">איפוס הסימונים</button>' : '') +
      '</section>';
  }

  function renderHome() {
    const totalT = TOPICS.reduce((s, t) => s + counts(t.id).theorems, 0);
    const totalE = TOPICS.reduce((s, t) => s + counts(t.id).examples, 0);
    const exams = [...new Set(PRACTICE.map((q) => q.exam.id))].length;
    const html = '<div class="page">' +
      '<section class="home-hero"><h1>אלגברה 1מ</h1>' +
      '<p>' + totalT + ' הגדרות ומשפטים, ' + totalE + ' דוגמאות פתורות ו-' + PRACTICE.length + ' שאלות מתוך ' + exams + ' מבחני עבר משנים 2021 עד 2025 – הכל מסודר לפי 12 נושאי הקורס. בחרו נושא כדי להתחיל, וסמנו ✓ כשסיימתם אותו.</p></section>' +
      progressBlock() +
      '<div class="topic-grid">' + TOPICS.map((t) => {
        const c = counts(t.id);
        return '<a class="tcard' + (learned.has(t.id) ? ' learned' : '') + '" data-topic="' + t.id + '" href="#/t/' + t.id + '/theorems">' +
          '<span class="tnum">' + t.num + '</span><h2>' + esc(t.title) + '</h2>' +
          '<div class="tstats">' + c.theorems + ' משפטים · ' + c.examples + ' דוגמאות · ' + c.practice + ' שאלות</div></a>';
      }).join('') + '</div>' +
      '<div class="sources-note"><p><b>מקורות:</b> סיכום הקורס המוקלד, הסיכום בכתב יד, מחברת ההרצאות הסרוקה, ומבחני עבר באלגברה 1/מ (104016) ו-1מ1 (104064) עם פתרונות. ליד כל פריט מצוין מאיזה מקור הוא נלקח.</p>' +
      '<p>הרמזים לשאלות נכתבו כהכוונה בלבד ומפנים למשפטים שבאתר; הפתרונות מבוססים על הפתרונות הרשמיים.</p></div>' +
      '</div>';
    const main = $('#main');
    main.innerHTML = html;
    document.title = 'אלגברה 1מ – מחברת לימוד';
  }

  document.addEventListener('click', (e) => {
    if (e.target.id === 'resetLearned') {
      learned = new Set(); save(LEARNED_KEY, []);
      renderSidebar(); renderProgress(); renderHome();
    }
  });

  /* ---------- עמוד נושא ---------- */
  function renderTheorems(id) {
    const items = THEOREMS[id] || [];
    if (!items.length) return '<p class="empty">אין פריטים בנושא זה בחומר.</p>';
    return '<div class="legend" aria-hidden="true"><span class="l-def">הגדרה</span><span class="l-thm">משפט</span><span class="l-prop">תכונות / נוסחה</span><span class="l-algo">שיטה</span><span class="l-rem">הערה</span></div>' +
      items.map((it) =>
        '<article class="item ' + it.type + '">' +
        '<div class="item-head"><span class="kind">' + (KIND[it.type] || '') + '</span><h3>' + it.title + '</h3>' +
        '<span class="src">' + srcLabel(it.src) + '</span></div>' +
        '<div class="item-body">' + it.body + '</div></article>'
      ).join('');
  }

  function renderExamples(id) {
    const items = EXAMPLES[id] || [];
    if (!items.length) return '<p class="empty">בחומר שצורף אין דוגמאות פתורות לנושא זה.</p>';
    return items.map((ex, i) =>
      '<article class="example"><div class="example-head"><h3>' + (i + 1) + '. ' + ex.title + '</h3><span class="src" style="margin-inline-start:auto">' + srcLabel(ex.src) + '</span></div>' +
      '<div class="problem">' + ex.problem + '</div><div class="solution">' + ex.solution + '</div></article>'
    ).join('');
  }

  function renderPractice(id) {
    const all = PRACTICE.filter((q) => q.topic === id);
    if (!all.length) {
      return '<p class="empty">במבחני העבר שצורפו אין שאלות שסווגו לנושא הזה. שאלות על הנושא משולבות בתוך שאלות בנושאים אחרים – למשל בתרגול של מערכות משוואות ומטריצות הפיכות.</p>';
    }
    const examsHere = [];
    all.forEach((q) => { if (!examsHere.some((e) => e.id === q.exam.id)) examsHere.push(q.exam); });
    const list = all.filter((q) => (filters.type === 'all' || q.type === filters.type) && (filters.exam === 'all' || q.exam.id === filters.exam));

    const filt = '<div class="filters" role="group" aria-label="סינון שאלות">' +
      '<label>סוג <select id="fType">' +
      '<option value="all">הכל</option>' +
      Object.keys(QTYPE).map((k) => '<option value="' + k + '"' + (filters.type === k ? ' selected' : '') + '>' + QTYPE[k] + '</option>').join('') +
      '</select></label>' +
      '<label>מבחן <select id="fExam"><option value="all">כל המבחנים</option>' +
      examsHere.map((e) => '<option value="' + e.id + '"' + (filters.exam === e.id ? ' selected' : '') + '>' + esc(e.label) + '</option>').join('') +
      '</select></label>' +
      '<span class="result-count">' + list.length + ' מתוך ' + all.length + ' שאלות</span></div>';

    if (!list.length) return filt + '<p class="empty">אין שאלות שמתאימות לסינון. נסו "הכל".</p>';

    return filt + list.map((q) => {
      let interact = '';
      if (q.type === 'mc') {
        interact = '<ul class="options">' + q.options.map((o, i) =>
          '<li><button class="opt" data-q="' + q.uid + '" data-opt="' + LETTERS[i] + '"><span class="letter">' + LETTERS[i] + '.</span><span>' + o + '</span></button></li>').join('') +
          '</ul><div class="feedback" id="fb-' + q.uid + '" aria-live="polite"></div>';
      } else if (q.type === 'tf') {
        interact = '<p style="margin:.4em 0 0;color:var(--ink-soft);font-size:15px">מה דעתכם – לפני שמציצים בפתרון?</p>' +
          '<div class="tf-row"><button class="tf-btn" data-q="' + q.uid + '" data-tf="true">הטענה נכונה</button>' +
          '<button class="tf-btn" data-q="' + q.uid + '" data-tf="false">הטענה לא נכונה</button></div>' +
          '<div class="feedback" id="fb-' + q.uid + '" aria-live="polite"></div>';
      }
      return '<article class="q" id="' + q.uid + '">' +
        '<div class="q-head"><h3>' + esc(q.q) + '</h3><span class="q-exam">' + esc(q.exam.label) + ' · ' + esc(q.exam.course) + '</span><span class="q-type">' + QTYPE[q.type] + '</span></div>' +
        '<div class="q-body">' + q.text + interact + '</div>' +
        '<div class="q-actions">' +
        '<button class="btn hint-btn" aria-expanded="false" aria-controls="h-' + q.uid + '">רמז</button>' +
        '<button class="btn sol-btn" aria-expanded="false" aria-controls="s-' + q.uid + '">פתרון</button></div>' +
        '<div class="reveal hint" id="h-' + q.uid + '" hidden><span class="reveal-title">רמז</span>' + q.hint + '</div>' +
        '<div class="reveal sol" id="s-' + q.uid + '" hidden><span class="reveal-title">פתרון</span>' + q.solution + '</div>' +
        '</article>';
    }).join('');
  }

  function renderTopic(route) {
    const t = topicById(route.topic);
    const c = counts(t.id);
    const idx = TOPICS.indexOf(t);
    const prev = TOPICS[idx - 1], next = TOPICS[idx + 1];
    let body;
    if (route.tab === 'examples') body = renderExamples(t.id);
    else if (route.tab === 'practice') body = renderPractice(t.id);
    else body = renderTheorems(t.id);

    const html = '<div class="page">' +
      '<header class="topic-head"><span class="big-num" aria-hidden="true">' + t.num + '</span>' +
      '<div><h1>' + esc(t.title) + '</h1><p class="meta">נושא ' + t.num + ' מתוך ' + TOPICS.length + '</p></div>' +
      '<button class="learn-toggle" data-learn="' + t.id + '" aria-pressed="' + learned.has(t.id) + '"><span class="tick">' + checkSvg.replace('<svg', '<svg width="14" height="14"') + '</span>נלמד</button></header>' +
      '<nav class="tabs" role="tablist" aria-label="אזורי הנושא">' + TABS.map((tb) =>
        '<a class="tab" role="tab" href="#/t/' + t.id + '/' + tb.id + '" aria-selected="' + (tb.id === route.tab) + '">' + tb.label + '<span class="count">' + c[tb.id] + '</span></a>').join('') + '</nav>' +
      '<section role="tabpanel">' + body + '</section>' +
      '<nav class="pager" aria-label="מעבר בין נושאים">' +
      (prev ? '<a href="#/t/' + prev.id + '/' + route.tab + '"><span class="dir">הנושא הקודם</span>' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a href="#/t/' + next.id + '/' + route.tab + '"><span class="dir">הנושא הבא</span>' + esc(next.title) + '</a>' : '<span></span>') +
      '</nav></div>';
    $('#main').innerHTML = html;
    document.title = t.title + ' – אלגברה 1מ';
  }

  /* ---------- אינטראקציה בתרגול ---------- */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.hint-btn, .sol-btn');
    if (btn) {
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      if (btn.classList.contains('sol-btn')) btn.textContent = open ? 'הסתר פתרון' : 'פתרון';
      if (btn.classList.contains('hint-btn')) btn.textContent = open ? 'הסתר רמז' : 'רמז';
      return;
    }
    const opt = e.target.closest('.opt');
    if (opt) {
      const q = PRACTICE.find((x) => x.uid === opt.dataset.q);
      const card = document.getElementById(q.uid);
      card.querySelectorAll('.opt').forEach((o) => o.classList.remove('correct', 'wrong'));
      const ok = opt.dataset.opt === q.answer;
      opt.classList.add(ok ? 'correct' : 'wrong');
      const fb = document.getElementById('fb-' + q.uid);
      fb.className = 'feedback ' + (ok ? 'ok' : 'no');
      fb.textContent = ok ? 'נכון! אפשר לפתוח את הפתרון לנימוק המלא.' : 'לא זו התשובה. נסו שוב או פתחו את הרמז.';
      return;
    }
    const tf = e.target.closest('.tf-btn');
    if (tf) {
      const q = PRACTICE.find((x) => x.uid === tf.dataset.q);
      const card = document.getElementById(q.uid);
      card.querySelectorAll('.tf-btn').forEach((o) => o.classList.remove('correct', 'wrong'));
      const ok = (tf.dataset.tf === 'true') === q.answer;
      tf.classList.add(ok ? 'correct' : 'wrong');
      const fb = document.getElementById('fb-' + q.uid);
      fb.className = 'feedback ' + (ok ? 'ok' : 'no');
      fb.textContent = ok ? 'כיוון נכון! עכשיו צריך הוכחה או דוגמה נגדית – בדקו בפתרון.' : 'לא. נסו לחשוב על ' + (q.answer ? 'הוכחה' : 'דוגמה נגדית') + '.';
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target.id === 'fType' || e.target.id === 'fExam') {
      filters = { type: $('#fType').value, exam: $('#fExam').value };
      save(FILTER_KEY, filters);
      render(true);
    }
  });

  /* ---------- ציור ---------- */
  function render(keepScroll) {
    const route = parseRoute();
    renderSidebar();
    renderProgress();
    if (route.topic) renderTopic(route); else renderHome();
    renderMath($('#main'));
    if (!keepScroll) window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', () => { render(false); $('#main').focus({ preventScroll: true }); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => render(false));
  else render(false);
})();
