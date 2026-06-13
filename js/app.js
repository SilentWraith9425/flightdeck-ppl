// FlightDeck PPL — App Logic

// ── State ──
const state = {
  view: 'dashboard',        // dashboard | study | quiz | progress
  sgId: null,               // active study guide id
  cardIndex: 0,             // current flashcard index
  cardFlipped: false,       // is current card showing answer
  quizQuestions: [],        // shuffled question set for current quiz
  quizIndex: 0,             // current question number
  quizCorrect: 0,           // running correct count
  quizAnswered: false,      // has current question been answered
  quizSelectedOpt: null,    // selected option index
  cardKnown: {},            // {key: true/false} for current session
};

// ── Selectors ──
const $ = id => document.getElementById(id);

// ── Navigation ──
function navigate(view, sgId = null) {
  state.view = view;
  state.sgId = sgId;
  renderApp();
  window.scrollTo(0, 0);

  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view && (!sgId || el.dataset.sg == sgId));
  });
}

// ── Utils ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pctColor(pct) {
  if (pct >= 80) return 'var(--green)';
  if (pct >= 60) return 'var(--amber)';
  return 'var(--red)';
}

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ── Main Render ──
function renderApp() {
  const views = document.querySelectorAll('.view');
  views.forEach(v => v.classList.remove('active'));

  switch (state.view) {
    case 'dashboard': renderDashboard(); break;
    case 'study': renderStudy(); break;
    case 'quiz': renderQuiz(); break;
    case 'progress': renderProgress(); break;
  }
}

// ── Dashboard ──
function renderDashboard() {
  $('view-dashboard').classList.add('active');
  const sg = STUDY_GUIDES;
  const p = getProgress();

  // Stats
  let totalCards = 0, knownCards = 0, quizCount = 0, avgScore = 0;
  sg.forEach(s => {
    totalCards += s.flashcards.length;
    s.flashcards.forEach((_, i) => {
      if (p.cards && p.cards[`${s.id}_${i}`] === true) knownCards++;
    });
    if (p.quiz && p.quiz[s.id]) {
      quizCount++;
      avgScore += p.quiz[s.id].best;
    }
  });

  $('stat-cards').textContent = `${knownCards}/${totalCards}`;
  $('stat-quizzes').textContent = quizCount;
  $('stat-avg').textContent = quizCount ? `${Math.round(avgScore / quizCount)}%` : '—';
  $('stat-guides').textContent = sg.length;

  // Stage 1 cards
  const s1 = sg.filter(s => s.stage === 1);
  const s2 = sg.filter(s => s.stage === 2);
  $('sg-stage1').innerHTML = s1.map(s => sgCardHTML(s, p)).join('');
  $('sg-stage2').innerHTML = s2.map(s => sgCardHTML(s, p)).join('');
}

function sgCardHTML(sg, p) {
  const prog = getSGProgress(sg.id);
  const quizData = p.quiz && p.quiz[sg.id];
  const cardPct = prog.cardPct;
  const quizPct = prog.quizBest;

  return `
    <div class="sg-card" onclick="navigate('study', ${sg.id})">
      <div class="sg-card-header">
        <div class="sg-icon">${sg.icon}</div>
        <div class="sg-meta">
          <div class="sg-number">Study Guide ${sg.id}</div>
          <div class="sg-title">${sg.title}</div>
        </div>
        <span class="stage-badge stage-${sg.stage}">S${sg.stage}</span>
      </div>
      <div class="sg-desc">${sg.description}</div>
      <div class="sg-progress">
        <div class="progress-row">
          <span class="progress-label">Flashcards</span>
          <span class="progress-val">${prog.cards}/${prog.cardTotal}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill cards" style="width:${cardPct}%"></div>
        </div>
        <div class="progress-row">
          <span class="progress-label">Best Quiz Score</span>
          <span class="progress-val" style="color:${quizPct !== null ? pctColor(quizPct) : 'var(--text-muted)'}">${quizPct !== null ? quizPct + '%' : 'Not attempted'}</span>
        </div>
        ${quizPct !== null ? `<div class="progress-bar"><div class="progress-fill quiz" style="width:${quizPct}%; background:${pctColor(quizPct)}"></div></div>` : ''}
      </div>
      <div class="sg-actions">
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); navigate('study', ${sg.id})">Flashcards</button>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); startQuiz(${sg.id})">Quiz</button>
      </div>
    </div>
  `;
}

// ── Study / Flashcard View ──
function renderStudy() {
  $('view-study').classList.add('active');

  const sg = STUDY_GUIDES.find(s => s.id === state.sgId);
  if (!sg) { navigate('dashboard'); return; }

  if (state.studySgId !== state.sgId) {
    state.studySgId = state.sgId;
    state.cardIndex = 0;
    state.cardFlipped = false;
    state.cardKnown = {};
  }

  $('study-sg-title').textContent = sg.title;
  $('study-sg-sub').textContent = `SG ${sg.id} · ${sg.flashcards.length} cards · Stage ${sg.stage}`;

  renderCard(sg);
}

function renderCard(sg) {
  const cards = sg.flashcards;
  const i = state.cardIndex;
  const card = cards[i];
  const prog = getProgress();

  $('card-counter').textContent = `${i + 1} / ${cards.length}`;
  $('card-front-text').textContent = card.front;
  $('card-back-text').textContent = card.back;

  const fc = document.querySelector('.flashcard');
  if (state.cardFlipped) {
    fc.classList.add('flipped');
    $('know-buttons').style.display = 'flex';
    $('flip-hint').style.display = 'none';
  } else {
    fc.classList.remove('flipped');
    $('know-buttons').style.display = 'none';
    $('flip-hint').style.display = 'block';
  }

  // Dots
  const dots = cards.map((_, idx) => {
    const key = `${sg.id}_${idx}`;
    const known = state.cardKnown[idx];
    const savedKnown = prog.cards && prog.cards[key];
    let cls = 'dot';
    if (idx === i) cls += ' current';
    else if (known === true || savedKnown === true) cls += ' known';
    else if (known === false) cls += ' review';
    return `<div class="${cls}" title="Card ${idx + 1}"></div>`;
  }).join('');
  $('progress-dots').innerHTML = dots;

  // Nav button states
  $('btn-prev').disabled = i === 0;
  $('btn-next').disabled = i === cards.length - 1;
}

function flipCard() {
  state.cardFlipped = !state.cardFlipped;
  const sg = STUDY_GUIDES.find(s => s.id === state.sgId);
  renderCard(sg);
}

function markCard(known) {
  const sg = STUDY_GUIDES.find(s => s.id === state.sgId);
  const i = state.cardIndex;

  state.cardKnown[i] = known;
  updateCardProgress(state.sgId, i, known);

  if (i < sg.flashcards.length - 1) {
    state.cardIndex++;
    state.cardFlipped = false;
    renderCard(sg);
  } else {
    showCardCompletion(sg);
  }
}

function showCardCompletion(sg) {
  const known = Object.values(state.cardKnown).filter(v => v === true).length;
  const total = sg.flashcards.length;
  const pct = Math.round((known / total) * 100);

  $('view-study').innerHTML = `
    <div class="study-header">
      <button class="back-btn" onclick="navigate('dashboard')">← Back</button>
    </div>
    <div class="completion-banner">
      <div style="font-size:36px; margin-bottom:12px;">🎯</div>
      <h2>Deck Complete!</h2>
      <p>You've reviewed all ${total} flashcards for <strong>${sg.title}</strong>.</p>
      <div class="result-breakdown" style="margin-bottom:20px; max-width:300px; margin-left:auto; margin-right:auto;">
        <div class="result-row"><span class="label">Cards Known</span><span class="val good">${known}</span></div>
        <div class="result-row"><span class="label">Need Review</span><span class="val ${total - known > 0 ? 'bad' : 'good'}">${total - known}</span></div>
        <div class="result-row"><span class="label">Mastery</span><span class="val" style="color:${pctColor(pct)}">${pct}%</span></div>
      </div>
      <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="restartStudy(${sg.id})">Study Again</button>
        <button class="btn btn-secondary" onclick="startQuiz(${sg.id})">Take Quiz →</button>
        <button class="btn btn-ghost" onclick="navigate('dashboard')">Dashboard</button>
      </div>
    </div>
  `;
  $('view-study').classList.add('active');
}

function restartStudy(sgId) {
  state.cardIndex = 0;
  state.cardFlipped = false;
  state.cardKnown = {};
  state.studySgId = null;
  navigate('study', sgId);
}

// ── Quiz View ──
function startQuiz(sgId) {
  const sg = STUDY_GUIDES.find(s => s.id === sgId);
  if (!sg) return;

  state.sgId = sgId;
  state.quizQuestions = shuffle(sg.quiz).map(q => ({ ...q, opts: [...q.opts] }));
  state.quizIndex = 0;
  state.quizCorrect = 0;
  state.quizAnswered = false;
  state.quizSelectedOpt = null;

  navigate('quiz', sgId);
}

function renderQuiz() {
  $('view-quiz').classList.add('active');

  const sg = STUDY_GUIDES.find(s => s.id === state.sgId);
  if (!sg) { navigate('dashboard'); return; }

  if (state.quizIndex >= state.quizQuestions.length) {
    renderQuizResults(sg);
    return;
  }

  const total = state.quizQuestions.length;
  const qi = state.quizIndex;
  const q = state.quizQuestions[qi];

  $('quiz-sg-title').textContent = sg.title;
  $('quiz-sg-sub').textContent = `SG ${sg.id} · Quiz Mode`;

  const progressPct = Math.round((qi / total) * 100);
  $('quiz-progress-fill').style.width = progressPct + '%';
  $('quiz-q-num').textContent = `Question ${qi + 1} of ${total}`;
  $('quiz-score-live').textContent = `Score: ${state.quizCorrect}/${qi}`;
  $('quiz-question-text').textContent = q.q;

  const letters = ['A', 'B', 'C', 'D'];
  $('quiz-options').innerHTML = q.opts.map((opt, idx) => `
    <button class="quiz-option ${state.quizAnswered ? 'disabled' : ''}"
      onclick="selectAnswer(${idx})"
      data-idx="${idx}">
      <span class="option-letter">${letters[idx]}</span>
      <span>${opt}</span>
    </button>
  `).join('');

  $('quiz-explanation').innerHTML = `<strong>Explanation</strong>${q.exp}`;
  $('quiz-explanation').classList.remove('visible');

  if (state.quizAnswered) {
    applyAnswerStyles(q);
    $('quiz-explanation').classList.add('visible');
    $('quiz-next-btn').style.display = 'inline-flex';
  } else {
    $('quiz-next-btn').style.display = 'none';
  }
}

function selectAnswer(optIdx) {
  if (state.quizAnswered) return;

  const q = state.quizQuestions[state.quizIndex];
  state.quizAnswered = true;
  state.quizSelectedOpt = optIdx;

  if (optIdx === q.ans) state.quizCorrect++;

  applyAnswerStyles(q);
  $('quiz-explanation').classList.add('visible');
  $('quiz-next-btn').style.display = 'inline-flex';
}

function applyAnswerStyles(q) {
  const opts = document.querySelectorAll('.quiz-option');
  const sel = state.quizSelectedOpt;

  opts.forEach((el, idx) => {
    el.classList.add('disabled');
    if (idx === q.ans) {
      el.classList.add(sel === q.ans ? 'correct' : 'show-correct');
    } else if (idx === sel && sel !== q.ans) {
      el.classList.add('wrong');
    }
  });
}

function nextQuestion() {
  state.quizIndex++;
  state.quizAnswered = false;
  state.quizSelectedOpt = null;
  renderQuiz();
}

function renderQuizResults(sg) {
  const total = state.quizQuestions.length;
  const correct = state.quizCorrect;
  const pct = Math.round((correct / total) * 100);

  updateQuizScore(sg.id, correct, total);

  const prev = getProgress().quiz && getProgress().quiz[sg.id];
  const isBest = !prev || pct >= (prev.best || 0);

  $('view-quiz').innerHTML = `
    <div class="study-header">
      <button class="back-btn" onclick="navigate('dashboard')">← Back</button>
      <div>
        <div class="study-title">Quiz Complete</div>
        <div class="study-sub">${sg.title}</div>
      </div>
    </div>
    <div class="quiz-results">
      <div class="result-circle ${isBest ? 'pulse' : ''}">
        <div class="result-pct">${pct}%</div>
        <div class="result-label">${isBest ? '★ Best!' : 'Score'}</div>
      </div>
      <div class="result-breakdown">
        <div class="result-row">
          <span class="label">Correct</span>
          <span class="val good">${correct}</span>
        </div>
        <div class="result-row">
          <span class="label">Incorrect</span>
          <span class="val ${total - correct > 0 ? 'bad' : 'good'}">${total - correct}</span>
        </div>
        <div class="result-row">
          <span class="label">Total Questions</span>
          <span class="val">${total}</span>
        </div>
        <div class="result-row">
          <span class="label">Score</span>
          <span class="val" style="color:${pctColor(pct)}">${pct}%</span>
        </div>
      </div>
      <div class="alert alert-info" style="margin-bottom:20px; text-align:left;">
        ${pct >= 80
          ? '✓ Great work! You\'re on track for the FAA knowledge test (passing = 70%).'
          : pct >= 70
            ? 'Almost there — review the topics you missed and try again.'
            : 'Keep studying! Focus on the explanations for questions you missed.'
        }
      </div>
      <div class="result-buttons">
        <button class="btn btn-primary" onclick="startQuiz(${sg.id})">Retake Quiz</button>
        <button class="btn btn-secondary" onclick="navigate('study', ${sg.id})">Review Cards</button>
        <button class="btn btn-ghost" onclick="navigate('dashboard')">Dashboard</button>
      </div>
    </div>
  `;
  $('view-quiz').classList.add('active');
}

// ── Progress View ──
function renderProgress() {
  $('view-progress').classList.add('active');
  const p = getProgress();

  const cards = STUDY_GUIDES.map(sg => {
    const prog = getSGProgress(sg.id);
    const quizData = p.quiz && p.quiz[sg.id];
    return `
      <div class="progress-card">
        <div class="progress-card-header">
          <div class="progress-card-icon">${sg.icon}</div>
          <div>
            <div class="progress-card-num">SG ${sg.id}</div>
            <div class="progress-card-title">${sg.title}</div>
          </div>
        </div>
        <div class="progress-metric">
          <span class="metric-label">Flashcards Known</span>
          <span class="metric-val">${prog.cards}/${prog.cardTotal}</span>
        </div>
        <div class="progress-bar-sm">
          <div class="progress-fill cards" style="width:${prog.cardPct}%; height:100%"></div>
        </div>
        <div class="progress-metric">
          <span class="metric-label">Best Quiz</span>
          <span class="metric-val" style="color:${prog.quizBest !== null ? pctColor(prog.quizBest) : 'var(--text-muted)'}">
            ${prog.quizBest !== null ? prog.quizBest + '%' : 'Not taken'}
          </span>
        </div>
        ${prog.quizBest !== null ? `
          <div class="progress-bar-sm">
            <div class="progress-fill quiz" style="width:${prog.quizBest}%; height:100%; background:${pctColor(prog.quizBest)}"></div>
          </div>
          <div style="font-size:11px; color:var(--text-muted)">Last: ${formatDate(prog.quizDate)}</div>
        ` : ''}
        <div style="display:flex; gap:6px; margin-top:12px;">
          <button class="btn btn-primary btn-sm" onclick="navigate('study', ${sg.id})">Study</button>
          <button class="btn btn-secondary btn-sm" onclick="startQuiz(${sg.id})">Quiz</button>
        </div>
      </div>
    `;
  }).join('');

  $('progress-grid').innerHTML = cards;

  // Overall stats
  let totalCards = 0, knownCards = 0, totalQuizzes = 0, totalScore = 0;
  STUDY_GUIDES.forEach(sg => {
    const prog = getSGProgress(sg.id);
    totalCards += prog.cardTotal;
    knownCards += prog.cards;
    if (prog.quizBest !== null) { totalQuizzes++; totalScore += prog.quizBest; }
  });

  $('prog-overview-cards').textContent = `${knownCards}/${totalCards} flashcards mastered`;
  $('prog-overview-quiz').textContent = totalQuizzes ? `Avg quiz score: ${Math.round(totalScore / totalQuizzes)}% across ${totalQuizzes} study guides` : 'No quizzes completed yet';

  const overallPct = Math.round((knownCards / totalCards) * 100);
  $('prog-overall-bar').style.width = overallPct + '%';
  $('prog-overall-pct').textContent = overallPct + '%';
}

function confirmReset() {
  if (confirm('Reset ALL progress? This cannot be undone.')) {
    resetAllProgress();
    state.cardKnown = {};
    state.studySgId = null;
    renderProgress();
  }
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  // Nav item click handlers (set up in HTML via onclick, but also handle hash)
  renderApp();
});
