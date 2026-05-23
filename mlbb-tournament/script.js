/* ============================================================
   MLBB TOURNAMENT 2025 — SCRIPT (Supabase powered)
   ============================================================ */

// ── TEAMS DATA (static — just for the teams grid section) ──
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
  { num: 12, name: "Turret Jumpers",       captain: "Ed Salazar" },
  { num: 13, name: "Chulalongcorn",        captain: "John Vincent Vicente" },
  { num: 14, name: "Btree",                captain: "Abigail Bala" },
];

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

// ── ROSTER DATA ──
const rosters = [
  { seed: 1,  name: "Chulalongcorn",        players: [{ name: "John Vincent Vicente" }, { name: "Chris John Hidalgo" }, { name: "Marc Angelo Esquivel" }, { name: "Christian Laurence Abacajin" }, { name: "JJ Vicente" }, { name: "Nerlyn Dave Alcantara" }] },
  { seed: 2,  name: "Purok Dos",            players: [{ name: "Ice Cesario" }, { name: "Nico Quitola" }, { name: "John Humphrey Valiente" }, { name: "Jarom Kyle Notarte" }, { name: "Ryan Christian Pena"}, { name: "Ronniel Pangilinan"}] },
  { seed: 3,  name: "Bleach Please",        players: [{ name: "Heber Murcillos" }, { name: "Annan Lim" }, { name: "Isaiah Gasmen" }, { name: "Ryan Dones" }, { name: "Jared Rodrigo" }, { name: "Eric Goria" }] },
  { seed: 4,  name: "Brave Nephites",       players: [{ name: "Jay-R Gallano" }, { name: "Yaz Darasin" }, { name: "Jordane Almoragie" }, { name: "Hyrum Busania" }, { name: "Rommel Cornelio" }, { name: "Prince Pason" }] },
  { seed: 5,  name: "Aral o Laro?",         players: [{ name: "Ezra Vejandre" }, { name: "Keena Marcaida" }, { name: "Allen Escalona" }, { name: "Alden Escalona" }, { name: "Kenneth Manarin" }, { name: "Jea Albano" }] },
  { seed: 6,  name: "First Blood Donors",   players: [{ name: "Rex Basulgan" }, { name: "Jerico Narag" }, { name: "Spencer Basulgan" }, { name: "Zen Pajarin" }, { name: "Joseph Almeria" }] },
  { seed: 7,  name: "Bonakids",             players: [{ name: "Aldrin Hinckley Mabalot" }, { name: "Dave Butones" }, { name: "Ezekiel Laceste" }, { name: "Sean Camoral" }, { name: "Renz Loria" }, { name: "Jash Sempio" }] },
  { seed: 8,  name: "Wow Shanghai",         players: [{ name: "Vonmhar Agtunong " }, { name: "Jared Gutierrez " }, { name: "Zeru Rarang" }, { name: "JK Marabella" }, { name: "Vyra Marabella" }] },
  { seed: 9,  name: "Turret Jumpers",       players: [{ name: "Ed Salazar" }, { name: "Vaughn Platon" }, { name: "Jarom Balute" }, { name: "Chaoboran Oroum" }, { name: "Redd Gonzaga" }] },
  { seed: 10, name: "Worcestershire Sauce", players: [{ name: "Dean Heber Caro" }, { name: "Dulguun" }, { name: "Wayne Allen Yusi" }, { name: "Zeph Kentaro Hatada" }, { name: "Edrian Oldem" }] },
  { seed: 11, name: "Damayge",              players: [{ name: "Louis Naingue" }, { name: "Paul Sapan" }, { name: "Ediran Oldem" }, { name: "Jadd Pacia" }, { name: "Mayge Sugabo" }, { name: "Kyle Academia" }] },
  { seed: 12, name: "Mormon Legends",       players: [{ name: "Elijah Duran" }, { name: "Seth Acosta" }, { name: "Joryl Rivera" }, { name: "Brian Oldem" }, { name: "Cherish Oldem" }, { name: "Chywel Duran" }] },
  { seed: 13, name: "Genggeng",             players: [{ name: "Michael Adam Redeña Caducio" }, { name: "Leonardo Aquino" }, { name: "Aaron Bernard Corridor" }, { name: "Justin Paguio" }, { name: "Beejay Furruganan" }, { name: "Christian Cabalza" }] },
  { seed: 14, name: "INA",                  players: [{ name: "Aru" }, { name: "DenDental" }, { name: "Hennri" }, { name: "Jared" }, { name: "NasuUduk" }, { name: "Tommy & Arlenn" }] },
];


/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

// ── TEAMS GRID ──
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

// ── SWISS STANDINGS (from Supabase) ──
async function renderSwissStandings() {
  const container = document.getElementById('swissStandings');
  if (!container) return;

  const { data, error } = await db.from('swiss_standings').select('*').order('wins', { ascending: false });
  if (error) { console.error(error); return; }

  const sorted = [...data].sort((a, b) => b.wins - a.wins || a.losses - b.losses);

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
            <td class="swiss-w">${t.wins}</td>
            <td class="swiss-l">${t.losses}</td>
            <td>${t.advances ? '<span class="advance-tag">ADVANCES</span>' : '<span class="swiss-pending">—</span>'}</td>
          </tr>`).join('')}
      </tbody>
    </table>
    <p class="swiss-note">★ Top 6 teams by W-L record advance to the playoff bracket · Top 2 skip to Winners Semifinals</p>`;
}

// ── SWISS ROUNDS (from Supabase) ──
async function renderSwissRounds() {
  const container = document.getElementById('swissRounds');
  if (!container) return;

  const { data, error } = await db.from('swiss_matches').select('*').order('id');
  if (error) { console.error(error); return; }

  const rounds = {};
  data.forEach(m => {
    if (!rounds[m.round_num]) rounds[m.round_num] = [];
    rounds[m.round_num].push(m);
  });

  container.innerHTML = Object.entries(rounds).map(([rnum, matches]) => {
    const matchesHTML = matches.map(m => {
      const bothTbd = m.team1 === 'TBD' && m.team2 === 'TBD';
      const t1win = m.winner && m.winner === m.team1;
      const t2win = m.winner && m.winner === m.team2;
      const t1eli = m.winner && !t1win;
      const t2eli = m.winner && !t2win;
      return `
        <div class="swiss-match">
          <span class="swiss-match-id">${m.match_id}</span>
          <div class="swiss-match-teams">
            <span class="swiss-team ${t1win ? 'winner' : t1eli ? 'eliminated' : ''} ${bothTbd ? 'tbd' : ''}">${m.team1}</span>
            <span class="swiss-vs">vs</span>
            <span class="swiss-team ${t2win ? 'winner' : t2eli ? 'eliminated' : ''} ${bothTbd ? 'tbd' : ''}">${m.team2}</span>
          </div>
          ${m.winner ? `<span class="swiss-winner-tag">✓ ${m.winner}</span>` : ''}
        </div>`;
    }).join('');

    return `
      <div class="swiss-round-card">
        <div class="swiss-round-header">Round ${rnum}</div>
        <div class="swiss-round-matches">${matchesHTML}</div>
      </div>`;
  }).join('');
}

// ── BRACKET HELPER ──
function matchCard(m, isFinal = false) {
  const isTbd = s => !s || s.startsWith('W of') || s.startsWith('L of') || s.startsWith('Seed') || s === 'TBD';
  const t1win = m.winner && m.winner === m.team1;
  const t2win = m.winner && m.winner === m.team2;
  const t1eli = m.winner && !t1win;
  const t2eli = m.winner && !t2win;
  return `
    <div class="match ${isFinal ? 'finals-match' : ''}">
      <div class="match-id">${m.match_id}</div>
      <div class="match-team ${isTbd(m.team1) ? 'tbd' : ''} ${t1win ? 'winner' : t1eli ? 'eliminated' : ''}">${m.team1}</div>
      <div class="match-team ${isTbd(m.team2) ? 'tbd' : ''} ${t2win ? 'winner' : t2eli ? 'eliminated' : ''}">${m.team2}</div>
    </div>`;
}

// ── BRACKET (from Supabase) ──
async function renderBracket() {
  const bracketEl = document.getElementById('bracketEl');
  if (!bracketEl) return;

  const { data, error } = await db.from('bracket_matches').select('*').order('id');
  if (error) { console.error(error); return; }

  const winners = data.filter(m => m.bracket === 'winners');
  const losers  = data.filter(m => m.bracket === 'losers');
  const grand   = data.filter(m => m.bracket === 'grand');

  const roundOrder = ['Winners QF', 'Winners SF', 'Winners Final'];
  const losersOrder = ['Losers R1', 'Losers R2', 'Losers Final'];

  function groupByRound(matches, order) {
    const grouped = {};
    matches.forEach(m => {
      if (!grouped[m.round]) grouped[m.round] = [];
      grouped[m.round].push(m);
    });
    return order.map(r => ({ round: r, matches: grouped[r] || [] })).filter(r => r.matches.length);
  }

  const wRounds = groupByRound(winners, roundOrder);
  const lRounds = groupByRound(losers, losersOrder);

  const wHTML = wRounds.map(r => `
    <div class="round">
      <div class="round-header">${r.round}<br><span style="color:var(--muted);font-size:0.5rem;">${r.round === 'Winners Final' ? 'Day 3 · June 6' : 'Day 2 · May 27'} · Ballroom</span></div>
      <div class="round-matches">${r.matches.map(m => matchCard(m)).join('')}</div>
    </div>`).join('');

  const gfHTML = grand.map(m => `
    <div class="round">
      <div class="round-header" style="color:var(--gold);">Grand Finals<br><span style="color:var(--muted);font-size:0.5rem;">Day 3 · June 6 · Ballroom</span></div>
      <div class="round-matches">${matchCard(m, true)}</div>
    </div>`).join('');

  const lHTML = lRounds.map(r => `
    <div class="round">
      <div class="round-header losers-header">${r.round}<br><span style="color:var(--muted);font-size:0.5rem;">${r.round === 'Losers Final' ? 'Day 3 · June 6' : 'Day 2 · May 27'} · Ballroom</span></div>
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

// ── REAL-TIME SUBSCRIPTIONS ──
function initRealtime() {
  db.channel('standings-live')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'swiss_standings' }, () => {
      renderSwissStandings();
    }).subscribe();

  db.channel('swiss-matches-live')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'swiss_matches' }, () => {
      renderSwissRounds();
    }).subscribe();

  db.channel('bracket-live')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'bracket_matches' }, () => {
      renderBracket();
    }).subscribe();
}

// ── RULES ──
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

// ── ROSTER MODAL ──
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

// ── MOBILE NAV ──
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { if (a.id !== 'rosterNavBtn') navLinks.classList.remove('open'); });
  });
}

// ── SCROLL REVEAL ──
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

// ── COUNTDOWN ──
function initCountdown() {
  const target = new Date('2026-05-23T00:00:00');
  function update() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById('countdownWrap').innerHTML =
        '<p class="countdown-started">🏆 Tournament Has Started!</p>';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent  = String(d).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-mins').textContent  = String(m).padStart(2,'0');
    document.getElementById('cd-secs').textContent  = String(s).padStart(2,'0');
  }
  update();
  setInterval(update, 1000);
}

// ── INIT ──
async function init() {
  renderTeams();
  renderRules();
  initScrollReveal();
  initModal();
  initMobileNav();
  await Promise.all([
    renderSwissStandings(),
    renderSwissRounds(),
    renderBracket(),
  ]);
  initRealtime();
}

init();
initCountdown();