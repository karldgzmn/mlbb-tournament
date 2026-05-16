/* ============================================================
   MLBB TOURNAMENT 2025 — JAVASCRIPT
   ============================================================ */


// ── TEAMS DATA ──
// Edit team names and captains here
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


// ── GROUP STAGE DATA ──
// Edit which teams go into which group here
// Groups A & B have 5 teams, Group C has 4 teams
// The first 2 teams in each group are marked as "ADVANCES"
const groups = [
  {
    letter: "A",
    color: "#FFD700",   // gold
    teams: [
      { name: "Sample", captain: "Karl De Guzman", advances: true, w: 2, l: 1 },
      { name: "INA",            captain: "Marvel Ariono" , w: 0, l: 0},
      { name: "Damayge",        captain: "Louis Naingue" , w: 0, l: 0},
      { name: "Brave Nephites", captain: "Jay R Gallano" , w: 0, l: 0},
      { name: "Purok Dos",      captain: "Ice Cesario" , w: 0, l: 0},
    ]
  },
  {
    letter: "B",
    color: "#00e5ff",   // cyan
    teams: [
      { name: "Genggeng",           captain: "Adam Caducio" , w: 0, l: 0},
      { name: "Mormon Legends",     captain: "Elijah Duran" , w: 0, l: 0},
      { name: "First Blood Donors", captain: "Rex Basulgan" , w: 0, l: 0},
      { name: "Bleach Please",      captain: "Heber Murcillios" , w: 0, l: 0},
      { name: "Aral o Laro?",       captain: "Ezra Vejandre" , w: 0, l: 0},
    ]
  },
  {
    letter: "C",
    color: "#FF2442",   // red
    teams: [
      { name: "Worcestershire Sauce", captain: "Dean Caro" , w: 0, l: 0},
      { name: "Team 2?",              captain: "Ed Salazar" , w: 0, l: 0},
      { name: "Chulalongcorn",        captain: "John Vincent Vicente" , w: 0, l: 0},
      { name: "Btree",                captain: "Abigail Bala" , w: 0, l: 0},
    ]
  }
];


// ── KNOCKOUT BRACKET DATA ──
// Edit match labels as results come in
// Replace "1st Group A", "W of QF1", etc. with actual team names once known
const knockoutData = [
  {
    round: "Quarterfinals",
    sub: "Day 2 · May 27 · Ballroom",
    matches: [
      { id: "QF1", t1: "1st Group A", t2: "Sample", s1: "A1", s2: "C2", winner: "Sample" },
      { id: "QF2", t1: "1st Group B", t2: "2nd Group A", s1: "B1", s2: "A2" },
      { id: "QF3", t1: "1st Group C", t2: "2nd Group B", s1: "C1", s2: "B2" },
    ]
  },
  {
    round: "Semifinals",
    sub: "Day 2 · May 27 · Ballroom",
    matches: [
      { id: "SF1", t1: "W of QF1", t2: "W of QF2", s1: "—", s2: "—" },
      { id: "SF2", t1: "W of QF3", t2: "TBD",       s1: "—", s2: "—" },
    ]
  },
  {
    round: "Grand Finals",
    sub: "Day 3 · June 7 · Ballroom",
    matches: [
      { id: "FINAL", t1: "W of SF1", t2: "W of SF2", s1: "—", s2: "—" },
    ]
  }
];


// ── RULES DATA ──
// Edit or add rules here
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
   RENDER FUNCTIONS — no need to edit below this line
   ============================================================ */

// Render Teams Grid
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

// Render Group Stage
function renderGroups() {
  const groupsGrid = document.getElementById('groupsGrid');
  groups.forEach(g => {
      const rows = g.teams.map((t, i) => `
        <div class="group-team-row">
          <span class="group-team-pos">${i + 1}</span>
          <span class="group-team-name">${t.name}</span>
          <span class="group-team-cap">${t.captain}</span>
          <span class="group-team-record ${t.w > t.l ? 'record-win' : t.l > t.w ? 'record-loss' : ''}">${t.w}-${t.l}</span>
          ${t.advances ? '<span class="advance-tag">ADVANCES</span>' : ''}
        </div>`).join('');
      

    groupsGrid.innerHTML += `
      <div class="group-card reveal">
        <div class="group-header" style="border-left:3px solid ${g.color};">
          <div class="group-letter" style="color:${g.color};">${g.letter}</div>
          <div class="group-header-info">
            <div class="group-title">Group ${g.letter}</div>
            <div class="group-sub">${g.teams.length} Teams · Top 2 Advance</div>
          </div>
        </div>
        <div class="group-teams">${rows}</div>
        <div class="group-footer">★ Top 2 finishers advance to Quarterfinals</div>
      </div>`;
  });
}

// Render Knockout Bracket
function renderBracket() {
  const bracketEl = document.getElementById('bracketEl');
  knockoutData.forEach((round, ri) => {
    const isFinal = ri === knockoutData.length - 1;
    const matchesHTML = round.matches.map(m => {
      const t1tbd = m.t1.startsWith('W of');
      const t2tbd = m.t2.startsWith('W of') || m.t2 === 'TBD';
      return `
        <div class="match ${isFinal ? 'finals-match' : ''}">
          <div class="match-id">${m.id}${m.s1 !== '—' ? ' · ' + m.s1 + ' vs ' + m.s2 : ''}</div>
          <div class="match-team ${t1tbd ? 'tbd' : ''} ${m.winner === m.t1 ? 'winner' : m.winner && m.winner !== m.t1 ? 'eliminated' : ''}">
            <span class="seed">${m.s1}</span>${m.t1}
          </div>
          <div class="match-team ${t2tbd ? 'tbd' : ''} ${m.winner === m.t2 ? 'winner' : m.winner && m.winner !== m.t2 ? 'eliminated' : ''}">
            <span class="seed">${m.s2}</span>${m.t2}
          </div>
        </div>`;
    }).join('');

    bracketEl.innerHTML += `
      <div class="round">
        <div class="round-header">
          ${round.round}<br>
          <span style="color:var(--muted);font-size:0.5rem;">${round.sub}</span>
        </div>
        <div class="round-matches">${matchesHTML}</div>
      </div>`;
  });
}

// Render Rules
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

// Scroll Reveal Animation
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        const children = e.target.querySelectorAll('.reveal');
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 80);
        });
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── ROSTER DATA ──
// Each team has a seed number, name, and players array
// Each player has a name and rank (leave rank: "" if unknown)
const rosters = [
  {
    seed: 1,
    name: "Chulalongcorn",
    players: [
      { name: "John Vincent Vicente",      rank: "Mythical Glory" },
      { name: "Chris John Hidalgo",        rank: "Mythical Honor" },
      { name: "Marc Angelo Esquivel",      rank: "Mythical Glory" },
      { name: "Christian Laurence Abacajin", rank: "Mythical Glory" },
      { name: "JJ Vicente",                rank: "Mythical Glory" },
      { name: "Nerlyn Dave Alcantara",     rank: "Mythical Glory" },
    ]
  },
  {
    seed: 2,
    name: "Purok Dos",
    players: [
      { name: "Ice Cesario",               rank: "Legend" },
      { name: "Nico Quitola",              rank: "Mythical Honor" },
      { name: "John Humphrey Valiente",    rank: "Legend" },
      { name: "Jarom Kyle Notarte",        rank: "Legend" },
      { name: "Ryan Christian Pena",       rank: "Epic" },
      { name: "N/A",                       rank: "" },
    ]
  },
  {
    seed: 3,
    name: "Bleach Please",
    players: [
      { name: "Heber Murcillos",           rank: "Mythical Immortal" },
      { name: "Annan Lim",                 rank: "Legend" },
      { name: "Isaiah Gasmen",             rank: "Legend" },
      { name: "Ryan Dones",                rank: "Epic" },
      { name: "Jared Rodrigo",             rank: "Legend" },
      { name: "Eric Goria",                rank: "Epic" },
    ]
  },
  {
    seed: 4,
    name: "Brave Nephites",
    players: [
      { name: "Jay-R Gallano",             rank: "Mythic" },
      { name: "Yaz Darasin",               rank: "Mythic" },
      { name: "Jordane Almoragie",         rank: "Mythic" },
      { name: "Hyrum Busania",             rank: "Legend" },
      { name: "Rommel Cornelio",           rank: "Mythic" },
      { name: "Joi De Guzman",             rank: "Mythic" },
    ]
  },
  {
    seed: 5,
    name: "Aral o Laro?",
    players: [
      { name: "Ezra Vejandre",             rank: "Epic" },
      { name: "Keena Marcaida",            rank: "Legend" },
      { name: "Allen Escalona",            rank: "Epic" },
      { name: "Alden Escalona",            rank: "Epic" },
      { name: "Kenneth Manarin",           rank: "Epic" },
      { name: "Jea Albano",               rank: "Epic" },
    ]
  },
  {
    seed: 6,
    name: "First Blood Donors",
    players: [
      { name: "Rex Basulgan",              rank: "Mythical Glory" },
      { name: "Jerico Narag",              rank: "Mythical Honor" },
      { name: "Spencer Basulgan",          rank: "Legend" },
      { name: "Zen Pajarin",               rank: "Mythic" },
      { name: "Joseph Almeria",            rank: "Mythical Honor" },
      { name: "N/A",                       rank: "" },
    ]
  },
  {
    seed: 7,
    name: "Bonakids",
    players: [
      { name: "Aldrin Hinckley Mabalot",   rank: "Mythic" },
      { name: "Dave Butones",              rank: "Mythical Glory" },
      { name: "Ezekiel Laceste",           rank: "Mythical Honor" },
      { name: "Sean Camoral",              rank: "Epic" },
      { name: "Renz Loria",               rank: "Mythical Honor" },
      { name: "Jash Sempio",              rank: "Legend" },
    ]
  },
  {
    seed: 8,
    name: "Btree",
    players: [
      { name: "Abigail Bala",              rank: "Mythic" },
      { name: "Van Manarin",               rank: "Mythic" },
      { name: "Russel Ofalda",             rank: "Epic 2" },
      { name: "Celso Glova",              rank: "Mythic" },
      { name: "Jared Lopez",              rank: "Warrior" },
      { name: "John Paul Oquias",          rank: "Epic 2" },
    ]
  },
  {
    seed: 9,
    name: "Team 2?",
    players: [
      { name: "Ed Salazar",                rank: "Mythical Honor (0-49 Stars)" },
      { name: "Vaughn Platon",             rank: "Legend" },
      { name: "Jarom Balute",              rank: "Epic" },
      { name: "Chaoboran Oroum",           rank: "Mythical Honor" },
      { name: "Redd Gonzaga",              rank: "Legend" },
      { name: "N/A",                       rank: "" },
    ]
  },
  {
    seed: 10,
    name: "Worcestershire Sauce",
    players: [
      { name: "Dean Heber Caro",           rank: "Legend" },
      { name: "Dulguun",                   rank: "Mythical Honor" },
      { name: "Wayne Allen Yusi",          rank: "Legend" },
      { name: "Zeph Kentaro Hatada",       rank: "Epic" },
      { name: "Edrian Oldem",              rank: "Legend" },
      { name: "N/A",                       rank: "" },
    ]
  },
  {
    seed: 11,
    name: "Damayge",
    players: [
      { name: "Louis Naingue",             rank: "Mythical Honor" },
      { name: "Paul Sapan",                rank: "Mythic" },
      { name: "Ediran Oldem",              rank: "Legend" },
      { name: "Jadd Pacia",                rank: "Mythical Honor" },
      { name: "Mayge Sugabo",              rank: "Legend" },
      { name: "Kyle Academia",             rank: "Mythical Honor" },
    ]
  },
  {
    seed: 12,
    name: "Mormon Legends",
    players: [
      { name: "Elijah Duran",              rank: "Legend" },
      { name: "Seth Acosta",               rank: "Grandmaster" },
      { name: "Jamila Acosta",             rank: "Epic" },
      { name: "Brian Oldem",               rank: "Grandmaster" },
      { name: "Cherish Oldem",             rank: "Legend" },
      { name: "Joryl Rivera & Chywel Duran", rank: "Grandmaster" },
    ]
  },
  {
    seed: 13,
    name: "Genggeng",
    players: [
      { name: "Michael Adam Redeña Caducio", rank: "" },
      { name: "Leonardo Aquino",           rank: "" },
      { name: "Aaron Bernard Corridor",    rank: "" },
      { name: "Justin Paguio",             rank: "" },
      { name: "Beejay Furruganan",         rank: "" },
      { name: "Christian Cabalza",         rank: "" },
    ]
  },
  {
    seed: 14,
    name: "INA",
    players: [
      { name: "Aru",                       rank: "" },
      { name: "DenDental",                 rank: "" },
      { name: "Hennri",                    rank: "" },
      { name: "Jared",                     rank: "" },
      { name: "NasuUduk",                  rank: "" },
      { name: "Tommy & Arlenn",            rank: "" },
    ]
  },
];

// Rank tier color helper
function rankColor(rank) {
  const r = rank.toLowerCase();
  if (r.includes('immortal'))  return '#ff6bff';
  if (r.includes('glory'))     return '#ffd700';
  if (r.includes('honor'))     return '#e8c46a';
  if (r.includes('mythic'))    return '#c084fc';
  if (r.includes('legend'))    return '#60a5fa';
  if (r.includes('epic'))      return '#34d399';
  if (r.includes('grandmaster')) return '#f97316';
  if (r.includes('master'))    return '#fb923c';
  if (r.includes('warrior'))   return '#94a3b8';
  return '#7a7060';
}

// Render Roster Modal
function renderRosters(filter = '') {
  const rosterGrid = document.getElementById('rosterGrid');
  const filtered = rosters.filter(t =>
    t.name.toLowerCase().includes(filter.toLowerCase()) ||
    t.players.some(p => p.name.toLowerCase().includes(filter.toLowerCase()))
  );

  rosterGrid.innerHTML = filtered.map(t => {
    const playerRows = t.players
      .map(p => `
        <div class="roster-player">
          <span class="roster-player-name">${p.name}</span>
          ${p.rank ? `<span class="roster-rank" style="color:${rankColor(p.rank)}">${p.rank}</span>` : ''}
        </div>`).join('');

    return `
      <div class="roster-card">
        <div class="roster-card-header">
          <span class="roster-seed">${String(t.seed).padStart(2,'0')}</span>
          <span class="roster-team-name">${t.name}</span>
        </div>
        <div class="roster-players">${playerRows}</div>
      </div>`;
  }).join('');
}

// Modal open/close logic
function initModal() {
  const modal   = document.getElementById('rosterModal');
  const openBtn = document.getElementById('rosterNavBtn');
  const closeBtn = document.getElementById('modalClose');
  const search  = document.getElementById('rosterSearch');
  const navLinks = document.getElementById('navLinks');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderRosters();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    navLinks.classList.remove('open');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    search.value = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      search.value = '';
    }
  });

  search.addEventListener('input', () => renderRosters(search.value));

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      search.value = '';
    }
  });
}

// Mobile nav toggle
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (!a.id === 'rosterNavBtn') navLinks.classList.remove('open');
    });
  });
}

// ── INIT ──
renderTeams();
renderGroups();
renderBracket();
renderRules();
initScrollReveal();
initModal();
initMobileNav();
