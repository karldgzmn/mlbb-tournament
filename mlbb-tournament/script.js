/* ============================================================
   MLBB TOURNAMENT 2025 — JAVASCRIPT
   ============================================================ */


// ── TEAMS DATA ──
const teams = [
  { num: 1,  name: "Bonakids",             captain: "Aldrin Mabalot" },
  { num: 2,  name: "INA",                  captain: "Marvel Ariono" },
  { num: 3,  name: "Damayge",              captain: "Louis Naingue" },
  { num: 4,  name: "Brave Nephites",       captain: "Jay R Gallano" },
  { num: 5,  name: "Purok Dos",            captain: "Ice Cesario" },
  { num: 6,  name: "Genggeng",             captain: "Adam Caducio" },
  { num: 7,  name: "Mormon Legends",       captain: "Elijah Duran" },
  { num: 8,  name: "First Blood Donors",   captain: "Rex Basulgan" },
  { num: 9,  name: "Bleach Please",        captain: "Heber Murcillios" },
  { num: 10, name: "Aral o Laro?",         captain: "Ezra Vejandre" },
  { num: 11, name: "Worcestershire Sauce", captain: "Dean Caro" },
  { num: 12, name: "Team 2?",              captain: "Ed Salazar" },
  { num: 13, name: "Chulalongcorn",        captain: "John Vincent Vicente" },
  { num: 14, name: "Btree",               captain: "Abigail Bala" },
];


// ── SWISS STANDINGS ──
// Update w and l after each round
// Set advances: true for the top 6 once Swiss is complete
const swissStandings = [
  { name: "Bonakids",             w: 0, l: 0, advances: false },
  { name: "INA",                  w: 0, l: 0, advances: false },
  { name: "Damayge",              w: 0, l: 0, advances: false },
  { name: "Brave Nephites",       w: 0, l: 0, advances: false },
  { name: "Purok Dos",            w: 0, l: 0, advances: false },
  { name: "Genggeng",             w: 0, l: 0, advances: false },
  { name: "Mormon Legends",       w: 0, l: 0, advances: false },
  { name: "First Blood Donors",   w: 0, l: 0, advances: false },
  { name: "Bleach Please",        w: 0, l: 0, advances: false },
  { name: "Aral o Laro?",         w: 0, l: 0, advances: false },
  { name: "Worcestershire Sauce", w: 0, l: 0, advances: false },
  { name: "Turret Jumpers",              w: 0, l: 0, advances: false },
  { name: "Chulalongcorn",        w: 0, l: 0, advances: false },
  { name: "Btree",                w: 0, l: 0, advances: false },
];


// ── SWISS ROUNDS ──
// Fill in t1/t2 as each round is announced, leave "TBD" if unknown
// Set winner to the winning team name after the match
const swissRounds = [
  {
    round: "Round 1",
    matches: [
      { id: "R1M1", t1: "Purok Dos", t2: "Worcestershire Sauce", winner: "" },
      { id: "R1M2", t1: "Btree", t2: "Genggeng", winner: "" },
      { id: "R1M3", t1: "INA", t2: "Brave Nephites", winner: "" },
      { id: "R1M4", t1: "Mormon Legends", t2: "Bonakids", winner: "" },
      { id: "R1M5", t1: "Turret Jumpers", t2: "Damayge", winner: "" },
      { id: "R1M6", t1: "Chulalongcorn", t2: "Aral o Laro?", winner: "" },
      { id: "R1M7", t1: "First Blood Donors", t2: "Bleach Please", winner: "" },
    ]
  },
  {
    round: "Round 2",
    matches: [
      { id: "R2M1", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R2M2", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R2M3", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R2M4", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R2M5", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R2M6", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R2M7", t1: "TBD", t2: "TBD", winner: "" },
    ]
  },
  {
    round: "Round 3",
    matches: [
      { id: "R3M1", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R3M2", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R3M3", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R3M4", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R3M5", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R3M6", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R3M7", t1: "TBD", t2: "TBD", winner: "" },
    ]
  },
  {
    round: "Round 4",
    matches: [
      { id: "R4M1", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R4M2", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R4M3", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R4M4", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R4M5", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R4M6", t1: "TBD", t2: "TBD", winner: "" },
      { id: "R4M7", t1: "TBD", t2: "TBD", winner: "" },
    ]
  },
];


// ── DOUBLE ELIMINATION BRACKET ──
// Seed 1 & 2 = top 2 Swiss finishers (wait in Winners SF)
// Seeds 3-6 play Winners QF
// Losers of WQF drop to Losers Bracket
// Replace seed/TBD labels with actual team names as results come in

const winnersData = [
  {
    round: "Winners QF",
    sub: "Day 2 · May 27 · Ballroom",
    matches: [
      { id: "WQF1", t1: "Seed 3", t2: "Seed 6", winner: "" },
      { id: "WQF2", t1: "Seed 4", t2: "Seed 5", winner: "" },
    ]
  },
  {
    round: "Winners SF",
    sub: "Day 2 · May 27 · Ballroom",
    matches: [
      { id: "WSF1", t1: "Seed 1", t2: "W of WQF1", winner: "" },
      { id: "WSF2", t1: "Seed 2", t2: "W of WQF2", winner: "" },
    ]
  },
  {
    round: "Winners Final",
    sub: "Day 3 · June 7 · Ballroom",
    matches: [
      { id: "WF", t1: "W of WSF1", t2: "W of WSF2", winner: "" },
    ]
  },
];

const losersData = [
  {
    round: "Losers R1",
    sub: "Day 2 · May 27 · Ballroom",
    matches: [
      { id: "LR1A", t1: "L of WSF1", t2: "L of WQF1", winner: "" },
      { id: "LR1B", t1: "L of WSF2", t2: "L of WQF2", winner: "" },
    ]
  },
  {
    round: "Losers R2",
    sub: "Day 2 · May 27 · Ballroom",
    matches: [
      { id: "LR2", t1: "W of LR1A", t2: "W of LR1B", winner: "" },
    ]
  },
  {
    round: "Losers Final",
    sub: "Day 3 · June 7 · Ballroom",
    matches: [
      { id: "LF", t1: "L of WF", t2: "W of LR2", winner: "" },
    ]
  },
];

const grandFinal = {
  round: "Grand Finals",
  sub: "Day 3 · June 7 · Ballroom",
  matches: [
    { id: "GF", t1: "W of WF", t2: "W of Losers Final", winner: "" },
  ]
};

// ── RULES ──
const rules = [
  "All teams and players are expected to show good sportsmanship and respect toward other participants, organizers, and officials at all times.",
  "Teams must arrive on time for their scheduled matches. Late teams may receive penalties or possible disqualification depending on the delay.",
  "Matches will follow the official tournament format and draft pick procedures announced by the organizers.",
  "Cheating, exploiting bugs, or any form of unfair play will result in penalties or immediate disqualification.",
  "Players must follow organizer instructions during the entire tournament to help matches run smoothly and fairly.",
  "Any disputes or concerns must be reported directly to the tournament organizers or officials immediately.",
  "Final decisions made by tournament organizers and referees will be respected and considered official.",
];


/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderTeams() {
  const teamsGrid = document.getElementById('teamsGrid');
  teams.forEach(t => {
    teamsGrid.innerHTML += `
      <div class="team-card reveal">
        <div class="team-num">${String(t.num).padStart(2, '0')}</div>
        <div class="team-info">
          <div class="team-name">${t.name}</div>
          <div class="team-captain">Capt. ${t.captain}</div>
        </div>
      </div>`;
  });
}

function renderSwissStandings() {
  const container = document.getElementById('swissStandings');
  if (!container) return;
  const sorted = [...swissStandings].sort((a, b) => b.w - a.w || a.l - b.l);
  container.innerHTML = `
    <table class="swiss-table">
      <thead>
        <tr><th>#</th><th>Team</th><th>W</th><th>L</th><th>Status</th></tr>
      </thead>
      <tbody>
        ${sorted.map((t, i) => `
          <tr class="${t.advances ? 'row-advances' : ''}">
            <td class="swiss-pos">${i + 1}</td>
            <td class="swiss-name">${t.name}</td>
            <td class="swiss-w">${t.w}</td>
            <td class="swiss-l">${t.l}</td>
            <td>${t.advances ? '<span class="advance-tag">ADVANCES</span>' : '<span class="swiss-pending">—</span>'}</td>
          </tr>`).join('')}
      </tbody>
    </table>
    <p class="swiss-note">★ Top 6 teams by W-L record advance to the playoff bracket</p>`;
}

function renderSwissRounds() {
  const container = document.getElementById('swissRounds');
  if (!container) return;
  container.innerHTML = swissRounds.map(r => {
    const matchesHTML = r.matches.map(m => {
      const bothTbd = m.t1 === 'TBD' && m.t2 === 'TBD';
      const t1win = m.winner && m.winner === m.t1;
      const t2win = m.winner && m.winner === m.t2;
      const t1eli = m.winner && !t1win;
      const t2eli = m.winner && !t2win;
      return `
        <div class="swiss-match">
          <span class="swiss-match-id">${m.id}</span>
          <div class="swiss-match-teams">
            <span class="swiss-team ${t1win ? 'winner' : t1eli ? 'eliminated' : ''} ${bothTbd ? 'tbd' : ''}">${m.t1}</span>
            <span class="swiss-vs">vs</span>
            <span class="swiss-team ${t2win ? 'winner' : t2eli ? 'eliminated' : ''} ${bothTbd ? 'tbd' : ''}">${m.t2}</span>
          </div>
          ${m.winner ? `<span class="swiss-winner-tag">✓ ${m.winner}</span>` : ''}
        </div>`;
    }).join('');
    return `
      <div class="swiss-round-card">
        <div class="swiss-round-header">${r.round}</div>
        <div class="swiss-round-matches">${matchesHTML}</div>
      </div>`;
  }).join('');
}

function matchCard(m, isFinal = false) {
  const isTbd = s => s.startsWith('W of') || s.startsWith('L of') || s.startsWith('Seed') || s === 'TBD';
  const t1win = m.winner && m.winner === m.t1;
  const t2win = m.winner && m.winner === m.t2;
  const t1eli = m.winner && !t1win;
  const t2eli = m.winner && !t2win;
  return `
    <div class="match ${isFinal ? 'finals-match' : ''}">
      <div class="match-id">${m.id}</div>
      <div class="match-team ${isTbd(m.t1) ? 'tbd' : ''} ${t1win ? 'winner' : t1eli ? 'eliminated' : ''}">${m.t1}</div>
      <div class="match-team ${isTbd(m.t2) ? 'tbd' : ''} ${t2win ? 'winner' : t2eli ? 'eliminated' : ''}">${m.t2}</div>
    </div>`;
}

function renderBracket() {
  const bracketEl = document.getElementById('bracketEl');
  if (!bracketEl) return;

  const wHTML = winnersData.map(r => `
    <div class="round">
      <div class="round-header">${r.round}<br><span style="color:var(--muted);font-size:0.5rem;">${r.sub}</span></div>
      <div class="round-matches">${r.matches.map(m => matchCard(m)).join('')}</div>
    </div>`).join('');

  const gfHTML = `
    <div class="round">
      <div class="round-header" style="color:var(--gold)">${grandFinal.round}<br><span style="color:var(--muted);font-size:0.5rem;">${grandFinal.sub}</span></div>
      <div class="round-matches">${grandFinal.matches.map(m => matchCard(m, true)).join('')}</div>
    </div>`;

  const lHTML = losersData.map(r => `
    <div class="round">
      <div class="round-header losers-header">${r.round}<br><span style="color:var(--muted);font-size:0.5rem;">${r.sub}</span></div>
      <div class="round-matches">${r.matches.map(m => matchCard(m)).join('')}</div>
    </div>`).join('');

  bracketEl.innerHTML = `
    <div class="bracket-section-wrap">
      <div class="bracket-section-label">⬆ Winners Bracket</div>
      <div class="bracket">${wHTML}${gfHTML}</div>
      <div class="bracket-section-label losers-label">⬇ Losers Bracket</div>
      <div class="bracket">${lHTML}</div>
    </div>`;
}

function renderRules() {
  const rulesGrid = document.getElementById('rulesGrid');
  rules.forEach((r, i) => {
    rulesGrid.innerHTML += `
      <div class="rule-card reveal">
        <div class="rule-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="rule-text">${r}</div>
      </div>`;
  });
}

// ── ROSTER DATA ──
const rosters = [
  { seed: 1,  name: "Chulalongcorn",        players: [{ name: "John Vincent Vicente" }, { name: "Chris John Hidalgo" }, { name: "Marc Angelo Esquivel" }, { name: "Christian Laurence Abacajin" }, { name: "JJ Vicente" }, { name: "Nerlyn Dave Alcantara" }] },
  { seed: 2,  name: "Purok Dos",            players: [{ name: "Ice Cesario" }, { name: "Nico Quitola" }, { name: "John Humphrey Valiente" }, { name: "Jarom Kyle Notarte" }, { name: "Ryan Christian Pena" }] },
  { seed: 3,  name: "Bleach Please",        players: [{ name: "Heber Murcillos" }, { name: "Annan Lim" }, { name: "Isaiah Gasmen" }, { name: "Ryan Dones" }, { name: "Jared Rodrigo" }, { name: "Eric Goria" }] },
  { seed: 4,  name: "Brave Nephites",       players: [{ name: "Jay-R Gallano" }, { name: "Yaz Darasin" }, { name: "Jordane Almoragie" }, { name: "Hyrum Busania" }, { name: "Rommel Cornelio" }, { name: "Joi De Guzman" }] },
  { seed: 5,  name: "Aral o Laro?",         players: [{ name: "Ezra Vejandre" }, { name: "Keena Marcaida" }, { name: "Allen Escalona" }, { name: "Alden Escalona" }, { name: "Kenneth Manarin" }, { name: "Jea Albano" }] },
  { seed: 6,  name: "First Blood Donors",   players: [{ name: "Rex Basulgan" }, { name: "Jerico Narag" }, { name: "Spencer Basulgan" }, { name: "Zen Pajarin" }, { name: "Joseph Almeria" }] },
  { seed: 7,  name: "Bonakids",             players: [{ name: "Aldrin Hinckley Mabalot" }, { name: "Dave Butones" }, { name: "Ezekiel Laceste" }, { name: "Sean Camoral" }, { name: "Renz Loria" }, { name: "Jash Sempio" }] },
  { seed: 8,  name: "Btree",                players: [{ name: "Abigail Bala" }, { name: "Van Manarin" }, { name: "Russel Ofalda" }, { name: "Celso Glova" }, { name: "Jared Lopez" }, { name: "John Paul Oquias" }] },
  { seed: 9,  name: "Team 2?",              players: [{ name: "Ed Salazar" }, { name: "Vaughn Platon" }, { name: "Jarom Balute" }, { name: "Chaoboran Oroum" }, { name: "Redd Gonzaga" }] },
  { seed: 10, name: "Worcestershire Sauce", players: [{ name: "Dean Heber Caro" }, { name: "Dulguun" }, { name: "Wayne Allen Yusi" }, { name: "Zeph Kentaro Hatada" }, { name: "Edrian Oldem" }] },
  { seed: 11, name: "Damayge",              players: [{ name: "Louis Naingue" }, { name: "Paul Sapan" }, { name: "Ediran Oldem" }, { name: "Jadd Pacia" }, { name: "Mayge Sugabo" }, { name: "Kyle Academia" }] },
  { seed: 12, name: "Mormon Legends",       players: [{ name: "Elijah Duran" }, { name: "Seth Acosta" }, { name: "Jamila Acosta" }, { name: "Brian Oldem" }, { name: "Cherish Oldem" }, { name: "Joryl Rivera & Chywel Duran" }] },
  { seed: 13, name: "Genggeng",             players: [{ name: "Michael Adam Redeña Caducio" }, { name: "Leonardo Aquino" }, { name: "Aaron Bernard Corridor" }, { name: "Justin Paguio" }, { name: "Beejay Furruganan" }, { name: "Christian Cabalza" }] },
  { seed: 14, name: "INA",                  players: [{ name: "Aru" }, { name: "DenDental" }, { name: "Hennri" }, { name: "Jared" }, { name: "NasuUduk" }, { name: "Tommy & Arlenn" }] },
];

function renderRosters(filter = '') {
  const rosterGrid = document.getElementById('rosterGrid');
  const filtered = rosters.filter(t =>
    t.name.toLowerCase().includes(filter.toLowerCase()) ||
    t.players.some(p => p.name.toLowerCase().includes(filter.toLowerCase()))
  );
  rosterGrid.innerHTML = filtered.map(t => `
    <div class="roster-card">
      <div class="roster-card-header">
        <span class="roster-seed">${String(t.seed).padStart(2, '0')}</span>
        <span class="roster-team-name">${t.name}</span>
      </div>
      <div class="roster-players">
        ${t.players.map(p => `<div class="roster-player"><span class="roster-player-name">${p.name}</span></div>`).join('')}
      </div>
    </div>`).join('');
}

function initModal() {
  const modal    = document.getElementById('rosterModal');
  const openBtn  = document.getElementById('rosterNavBtn');
  const closeBtn = document.getElementById('modalClose');
  const search   = document.getElementById('rosterSearch');
  const navLinks = document.getElementById('navLinks');
  function openModal() { renderRosters(); modal.classList.add('open'); document.body.style.overflow = 'hidden'; navLinks.classList.remove('open'); }
  function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; search.value = ''; }
  openBtn.addEventListener('click', e => { e.preventDefault(); openModal(); });
  document.getElementById('showRostersBtn')?.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  search.addEventListener('input', () => renderRosters(search.value));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { if (a.id !== 'rosterNavBtn') navLinks.classList.remove('open'); });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.querySelectorAll('.reveal').forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 80);
        });
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── INIT ──
renderTeams();
renderSwissStandings();
renderSwissRounds();
renderBracket();
renderRules();
initScrollReveal();
initModal();
initMobileNav();
