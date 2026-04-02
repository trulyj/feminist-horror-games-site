/**
 * JS file specifically for the network chart.
 * From the file Network Chart -> chart.js provided by Michael
 * This code probably doesn't need to be touched at all 
 * unless we're changing the logic of the chart.
 */

const GRAPH = {"nodes": [{"id": "Motherhood", "color": "#c084fc", "titles": ["Alan Wake 2", "Alien: Isolation", "Amnesia: Rebirth", "Amy", "Anchorhead", "Araya", "Bloodborne", "Clock Tower 3", "Deadly Premonition 2: A Blessing in Disguise", "Devotion", "Fatal Frame V: Maiden of Black Water", "Forbidden Siren 2", "Haunting Ground", "Koudelka", "Layers of Fear", "Little Misfortune", "Mad Father", "Maid of Sker", "Martha Is Dead", "Milk Inside a Bag of Milk Inside a Bag of Milk", "Outlast 2", "Oxenfree II: Lost Signals", "Remothered: Broken Porcelain", "Remothered: Tormented Fathers", "Resident Evil 2", "Resident Evil 4", "Scarlet Hollow", "Senua's Saga: Hellblade II", "Silent Hill", "Silent Hill 2", "Silent Hill 3", "Silent Hill 4: The Room", "Silent Hill: Origins", "Silent Hill: Shattered Memories", "Silent Hill: The Short Message", "Siren: Blood Curse", "The Cat Lady", "The Evil Within 2", "The Last of Us Part II", "The Mortuary Assistant", "The Town of Light", "The Walking Dead: Season Two", "Theresia", "Tormented Souls", "Unforgiving: A Northern Hymn", "What Remains of Edith Finch", "Wilson's Heart"], "degree": 9}, {"id": "Domesticity", "color": "#f472b6", "titles": ["Alan Wake 2", "Anchorhead", "Devotion", "Layers of Fear", "Layers of Fear 2", "Little Misfortune", "Mad Father", "Maid of Sker", "Phantasmagoria", "Remothered: Broken Porcelain", "Remothered: Tormented Fathers", "Resident Evil: Code Veronica", "Scarlet Hollow", "Silent Hill 2", "Silent Hill: Origins", "Silent Hill: Shattered Memories", "Silent Hill: The Short Message", "The Cat Lady", "The Town of Light", "What Remains of Edith Finch"], "degree": 9}, {"id": "Trauma / Mental Illness", "color": "#fb923c", "titles": ["Alice: Madness Returns", "American McGee's Alice", "Amnesia: Rebirth", "Araya", "Clock Tower II: The Struggle Within", "Deadly Premonition 2: A Blessing in Disguise", "Detention", "Devotion", "Doki Doki Literature Club!", "Emily Wants to Play", "FAITH: The Unholy Trinity", "Fatal Frame", "Fatal Frame V: Maiden of Black Water", "Forbidden Siren 2", "Fran Bow", "Layers of Fear", "Layers of Fear 2", "Little Misfortune", "Martha Is Dead", "Milk Inside a Bag of Milk Inside a Bag of Milk", "Milk Outside a Bag of Milk Outside a Bag of Milk", "Outlast 2", "Oxenfree II: Lost Signals", "Phantasmagoria", "Remothered: Broken Porcelain", "Remothered: Tormented Fathers", "Resident Evil 2", "Resident Evil 4", "Rule of Rose", "Senua's Saga: Hellblade II", "Silent Hill 2", "Silent Hill 4: The Room", "Silent Hill: Origins", "Silent Hill: Shattered Memories", "Silent Hill: The Short Message", "Slender: The Arrival", "The Cat Lady", "The Dishwasher: Vampire Smile", "The Last of Us", "The Last of Us Part II", "The Mortuary Assistant", "The Town of Light", "The Walking Dead: The Final Season", "What Remains of Edith Finch"], "degree": 9}, {"id": "Embodiment", "color": "#34d399", "titles": ["A Plague Tale: Innocence", "Alice: Madness Returns", "American McGee's Alice", "Amnesia: Rebirth", "Amy", "BloodRayne", "Bloodborne", "Clock Tower 3", "Clock Tower II: The Struggle Within", "Deadly Premonition 2: A Blessing in Disguise", "Echo Night: Beyond", "Eternal Darkness: Sanity?s Requiem", "Fatal Frame", "Fatal Frame II: Crimson Butterfly", "Fatal Frame III: The Tormented", "Fatal Frame IV: Mask of the Lunar Eclipse", "Fatal Frame V: Maiden of Black Water", "Forbidden Siren 2", "Fran Bow", "Haunting Ground", "Koudelka", "Layers of Fear", "Layers of Fear 2", "Martha Is Dead", "Outlast 2", "Phantasmagoria", "Remothered: Broken Porcelain", "Remothered: Tormented Fathers", "Resident Evil 2", "Resident Evil 3: Nemesis", "Resident Evil 4", "Resident Evil 5", "Resident Evil: Code Veronica", "Rule of Rose", "Scarlet Hollow", "Scorn", "Senua's Saga: Hellblade II", "Signalis", "Silent Hill", "Silent Hill 2", "Silent Hill 3", "Silent Hill 4: The Room", "Silent Hill: Origins", "Silent Hill: Shattered Memories", "Silent Hill: The Short Message", "Siren: Blood Curse", "Sorry We're Closed", "The Dishwasher: Vampire Smile", "The Mortuary Assistant", "The Witch?s House", "Theresia", "Tormented Souls", "What Remains of Edith Finch", "Wilson's Heart"], "degree": 9}, {"id": "Captivity", "color": "#f87171", "titles": ["A Plague Tale: Innocence", "Alan Wake 2", "Alice: Madness Returns", "American McGee's Alice", "Clock Tower", "Deadly Premonition 2: A Blessing in Disguise", "Devotion", "Emily Wants to Play", "Fatal Frame IV: Mask of the Lunar Eclipse", "Forbidden Siren 2", "Fran Bow", "Haunting Ground", "Ib", "Little Nightmares", "Mad Father", "Maid of Sker", "Outlast 2", "Oxenfree II: Lost Signals", "Remothered: Broken Porcelain", "Remothered: Tormented Fathers", "Resident Evil 2", "Resident Evil 3: Nemesis", "Resident Evil 4", "Resident Evil 5", "Resident Evil: Code Veronica", "Rule of Rose", "Scarlet Hollow", "Shadows of the Damned", "Silent Hill 2", "Silent Hill: Origins", "Silent Hill: The Short Message", "Siren: Blood Curse", "Slender: The Arrival", "The Cat Lady", "The Dishwasher: Vampire Smile", "The Evil Within 2", "The Last of Us", "The Last of Us Part II", "The Mortuary Assistant", "The Tartarus Key", "The Walking Dead: Season Two", "The Walking Dead: The Final Season", "Theresia", "Tormented Souls", "Unforgiving: A Northern Hymn", "Until Dawn", "Wilson's Heart"], "degree": 9}, {"id": "Violence", "color": "#ef4444", "titles": ["A Plague Tale: Innocence", "Alan Wake 2", "Alice: Madness Returns", "Alien: Isolation", "American McGee's Alice", "Amnesia: Rebirth", "Anchorhead", "Araya", "BloodRayne", "Bloodborne", "Clock Tower", "Clock Tower 3", "Clock Tower II: The Struggle Within", "D", "Deadly Premonition 2: A Blessing in Disguise", "Detention", "Doki Doki Literature Club!", "Emily Wants to Play", "Eternal Darkness: Sanity?s Requiem", "FAITH: The Unholy Trinity", "Fatal Frame", "Fatal Frame II: Crimson Butterfly", "Fatal Frame III: The Tormented", "Fatal Frame IV: Mask of the Lunar Eclipse", "Fatal Frame V: Maiden of Black Water", "Forbidden Siren 2", "Fran Bow", "Haunting Ground", "Ib", "Koudelka", "Layers of Fear 2", "Life Weaver", "Mad Father", "Martha Is Dead", "Misao", "Outlast 2", "Phantasmagoria", "Remothered: Broken Porcelain", "Remothered: Tormented Fathers", "Resident Evil 2", "Resident Evil 3: Nemesis", "Rule of Rose", "Scarlet Hollow", "Shadows of the Damned", "Silent Hill 2", "Silent Hill 3", "Silent Hill 4: The Room", "Silent Hill: Origins", "Silent Hill: The Short Message", "Siren: Blood Curse", "The 7th Guest", "The Cat Lady", "The Dishwasher: Vampire Smile", "The Evil Within 2", "The Medium", "The Walking Dead: Season Two", "The Walking Dead: The Final Season", "Theresia", "Tormented Souls", "Unforgiving: A Northern Hymn", "Until Dawn", "What Remains of Edith Finch", "Wilson's Heart"], "degree": 9}, {"id": "Sexualized Violence", "color": "#f97316", "titles": ["Alice: Madness Returns", "Deadly Premonition 2: A Blessing in Disguise", "Haunting Ground", "Layers of Fear 2", "Misao", "Outlast 2", "Phantasmagoria", "Remothered: Broken Porcelain", "Silent Hill 2", "The Town of Light"], "degree": 9}, {"id": "Girlhood Horror", "color": "#a78bfa", "titles": ["A Plague Tale: Innocence", "Alice: Madness Returns", "American McGee's Alice", "Amy", "Clock Tower", "Clock Tower 3", "Clock Tower II: The Struggle Within", "Deadly Premonition 2: A Blessing in Disguise", "Detention", "Devotion", "Doki Doki Literature Club!", "Emily Wants to Play", "Fatal Frame II: Crimson Butterfly", "Fatal Frame IV: Mask of the Lunar Eclipse", "Forbidden Siren 2", "Fran Bow", "Ib", "Koudelka", "Little Goody Two Shoes", "Little Misfortune", "Little Nightmares", "Mad Father", "Outlast 2", "Oxenfree II: Lost Signals", "Resident Evil 4", "Rule of Rose", "Silent Hill", "Silent Hill 3", "Silent Hill: Origins", "Silent Hill: The Short Message", "Siren: Blood Curse", "The Last of Us", "The Last of Us Part II", "The Medium", "The Path", "The Town of Light", "The Walking Dead", "The Walking Dead: Season Two", "The Walking Dead: The Final Season", "The Witch?s House", "Theresia", "Until Dawn", "We Know the Devil", "What Remains of Edith Finch", "Wilson's Heart"], "degree": 9}, {"id": "Woman-as-Monster", "color": "#e879f9", "titles": ["BloodRayne", "D", "Deadly Premonition 2: A Blessing in Disguise", "Emily Wants to Play", "FAITH: The Unholy Trinity", "Fatal Frame II: Crimson Butterfly", "Forbidden Siren 2", "Fran Bow", "Koudelka", "Little Goody Two Shoes", "Martha Is Dead", "Shadows of the Damned", "Silent Hill: The Short Message", "Sorry We're Closed", "The Dark Pictures: Switchback VR", "The Medium", "The Witch?s House", "Tormented Souls", "Unforgiving: A Northern Hymn", "Wilson's Heart"], "degree": 9}, {"id": "Queer Themes", "color": "#38bdf8", "titles": ["Deadly Premonition 2: A Blessing in Disguise", "Remothered: Broken Porcelain", "Remothered: Tormented Fathers", "Scorn", "Signalis", "Sorry We're Closed", "The Last of Us", "The Last of Us Part II", "The Town of Light", "The Walking Dead: The Final Season", "We Know the Devil"], "degree": 9}], "links": [{"source": "Motherhood", "target": "Domesticity", "weight": 17}, {"source": "Motherhood", "target": "Trauma / Mental Illness", "weight": 27}, {"source": "Motherhood", "target": "Embodiment", "weight": 31}, {"source": "Motherhood", "target": "Captivity", "weight": 27}, {"source": "Motherhood", "target": "Violence", "weight": 33}, {"source": "Motherhood", "target": "Sexualized Violence", "weight": 6}, {"source": "Motherhood", "target": "Girlhood Horror", "weight": 22}, {"source": "Motherhood", "target": "Woman-as-Monster", "weight": 8}, {"source": "Motherhood", "target": "Queer Themes", "weight": 5}, {"source": "Domesticity", "target": "Trauma / Mental Illness", "weight": 14}, {"source": "Domesticity", "target": "Embodiment", "weight": 12}, {"source": "Domesticity", "target": "Captivity", "weight": 12}, {"source": "Domesticity", "target": "Violence", "weight": 13}, {"source": "Domesticity", "target": "Sexualized Violence", "weight": 5}, {"source": "Domesticity", "target": "Girlhood Horror", "weight": 7}, {"source": "Domesticity", "target": "Woman-as-Monster", "weight": 1}, {"source": "Domesticity", "target": "Queer Themes", "weight": 3}, {"source": "Trauma / Mental Illness", "target": "Embodiment", "weight": 28}, {"source": "Trauma / Mental Illness", "target": "Captivity", "weight": 24}, {"source": "Trauma / Mental Illness", "target": "Violence", "weight": 30}, {"source": "Trauma / Mental Illness", "target": "Sexualized Violence", "weight": 8}, {"source": "Trauma / Mental Illness", "target": "Girlhood Horror", "weight": 22}, {"source": "Trauma / Mental Illness", "target": "Woman-as-Monster", "weight": 7}, {"source": "Trauma / Mental Illness", "target": "Queer Themes", "weight": 7}, {"source": "Embodiment", "target": "Captivity", "weight": 27}, {"source": "Embodiment", "target": "Violence", "weight": 40}, {"source": "Embodiment", "target": "Sexualized Violence", "weight": 8}, {"source": "Embodiment", "target": "Girlhood Horror", "weight": 24}, {"source": "Embodiment", "target": "Woman-as-Monster", "weight": 12}, {"source": "Embodiment", "target": "Queer Themes", "weight": 6}, {"source": "Captivity", "target": "Violence", "weight": 35}, {"source": "Captivity", "target": "Sexualized Violence", "weight": 6}, {"source": "Captivity", "target": "Girlhood Horror", "weight": 27}, {"source": "Captivity", "target": "Woman-as-Monster", "weight": 9}, {"source": "Captivity", "target": "Queer Themes", "weight": 6}, {"source": "Violence", "target": "Sexualized Violence", "weight": 9}, {"source": "Violence", "target": "Girlhood Horror", "weight": 30}, {"source": "Violence", "target": "Woman-as-Monster", "weight": 16}, {"source": "Violence", "target": "Queer Themes", "weight": 4}, {"source": "Sexualized Violence", "target": "Girlhood Horror", "weight": 4}, {"source": "Sexualized Violence", "target": "Woman-as-Monster", "weight": 1}, {"source": "Sexualized Violence", "target": "Queer Themes", "weight": 3}, {"source": "Girlhood Horror", "target": "Woman-as-Monster", "weight": 11}, {"source": "Girlhood Horror", "target": "Queer Themes", "weight": 6}, {"source": "Woman-as-Monster", "target": "Queer Themes", "weight": 2}]};

const isMobile = window.innerWidth <= 600;
let W = window.innerWidth;
let H = window.innerHeight;

const svg    = d3.select('#svg');
const maxW   = d3.max(GRAPH.links, d => d.weight);
const maxDeg = d3.max(GRAPH.nodes, d => d.degree);

// Scale everything to screen size
const scale  = Math.min(W, H) / 900;
function nodeR(d) {
  const base = isMobile ? 8 : 6;
  const range = isMobile ? 10 : 11;
  return (base + range * (d.degree / maxDeg)) * Math.max(0.7, scale);
}
function labelSize(d) {
  return Math.max(isMobile ? 10 : 9, (isMobile ? 11 : 10) * Math.max(0.75, scale));
}

// ── Defs: glow filter ─────────────────────────────────────────────────────────
const defs = svg.append('defs');
const glowF = defs.append('filter').attr('id','glow')
  .attr('x','-60%').attr('y','-60%').attr('width','220%').attr('height','220%');
glowF.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation', isMobile ? 3 : 4).attr('result','blur');
const mgr = glowF.append('feMerge');
mgr.append('feMergeNode').attr('in','blur');
mgr.append('feMergeNode').attr('in','SourceGraphic');

// ── Zoom (supports pinch on mobile) ──────────────────────────────────────────
const g = svg.append('g');
svg.call(
  d3.zoom()
    .scaleExtent([0.25, 4])
    .on('zoom', e => g.attr('transform', e.transform))
);

// ── Simulation ────────────────────────────────────────────────────────────────
const linkDist = isMobile ? 90 : 150;
const charge   = isMobile ? -280 : -420;

const sim = d3.forceSimulation(GRAPH.nodes)
  .force('link', d3.forceLink(GRAPH.links).id(d => d.id)
    .distance(d => linkDist - d.weight * (isMobile ? 0.6 : 1.0))
    .strength(0.6))
  .force('charge', d3.forceManyBody().strength(charge))
  .force('center', d3.forceCenter(W / 2, H / 2))
  .force('collision', d3.forceCollide(d => nodeR(d) * 2.4));

// ── Links ─────────────────────────────────────────────────────────────────────
const linkSel = g.append('g').selectAll('line')
  .data(GRAPH.links).enter().append('line')
  .attr('class','link')
  .attr('stroke-width', d => (0.5 + 1.8 * (d.weight / maxW)) * Math.max(0.7, scale))
  .attr('stroke', d => `rgba(150,162,185,${0.1 + 0.38 * (d.weight / maxW)})`);

// ── Node groups ───────────────────────────────────────────────────────────────
const nodeG = g.append('g').selectAll('g')
  .data(GRAPH.nodes).enter().append('g')
  .call(d3.drag()
    .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
    .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
    .on('end',   (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = d.x; d.fy = d.y; })
  )
  .on('click', (e, d) => { e.stopPropagation(); openPanel(d); });

// Outer glow
nodeG.append('circle').attr('class','node-glow-outer')
  .attr('r', d => nodeR(d) * 2.6)
  .attr('fill', d => hexToRgba(d.color, 0.07));

// Mid glow
nodeG.append('circle').attr('class','node-glow-mid')
  .attr('r', d => nodeR(d) * 1.65)
  .attr('fill', d => hexToRgba(d.color, 0.16));

// Core
nodeG.append('circle').attr('class','node-core')
  .attr('r', d => nodeR(d))
  .attr('fill', d => d.color)
  .attr('stroke', d => hexToRgba(d.color, 0.7))
  .attr('stroke-width', 1.5)
  .attr('filter','url(#glow)');

// Label — below node on mobile so it doesn't clash with fat fingers
nodeG.append('text').attr('class','node-label')
  .attr('dy', d => isMobile ? nodeR(d) + 13 : -nodeR(d) - 6)
  .attr('font-size', d => labelSize(d) + 'px')
  .text(d => d.id);

// ── Tick ──────────────────────────────────────────────────────────────────────
sim.on('tick', () => {
  linkSel
    .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
  nodeG.attr('transform', d => `translate(${d.x},${d.y})`);
});

// ── Click canvas to close panel ───────────────────────────────────────────────
svg.on('click', closePanel);

// ── Panel ─────────────────────────────────────────────────────────────────────
const panel      = document.getElementById('panel');
const panelClose = document.getElementById('panel-close');
const panelDot   = document.getElementById('panel-dot');
const panelName  = document.getElementById('panel-name');
const panelCount = document.getElementById('panel-count');
const panelList  = document.getElementById('panel-list');

panelClose.addEventListener('click', e => { e.stopPropagation(); closePanel(); });

// Swipe down to close on mobile
let touchStartY = 0;
panel.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, {passive: true});
panel.addEventListener('touchend', e => {
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (dy > 60) closePanel();
}, {passive: true});

function openPanel(d) {
  nodeG.selectAll('.node-core').classed('active', n => n.id === d.id);
  panelDot.style.background = d.color;
  panelDot.style.boxShadow  = `0 0 8px ${d.color}`;
  panelName.textContent     = d.id;
  panelCount.textContent    = `${d.titles.length} title${d.titles.length !== 1 ? 's' : ''}`;
  panelList.innerHTML       = d.titles.map(t =>
    `<li style="border-left-color:${d.color}40">${t}</li>`
  ).join('');
  panel.classList.add('open');
  panel.scrollTop = 0;
}

function closePanel() {
  panel.classList.remove('open');
  nodeG.selectAll('.node-core').classed('active', false);
}

// ── Handle resize ─────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  W = window.innerWidth;
  H = window.innerHeight;
  sim.force('center', d3.forceCenter(W / 2, H / 2));
  sim.alpha(0.2).restart();
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function hexToRgba(hex, a) {
  const h = hex.replace('#','');
  const r = parseInt(h.slice(0,2),16);
  const g = parseInt(h.slice(2,4),16);
  const b = parseInt(h.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}
