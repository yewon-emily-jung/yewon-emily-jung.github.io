/* Olive Young US Glowmas · Rutgers AI in Marketing, Assignment 9
   Student prototype. Sample data only. Everything stays in this browser.
   Draw outcomes are decided by the approved odds BEFORE any animation runs.
   Animations only reveal a result that already exists. */
(() => {
  "use strict";

  /* =========================================================
     1. DATA
     ========================================================= */
  const IMG = "assets/products/";
  const PICKS = [
    { day: 1, brand: "Biodance", name: "Bio Collagen-Real Deep Mask 1 Sheet (34g)", price: "$5.00", img: "day01-biodance-bio-collagen-real-deep-mask.png", label: "US BEST SELLER", reason: "A US best seller, and one sheet is an easy way to try it tonight.", source: "US Best Sellers · Nov 6, 2026", tag: "For your first cozy night in this winter.", perk: { title: "Free Shipping on Any Order", cond: "No minimum. Today only.", code: "DEMO-DAY01", type: "code" } },
    { day: 2, brand: "espoir", name: "Be Velvet Cover Cushion (13g, 25 shades)", price: "$31.00", img: "day02-espoir-be-velvet-cover-cushion.png", label: "US BEST SELLER", reason: "Olive Young US shoppers made this cushion a best seller.", source: "US Best Sellers · Nov 6, 2026", tag: "For the one who lights up every holiday photo.", perk: { title: "$5 Off Makeup", cond: "On Makeup orders of $40 or more. Today only.", code: "DEMO-DAY02", type: "code" } },
    { day: 3, brand: "beplain", name: "Mung Bean pH-Balanced Cleansing Foam (160ml)", price: "$20.90", img: "day03-beplain-mung-bean-ph-balanced-cleansing-foam.png", label: "O.Y PICKS", reason: "Olive Young picked this foam cleanser for O.Y Picks, and shoppers agreed.", source: "O.Y Picks · Aug 28 to Oct 1, 2026", tag: "For a fresh start at the end of a long day.", perk: { title: "Free Travel Size Foam", cond: "When you buy this Pick. Today only.", type: "gift" } },
    { day: 4, brand: "medicube", name: "PDRN Pink Peptide Serum (30ml)", price: "$22.00", img: "day04-medicube-pdrn-pink-peptide-serum.png", label: "US BEST SELLER", reason: "A best selling serum among Olive Young US shoppers.", source: "US Best Sellers · Nov 6, 2026", tag: "For keeping your skin glowing through the cold winter.", perk: { title: "Free Serum Mini", cond: "When you buy this Pick. Today only.", type: "gift" } },
    { day: 5, brand: "BIOHEAL BOH", name: "Probioderm 3D Lifting Cream (50ml)", price: "$34.00", img: "day05-bioheal-boh-probioderm-3d-lifting-cream.png", label: "O.Y PICKS", reason: "Olive Young featured this cream in O.Y Picks. US shoppers made it a best seller too.", source: "O.Y Picks · Aug 28 to Oct 1, 2026", tag: "For someone who deserves a little extra care.", perk: { title: "Winter Barrier Kit", cond: "With any order of $50 or more. Today only.", type: "kit" } },
    { day: 6, brand: "ROUND LAB", name: "1025 Dokdo Toner (200ml)", price: "$17.00", img: "day06-round-lab-1025-dokdo-toner.png", label: "US BEST SELLER", reason: "This toner earned a spot on the Olive Young US best seller list.", source: "US Best Sellers · Nov 6, 2026", tag: "For the quiet moments you keep just for yourself.", perk: { title: "Free Toner Mini", cond: "When you buy this Pick. Today only.", type: "gift" } },
    { day: 7, brand: "MEDIHEAL", name: "Madecassoside Blemish Pad", price: "$26.40", img: "day07-mediheal-madecassoside-blemish-pad.png", label: "US BEST SELLER", reason: "These pads ranked in the top ten of the Olive Young US best seller list.", source: "US Best Sellers · Nov 6, 2026", tag: "For the friend who had a long, busy year.", perk: { title: "$5 Off Masks & Pads", cond: "On Masks & Pads orders of $40 or more. Today only.", code: "DEMO-DAY07", type: "code" } },
    { day: 8, brand: "Dr.Althea", name: "345 Relief Cream", price: "$22.95", img: "day08-dr-althea-345-relief-cream.png", label: "US BEST SELLER", reason: "This cream ranked in the top five of the Olive Young US best seller list.", source: "US Best Sellers · Nov 6, 2026", tag: "For the one who always takes care of everyone else.", perk: { title: "Free Cream Mini", cond: "When you buy this Pick. Today only.", type: "gift" } },
    { day: 9, brand: "CLIO", name: "Kill Lash Superproof Mascara (5 colors)", price: "$14.90", img: "day09-clio-kill-lash-superproof-mascara.png", label: "O.Y PICKS", reason: "Olive Young gave this mascara an O.Y Picks spotlight.", source: "O.Y Picks · Shop the Spotlight · Sep 11 to Sep 24, 2026", tag: "For every celebration still ahead this season.", perk: { title: "Party Ready Kit", cond: "With any order of $50 or more. Today only.", type: "kit" } },
    { day: 10, brand: "SKIN1004", name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum", price: "$26.00", img: "day10-skin1004-centella-water-fit-sun-serum.png", label: "US BEST SELLER", reason: "It was in the top five of the Olive Young US best sellers when we picked it.", source: "US Best Sellers · Nov 6, 2026", tag: "For starting the new year with confidence.", perk: { title: "$5 Off Sun Care", cond: "On Sun Care orders of $40 or more. Today only.", code: "DEMO-DAY10", type: "code" } },
    { day: 11, brand: "UNOVE", name: "Silk Hair Oil Tender Bloom (70ml)", price: "$21.75", img: "day11-unove-silk-hair-oil.png", label: "US BEST SELLER", reason: "UNOVE had four products on the Olive Young US best seller list when we checked. This hair oil was one of them.", source: "US Best Sellers · Nov 6, 2026", tag: "For celebrating everything you accomplished this year.", perk: { title: "Free Hair Oil Mini", cond: "When you buy this Pick. Today only.", type: "gift" } },
    { day: 12, brand: "hince", name: "Raw Glow Gel Tint (4ml, 19 colors)", price: "$17.00", img: "day12-hince-raw-glow-gel-tint.png", label: "US BEST SELLER", reason: "A best selling tint among Olive Young US shoppers, with a name made for Glowmas.", source: "US Best Sellers · Nov 6, 2026", tag: "For you. You made it through another year.", perk: { title: "Glowmas Glow Kit", cond: "With any order of $50 or more. Today only.", type: "kit" } }
  ];
  const DOORS = {
    1: { shape: "arch", hinge: "left", color: "red", big: true },
    2: { shape: "rect", hinge: "top", color: "kraft", ribbon: "v", rib: "var(--red)" },
    3: { shape: "scallop", hinge: "right", color: "forest" },
    4: { shape: "pill", hinge: "left", color: "burgundy" },
    5: { shape: "flower", hinge: "bottom", color: "gold", big: true },
    6: { shape: "arch", hinge: "right", color: "tartan" },
    7: { shape: "ticket", hinge: "top", color: "cream" },
    8: { shape: "scallop", hinge: "left", color: "red" },
    9: { shape: "rect", hinge: "bottom", color: "burgundy", ribbon: "h", rib: "var(--cream)" },
    10: { shape: "round", hinge: "left", color: "kraft" },
    11: { shape: "arch", hinge: "right", color: "forest" },
    12: { shape: "double", color: "red", big: true }
  };
  const STAGE = { gold: ["var(--gold)", "var(--ivory)"], tartan: ["var(--forest-2)", "var(--ivory)"], red: ["var(--red)", "var(--pink)"], kraft: ["var(--kraft)", "var(--ivory)"], forest: ["var(--deep-green)", "var(--pale-green)"], burgundy: ["var(--burgundy)", "var(--pink)"], pink: ["var(--pink)", "var(--ivory)"], olive: ["var(--leaf)", "var(--pale-green)"], cream: ["var(--cream)", "var(--ivory)"] };
  const ORN_COLORS = { 1: "#B32231", 2: "#D4B677", 3: "#F3EBDB", 5: "#5C1820", 6: "#B8975A", 7: "#DCC7A1", 9: "#24563A", 10: "#B32231", 11: "#E6D8BA" };
  const CAT = { 1: "mask", 7: "mask", 2: "makeup", 9: "makeup", 12: "makeup", 3: "skin", 4: "skin", 5: "skin", 6: "skin", 8: "skin", 10: "sun", 11: "hair" };
  const MILESTONES = [{ doors: 4, pct: 5, code: "DEMO-GLOW5" }, { doors: 8, pct: 8, code: "DEMO-GLOW8" }, { doors: 12, pct: 10, code: "DEMO-GLOW10" }];

  // Glowmas Lucky Draw: approved odds (%) and daily caps (coupon / bag / ticket)
  const LUCKY_DAYS = [1, 3, 6, 9];
  const LUCKY = {
    1: { fortune: 95, coupon: 3, bag: 1, ticket: 1, caps: { coupon: 275, bag: 95, ticket: 95 } },
    3: { fortune: 90, coupon: 5, bag: 3, ticket: 2, caps: { coupon: 360, bag: 215, ticket: 145 } },
    6: { fortune: 80, coupon: 9, bag: 6, ticket: 5, caps: { coupon: 515, bag: 345, ticket: 290 } },
    9: { fortune: 65, coupon: 15, bag: 10, ticket: 10, caps: { coupon: 720, bag: 480, ticket: 470 } }
  };
  const LUCKY_OUT = {
    fortune: { title: "Beauty Fortune", kind: "Your Beauty Fortune" },
    coupon: { title: "$3 Off Health & Wellness", kind: "You found a coupon", code: "DEMO-LUCKY-HW3" },
    bag: { title: "Free Gift Bag + Gift Note", kind: "You found a gift" },
    ticket: { title: "+1 Grand Draw Ticket", kind: "You found a ticket" }
  };
  const FORTUNES = [
    "A slow evening routine tonight will make tomorrow feel brighter.",
    "Someone will notice your glow before you say a word.",
    "Your next favorite product is closer than you think.",
    "Tonight is a good night for a long bath and an early bedtime.",
    "Warm hands and a cozy scarf are the best accessories this week.",
    "A small treat for yourself counts as holiday spirit too."
  ];
  // Grand Draw pools (approved counts)
  const POOL_A = { glow: 200227, omc: 22600, p1: 1620, p5: 180, p10: 23, hair: 900, stack: 135, mini: 45, travel: 45, full: 45, box: 81, premium: 9, tote: 90 };
  const POOL_B = { glow: 22248, p1: 180, p5: 20, p10: 2, hair: 100, stack: 15, mini: 5, travel: 5, full: 5, box: 9, premium: 1, tote: 10 };
  const PRIZE = {
    glow: { t: "Glow Fortune", cat: "fortune" },
    omc: { t: "One More Chance", cat: "omc" },
    p1: { t: "1 O.Y MEMBERS Point", cat: "prize", kind: "points" },
    p5: { t: "5 O.Y MEMBERS Points", cat: "prize", kind: "points" },
    p10: { t: "10 O.Y MEMBERS Points", cat: "prize", kind: "points" },
    hair: { t: "$3 Off $30 Hair Coupon", cat: "prize", kind: "coupon", code: "DEMO-GRAND-HAIR3" },
    stack: { t: "Special Stackable Coupon · $5 Off $60", cat: "prize", kind: "coupon", code: "DEMO-GRAND-STACK5" },
    mini: { t: "Mini Sample Bundle", cat: "prize", kind: "ship" },
    travel: { t: "Travel Kit", cat: "prize", kind: "ship" },
    full: { t: "Full Size Product", cat: "prize", kind: "ship" },
    box: { t: "Holiday Beauty Box", cat: "prize", kind: "ship" },
    premium: { t: "Premium Holiday Beauty Box", cat: "prize", kind: "ship" },
    tote: { t: "Glowmas Tote", cat: "prize", kind: "ship" }
  };

  /* =========================================================
     2. STORAGE, STATE, ASSIGNMENT
     ========================================================= */
  const mem = {};
  const load = (k, f) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : f; } catch (e) { return k in mem ? mem[k] : f; } };
  const save = (k, v) => { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const drop = (k) => { delete mem[k]; try { localStorage.removeItem(k); } catch (e) {} };
  const K = { state: "glowmas.state.v2", redeem: "glowmas.milestoneRedemption", ab: "glowmas.ab", events: "glowmas.events", pools: "glowmas.pools", visitor: "glowmas.visitor" };
  const rid = (p) => p + Math.random().toString(36).slice(2, 10);

  function blank() {
    return { shopList: [], revealed: [], day: 1, joined: false, opened: {}, keyEarned: false, keyUsed: false, glowList: [], claimed: [], age: null, memberAcct: false, emailOpt: false,
      lucky: {}, luckyBonus: false, grand: { used: 0, results: [], stackWon: false, complete: false }, seenOrn: [], treeLit: false, participant: "", p12Entered: false };
  }
  function preset(name) {
    const s = blank();
    const member = () => { s.joined = true; s.age = true; s.memberAcct = true; s.participant = rid("p_"); };
    if (name === "member6") { s.day = 6; member(); [1, 2, 3, 5].forEach((d) => { s.opened[d] = "on"; s.claimed.push(d); }); s.glowList = [1, 3]; s.seenOrn = [1, 2, 3, 5]; s.lucky = { 1: { o: "fortune", f: 0 }, 3: { o: "coupon" } }; }
    else if (name === "late") { s.day = 8; }
    else if (name === "finale") { s.day = 12; member(); for (let d = 1; d <= 11; d++) { s.opened[d] = "on"; s.claimed.push(d); } s.seenOrn = Object.keys(s.opened).map(Number); s.glowList = [1, 5, 9]; s.lucky = { 1: { o: "fortune", f: 1 }, 3: { o: "fortune", f: 2 }, 6: { o: "bag" }, 9: { o: "ticket" } }; s.luckyBonus = true; }
    else if (name === "complete") { s.day = 13; member(); s.keyEarned = true; s.keyUsed = true; s.keyMission = "glow"; for (let d = 1; d <= 12; d++) { s.opened[d] = d === 4 ? "caught" : "on"; if (d !== 4) s.claimed.push(d); } s.glowList = [2, 5, 12]; s.lucky = { 1: { o: "fortune", f: 3 }, 3: { o: "coupon" }, 6: { o: "fortune", f: 4 }, 9: { o: "fortune", f: 5 } }; }
    return s;
  }
  // Demo sandbox. Presenter controls write to separate keys so a visitor's own progress is never changed.
  const USER_K = { state: K.state, redeem: K.redeem, pools: K.pools };
  const DEMO_K = { state: "glowmas.demo.state", redeem: "glowmas.demo.redeem", pools: "glowmas.demo.pools" };
  const DEMO_FLAG = "glowmas.demo.active";
  let sandbox = !!load(DEMO_FLAG, false);
  if (sandbox) Object.assign(K, DEMO_K);
  let S = load(K.state, null);
  const firstEver = !S && !sandbox;
  if (!S) { S = preset("first"); save(K.state, S); }
  if (!S.shopList) S.shopList = [];
  if (!S.revealed) S.revealed = [];
  let R = load(K.redeem, null);
  let POOLS = load(K.pools, null);
  if (!POOLS) POOLS = freshPools();
  function freshPools() { return { A: Object.assign({}, POOL_A), B: Object.assign({}, POOL_B), caps: { 1: { coupon: 0, bag: 0, ticket: 0 }, 3: { coupon: 0, bag: 0, ticket: 0 }, 6: { coupon: 0, bag: 0, ticket: 0 }, 9: { coupon: 0, bag: 0, ticket: 0 } } }; }
  const persist = () => { save(K.state, S); save(K.pools, POOLS); };

  let visitor = load(K.visitor, null);
  if (!visitor) { visitor = rid("v_"); save(K.visitor, visitor); }
  const session = rid("s_");
  let sessionSim = false;
  const params = new URLSearchParams(location.search);
  let ab = load(K.ab, null);
  if (!ab) { ab = { v: Math.random() < 0.5 ? "A" : "B" }; save(K.ab, ab); }
  let variant = ab.v, assignSource = "random";
  const qm = (params.get("mt") || "").toUpperCase(), qv = (params.get("v") || "").toUpperCase();
  if (qm === "A" || qm === "B") { variant = qm; assignSource = "moderated_test"; }
  else if (qv === "A" || qv === "B") { variant = qv; assignSource = "override"; }

  const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const pick = (d) => PICKS[d - 1];
  const today = () => (S.day <= 12 ? S.day : null);
  const dl = (d) => "Dec " + d;
  const openedCount = () => Object.keys(S.opened).length;
  const chev = '<svg class="cta-chev" aria-hidden="true"><use href="#i-chev"/></svg>';
  const plural = (n, a, b) => n + " " + (n === 1 ? a : b);

  /* =========================================================
     3. ANALYTICS
     ========================================================= */
  let EVENTS = load(K.events, []);
  function track(name, props) {
    const e = Object.assign({
      event: name, event_id: rid("e_"), timestamp: new Date().toISOString(), session_id: session, visitor_id: visitor,
      participant_id: S.joined ? S.participant : "", campaign_day: S.day, cta_variant: variant, assignment_source: assignSource,
      utm_source: params.get("utm_source") || "", data_mode: sessionSim ? "simulated" : "organic"
    }, props || {});
    EVENTS.push(e);
    if (EVENTS.length > 3000) EVENTS = EVENTS.slice(-3000);
    save(K.events, EVENTS);
    $("#evCount").textContent = EVENTS.length;
    if (!$("#drawer").hidden) renderDrawer();
  }
  function markSim(action) { sessionSim = true; track("demo_action", { action: action, data_mode: "simulated" }); }

  /* =========================================================
     4. TICKETS
     ========================================================= */
  function ticketEarned() { const n = openedCount(); return Math.min(16, n + (n === 12 ? 3 : 0) + (S.luckyBonus ? 1 : 0)); }
  const ticketBalance = () => Math.max(0, ticketEarned() - S.grand.used);
  function ticketHistory() {
    const h = [];
    Object.keys(S.opened).map(Number).sort((a, b) => a - b).forEach((d) => h.push([S.opened[d] === "caught" ? "Door " + d + " with Catch-up Key" : "Door " + d + " · " + dl(d), "+1"]));
    if (openedCount() === 12) h.push(["All 12 doors bonus", "+3"]);
    if (S.luckyBonus) h.push(["Glowmas Lucky Draw bonus", "+1"]);
    if (S.grand.used) h.push(["Played in the Grand Draw", "−" + S.grand.used]);
    return h;
  }

  /* =========================================================
     5. FX helpers
     ========================================================= */
  const toastEl = $("#toast"); let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 3000); }
  function confetti(opts) {
    if (reduce()) return;
    const o = Object.assign({ n: 140, ms: 2400, colors: ["#B32231", "#B8975A", "#D4B677", "#F3EBDB", "#24563A", "#50DF00"], snow: false }, opts || {});
    const c = document.createElement("canvas"); $("#fx").appendChild(c);
    const W = c.width = innerWidth * devicePixelRatio, H = c.height = innerHeight * devicePixelRatio, ctx = c.getContext("2d");
    const ox = (o.x != null ? o.x : innerWidth / 2) * devicePixelRatio, oy = (o.y != null ? o.y : innerHeight * 0.45) * devicePixelRatio;
    const P = Array.from({ length: o.n }, () => { const a = Math.random() * Math.PI * 2, v = (4 + Math.random() * 9) * devicePixelRatio; return { x: ox, y: oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 6 * devicePixelRatio, r: Math.random() * Math.PI, vr: (Math.random() - .5) * .3, w: (6 + Math.random() * 8) * devicePixelRatio, h: (3 + Math.random() * 5) * devicePixelRatio, c: o.colors[(Math.random() * o.colors.length) | 0], s: o.snow && Math.random() < .5 }; });
    const t0 = performance.now();
    (function f(t) {
      const k = (t - t0) / o.ms; ctx.clearRect(0, 0, W, H);
      P.forEach((p) => { p.vy += .32 * devicePixelRatio; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.globalAlpha = Math.max(0, 1 - k); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.s ? "#fff" : p.c; if (p.s) { ctx.beginPath(); ctx.arc(0, 0, p.h, 0, 7); ctx.fill(); } else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore(); });
      if (k < 1) requestAnimationFrame(f); else c.remove();
    })(t0);
  }
  function flyTo(fromEl, kind) {
    const hud = $("#hud"); if (!fromEl || hud.hidden || reduce()) { bumpHud(); return; }
    const a = fromEl.getBoundingClientRect(), b = hud.getBoundingClientRect();
    const el = document.createElement("div"); el.className = "flyer";
    el.innerHTML = kind === "ticket" ? '<svg viewBox="0 0 24 16" width="26" height="18" style="color:#C21D2C"><use href="#i-ticket"/></svg>' : '<svg viewBox="0 0 40 54" width="24" height="32"><rect x="15" y="4" width="10" height="7" rx="1.5" fill="#B8975A"/><circle cx="20" cy="30" r="15" fill="#B32231"/></svg>';
    el.style.left = (a.left + a.width / 2 - 13) + "px"; el.style.top = (a.top + a.height / 2 - 13) + "px";
    document.body.appendChild(el);
    requestAnimationFrame(() => { el.style.transform = "translate(" + (b.left + 14 - a.left - a.width / 2) + "px," + (b.top + 6 - a.top - a.height / 2) + "px) scale(.6)"; el.style.opacity = ".2"; });
    setTimeout(() => { el.remove(); bumpHud(); }, 950);
  }
  function bumpHud() { const h = $("#hud"); h.classList.remove("bump"); void h.offsetWidth; h.classList.add("bump"); }

  /* =========================================================
     6. SHAPES + HERO
     ========================================================= */
  function buildClips() {
    const NS = "http://www.w3.org/2000/svg";
    const add = (id, list) => { const cp = document.getElementById(id); list.forEach(([tag, at]) => { const el = document.createElementNS(NS, tag); Object.entries(at).forEach(([k, v]) => el.setAttribute(k, v)); cp.appendChild(el); }); };
    const sc = (r, nx, ny) => { const o = [["rect", { x: r, y: r, width: 1 - 2 * r, height: 1 - 2 * r }]]; for (let i = 0; i <= nx; i++) { const x = r + (1 - 2 * r) * i / nx; o.push(["ellipse", { cx: x, cy: r, rx: r * 1.15, ry: r }], ["ellipse", { cx: x, cy: 1 - r, rx: r * 1.15, ry: r }]); } for (let j = 1; j < ny; j++) { const y = r + (1 - 2 * r) * j / ny; o.push(["ellipse", { cx: r, cy: y, rx: r, ry: r * .8 }], ["ellipse", { cx: 1 - r, cy: y, rx: r, ry: r * .8 }]); } return o; };
    const fl = (n, d, pr, cr) => { const o = [["circle", { cx: .5, cy: .5, r: cr }]]; for (let i = 0; i < n; i++) { const a = Math.PI * 2 * i / n - Math.PI / 2; o.push(["circle", { cx: .5 + d * Math.cos(a), cy: .5 + d * Math.sin(a), r: pr }]); } return o; };
    add("cp-scallop", sc(.075, 6, 9)); add("cp-flower", fl(8, .27, .23, .34));
  }

  /* Illustrated vintage fir: hand-cut fronds with needle strokes. Seeded so it never changes. */
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function paintTree(gId, o) {
    const g = document.getElementById(gId); if (!g) return { lights: [] };
    const R = rng(o.seed || 7), N = o.rows || 15, H = o.bottom - o.top, cx = o.cx;
    const G = ["#163823", "#1E4A2E", "#285C3A", "#33704A"]; let out = "", needles = "", needles2 = "";
    out += '<path d="M' + cx + " " + (o.top + 20) + " L" + (cx - o.width * .3) + " " + (o.bottom - 6) + " L" + (cx + o.width * .3) + " " + (o.bottom - 6) + 'Z" fill="#12301E" opacity=".85"/>';
    for (let i = N - 1; i >= 0; i--) {
      const t = (i + 1) / N, y = o.top + H * t, rowH = H / N, hw = o.width / 2 * Math.pow(t, .82) * (.9 + R() * .14);
      [-1, 1].forEach((sd) => {
        const tipX = cx + sd * hw, tipY = y + rowH * (.35 + R() * .3), rootY = y - rowH * 1.7;
        let d = "M" + cx + " " + rootY.toFixed(1) + " Q" + (cx + sd * hw * .55).toFixed(1) + " " + (y - rowH * 1.05).toFixed(1) + " " + tipX.toFixed(1) + " " + tipY.toFixed(1);
        const teeth = Math.max(4, Math.round(hw / 8));
        for (let k = 1; k <= teeth; k++) { const u = 1 - k / teeth, x = cx + sd * hw * u, yy = y + rowH * (.05 + .25 * u) + (k % 2 ? rowH * (.22 + R() * .2) : 0); d += " L" + x.toFixed(1) + " " + yy.toFixed(1); }
        d += "Z";
        out += '<path d="' + d + '" fill="' + G[(i + (sd > 0 ? 1 : 0)) % 2 + (t > .5 ? 0 : 1)] + '"/>';
        const lite = "M" + cx + " " + (rootY + rowH * .3).toFixed(1) + " Q" + (cx + sd * hw * .45).toFixed(1) + " " + (y - rowH * .8).toFixed(1) + " " + (cx + sd * hw * .82).toFixed(1) + " " + (tipY - rowH * .1).toFixed(1) + " L" + (cx + sd * hw * .5).toFixed(1) + " " + (y + rowH * .05).toFixed(1) + "Z";
        out += '<path d="' + lite + '" fill="' + G[3] + '" opacity=".55"/>';
        const n = Math.round(hw / 2.6);
        for (let k = 0; k < n; k++) { const u = R(), x = cx + sd * hw * u * .96, yy = y - rowH * (1.1 - u * .9) + R() * rowH * .9, len = 4 + R() * 6; const seg = "M" + x.toFixed(1) + " " + yy.toFixed(1) + " l" + (sd * len * .8).toFixed(1) + " " + (len * .7).toFixed(1); if (R() < .5) needles += seg; else needles2 += seg; }
      });
    }
    out += '<path d="' + needles + '" stroke="#6E9E6A" stroke-width="1" stroke-linecap="round" opacity=".55" fill="none"/><path d="' + needles2 + '" stroke="#0F2A1A" stroke-width="1.1" stroke-linecap="round" opacity=".5" fill="none"/>';
    g.innerHTML = out;
    const lights = [];
    for (let k = 0; k < (o.lights || 36); k++) { const tt = .1 + .88 * Math.pow((k + R()) / (o.lights || 36), .85), yy = o.top + H * tt, hw = o.width / 2 * tt * .82; lights.push([cx + (R() * 2 - 1) * hw, yy - H / N * .4]); }
    lights.sort((a, b) => a[1] - b[1]);
    return { lights: lights, R: R };
  }
  function lightsInto(gId, pts, cls) {
    const g = document.getElementById(gId); let h = "";
    pts.forEach((p, i) => { h += '<circle class="bulb ' + cls + '" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.4" fill="#F2C46B" data-c="#F2C46B" style="--bc:#F2C46B;--td:' + (-(i * .37) % 2.4).toFixed(2) + 's;--tw:' + (1.8 + (i % 4) * .45) + 's"/>'; });
    g.innerHTML = h; return Array.from(g.querySelectorAll(".bulb"));
  }
  function bannerInto(gId, cx, y, w, text) {
    const g = document.getElementById(gId); const x0 = cx - w / 2, x1 = cx + w / 2, id = gId + "P";
    g.innerHTML = '<path d="M' + (x0 + 14) + " " + (y + 10) + " L" + (x0 - 34) + " " + (y + 16) + " L" + (x0 - 18) + " " + (y + 32) + " L" + (x0 - 38) + " " + (y + 52) + " L" + (x0 + 20) + " " + (y + 46) + 'Z" fill="#861824"/>' +
      '<path d="M' + (x1 - 14) + " " + (y + 10) + " L" + (x1 + 34) + " " + (y + 16) + " L" + (x1 + 18) + " " + (y + 32) + " L" + (x1 + 38) + " " + (y + 52) + " L" + (x1 - 20) + " " + (y + 46) + 'Z" fill="#861824"/>' +
      '<path d="M' + x0 + " " + y + " Q" + cx + " " + (y + 22) + " " + x1 + " " + y + " L" + x1 + " " + (y + 38) + " Q" + cx + " " + (y + 60) + " " + x0 + " " + (y + 38) + 'Z" fill="#B32231"/>' +
      '<path d="M' + (x0 + 6) + " " + (y + 5) + " Q" + cx + " " + (y + 27) + " " + (x1 - 6) + " " + (y + 5) + '" stroke="#D4B677" stroke-width="1" fill="none" opacity=".7"/>' +
      '<path d="M' + (x0 + 6) + " " + (y + 33) + " Q" + cx + " " + (y + 55) + " " + (x1 - 6) + " " + (y + 33) + '" stroke="#D4B677" stroke-width="1" fill="none" opacity=".7"/>' +
      '<path id="' + id + '" d="M' + (x0 + 10) + " " + (y + 24) + " Q" + cx + " " + (y + 46) + " " + (x1 - 10) + " " + (y + 24) + '" fill="none"/>' +
      '<text font-family="Bricolage Grotesque, Arial Narrow, sans-serif" font-weight="800" font-size="15" letter-spacing="3" fill="#F3EBDB"><textPath href="#' + id + '" startOffset="50%" text-anchor="middle">' + text + "</textPath></text>";
  }

  function placeBulbs(pathId, groupId, n, cls) {
    const path = document.getElementById(pathId), g = document.getElementById(groupId); if (!path || !g) return [];
    const L = path.getTotalLength(), cols = ["#F7D58A", "#F4C3CF", "#FBF6EE", "#C21D2C", "#50DF00"]; let html = "";
    for (let i = 0; i < n; i++) { const p = path.getPointAtLength(L * (i + .5) / n), c = cols[i % cols.length]; html += '<circle class="bulb ' + cls + '" cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="4.2" fill="' + c + '" style="--bc:' + c + ';--td:' + (-(i * .37) % 2.4).toFixed(2) + 's;--tw:' + (1.8 + (i % 4) * .4) + 's" data-c="' + c + '"/>'; }
    g.innerHTML = html; return $$(".bulb", g);
  }
  function snowCanvas(canvas, opts) {
    const o = Object.assign({ n: 70, speed: 1 }, opts || {}); const ctx = canvas.getContext("2d"); let W, H, flakes = [], run = true, vis = true;
    const size = () => { const r = canvas.getBoundingClientRect(); W = canvas.width = Math.max(1, r.width * devicePixelRatio); H = canvas.height = Math.max(1, r.height * devicePixelRatio); };
    size(); addEventListener("resize", size);
    for (let i = 0; i < o.n; i++) flakes.push({ x: Math.random(), y: Math.random(), r: .8 + Math.random() * 2.4, s: .2 + Math.random() * .6, w: Math.random() * 6 });
    const draw = (t) => { ctx.clearRect(0, 0, W, H); ctx.fillStyle = "rgba(251,246,238,.9)"; flakes.forEach((f) => { if (!reduce()) { f.y += f.s * .0018 * o.speed; f.x += Math.sin(t / 1600 + f.w) * .0004; if (f.y > 1.02) { f.y = -.02; f.x = Math.random(); } } ctx.globalAlpha = .45 + f.r / 6; ctx.beginPath(); ctx.arc(f.x * W, f.y * H, f.r * devicePixelRatio, 0, 7); ctx.fill(); }); if (run && vis) requestAnimationFrame(draw); };
    new IntersectionObserver((en) => { const was = vis; vis = en[0].isIntersecting; if (vis && !was) requestAnimationFrame(draw); }).observe(canvas);
    requestAnimationFrame(draw);
  }
  function initHero() {
    const ht = paintTree("heroTree", { cx: 300, top: 78, bottom: 590, width: 440, rows: 16, seed: 12, lights: 42 });
    lightsInto("heroBulbs", ht.lights, "on");
    $("#heroBows").innerHTML = [[250, 190], [352, 250], [214, 330], [330, 392], [262, 466], [392, 500], [196, 530]].map((p) => '<use href="#i-vbow" class="hbow" x="' + (p[0] - 13) + '" y="' + (p[1] - 10) + '" width="26" height="39" color="#B32231"/>').join("");
    bannerInto("heroBanner", 300, 588, 300, "12 DAYS OF K-BEAUTY");
    snowCanvas($("#heroSnow"), { n: 80 });
    const scene = $("#scene"), layers = { back: $(".l-back", scene), tree: $(".l-tree", scene), snow: $(".snow", scene), gifts: $(".l-gifts", scene), front: $(".l-front", scene) };
    const F = { back: 6, tree: 12, snow: 18, gifts: 24, front: 34 }; let px = 0, py = 0, sy = 0;
    Object.keys(layers).forEach((k) => { if (!layers[k]) delete layers[k]; });
    const apply = () => { if (reduce()) return; Object.keys(layers).forEach((k) => { layers[k].style.transform = "translate3d(" + (px * F[k]).toFixed(1) + "px," + (py * F[k] * .6 + sy * F[k] * .04).toFixed(1) + "px,0)"; }); };
    scene.addEventListener("pointermove", (e) => { const r = scene.getBoundingClientRect(); px = ((e.clientX - r.left) / r.width - .5) * -1; py = ((e.clientY - r.top) / r.height - .5) * -1; apply(); });
    scene.addEventListener("pointerleave", () => { px = 0; py = 0; apply(); });
    $$(".gift", scene).forEach((g) => g.addEventListener("click", () => { g.classList.add("hop"); setTimeout(() => g.classList.remove("hop"), 500); }));
    // scroll: parallax + ribbon unwrap + how path draw
    const wrap = $("#wrap"), cab = $("#cabinet"), path = $(".tagline"); let ticking = false;
    const onScroll = () => {
      ticking = false; sy = Math.min(scrollY, 900); apply();
      if (!wrap.classList.contains("done")) { const t = cab.getBoundingClientRect().top, vh = innerHeight; const p = Math.max(0, Math.min(1, (vh * .92 - t) / (vh * .55))); wrap.style.setProperty("--p", p.toFixed(3)); if (p >= 1) { wrap.classList.add("done"); track("calendar_unwrapped", {}); } }
      if (path) { const r = path.getBoundingClientRect(); const d = Math.max(0, Math.min(1, (innerHeight - r.top) / (innerHeight * .8))); path.style.setProperty("--draw", d.toFixed(3)); }
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  }
  const unwrapNow = () => { const w = $("#wrap"); w.style.setProperty("--p", "1"); w.classList.add("done"); };

  /* =========================================================
     7. DOORS
     ========================================================= */
  const doorsEl = $("#doors");
  const surpriseSVG = (d) => '<span class="surprise"><svg viewBox="0 0 40 40"><use href="#i-gift"/></svg></span>';
  function doorHTML(d) {
    const c = DOORS[d];
    if (c.shape === "double") {
      const half = (s) => '<span class="leaf ' + s + '"><span class="face front"><span class="panel"></span><span class="knob"></span></span><span class="face back"></span></span>';
      return '<button type="button" class="door d12 c-red big" style="grid-area:d12" data-day="12"><span class="shape drop"></span><span class="shape slot">' + surpriseSVG(12) + '</span>' + half("l") + half("r") +
        '<span class="ribbon" aria-hidden="true"><span class="rv"></span><span class="rh"></span><svg class="bow"><use href="#i-bow"/></svg><span class="tag12">DAY 12</span></span><span class="num12" aria-hidden="true">THE GRAND FINALE</span><span class="padlock"><svg><use href="#i-lock"/></svg></span><span class="tags"></span></button>';
    }
    let ex = "";
    if (c.ribbon === "v") ex += '<span class="f-ribbon-v" style="--rib:' + c.rib + ';left:16%"></span><svg class="f-bow" style="--rib:' + c.rib + ';left:1%;top:4%"><use href="#i-bow"/></svg>';
    if (c.ribbon === "h") ex += '<span class="f-ribbon-h" style="--rib:' + c.rib + ';top:12%"></span><svg class="f-bow" style="--rib:' + c.rib + ';right:3%;top:-4%;width:30%"><use href="#i-bow"/></svg>';
    return '<button type="button" class="door d' + d + " s-" + c.shape + " hinge-" + c.hinge + " c-" + c.color + (c.big ? " big" : "") + '" style="grid-area:d' + d + '" data-day="' + d + '"><span class="shape drop"></span><span class="shape slot">' + surpriseSVG(d) + '</span>' +
      '<span class="leaf"><span class="shape face front">' + ex + '<span class="num">' + d + '</span><span class="date"></span><span class="knob"></span><span class="padlock"><svg><use href="#i-lock"/></svg></span><span class="hinges"><i></i><i></i></span></span><span class="shape face back"></span></span><span class="tags"></span></button>';
  }
  function renderDoors() { let h = ""; for (let d = 1; d <= 12; d++) h += doorHTML(d); doorsEl.innerHTML = h; $$(".door", doorsEl).forEach((b) => b.addEventListener("click", onDoor)); syncDoors(); }
  let peek = false, peeked = {}, previewDay = null, busy = false;
  function doorState(d) {
    if (peeked[d] || S.opened[d] === "on" || previewDay === d || S.revealed.indexOf(d) >= 0) return "open";
    if (S.opened[d] === "caught") return "caught";
    const t = today(); if (t && d === t) return "today";
    if (S.day > 12 || d < S.day) return "missed";
    return "locked";
  }
  function syncDoors() {
    $$(".door", doorsEl).forEach((b) => {
      const d = +b.dataset.day, st = doorState(d), p = pick(d);
      b.classList.toggle("is-ajar", st === "open" || st === "caught");
      b.classList.toggle("is-today", st === "today");
      b.classList.toggle("is-missed", st === "missed");
      b.classList.toggle("is-locked", st === "locked");
      if (d === 12) b.classList.toggle("untie", st === "open" || st === "caught");
      let t = "";
      if (st === "today") t = '<span class="today-tag">TODAY</span>';
      if (st === "missed") t = '<span class="state-tag missed"><svg aria-hidden="true"><use href="#i-key"/></svg>MISSED</span>';
      if (st === "caught") t = '<span class="state-tag caught"><svg aria-hidden="true"><use href="#i-key"/></svg></span>';
      $(".tags", b).innerHTML = t;
      const de = $(".date", b); if (de) de.textContent = dl(d).toUpperCase();
      b.setAttribute("aria-label", "Door " + d + ", " + dl(d) + ", " + ({ open: "opened. " + p.brand, caught: "opened with a Catch-up Key. " + p.brand, today: "available today", missed: "missed", locked: "locked" })[st]);
    });
  }
  function animateOpen(d, then) {
    const b = $('.door[data-day="' + d + '"]', doorsEl); busy = true; unwrapNow();
    b.scrollIntoView({ behavior: reduce() ? "auto" : "smooth", block: "center" });
    setTimeout(() => {
      if (d === 12) b.classList.add("untie");
      b.classList.remove("is-today"); b.classList.add("swing", "pop");
      const pp = document.createElement("span"); pp.className = "perk-pop"; pp.textContent = pick(d).perk.title; b.appendChild(pp);
      track("door_open", { day: d, state: "today", joined: S.joined });
      const wait = reduce() ? 400 : (d === 12 ? 2300 : 1700);
      setTimeout(() => { busy = false; pp.remove(); b.classList.remove("pop"); then && then(b); }, wait);
    }, reduce() ? 0 : 320);
  }
  const settle = () => $$(".door.swing", doorsEl).forEach((b) => b.classList.remove("swing"));

  function onDoor(e) {
    if (busy) return;
    const btn = e.currentTarget, d = +btn.dataset.day, st = doorState(d);
    if (peek && !S.opened[d] && st !== "open") { peeked[d] = true; markSim("design_preview_door"); animateOpen(d, () => { syncDoors(); showCard(d, "peek"); }); return; }
    if (st === "locked") { btn.classList.remove("shake"); void btn.offsetWidth; btn.classList.add("shake"); toast("Door " + d + " opens " + dl(d) + ". See you then."); return; }
    if (st === "missed") { track("missed_door_view", { day: d }); if (S.day > 12) toast("The calendar is complete. Your opened doors stay open."); else showCatchup(d); return; }
    if (st === "open" || st === "caught") { track("door_open", { day: d, state: st === "caught" ? "caught_up" : "opened", joined: S.joined }); showCard(d, st === "caught" ? "caught" : (S.joined ? "member" : "preview")); return; }
    openToday(btn);
  }
  function creditDoor(d, how) {
    const before = openedCount(); S.opened[d] = how;
    if (how === "on" && S.claimed.indexOf(d) < 0) { S.claimed.push(d); const p = pick(d).perk; track("perk_claim", { day: d, perk_type: p.type, auto_claimed: true, demo_code: p.code || "" }); }
    track("ticket_earned", { source: how === "caught" ? "catch_up_door" : "door", total: ticketEarned() });
    const after = openedCount();
    MILESTONES.forEach((m) => { if (before < m.doors && after >= m.doors) { pendingMilestone = m; track("milestone_unlock", { doors: m.doors, percent: m.pct, status: R ? "blocked" : "available" }); } });
    if (after === 12) { track("ticket_earned", { source: "completion_bonus", amount: 3, total: ticketEarned() }); track("calendar_complete", { used_catchup: S.keyUsed }); }
    persist(); checkP12();
  }
  function openToday(src) {
    const d = today(); if (!d) return;
    if (doorState(d) !== "today") { showCard(d, S.joined ? "member" : "preview"); return; }
    if (!S.joined && variant === "B") { showJoin({ thenOpen: true }); return; }
    if (S.joined) {
      creditDoor(d, "on");
      animateOpen(d, (b) => { syncAll(); flyTo(b, "orn"); setTimeout(() => flyTo(b, "ticket"), 250); showCard(d, "member"); });
    } else {
      previewDay = d; if (S.revealed.indexOf(d) < 0) S.revealed.push(d); persist(); track("perk_preview", { day: d, perk_type: pick(d).perk.type, joined: false });
      animateOpen(d, () => { syncAll(); showCard(d, "preview"); });
    }
  }

  /* =========================================================
     8. SHEET
     ========================================================= */
  const sheet = $("#sheet"), scrim = $("#scrim"), body = $("#sheetBody"); let lastFocus = null, onClose = null, pendingMilestone = null;
  function openSheet(html, cls, closeCb) {
    if (sheet.hidden) lastFocus = document.activeElement;
    stopGlobe();
    body.innerHTML = html; sheet.className = "sheet " + (cls || ""); sheet.hidden = false; scrim.hidden = false;
    document.body.style.overflow = "hidden"; onClose = closeCb || null; sheet.scrollTop = 0;
    const f = $("[data-autofocus]", sheet) || $(".cta, input, .btn-line", body) || $("#sheetX"); setTimeout(() => f && f.focus({ preventScroll: true }), 40);
  }
  function closeSheet() {
    sheet.hidden = true; scrim.hidden = true; document.body.style.overflow = ""; stopGlobe();
    const cb = onClose; onClose = null; settle();
    if (lastFocus && lastFocus.focus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true }); lastFocus = null;
    if (cb) cb();
    spinning = false; renderWallet(); syncHero(); syncPlay(); renderTree(true); renderSack();
    if (pendingMilestone) { const m = pendingMilestone; pendingMilestone = null; setTimeout(() => showMilestone(m), 260); }
  }
  $("#sheetX").addEventListener("click", closeSheet); scrim.addEventListener("click", closeSheet);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { if (!sheet.hidden) closeSheet(); else if (!$("#drawer").hidden) toggleDrawer(false); else if (!$("#demoPanel").hidden) toggleDemo(false); }
    if (e.key === "Tab" && !sheet.hidden) { const f = $$("button:not([disabled]), input, select, summary, [href]", sheet).filter((x) => x.offsetParent !== null); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
  });

  /* =========================================================
     9. CURATION CARD (gift insert)
     ========================================================= */
  function normalize(img) {
    const fit = () => { const a = img.naturalWidth / img.naturalHeight || 1, A = .5; let h = Math.sqrt(A / a), w = a * h; const k = Math.min(1, .84 / w, .84 / h); w *= k; h *= k; img.style.width = (w * 100).toFixed(1) + "%"; img.style.height = (h * 100).toFixed(1) + "%"; };
    if (img.complete && img.naturalWidth) fit(); else img.addEventListener("load", fit, { once: true });
  }
  function motifs(c) {
    const m = { mask: '<svg viewBox="0 0 24 24"><use href="#i-flake"/></svg>', makeup: '<svg viewBox="0 0 40 40"><use href="#i-burst"/></svg>', skin: '<svg viewBox="0 0 24 24"><path d="M12 2C9 7 6 10.5 6 14a6 6 0 0 0 12 0c0-3.5-3-7-6-12z" fill="currentColor"/></svg>', sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M4.2 19.8L7 17M17 7l2.8-2.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>', hair: '<svg viewBox="0 0 24 24"><path d="M3 18c4-1 3-8 7-8s2 7 6 6 3-8 5-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' }[c] || "";
    return '<span class="motifs" aria-hidden="true"><i class="mo m1">' + m + '</i><i class="mo m2">' + m + '</i><i class="mo m3">' + m + '</i><i class="mo m4">' + m + "</i></span>";
  }
  function showCard(d, mode) {
    const p = pick(d), c = DOORS[d], st = STAGE[c.color] || STAGE.red, perk = p.perk, inList = S.glowList.indexOf(d) >= 0;
    let status;
    if (mode === "caught") status = '<span class="chip dim">Expired</span>';
    else if (mode === "member") status = perk.code ? '<span class="chip ok">Perk claimed</span><span class="perk-code">' + perk.code + "</span>" : '<span class="chip ok">Gift saved</span>';
    else if (mode === "peek") status = '<span class="chip dim">Design preview</span>';
    else status = '<span class="chip claim">Join to claim</span>';
    const demo = mode === "member" && perk.code ? '<p class="perk-demo">DEMO ONLY · NOT REDEEMABLE</p>' : "";
    let primary;
    if (mode === "preview") primary = '<button class="cta block" type="button" data-act="join">Join Glowmas for Free' + chev + "</button>" + (LUCKY_DAYS.indexOf(d) >= 0 && d === today() ? '<p class="note">Joining also unlocks today\'s Lucky Draw.</p>' : "");
    else if (mode === "member" && d === today() && LUCKY_DAYS.indexOf(d) >= 0 && !S.lucky[d] && S.age !== false) primary = '<button class="cta block" type="button" data-act="lucky">Try Your Luck' + chev + "</button>";
    else primary = '<button class="cta block" type="button" data-act="close">Back to My Calendar' + chev + "</button>";
    const html =
      '<article class="insert" style="--c:' + st[0] + ";--lining:" + st[1] + '">' +
        '<div class="insert-art cat-' + CAT[d] + (["red", "burgundy"].indexOf(c.color) >= 0 ? " plaid-red" : "") + '">' + motifs(CAT[d]) + '<div class="unbox"><div class="pframe"><img src="' + IMG + p.img + '" alt="' + p.brand + " " + p.name + '"></div><span class="tissue l"></span><span class="tissue r"></span><span class="box-lid"><svg viewBox="0 0 120 80"><use href="#i-bow"/></svg></span><span class="sparkles"><i style="left:12%;top:20%"></i><i style="left:82%;top:14%;animation-delay:1.2s"></i><i style="left:88%;top:70%;animation-delay:1.35s"></i><i style="left:8%;top:76%;animation-delay:1.5s"></i></span></div><p class="gift-tag"><small>GIFT TAG · DAY ' + d + "</small>" + p.tag + "</p></div>" +
        '<div class="insert-info">' +
          '<p class="day-line">' + (d === today() && mode !== "caught" ? "TODAY'S PICK · " : "") + "DOOR " + d + " · " + dl(d).toUpperCase() + "</p>" +
          '<div><p class="p-brand">' + p.brand + '</p><h2 class="p-name" id="sheetTitle">' + p.name + '</h2><p class="p-price">' + p.price + "</p></div>" +
          '<div class="pick"><span class="picklabel' + (p.label === "O.Y PICKS" ? " oy" : "") + '">' + p.label + '</span><p class="reason">' + p.reason + '</p><p class="source">Source · ' + p.source + "</p></div>" +
          '<div class="perk"><div class="perk-stub">TODAY\'S<br>PERK</div><div class="perk-main"><p class="perk-title">' + perk.title + '</p><p class="perk-cond">' + (mode === "caught" ? "This Perk was for " + dl(d) + " only." : perk.cond) + '</p><div class="perk-status">' + status + "</div>" + demo + "</div></div>" +
          primary +
          '<div class="actions"><button class="save' + (inList ? " on" : "") + '" type="button" data-act="glow" aria-pressed="' + inList + '"><svg aria-hidden="true"><use href="#i-heart"/></svg><span>' + (inList ? "Saved to My Glow List" : "Save to My Glow List") + '</span></button><button class="text-link" type="button" data-act="product">View product (demo)</button></div>' +
        "</div></article>";
    openSheet(html, "");
    normalize($(".pframe img", body));
    track("door_reveal_complete", { day: d, pick_id: "day" + d, mode: mode });
    $('[data-act="glow"]', body).addEventListener("click", (e) => toggleGlow(d, e.currentTarget));
    $('[data-act="product"]', body).addEventListener("click", () => { track("product_link_click", { pick_id: "day" + d }); toast("Product pages are not linked in this prototype."); });
    const j = $('[data-act="join"]', body); if (j) j.addEventListener("click", () => showJoin({}));
    const cl = $('[data-act="close"]', body); if (cl) cl.addEventListener("click", closeSheet);
    const lk = $('[data-act="lucky"]', body); if (lk) lk.addEventListener("click", () => openLucky());
  }
  function toggleGlow(d, btn) {
    if (!S.joined) { toast("Join Glowmas to save your Glow List."); return; }
    const i = S.glowList.indexOf(d), on = i < 0;
    if (on) S.glowList.push(d); else S.glowList.splice(i, 1);
    persist(); track("glow_list_save", { pick_id: "day" + d, saved: on, list_size: S.glowList.length });
    if (btn) {
      btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", String(on)); $("span", btn).textContent = on ? "Saved to My Glow List" : "Save to My Glow List";
      if (on && !reduce()) { btn.classList.remove("burst"); void btn.offsetWidth; btn.classList.add("burst"); for (let k = 0; k < 7; k++) { const s = document.createElement("i"); s.className = "spark"; const a = k / 7 * Math.PI * 2; s.style.setProperty("--dx", (Math.cos(a) * 22).toFixed(0) + "px"); s.style.setProperty("--dy", (Math.sin(a) * 22).toFixed(0) + "px"); btn.appendChild(s); setTimeout(() => s.remove(), 650); } }
    }
    renderWallet(); renderSack();
  }

  /* =========================================================
     10. JOIN, PERK READY, MILESTONE, CATCH-UP, EMAIL
     ========================================================= */
  function showJoin(opts) {
    track("join_start", { from: opts.thenOpen ? "hero_join_first" : "reveal" });
    const html = '<form class="simple" id="joinForm" novalidate><p class="eyebrow">FREE TO JOIN</p><h2 class="h2" id="sheetTitle">Join Glowmas for Free</h2><p>Save your progress, claim today\'s Perk and earn draw tickets.</p>' +
      '<div class="field"><label for="jEmail">Email</label><input id="jEmail" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" data-autofocus><p class="help">Sample data only. Nothing is sent.</p><p class="err" id="jErr" hidden></p></div>' +
      '<label class="check" for="jRules"><input id="jRules" type="checkbox"><span>I agree to the Glowmas participation rules (sample). <button type="button" class="text-link" id="jRulesLink">Read the rules</button></span></label>' +
      '<label class="check" for="jMember"><input id="jMember" type="checkbox"><span>Create my free O.Y MEMBERS account so I can receive points prizes.</span></label>' +
      '<label class="check" for="jEmailOpt"><input id="jEmailOpt" type="checkbox"><span>Email me when tomorrow\'s door opens.</span></label>' +
      '<button class="cta block" type="submit" id="jSubmit" disabled>Join Glowmas for Free' + chev + '</button><p class="help" id="jHint">Add your email and agree to the rules to join.</p>' +
      '<button type="button" class="text-link" id="jSignin">Already a member? Sign in (demo)</button></form>';
    openSheet(html, "narrow");
    const email = $("#jEmail"), rules = $("#jRules"), submit = $("#jSubmit"), hint = $("#jHint"), err = $("#jErr");
    const valid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    const check = () => { const ok = valid(email.value.trim()) && rules.checked; submit.disabled = !ok; hint.textContent = ok ? "" : (!valid(email.value.trim()) ? "Add a valid email to continue." : "Please agree to the participation rules to join."); };
    email.addEventListener("input", () => { err.hidden = true; check(); });
    email.addEventListener("blur", () => { const v = email.value.trim(); if (!v) { err.textContent = "Add your email to save your progress."; err.hidden = false; track("join_error", { field: "email_empty" }); } else if (!valid(v)) { err.textContent = "That email doesn't look right. Try again."; err.hidden = false; track("join_error", { field: "email_invalid" }); } });
    rules.addEventListener("change", check);
    $("#jRulesLink").addEventListener("click", () => { closeSheet(); setTimeout(openRules, 50); });
    $("#jSignin").addEventListener("click", () => completeJoin(opts, { signin: true }));
    $("#joinForm").addEventListener("submit", (e) => { e.preventDefault(); if (submit.disabled) { if (!rules.checked) track("join_error", { field: "rules" }); return; } completeJoin(opts, { member: $("#jMember").checked, emailOpt: $("#jEmailOpt").checked }); });
  }
  function completeJoin(opts, c) {
    track("join_submit", { rules: true, members_account: !!c.member, email_reminder: !!c.emailOpt, signin_demo: !!c.signin });
    S.joined = true; S.participant = S.participant || rid("p_"); S.memberAcct = !!(c.member || c.signin); S.emailOpt = !!c.emailOpt;
    const d = today(); const credit = d && !S.opened[d] && (previewDay === d || S.revealed.indexOf(d) >= 0 || opts.thenOpen);
    if (credit) creditDoor(d, "on");
    track("join_complete", { door_credited: credit ? d : null });
    previewDay = null; persist();
    if (opts.thenOpen && d && credit) { closeSheet(); syncAll(); animateOpen(d, (b) => { flyTo(b, "orn"); showReady(d, true); }); return; }
    syncAll();
    if (credit) showReady(d, false); else { closeSheet(); toast(c.signin ? "Signed in as a sample member." : "You joined Glowmas."); }
  }
  function showReady(d, afterB) {
    const p = pick(d), n = openedCount(), next = MILESTONES.find((m) => m.doors > n);
    const lucky = LUCKY_DAYS.indexOf(d) >= 0 && !S.lucky[d];
    const html = '<div class="simple"><p class="eyebrow">DOOR ' + d + ' SAVED · ORNAMENT ADDED</p><h2 class="h2" id="sheetTitle">Your Perk Is Ready!</h2>' +
      (afterB ? '<p>Here is Door ' + d + ". " + p.brand + " " + p.name + ".</p>" : "") +
      "<p><b>" + p.perk.title + ".</b> " + p.perk.cond + '</p><p class="bigcode">' + (p.perk.code || "Gift saved") + "</p>" + (p.perk.code ? '<p class="c-demo">DEMO ONLY · NOT REDEEMABLE</p>' : "") +
      "<p>+1 Grand Draw ticket. " + n + " of 12 doors open." + (next ? " " + (next.doors - n) + " more to unwrap " + next.pct + "% off." : "") + "</p>" +
      '<button class="cta block" type="button" id="rPrimary">' + (lucky ? "Try Your Luck" : "Back to My Calendar") + chev + "</button>" +
      (afterB ? '<button class="text-link" type="button" id="rSee">See today\'s Pick</button>' : "") +
      '<button class="text-link" type="button" id="rEmail">Preview Tomorrow\'s Email</button></div>';
    openSheet(html, "narrow");
    confetti({ n: 90, ms: 1800 });
    $("#rPrimary").addEventListener("click", () => (lucky ? openLucky() : closeSheet()));
    $("#rEmail").addEventListener("click", showEmail);
    const see = $("#rSee"); if (see) see.addEventListener("click", () => showCard(d, "member"));
  }
  function showMilestone(m) {
    const blocked = !!R && R.code !== m.code;
    const html = '<div class="simple" style="text-align:center"><p class="eyebrow">MILESTONE · ' + m.doors + ' DOORS</p><div class="envelope"><svg class="bw"><use href="#i-bow"/></svg>' + (blocked ? "" : '<span class="coupon-slip">' + m.pct + "% OFF</span>") + "</div>" +
      '<h2 class="h2" id="sheetTitle">' + (m.doors === 4 ? "4 Doors Open. Your First Gift Box Is Unwrapped." : m.doors === 8 ? "8 Doors Open. Your Gift Just Got Bigger." : "All 12 Doors Open. Your Biggest Gift Is Here.") + "</h2>" +
      (blocked ? "<p>You already redeemed a milestone coupon. Your ornaments and tickets keep growing.</p>" : "<p>" + m.pct + '% off orders of $35 or more. Use by Dec 15.</p><p class="bigcode">' + m.code + '</p><p class="c-demo">DEMO ONLY · NO REAL DISCOUNT</p>') +
      '<button class="cta block" type="button" id="mClose">Back to My Calendar' + chev + '</button><button class="text-link" type="button" id="mView">View in My Glowmas</button></div>';
    openSheet(html, "narrow"); confetti({ n: 120 });
    $("#mClose").addEventListener("click", closeSheet);
    $("#mView").addEventListener("click", () => { selBox = m.code; closeSheet(); renderWallet(); $("#myGlowmas").scrollIntoView({ behavior: "smooth" }); });
  }
  function showCatchup(d) {
    if (!S.joined) { toast("This door has closed. Join free to earn a Catch-up Key."); return; }
    let html;
    if (S.keyUsed) html = '<div class="simple"><p class="eyebrow">CATCH-UP KEY</p><h2 class="h2" id="sheetTitle">You Missed Door ' + d + '.</h2><p>No keys left. Each member gets one Catch-up Key.</p><button class="cta block" type="button" data-x>Back to My Calendar' + chev + "</button></div>";
    else if (!S.keyEarned) html = '<div class="simple"><p class="eyebrow">CATCH-UP KEY</p><h2 class="h2" id="sheetTitle">You Missed Door ' + d + ".</h2><p>Complete one mission to earn your Catch-up Key. It opens one missed door. Its Perk stays expired.</p>" +
      '<div style="display:grid;gap:8px"><button class="btn-sm" type="button" data-m="app">Download the Olive Young US app (simulated)</button><button class="btn-sm" type="button" data-m="lab">Complete the Beauty Lab (simulated)</button><button class="btn-sm" type="button" data-m="glow">Save 3 Picks to My Glow List (' + Math.min(S.glowList.length, 3) + " of 3)</button></div><p class=\"note\">Using a key ends Perfect 12 eligibility.</p></div>";
    else html = '<div class="simple"><p class="eyebrow">CATCH-UP KEY</p><h2 class="h2" id="sheetTitle">You Have One Catch-up Key.</h2><p>Use it to open Door ' + d + " and add its ornament and ticket. The Perk for " + dl(d) + ' stays expired. Perfect 12 eligibility ends.</p><button class="cta block" type="button" data-use>Use My Catch-up Key' + chev + "</button></div>";
    openSheet(html, "narrow");
    const x = $("[data-x]", body); if (x) x.addEventListener("click", closeSheet);
    $$("[data-m]", body).forEach((b) => b.addEventListener("click", () => {
      track("catchup_mission_start", { mission: b.dataset.m });
      if (b.dataset.m === "glow" && S.glowList.length < 3) { toast("Save " + (3 - S.glowList.length) + " more Picks from doors you opened."); return; }
      S.keyEarned = true; S.keyMission = b.dataset.m; persist(); track("catchup_mission_complete", { mission: b.dataset.m, simulated: b.dataset.m !== "glow" });
      toast("Mission complete. You earned a Catch-up Key."); renderWallet(); showCatchup(d);
    }));
    const use = $("[data-use]", body);
    if (use) use.addEventListener("click", () => { S.keyUsed = true; creditDoor(d, "caught"); track("catchup_key_used", { day: d }); closeSheet(); animateOpen(d, (b) => { syncAll(); flyTo(b, "orn"); showCard(d, "caught"); }); });
  }
  function showEmail() {
    track("email_preview_open", {});
    const n = Math.min(12, (today() || 12) + 1);
    openSheet('<div class="simple"><p class="eyebrow">PREVIEW ONLY · NO EMAIL IS SENT</p><p class="note">Subject</p><h2 class="h2" id="sheetTitle">Door ' + n + ' Is Open</h2><p>Something new is waiting behind Door ' + n + ". We'll keep it a surprise until you open it.</p><p>You've opened " + plural(openedCount(), "door", "doors") + ". Your tree has " + plural(openedCount(), "ornament", "ornaments") + '.</p><button class="cta" type="button" data-x>Open Door ' + n + chev + '</button><p class="note">You get this email because you asked for door reminders. Unsubscribe anytime. Sample footer.</p></div>', "narrow");
    $("[data-x]", body).addEventListener("click", closeSheet);
  }

  /* =========================================================
     11. AGE CHECK
     ========================================================= */
  function ageGate(then) {
    if (S.age === true) return then();
    if (S.age === false) { toast("Draws are for US residents 18 and older."); return; }
    openSheet('<div class="simple"><p class="eyebrow">ONE QUICK CHECK</p><h2 class="h2" id="sheetTitle">Are You 18 or Older?</h2><p>Draw prizes are for US residents 18 and older. Opening doors stays open to everyone.</p><button class="cta block" type="button" id="aYes">Yes, I\'m 18 or older' + chev + '</button><button class="btn-line" type="button" id="aNo">No</button></div>', "narrow");
    $("#aYes").addEventListener("click", () => { S.age = true; persist(); track("age_gate_response", { eligible: true }); then(); });
    $("#aNo").addEventListener("click", () => { S.age = false; persist(); track("age_gate_response", { eligible: false }); closeSheet(); toast("Thanks. You can keep opening doors. Draws stay off."); syncAll(); });
  }

  /* =========================================================
     12. LUCKY DRAW · SNOW GLOBE
     ========================================================= */
  let globeStop = null, gSnow = null;
  const stopGlobe = () => { if (globeStop) { globeStop(); globeStop = null; } };
  function nextLuckyDay() { return LUCKY_DAYS.find((x) => x > S.day); }
  function decideLucky(day) {
    const o = LUCKY[day], cap = POOLS.caps[day]; const r = Math.random() * 100; let out = "fortune";
    if (r < o.fortune) out = "fortune"; else if (r < o.fortune + o.coupon) out = "coupon"; else if (r < o.fortune + o.coupon + o.bag) out = "bag"; else out = "ticket";
    let capped = false;
    if (out !== "fortune" && cap[out] >= o.caps[out]) { out = "fortune"; capped = true; }
    if (out === "ticket" && S.luckyBonus) out = "fortune";
    if (out !== "fortune") cap[out]++;
    return { o: out, f: (Math.random() * FORTUNES.length) | 0, capped: capped };
  }
  function globeHTML(day) {
    const gifts = ["#B32231", "#DCC7A1", "#24563A", "#B8975A", "#F3EBDB", "#5C1820"].map((c, i) => '<span class="mg" data-i="' + i + '"><svg viewBox="0 0 40 40"><use href="#i-gift" color="' + c + '"/></svg></span>').join("");
    return '<div class="globe" id="globe"><div class="glass"><svg class="inner" viewBox="0 0 300 300"><path d="M20 230 Q150 205 280 230 L280 300 L20 300Z" fill="#FBF6EE"/><g id="globeTree"></g><use href="#i-burst" x="139" y="98" width="22" height="22" color="#D4B677"/></svg>' + gifts + '<canvas id="globeSnow"></canvas></div><div class="globe-base"><span>DAY ' + day + '</span></div><div class="hero-gift" id="heroGift"><span class="hb"></span><span class="hl"></span><svg class="hbw" viewBox="0 0 120 80"><use href="#i-bow"/></svg></div></div>';
  }
  function openLucky() {
    const d = today(), isDay = d && LUCKY_DAYS.indexOf(d) >= 0, played = isDay && S.lucky[d];
    const odds = isDay ? LUCKY[d] : null; const nx = nextLuckyDay();
    let state = "ready";
    if (!S.joined) state = "join"; else if (S.age === false) state = "age"; else if (!isDay) state = "off"; else if (played) state = "played";
    const html = '<div class="draw lucky"><p class="eyebrow">GLOWMAS LUCKY DRAW' + (isDay ? " · DAY " + d : "") + '</p><h2 id="sheetTitle">Give the Globe a Shake.</h2>' +
      '<p class="lede">' + ({ ready: "Four lucky days. One free shake each. See what the snow uncovers.", join: "Join free to play on Dec 1, 3, 6 and 9.", age: "Draws are for US residents 18 and older.", off: nx ? "The next globe opens " + dl(nx) + "." : "The snow has settled for this year. See you at the Grand Draw.", played: "You've shaken today's globe." + (nx ? " Next shake on " + dl(nx) + "." : "") })[state] + "</p>" +
      (odds ? '<ul class="odds"><li>Beauty Fortune</li><li>Health &amp; Wellness coupon</li><li>Gift Bag</li><li>Bonus ticket</li></ul>' : "") +
      globeHTML(d && isDay ? d : (nx || 9)) +
      (state === "ready" ? '<button class="cta" type="button" id="gPlay">Try Your Luck' + chev + "</button>" : state === "join" ? '<button class="cta" type="button" id="gJoin">Join Glowmas for Free' + chev + "</button>" : "") +
      '<p class="draw-status" id="gStatus" aria-live="polite"></p><div id="gResult"></div>' +
      '<button class="text-link" type="button" id="gBack">Back to My Calendar</button><p class="game-foot">Demo game. No real prizes.</p></div>';
    openSheet(html, "full dark");
    paintTree("globeTree", { cx: 150, top: 112, bottom: 226, width: 100, rows: 8, seed: 5, lights: 0 });
    gSnow = globeSnow($("#globeSnow"));
    globeStop = gSnow.stop;
    if (state === "played") showLuckyResult(d, S.lucky[d], false);
    $("#gBack").addEventListener("click", closeSheet);
    const j = $("#gJoin"); if (j) j.addEventListener("click", () => showJoin({}));
    const play = $("#gPlay");
    if (play) { play.addEventListener("click", () => ageGate(() => { if (!sheet.querySelector("#globe")) openLucky(); runLucky(d, gSnow); })); armShake(play); }
  }
  // Phones: a real shake plays the globe. iPhone asks for motion access first, on a tap.
  function armShake(play) {
    const coarse = window.matchMedia && matchMedia("(pointer: coarse)").matches;
    if (!coarse || typeof window.DeviceMotionEvent === "undefined") return;
    const hint = document.createElement("button"); hint.type = "button"; hint.className = "text-link shake-hint"; play.insertAdjacentElement("afterend", hint);
    let last = null, fired = false;
    const onMotion = (e) => {
      const live = $("#gPlay"); if (!live || live.hidden || live.disabled || fired) { window.removeEventListener("devicemotion", onMotion); return; }
      const a = e.accelerationIncludingGravity || e.acceleration; if (!a || a.x == null) return;
      if (last) { const dlt = Math.abs(a.x - last.x) + Math.abs(a.y - last.y) + Math.abs(a.z - last.z); if (dlt > 22) { fired = true; window.removeEventListener("devicemotion", onMotion); hint.remove(); track("lucky_shake", { day: today() }); live.click(); } }
      last = { x: a.x, y: a.y, z: a.z };
    };
    const listen = () => { window.addEventListener("devicemotion", onMotion); hint.textContent = "Now shake your phone!"; hint.disabled = true; };
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      hint.textContent = "Or tap here, then shake your phone";
      hint.addEventListener("click", () => { DeviceMotionEvent.requestPermission().then((r) => { if (r === "granted") listen(); else hint.textContent = "Motion is off. Tap Try Your Luck instead."; }).catch(() => { hint.textContent = "Shaking isn't available here. Tap Try Your Luck."; }); });
    } else { listen(); hint.textContent = "Or shake your phone"; }
  }
  function runLucky(d, snow) {
    if (S.lucky[d]) return;
    const res = decideLucky(d); // decided first
    S.lucky[d] = res; if (res.o === "ticket") S.luckyBonus = true; persist();
    track("instant_draw_play", { day: d, outcome: res.o, cap_reached: res.capped });
    if (res.o === "ticket") track("ticket_earned", { source: "lucky_draw", total: ticketEarned() });
    const btn = $("#gPlay"); if (btn) { btn.disabled = true; btn.hidden = true; } const sh = $(".shake-hint"); if (sh) sh.remove();
    const st = $("#gStatus"); st.textContent = "Shaking…";
    const globe = $("#globe"); const gifts = $$(".mg", globe); const glass = $(".glass", globe);
    if (reduce()) { finishLucky(); return; }
    globe.classList.add("shake", "swirl"); snow.storm(true); globe.scrollIntoView({ behavior: "smooth", block: "center" });
    const W = glass.clientWidth, t0 = performance.now(), base = gifts.map((g, i) => ({ a: i / gifts.length * Math.PI * 2, r: .3 + (i % 3) * .05 }));
    (function orbit(t) {
      const k = Math.min(1, (t - t0) / 2200);
      gifts.forEach((g, i) => { const b = base[i], a = b.a + k * 7 * (i % 2 ? 1 : -1) + Math.sin(t / 200 + i) * .2, r = b.r * (1 - .3 * Math.sin(k * Math.PI)); g.style.transform = "translate(" + ((.5 + Math.cos(a) * r - .075) * W).toFixed(1) + "px," + ((.52 + Math.sin(a) * r * .8 - .075) * W).toFixed(1) + "px) rotate(" + (Math.sin(k * Math.PI) * 200 * (i % 2 ? 1 : -1)).toFixed(0) + "deg)"; });
      if (k < 1) requestAnimationFrame(orbit); else finishLucky();
    })(t0);
    placeGifts(gifts, W, true);
    function finishLucky() {
      snow.storm(false); st.textContent = "Something is coming out of the snow…";
      globe.classList.remove("swirl"); gifts[0].style.opacity = "0"; placeGifts(gifts.slice(1), W, false);
      const hg = $("#heroGift"); hg.classList.add("show");
      setTimeout(() => { hg.classList.add("open"); }, reduce() ? 0 : 1000);
      setTimeout(() => { st.textContent = ""; showLuckyResult(d, res, true); syncAll(); const gr = $("#gResult"); if (gr) gr.scrollIntoView({ behavior: reduce() ? "auto" : "smooth", block: "nearest" }); }, reduce() ? 100 : 1700);
    }
  }
  function showLuckyResult(d, res, fresh) {
    const o = LUCKY_OUT[res.o], nx = nextLuckyDay(); let body2 = "";
    if (res.o === "fortune") body2 = "<p>" + FORTUNES[res.f || 0] + '</p><p class="note">No prize this time.' + (nx ? " Your luck grows on " + dl(nx) + "." : "") + "</p>";
    if (res.o === "coupon") body2 = '<p>On orders of $25 or more.</p><p class="bigcode">' + o.code + '</p><p class="c-demo">DEMO ONLY · NOT REDEEMABLE</p>';
    if (res.o === "bag") body2 = "<p>Comes with your next order of $50 or more.</p>";
    if (res.o === "ticket") body2 = "<p>One bonus ticket per member.</p>";
    const gr = $("#gResult"); setTimeout(() => gr.scrollIntoView({ behavior: reduce() ? "auto" : "smooth", block: "nearest" }), 80);
    gr.innerHTML = '<div class="result"><p class="r-kind">' + o.kind.toUpperCase() + '</p><p class="r-title">' + (res.o === "fortune" ? "A Little Fortune for You" : o.title) + "</p>" + body2 + '<p class="note">Demo game. No real prizes.</p></div>';
    if (fresh) { if (res.o !== "fortune") confetti({ n: 160 }); else confetti({ n: 60, snow: true, colors: ["#FBF6EE"] }); if (res.o === "ticket") setTimeout(() => flyTo($("#gResult"), "ticket"), 400); }
  }
  function placeGifts(gifts, W, skip) { if (skip) return; gifts.forEach((g, i) => { g.style.transform = "translate(" + ((.18 + i * .11) * W).toFixed(1) + "px," + ((.7 + (i % 2) * .05) * W).toFixed(1) + "px)"; }); }
  function globeSnow(canvas) {
    const ctx = canvas.getContext("2d"); let W, H, storm = false, alive = true;
    const size = () => { W = canvas.width = canvas.clientWidth * devicePixelRatio; H = canvas.height = canvas.clientHeight * devicePixelRatio; }; size();
    const P = Array.from({ length: 110 }, () => ({ x: Math.random(), y: .55 + Math.random() * .4, vx: 0, vy: 0, r: .8 + Math.random() * 2 }));
    const gifts = $$(".mg", canvas.parentNode); placeGifts(gifts, canvas.clientWidth, false);
    (function f(t) {
      if (!alive) return; ctx.clearRect(0, 0, W, H); ctx.fillStyle = "#fff";
      P.forEach((p) => {
        if (storm) { const dx = p.x - .5, dy = p.y - .5; p.vx += -dy * .004 + (Math.random() - .5) * .004; p.vy += dx * .004 + (Math.random() - .5) * .004 - .0008; }
        else { p.vy += .00008; p.vx *= .96; p.vx += Math.sin(t / 900 + p.r) * .00004; }
        p.vx *= .97; p.vy *= .97; p.x += p.vx; p.y += p.vy;
        const dx = p.x - .5, dy = p.y - .5, dd = Math.sqrt(dx * dx + dy * dy); if (dd > .47) { p.x = .5 + dx / dd * .47; p.y = .5 + dy / dd * .47; p.vx *= -.3; p.vy *= -.3; }
        if (!storm && p.y > .82) { p.y = .82; p.vy = 0; }
        ctx.globalAlpha = .9; ctx.beginPath(); ctx.arc(p.x * W, p.y * H, p.r * devicePixelRatio, 0, 7); ctx.fill();
      });
      requestAnimationFrame(f);
    })(performance.now());
    return { storm: (v) => { storm = v; if (v) P.forEach((p) => { p.vy -= .01 + Math.random() * .02; p.vx += (Math.random() - .5) * .02; }); }, stop: () => { alive = false; } };
  }

  /* =========================================================
     13. GRAND DRAW · PRIZE WHEEL
     ========================================================= */
  const grandOpen = () => S.day === 12 || S.day === 13;
  function drawFromPool(name) {
    const pool = POOLS[name]; const total = Object.values(pool).reduce((a, b) => a + b, 0); let r = Math.random() * total, key = "glow";
    for (const k of Object.keys(pool)) { r -= pool[k]; if (r < 0) { key = k; break; } }
    if (pool[key] > 0) pool[key]--;
    if (key === "stack" && S.grand.stackWon) key = "glow"; // one per account
    if (key === "stack") S.grand.stackWon = true;
    return key;
  }
  /* Illustrative wheel: 12 equal slices that show the prize types.
     Slice sizes are NOT the odds. The draw logic picks the outcome first,
     then the wheel lands on a slice that matches it. */
  const SLICES = [
    { keys: ["box"], l1: "BEAUTY", l2: "BOX", art: "box", fill: "#B32231", ink: "#F3EBDB", ic: "#F3EBDB" },
    { keys: ["glow"], l1: "GLOW", l2: "FORTUNE", art: "flake", fill: "#F3EBDB", ink: "#24563A", ic: "#24563A" },
    { keys: ["tote"], l1: "GLOWMAS", l2: "TOTE", art: "tote", fill: "#24563A", ink: "#F3EBDB", ic: "#B32231" },
    { keys: ["omc"], l1: "ONE MORE", l2: "CHANCE", art: "burst", fill: "#D4B677", ink: "#5C1820", ic: "#B32231" },
    { keys: ["full"], l1: "FULL", l2: "SIZE", art: "bottle", fill: "#F3EBDB", ink: "#B32231", ic: "#B32231" },
    { keys: ["glow"], l1: "GLOW", l2: "FORTUNE", art: "flake", fill: "#24563A", ink: "#F3EBDB", ic: "#F3EBDB" },
    { keys: ["mini"], l1: "MINI", l2: "BUNDLE", art: "minis", fill: "#B32231", ink: "#F3EBDB", ic: "#F3EBDB" },
    { keys: ["hair", "stack"], l1: "HOLIDAY", l2: "COUPON", art: "coupon", fill: "#F3EBDB", ink: "#24563A", ic: "#B32231" },
    { keys: ["p1", "p5", "p10"], l1: "O.Y", l2: "POINTS", art: "points", fill: "#24563A", ink: "#F3EBDB", ic: "#D4B677" },
    { keys: ["glow"], l1: "GLOW", l2: "FORTUNE", art: "flake", fill: "#F3EBDB", ink: "#24563A", ic: "#24563A" },
    { keys: ["travel"], l1: "TRAVEL", l2: "KIT", art: "pouch", fill: "#B32231", ink: "#F3EBDB", ic: "#D4B677" },
    { keys: ["premium"], l1: "PREMIUM", l2: "BOX", art: "box", fill: "#D4B677", ink: "#5C1820", ic: "#24563A" }
  ];
  function wheelSVG(_g, wid) {
    const C = 200, Rr = 186, n = SLICES.length, d = 360 / n, pt = (a, r) => [C + r * Math.sin(a * Math.PI / 180), C - r * Math.cos(a * Math.PI / 180)];
    let s = '<svg class="wheel" id="' + (wid || "wheel") + '" viewBox="0 0 400 400"><circle cx="200" cy="200" r="198" fill="#6E5528"/><circle cx="200" cy="200" r="192" fill="#B8975A"/>';
    SLICES.forEach((sl, i) => {
      const a0 = i * d, a1 = a0 + d, mid = a0 + d / 2, [x0, y0] = pt(a0, Rr), [x1, y1] = pt(a1, Rr);
      s += '<path d="M200 200 L' + x0.toFixed(2) + " " + y0.toFixed(2) + " A" + Rr + " " + Rr + " 0 0 1 " + x1.toFixed(2) + " " + y1.toFixed(2) + 'Z" fill="' + sl.fill + '" stroke="#6E5528" stroke-width="1"/>';
      const [ix, iy] = pt(mid, 150), [tx, ty] = pt(mid, 112);
      s += '<g transform="translate(' + ix.toFixed(1) + " " + iy.toFixed(1) + ") rotate(" + mid.toFixed(1) + ')">' + prizeArt(sl.art, sl.ic).replace("<svg ", '<svg x="-15" y="-15" width="30" height="30" ') + "</g>";
      s += '<g transform="translate(' + tx.toFixed(1) + " " + ty.toFixed(1) + ") rotate(" + mid.toFixed(1) + ')" font-family="DM Sans, sans-serif" font-weight="700" font-size="9.5" letter-spacing=".2" text-anchor="middle" fill="' + sl.ink + '"><text x="0" y="-3">' + sl.l1 + '</text><text x="0" y="10">' + sl.l2 + "</text></g>";
    });
    s += '<circle cx="200" cy="200" r="186" fill="none" stroke="#6E5528" stroke-width="2"/><circle cx="200" cy="200" r="178" fill="none" stroke="#6E5528" stroke-width=".8" stroke-dasharray="2 4" opacity=".6"/></svg>';
    return s;
  }
  function wheelGeom() { return null; }
  function lightsSVG() { let s = '<svg class="wheel-lights" viewBox="0 0 432 432" aria-hidden="true">'; for (let i = 0; i < 28; i++) { const a = i / 28 * Math.PI * 2; s += '<circle cx="' + (216 + 206 * Math.sin(a)).toFixed(1) + '" cy="' + (216 - 206 * Math.cos(a)).toFixed(1) + '" r="5" style="--cd:' + (-(i % 2) * .6) + 's"/>'; } return s + "</svg>"; }
  const pct = (x) => (x * 100 < 1 ? (x * 100).toFixed(2) : (x * 100).toFixed(1)) + "%";
  let wheelRot = 0, spinning = false, poolNow = "A";
  function openGrand() {
    let state = "ready";
    if (!S.joined) state = "join"; else if (S.age === false) state = "age"; else if (S.day < 12) state = "soon"; else if (S.day > 13) state = "closed"; else if (ticketBalance() < 1) state = "empty";
    poolNow = "A"; const g = wheelGeom("A");
    const lede = { ready: "Every ticket is one spin. Watch the lights and see where your luck lands.", join: "Join free and every door you open adds a ticket.", age: "Draws are for US residents 18 and older.", soon: "The wheel opens Dec 12 at 12:00 AM ET. Every door you open adds a ticket.", closed: "The wheel has stopped for this year. Your results stay in My Glowmas.", empty: "Every ticket is spun. See your Glowmas Wrap-up." }[state];
    const html = '<div class="draw grand"><p class="eyebrow">GRAND DRAW · DEC 12 TO DEC 14</p><h2 id="sheetTitle">Spin the Glowmas Wheel.</h2><p class="lede">' + lede + "</p>" +
      '<div class="wheel-area"><div class="wheel-wrap" id="wheelWrap">' + lightsSVG() + wheelSVG(g) + '<svg class="pointer" viewBox="0 0 40 52"><path d="M20 52 L4 14 A16 16 0 1 1 36 14Z" fill="#B8975A"/><circle cx="20" cy="16" r="7" fill="#B32231"/></svg><div class="hub">SPIN</div></div>' +
      '<div class="wheel-side"><div class="tickets-now"><b id="tBal">' + ticketBalance() + '</b><span>tickets<br>ready</span></div>' +
      '<div class="btns">' + (state === "ready" ? '<button class="cta" type="button" id="wSpin">Spin the Wheel' + chev + '</button><button class="btn-line" type="button" id="wAll">Play All</button>' : state === "join" ? '<button class="cta" type="button" id="wJoin">Join Glowmas for Free' + chev + "</button>" : "") + "</div>" +
      (S.day === 12 && S.joined && !S.opened[12] ? '<p class="draw-status">Open Door 12 first to add your tickets.</p>' : "") +
      '<p class="draw-status" id="wStatus" aria-live="polite"></p><div id="wResult"></div><ul class="results" id="wList"></ul>' +
      '<ul class="legend" id="legend"></ul>' + poolShowcase("o") +
      (S.grand.results.length ? '<button class="text-link" type="button" id="wWrap">See My Glowmas Wrap-up</button>' : "") +
      '<button class="text-link" type="button" id="wBack">Back to My Calendar</button><p class="game-foot">Demo game. No real prizes.</p></div></div></div>';
    openSheet(html, "full dark"); bindPool(body);
    renderLegend("A"); renderResultsList();
    $("#wBack").addEventListener("click", closeSheet);
    const j = $("#wJoin"); if (j) j.addEventListener("click", () => showJoin({}));
    const sp = $("#wSpin"); if (sp) sp.addEventListener("click", () => ageGate(() => { if (!$("#wheel")) openGrand(); spinOnce(); }));
    const al = $("#wAll"); if (al) al.addEventListener("click", () => ageGate(() => { if (!$("#wheel")) openGrand(); confirmAll(); }));
    const wr = $("#wWrap"); if (wr) wr.addEventListener("click", showWrap);
    wheelRot = 0;
  }
  function renderLegend(name) {
    $("#legend").innerHTML = '<li class="scale"><b>' + (name === "B" ? "Bonus spin. " : "") + 'Every spin brings a little holiday surprise.</b> The wheel is an illustration. Slice sizes don\'t show the chance of winning each prize. Odds are in the official rules.</li>';
  }
  function renderResultsList() {
    const ul = $("#wList"); if (!ul) return;
    ul.innerHTML = S.grand.results.slice().reverse().map((r) => '<li class="' + (PRIZE[r.key].cat === "prize" ? "win" : "") + '"><span>' + (r.pool === "B" ? "Bonus · " : "Spin " + r.n + " · ") + PRIZE[r.key].t + "</span><b>" + (r.demo ? "Presenter demo" : "Demo") + "</b></li>").join("");
  }
  function landOn(key, name, done) {
    const d = 360 / SLICES.length, idx = SLICES.map((sl, i) => (sl.keys.indexOf(key) >= 0 ? i : -1)).filter((i) => i >= 0);
    const pickI = idx.length ? idx[(Math.random() * idx.length) | 0] : 1;
    const theta = pickI * d + 5 + Math.random() * (d - 10);
    const wheel = $("#wheel"), wrap = $("#wheelWrap");
    if (!wheel) { done(); return; }
    if (innerWidth < 900) wrap.scrollIntoView({ behavior: reduce() ? "auto" : "smooth", block: "start" });
    const target = wheelRot - (wheelRot % 360) + 360 * (reduce() ? 1 : 6) + (360 - theta);
    wheelRot = target; wrap.classList.add("spinning"); void wheel.getBoundingClientRect();
    wheel.style.setProperty("--dur", reduce() ? ".4s" : "5.2s"); wheel.classList.add("spin"); wheel.style.setProperty("--rot", target + "deg");
    let ticks = 0; const tk = setInterval(() => { wrap.classList.remove("tick"); void wrap.offsetWidth; wrap.classList.add("tick"); if (++ticks > 26) clearInterval(tk); }, 90 + ticks * 6);
    setTimeout(() => { clearInterval(tk); wrap.classList.remove("spinning"); done(); }, reduce() ? 450 : 5300);
  }
  function setWheel(name) { poolNow = name; renderLegend(name); }
  function lockButtons(v) { ["#wSpin", "#wAll"].forEach((s) => { const b = $(s); if (b) b.disabled = v; }); }
  let demoPrizeNext = false, demoCycle = 0;
  const DEMO_PRIZES = ["premium", "tote", "full"];
  function spinOnce() {
    if (spinning || ticketBalance() < 1 || !grandOpen()) return;
    spinning = true; lockButtons(true);
    if (demoPrizeNext) {
      // Presenter demo: a fixed showcase result. It never touches the prize pools.
      demoPrizeNext = false; const dp = $("#demoPrize"); if (dp) dp.checked = false;
      markSim("presenter_demo_prize");
      S.grand.used++; const n0 = S.grand.used, dk = DEMO_PRIZES[demoCycle++ % DEMO_PRIZES.length];
      S.grand.results.push({ n: n0, pool: "A", key: dk, demo: true }); track("grand_draw_play", { play_number: n0, pool: "A", outcome: dk, presenter_demo: true, data_mode: "simulated" });
      persist(); if (ticketBalance() < 1) grandComplete();
      $("#tBal").textContent = ticketBalance(); $("#wStatus").textContent = "Spinning…"; $("#wResult").innerHTML = "";
      landOn(dk, "A", () => { if (!$("#wheel")) { spinning = false; return; } revealGrand(dk, "A", true); endSpin(); });
      return;
    }
    // Decide everything first: the spin, and the bonus spin if it is One More Chance.
    S.grand.used++; const n = S.grand.used; const key = drawFromPool("A");
    S.grand.results.push({ n: n, pool: "A", key: key }); track("grand_draw_play", { play_number: n, pool: "A", outcome: key });
    let k2 = null;
    if (key === "omc") { k2 = drawFromPool("B"); S.grand.results.push({ n: n, pool: "B", key: k2 }); track("grand_draw_play", { play_number: n, pool: "B", outcome: k2 }); }
    persist(); if (ticketBalance() < 1) grandComplete();
    $("#tBal").textContent = ticketBalance(); $("#wStatus").textContent = "Spinning…"; $("#wResult").innerHTML = "";
    if (poolNow !== "A") setWheel("A");
    landOn(key, "A", () => {
      if (!$("#wheel")) { spinning = false; return; }
      revealGrand(key, "A");
      if (!k2) return endSpin();
      $("#wStatus").textContent = "One More Chance! Here comes your bonus spin.";
      setTimeout(() => {
        if (!$("#wheel")) { spinning = false; return; }
        setWheel("B");
        landOn(k2, "B", () => { if (!$("#wheel")) { spinning = false; return; } revealGrand(k2, "B"); endSpin(); });
      }, reduce() ? 300 : 1600);
    });
  }
  function endSpin() { spinning = false; renderResultsList(); renderWallet(); syncHero(); if (ticketBalance() < 1) { lockButtons(true); grandComplete(); } else lockButtons(false); $("#wStatus").textContent = ticketBalance() ? "" : "That was your last ticket."; }
  function revealGrand(key, pool, demo) {
    const P = PRIZE[key]; let kind, title, extra = "";
    if (P.cat === "fortune") { kind = "GLOW FORTUNE"; title = "A Little Holiday Wish"; extra = "<p>" + FORTUNES[(Math.random() * FORTUNES.length) | 0] + "</p>"; }
    else if (P.cat === "omc") { kind = "ONE MORE CHANCE"; title = "Your bonus spin is on us."; }
    else {
      kind = "MYSTERY PRIZE"; title = P.t;
      if (P.kind === "points") extra = '<p class="note">Demo prize. In a real launch it would go to a linked O.Y MEMBERS account.</p>';
      else if (P.kind === "coupon") extra = '<p class="bigcode">' + P.code + '</p><p class="c-demo">DEMO ONLY · NOT REDEEMABLE</p>' + (key === "stack" ? '<p class="note">Stacks with a Milestone Coupon. One per account.</p>' : "");
      else extra = '<p class="note">Demo prize. In a real launch it would ship after Dec 14.</p>';
    }
    const wr0 = $("#wResult"); setTimeout(() => wr0.scrollIntoView({ behavior: reduce() ? "auto" : "smooth", block: "nearest" }), 80);
    if (demo) { kind = "PRESENTER DEMO · SIMULATED RESULT"; extra += '<p class="note">Shown for the presentation. This result did not come from the real draw.</p>'; }
    wr0.innerHTML = '<div class="result' + (demo ? " demo-result" : "") + '"><p class="r-kind">' + (pool === "B" ? "BONUS SPIN · " : "") + kind + '</p><p class="r-title">' + title + "</p>" + extra + "</div>";
    renderResultsList();
    if (P.cat === "prize") confetti({ n: 220, ms: 3000 }); else if (P.cat === "omc") confetti({ n: 80 });
  }
  function confirmAll() {
    const left = ticketBalance(); if (spinning || !left || !grandOpen()) return;
    const btns = $(".wheel-side .btns"); const keep = btns.innerHTML;
    btns.innerHTML = '<div class="confirm" role="group" aria-labelledby="cfT"><p id="cfT"><b>Play all ' + plural(left, "ticket", "tickets") + '?</b> Every ticket spins at once and you\'ll see all your results together. This can\'t be undone.</p><div class="cf-btns"><button class="cta" type="button" id="cfYes">Play All ' + left + chev + '</button><button class="btn-line" type="button" id="cfNo">Spin One at a Time</button></div></div>';
    $("#cfYes").focus();
    $("#cfYes").addEventListener("click", () => { track("play_all_confirm", { tickets: left, confirmed: true }); btns.innerHTML = keep; rebindSpin(); playAll(); });
    $("#cfNo").addEventListener("click", () => { track("play_all_confirm", { tickets: left, confirmed: false }); btns.innerHTML = keep; rebindSpin(); $("#wSpin") && $("#wSpin").focus(); });
  }
  function rebindSpin() {
    const sp = $("#wSpin"); if (sp) sp.addEventListener("click", () => ageGate(() => { if (!$("#wheel")) openGrand(); spinOnce(); }));
    const al = $("#wAll"); if (al) al.addEventListener("click", () => ageGate(() => { if (!$("#wheel")) openGrand(); confirmAll(); }));
  }
  function playAll() {
    if (spinning || !grandOpen()) return; const left = ticketBalance(); if (!left) return;
    spinning = true; lockButtons(true); let wins = 0; const start0 = S.grand.results.length;
    for (let i = 0; i < left; i++) {
      S.grand.used++; const n = S.grand.used; const k = drawFromPool("A"); S.grand.results.push({ n: n, pool: "A", key: k }); track("grand_draw_play", { play_number: n, pool: "A", outcome: k, play_all: true });
      if (PRIZE[k].cat === "prize") wins++;
      if (k === "omc") { const k2 = drawFromPool("B"); S.grand.results.push({ n: n, pool: "B", key: k2 }); track("grand_draw_play", { play_number: n, pool: "B", outcome: k2, play_all: true }); if (PRIZE[k2].cat === "prize") wins++; }
    }
    persist(); $("#tBal").textContent = "0";
    const firstWin = S.grand.results.slice(start0).map((r) => r.key).find((k) => PRIZE[k].cat === "prize");
    landOn(firstWin || "glow", poolNow, () => {
      $("#wResult").innerHTML = '<div class="result"><p class="r-kind">PLAY ALL · ' + plural(left, "TICKET", "TICKETS") + '</p><p class="r-title">' + (wins ? (wins === 1 ? "A Mystery Prize Turned Up!" : wins + " Mystery Prizes Turned Up!") : "A Flurry of Glow Fortunes") + '</p><p class="note">Every result is listed below. Demo prizes only.</p></div>';
      if (wins) confetti({ n: 220 });
      endSpin();
    });
  }
  function grandComplete() {
    if (S.grand.complete) return; S.grand.complete = true; persist();
    const prizes = S.grand.results.filter((r) => PRIZE[r.key].cat === "prize").map((r) => r.key);
    track("grand_draw_complete", { plays: S.grand.used, prizes: prizes });
    const b = $("#wBack"); if (b && !$("#wWrap")) { const w = document.createElement("button"); w.className = "text-link"; w.type = "button"; w.id = "wWrap"; w.textContent = "See My Glowmas Wrap-up"; w.addEventListener("click", showWrap); b.before(w); }
  }
  function showWrap() {
    const res = S.grand.results, prizes = res.filter((r) => PRIZE[r.key].cat === "prize");
    const items = prizes.length ? prizes.map((r) => "<li>" + PRIZE[r.key].t + " · Demo prize</li>").join("") : "<li>A season of Glow Fortunes. Thank you for playing.</li>";
    openSheet('<div class="simple"><p class="eyebrow">YOUR GLOWMAS WRAP-UP</p><h2 class="h2" id="sheetTitle">What a Glowmas!</h2><p>' + plural(openedCount(), "door", "doors") + " open. " + plural(S.grand.used, "ticket", "tickets") + ' spun.</p><ul class="plist">' + items + "</ul><p><b>Perfect 12.</b> " + p12Status()[1] + '</p><p class="note">Leftover prizes go to a Second-Chance Drawing after Dec 14. Demo game. No real prizes.</p><button class="cta block" type="button" data-x>Back to My Calendar' + chev + "</button></div>", "narrow");
    $("[data-x]", body).addEventListener("click", closeSheet);
  }

  /* =========================================================
     14. PERFECT 12
     ========================================================= */
  function p12Status() {
    const t = today() || 13; let missed = false;
    for (let q = 1; q < Math.min(t, 13); q++) if (!S.opened[q] || S.opened[q] === "caught") missed = true;
    if (S.opened[12] === "caught") missed = true;
    if (S.keyUsed || missed) return ["Not eligible", "Every door must open on its own day without a Catch-up Key."];
    if (S.age === false) return ["Not eligible", "Prizes are for US residents 18 and older."];
    if (openedCount() === 12) return S.memberAcct ? ["Entered", "You're entered · Sample results Dec 15."] : ["Almost", "Create a free O.Y MEMBERS account to enter."];
    return ["On track", "Keep opening every door on its own day."];
  }
  function checkP12() { if (!S.p12Entered && p12Status()[0] === "Entered") { S.p12Entered = true; persist(); track("perfect12_entered", {}); } }

  /* =========================================================
     15. MY GLOWMAS TREE
     ========================================================= */
  const SLOTS = { 1: [232, 196], 2: [298, 210], 3: [194, 300], 4: [262, 286], 5: [332, 304], 6: [160, 410], 7: [230, 396], 8: [300, 414], 9: [370, 420], 10: [178, 522], 11: [318, 528], 12: [260, 86] };
  let treeBulbs = [];
  function ornSVG(d, earned) {
    if (!earned) return '<svg viewBox="0 0 40 54"><line x1="20" y1="0" x2="20" y2="12" stroke="rgba(246,230,214,.35)" stroke-dasharray="2 2"/><circle cx="20" cy="30" r="14" fill="none" stroke="rgba(246,230,214,.38)" stroke-width="1.5" stroke-dasharray="3 3"/><text x="20" y="34" text-anchor="middle" font-size="11" font-weight="700" fill="rgba(246,230,214,.5)" font-family="DM Sans, sans-serif">' + d + "</text></svg>";
    if (d === 12) return '<svg viewBox="0 0 60 60"><use href="#i-burst" x="0" y="0" width="60" height="60" color="#D4B677"/><circle cx="30" cy="30" r="11" fill="#B32231"/><text x="30" y="34.5" text-anchor="middle" font-size="12" font-weight="800" fill="#F3EBDB" font-family="Bricolage Grotesque, sans-serif">12</text></svg>';
    if (d === 4 || d === 8) return '<svg viewBox="0 0 40 54"><use href="#i-vbow" x="2" y="0" width="36" height="54" color="#B32231"/><circle cx="20" cy="16" r="8" fill="#D4B677"/><text x="20" y="20" text-anchor="middle" font-size="10" font-weight="800" fill="#5C1820" font-family="Bricolage Grotesque, sans-serif">' + d + "</text></svg>";
    const c = ORN_COLORS[d] || "#B32231", light = ["#D4B677", "#F3EBDB", "#DCC7A1", "#E6D8BA", "#B8975A"].indexOf(c) >= 0, ink = light ? "#5C1820" : "#F3EBDB";
    const pat = { 0: '<path d="M6 26 h28 M6 34 h28" stroke="' + ink + '" stroke-opacity=".5" stroke-width="2.5"/>', 1: '<circle cx="12" cy="24" r="1.6" fill="' + ink + '" opacity=".6"/><circle cx="28" cy="25" r="1.6" fill="' + ink + '" opacity=".6"/><circle cx="14" cy="38" r="1.6" fill="' + ink + '" opacity=".6"/><circle cx="27" cy="39" r="1.6" fill="' + ink + '" opacity=".6"/>', 2: '<path d="M7 31 l5 -4 5 4 5 -4 5 4 5 -4 3 2" fill="none" stroke="' + ink + '" stroke-opacity=".55" stroke-width="2"/>' }[d % 3];
    return '<svg viewBox="0 0 40 54"><line x1="20" y1="0" x2="20" y2="10" stroke="#B8975A" stroke-width="1.5"/><rect x="15" y="9" width="10" height="7" rx="1.5" fill="#B8975A"/><circle cx="20" cy="31" r="15" fill="' + c + '"/><circle cx="20" cy="31" r="12.5" fill="none" stroke="#B8975A" stroke-width=".8" opacity=".8"/>' + pat + '<text x="20" y="35" text-anchor="middle" font-size="11" font-weight="800" fill="' + ink + '" font-family="Bricolage Grotesque, sans-serif">' + d + "</text></svg>";
  }
  function renderTree(animate) {
    const host = $("#ornaments"); const n = openedCount();
    host.innerHTML = Object.keys(SLOTS).map((k) => {
      const d = +k, e = !!S.opened[d], [x, y] = SLOTS[d];
      return '<button type="button" class="orn ' + (e ? "earned" : "empty") + (d === 12 ? " topper" : "") + '" data-d="' + d + '" style="left:' + (x / 520 * 100).toFixed(2) + "%;top:" + (y / 640 * 100).toFixed(2) + "%;--od:" + (-d * .4) + 's" aria-label="' + (e ? "Ornament " + d + ". Open Door " + d + " details" : "Ornament " + d + " not earned yet") + '"' + (e ? "" : ' tabindex="-1"') + ">" + ornSVG(d, e) + "</button>";
    }).join("");
    $$(".orn.earned", host).forEach((b) => b.addEventListener("click", () => { const d = +b.dataset.d; showCard(d, S.opened[d] === "caught" ? "caught" : "member"); }));
    $$(".orn.empty", host).forEach((b) => b.addEventListener("click", () => toast("Open Door " + b.dataset.d + " to earn this ornament.")));
    const lit = Math.round(treeBulbs.length * n / 12);
    treeBulbs.forEach((b, i) => { const on = i < lit; b.classList.toggle("on", on); b.setAttribute("fill", on ? b.dataset.c : "#0E2A1D"); });
    const stage = $("#treeStage"); stage.style.setProperty("--lit", (n / 12).toFixed(2)); stage.style.setProperty("--glow", (n / 12).toFixed(2)); stage.classList.toggle("lit-all", n === 12);
    const nx2 = MILESTONES.find((m) => m.doors > n);
    $("#treeProgress").innerHTML = !S.joined ? "Join free and your first ornament goes up today." : n === 12 ? "<b>Your Tree Is Fully Lit!</b> All 12 doors are open." : "<b>" + n + " of 12 ornaments.</b> " + (nx2 ? plural(nx2.doors - n, "more door", "more doors") + " until your " + nx2.pct + "% gift box." : "");
    $("#treeCap").innerHTML = n === 12 ? 'Perfect 12 is a separate drawing for members who open every door on its own day. <button class="cta card-btn" type="button" id="cardBtn">Make My Christmas Card' + chev + "</button>" : "Tap an ornament to revisit its Pick.";
    const cb = $("#cardBtn"); if (cb) cb.addEventListener("click", makeCard);
    bannerInto("myBanner", 260, 566, 260, n === 12 ? "MERRY GLOWMAS" : "MY GLOWMAS TREE");
    if (animate) arriveOrnaments();
  }
  let treeVisible = false;
  function arriveOrnaments() {
    if (!treeVisible) return;
    const fresh = Object.keys(S.opened).map(Number).filter((d) => S.seenOrn.indexOf(d) < 0);
    if (!fresh.length) return maybeCelebrate();
    fresh.forEach((d, i) => {
      const b = $('.orn[data-d="' + d + '"]'); if (b) { b.style.setProperty("--ad", i * .25 + "s"); b.classList.add("arrive"); }
      if (b && (d === 4 || d === 8 || d === 12)) setTimeout(() => { b.classList.add("burst"); const r = b.getBoundingClientRect(); confetti({ n: 60, ms: 1600, x: r.left + r.width / 2, y: r.top + r.height / 2, colors: ["#D4B677", "#F3EBDB", "#B32231"] }); toast(d === 12 ? "The star is on top. Ornament 12 crowns your tree." : "Milestone ornament " + d + " added. A gift box just opened."); }, 1300 + i * 250);
      S.seenOrn.push(d);
    });
    persist(); setTimeout(maybeCelebrate, 1400 + fresh.length * 250);
  }
  function maybeCelebrate() {
    if (openedCount() === 12 && !S.treeLit) {
      S.treeLit = true; persist(); const st = $("#treeStage"); st.classList.add("celebrate");
      const order = treeBulbs.slice().sort((a, b) => +b.getAttribute("cy") - +a.getAttribute("cy"));
      order.forEach((b, i) => { b.classList.remove("on"); b.setAttribute("fill", "#0E2A1D"); setTimeout(() => { b.setAttribute("fill", b.dataset.c); b.classList.add("on"); }, reduce() ? 0 : 120 + i * 45); });
      const top = $('.orn[data-d="12"]'); setTimeout(() => { if (top) top.classList.add("burst"); $$(".orn.earned svg").forEach((o) => { o.style.animation = "oJig .6s ease"; setTimeout(() => (o.style.animation = ""), 700); }); const r = st.getBoundingClientRect(); confetti({ n: 200, x: r.left + r.width / 2, y: r.top + r.height * .2, colors: ["#D4B677", "#F3EBDB", "#B32231", "#50DF00"] }); }, reduce() ? 0 : 120 + order.length * 45);
      setTimeout(() => {
        st.classList.remove("celebrate");
        openSheet('<div class="simple" style="text-align:center"><p class="eyebrow">MY GLOWMAS · COMPLETE</p><h2 class="h2" id="sheetTitle">Your Tree Is Fully Lit!</h2><p>All 12 doors are open. Merry Glowmas from Olive Young US.</p><button class="cta block" type="button" id="ccMake">Make My Christmas Card' + chev + '</button><button class="text-link" type="button" data-x>Back to My Glowmas</button></div>', "narrow");
        $("#ccMake").addEventListener("click", makeCard); $("[data-x]", body).addEventListener("click", closeSheet);
      }, reduce() ? 300 : 1400 + order.length * 45);
    }
  }


  /* =========================================================
     16. REWARDS WALLET (gift box)
     ========================================================= */
  function milestoneStatus(m) {
    const n = openedCount();
    if (R && R.code === m.code) return "redeemed";
    if (n < m.doors) return "locked";
    if (R) return "na";
    if (S.day > 15) return "expired";
    return MILESTONES.filter((x) => n >= x.doors).pop().code === m.code ? "active" : "replaced";
  }
  function otherCodes() {
    const list = [];
    S.claimed.slice().sort((a, b) => a - b).forEach((d) => { const p = pick(d).perk; if (p.code) list.push([p.code, p.title, "Day " + d + " Perk · expires " + dl(d)]); });
    Object.keys(S.lucky).forEach((d) => { if (S.lucky[d].o === "coupon") list.push(["DEMO-LUCKY-HW3", "$3 off $25 Health & Wellness", "Lucky Draw · Day " + d]); });
    S.grand.results.forEach((r) => { const P = PRIZE[r.key]; if (P.kind === "coupon") list.push([P.code, P.t, "Grand Draw"]); });
    return list;
  }
  let selBox = null;
  function boxHTML(m, size) {
    const st = milestoneStatus(m), open = st !== "locked";
    const seen = (S.seenBoxes || []).indexOf(m.code) >= 0;
    const cls = ["gbox", size, "gb-k" + m.doors, open ? "open" : "locked", (st === "replaced" || st === "na" || st === "expired") ? "dim" : "", st === "redeemed" ? "redeemed" : "", open && !seen ? "unwrap" : "", selBox === m.code ? "sel" : ""].join(" ");
    const label = { locked: "locked", active: "unwrapped, active", replaced: "replaced by a higher code", redeemed: "redeemed", na: "not available", expired: "expired" }[st];
    return '<button type="button" class="' + cls + '" data-box="' + m.code + '" aria-label="' + m.pct + "% gift box for " + m.doors + " doors, " + label + '" aria-pressed="' + (selBox === m.code) + '"><span class="gb-body"><span class="gb-slip">' + m.pct + '%<small>OFF</small></span><span class="gb-base"></span><span class="gb-lid"><svg><use href="#i-bow"/></svg></span></span><span class="gb-tag">' + m.doors + " DOORS</span></button>";
  }
  function boxDetail(m) {
    const s2 = milestoneStatus(m), n = openedCount();
    const chip = { active: '<span class="chip active">Ready to redeem</span>', redeemed: '<span class="chip redeemed">Redeemed</span>', replaced: '<span class="chip dim">Upgraded</span>', na: '<span class="chip dim">Not available</span>', expired: '<span class="chip dim">Expired</span>', locked: '<span class="chip locked">Still wrapped</span>' }[s2];
    const terms = s2 === "redeemed" ? "Redeemed " + dl(R.demoDay) + " · Demo" : s2 === "replaced" ? "Upgraded to " + MILESTONES.filter((x) => n >= x.doors).pop().code + ". Only the highest code stays active." : s2 === "na" ? "You already redeemed a milestone coupon." : s2 === "locked" ? plural(Math.max(0, m.doors - n), "more door", "more doors") + " until this box unwraps." : m.pct + "% off orders of $35 or more · Use by Dec 15";
    const act = s2 === "active" ? '<div class="c-actions"><button class="btn-sm dark" type="button" data-redeem="' + m.code + '">Redeem<svg aria-hidden="true"><use href="#i-chev"/></svg></button><button class="btn-sm" type="button" data-copy="' + m.code + '">Copy</button></div>' : "";
    return '<div class="box-detail" aria-live="polite"><div class="c-top"><span class="c-code">' + (s2 === "locked" ? m.pct + "% gift box" : m.code) + "</span>" + chip + '</div><p class="c-terms">' + terms + "</p>" + (s2 !== "locked" ? '<p class="c-demo">DEMO ONLY · NO REAL DISCOUNT</p>' : "") + act + "</div>";
  }
  function renderWallet() {
    const box = $("#walletBox"); const n = openedCount();
    if (!selBox) { const act = MILESTONES.find((m) => milestoneStatus(m) === "active") || (R ? MILESTONES.find((m) => m.code === R.code) : null) || MILESTONES.find((m) => n < m.doors) || MILESTONES[2]; selBox = act.code; }
    const sel = MILESTONES.find((m) => m.code === selBox);
    const boxes = '<section class="b-boxes"><h3>MILESTONE GIFT BOXES <small>One redemption per member</small></h3><div class="gboxes">' + boxHTML(MILESTONES[0], "s") + boxHTML(MILESTONES[1], "m") + boxHTML(MILESTONES[2], "l") + "</div>" + boxDetail(sel) + "</section>";
    let html = '<div class="board">' + boxes;
    if (!S.joined) {
      html += '<div class="teaser"><p class="big">Your rewards are wrapped and waiting.</p><p>Join Glowmas for free. Your tickets, Perks, coupons and Catch&#8209;up Key collect here as you open doors.</p><div><button class="cta" type="button" id="wtJoin" style="background:var(--ivory);color:var(--ink)">Join Glowmas for Free' + chev + "</button></div></div>";
    } else {
      const bal = ticketBalance(), earned = ticketEarned(); let mini = ""; for (let k = 0; k < 16; k++) mini += '<i class="' + (k < bal ? "on" : k < earned ? "used" : "") + '"></i>';
      html += '<section class="b-tickets"><h3>GRAND DRAW TICKETS <small>' + bal + ' ready to spin</small></h3><div class="tk-stack' + (bal ? "" : " empty") + '"><div class="tk-big" id="tkBig"><span class="t1">ADMIT ONE</span><span class="cnt">' + bal + '<small>READY</small></span><span class="t2">Grand Draw</span></div></div><div class="mini-tix" aria-hidden="true">' + mini + '</div><details class="ledger"><summary>Ticket history</summary><ul class="hist">' + (ticketHistory().map((h) => "<li><span>" + h[0] + "</span><b>" + h[1] + "</b></li>").join("") || "<li><span>No tickets yet</span><b>0</b></li>") + '</ul></details><p class="note" style="margin-top:8px">No purchase ever earns a ticket.</p>' + (grandOpen() && bal ? '<button class="cta" type="button" id="wGrand" style="margin-top:10px">Enter the Grand Draw' + chev + "</button>" : "") + "</section>";
      const kd = Object.keys(S.opened).find((x) => S.opened[x] === "caught");
      const key = S.keyUsed ? ["off", "Used", "Your key opened Door " + kd + "."] : S.keyEarned ? ["", "Ready to use", "Tap a missed door to open it."] : (S.day > 12 ? ["off", "No longer usable", "Keys work through Dec 12."] : ["off", "Not earned yet", "Tap a missed door to see how."]);
      html += '<section class="b-key"><span class="kbig ' + key[0] + '"><svg aria-hidden="true"><use href="#i-key"/></svg></span><div><h3>CATCH&#8209;UP KEY</h3><b>' + key[1] + "</b><p>" + key[2] + "</p></div></section>";
      const oc = otherCodes();
      html += '<section class="b-codes"><h3>MY CODES <small>Demo codes for this prototype. Copy only.</small></h3>' + (oc.length ? '<div class="slips">' + oc.map((c) => '<div class="slipc"><span class="c-code">' + c[0] + '</span><span class="c-terms">' + c[1] + " · " + c[2] + '</span><span class="c-demo">DEMO ONLY · NOT REDEEMABLE</span><button class="btn-sm" type="button" data-copy="' + c[0] + '">Copy</button></div>').join("") + "</div>" : '<p class="empty">Codes from Perks and draws appear here.</p>') + "</section>";
      const tags = S.claimed.slice().sort((a, b) => a - b).map((d, i) => { const pk = pick(d).perk; return '<span class="gtag" style="--dl:' + (-i * .7) + 's"><b>DAY ' + d + "</b>" + pk.title + (pk.code ? "" : " · gift saved") + "</span>"; });
      Object.keys(S.lucky).forEach((d) => { if (S.lucky[d].o === "bag") tags.push('<span class="gtag red"><b>LUCKY DRAW</b>Free Gift Bag + Gift Note</span>'); });
      S.grand.results.forEach((r) => { const P = PRIZE[r.key]; if (P.kind === "ship" || P.kind === "points") tags.push('<span class="gtag red"><b>' + (r.demo ? "PRESENTER DEMO" : "GRAND DRAW · DEMO") + "</b>" + P.t + "</span>"); });
      html += '<section class="b-tags"><h3>GIFTS AND PERKS</h3>' + (tags.length ? '<div class="twine">' + tags.join("") + "</div>" : '<p class="empty">Claimed Perks hang here as gift tags.</p>') + "</section>";
    }
    box.innerHTML = html + "</div>";
    const opened = MILESTONES.filter((m) => milestoneStatus(m) !== "locked").map((m) => m.code);
    S.seenBoxes = Array.from(new Set((S.seenBoxes || []).concat(opened))); save(K.state, S);
    $$("[data-box]", box).forEach((b) => b.addEventListener("click", () => { selBox = b.dataset.box; renderWallet(); const nb = $('[data-box="' + selBox + '"]'); nb && nb.focus({ preventScroll: true }); }));
    $$("[data-redeem]", box).forEach((b) => b.addEventListener("click", () => { lastFocus = b; showRedeem(MILESTONES.find((m) => m.code === b.dataset.redeem)); }));
    $$("[data-copy]", box).forEach((b) => b.addEventListener("click", () => { const code = b.dataset.copy, done = () => toast("Copied " + code + ". Demo code only."); try { navigator.clipboard.writeText(code).then(done, done); } catch (e) { done(); } }));
    $$("[data-g]", box).forEach((b) => b.addEventListener("click", () => showCard(+b.dataset.g, "member")));
    const gb = $("#wGrand", box); if (gb) gb.addEventListener("click", openGrand);
    const wj = $("#wtJoin", box); if (wj) wj.addEventListener("click", () => showJoin({}));
    renderStatus();
  }
  function renderStatus() {
    const t = today();
    const ld = LUCKY_DAYS.map((x) => { const r = S.lucky[x]; const c = r ? "done" : x === t ? "today" : x < S.day ? "miss" : ""; return '<li class="' + c + '" title="' + dl(x) + '">' + x + "</li>"; }).join("");
    const gd = S.day < 12 ? ["Opens Dec 12", "12:00 AM ET. Closes Dec 14 at 12:00 AM ET."] : S.day <= 13 ? ["Open now", plural(ticketBalance(), "ticket", "tickets") + " ready to spin."] : ["Closed", plural(S.grand.results.filter((r) => r.pool === "A").length, "spin", "spins") + " played."];
    const p = p12Status();
    $("#statusStrip").innerHTML =
      '<div class="scard" style="--sc:var(--forest-2)"><h4>LUCKY DRAW</h4><b>Dec 1 · 3 · 6 · 9</b><ol class="dstamps">' + ld + '</ol></div>' +
      '<div class="scard" style="--sc:var(--red)"><h4>GRAND DRAW</h4><b>' + gd[0] + "</b><p>" + gd[1] + "</p></div>" +
      '<div class="scard" style="--sc:var(--gold)"><h4>PERFECT 12</h4><span class="p12seal">P12</span><b>' + p[0] + "</b><p>" + p[1] + "</p></div>";
  }
  function showRedeem(m) {
    track("milestone_redeem_start", { code: m.code });
    openSheet('<div class="simple"><p class="eyebrow">DEMO ONLY · NO REAL DISCOUNT</p><h2 class="h2" id="sheetTitle">Redeem Your ' + m.pct + '% Off Code?</h2><p>This is a demo. No real discount is applied. After you redeem a milestone coupon, you can\'t use another one.</p><button class="cta block" type="button" id="rdYes">Redeem (Demo)' + chev + '</button><button class="text-link" type="button" id="rdNo">Not Yet</button></div>', "narrow");
    $("#rdNo").addEventListener("click", () => { track("milestone_redeem_cancel", { code: m.code }); closeSheet(); });
    $("#rdYes").addEventListener("click", () => {
      R = { code: m.code, pct: m.pct, at: new Date().toISOString(), demoDay: Math.min(S.day, 12), just: true }; save(K.redeem, R);
      track("milestone_redeem_simulated", { code: m.code, percent: m.pct, doors_opened: openedCount() });
      selBox = m.code; closeSheet(); renderWallet(); toast("Demo redemption complete. No real discount was applied.");
    });
  }

  /* =========================================================
     17. HERO CTA BY STAGE
     ========================================================= */
  const heroCta = $("#heroCta");
  function heroStage() {
    const t = today();
    if (!S.joined) { if (S.day > 12) return ["Join Glowmas for Free", "join"]; if (variant === "B") return [S.day === 1 ? "Join and Open Door 1" : "Join and Open Today's Door", "open"]; return ["Open Today's Door", "open"]; }
    if (grandOpen() && S.age !== false && ticketBalance() > 0) return ["Enter the Grand Draw", "grand"];
    if (S.day >= 13) return ["View My Glowmas", "tree"];
    if (t && !S.opened[t]) return ["Unwrap Today's Pick", "open"];
    if (LUCKY_DAYS.indexOf(t) >= 0 && !S.lucky[t] && S.age !== false) return ["Try Your Luck", "lucky"];
    return ["View My Glowmas", "tree"];
  }
  function syncHero() {
    const [label, act] = heroStage(); $(".cta-label", heroCta).textContent = label; heroCta.dataset.act = act;
    heroCta.classList.toggle("pulse", act === "open" || act === "lucky");
    $("#dateChip").textContent = S.day <= 12 ? "Day " + S.day + " of 12 · Dec " + S.day : S.day === 13 ? "Grand Draw open · Dec 13" : "Glowmas has ended · Dec 14";
    const note = $("#heroNote"); const showN = S.day === 12 && S.joined && !S.opened[12]; note.hidden = !showN; note.textContent = "Open Door 12 first to add your tickets.";
    $("#signInLink").hidden = S.joined;
    $("#wallNote").textContent = S.day > 12 ? "The calendar is complete. Your opened doors stay open." : (S.joined && S.opened[S.day]) ? (S.day < 12 ? "Today's door is open. Door " + (S.day + 1) + " opens tomorrow." : "Today's door is open. See you at the Grand Draw.") : "Today's door wears a green tag. Tap to open it.";
    const cn = $("#ctaNote"); cn.hidden = S.day > 12; cn.textContent = S.joined ? "A new door opens every day." : "Free to join. A new door opens every day.";
    const hud = $("#hud"); hud.hidden = !S.joined; $("#hudText").textContent = openedCount() + "/12 ornaments · " + plural(ticketBalance(), "ticket", "tickets");
  }
  heroCta.addEventListener("click", () => {
    const a = heroCta.dataset.act; track("cta_click", { label: $(".cta-label", heroCta).textContent, location: "hero" });
    if (a === "open") { if (!S.joined && variant === "B" && today() && !S.opened[today()]) showJoin({ thenOpen: true }); else openToday(); }
    else if (a === "join") showJoin({});
    else if (a === "tree") $("#myGlowmas").scrollIntoView({ behavior: "smooth" });
    else if (a === "grand") openGrand();
    else if (a === "lucky") openLucky();
  });
  $("#signInLink").addEventListener("click", () => completeJoin({}, { signin: true }));
  $("#hud").addEventListener("click", () => $("#myGlowmas").scrollIntoView({ behavior: "smooth" }));
  /* ---------- Play Your Luck section ---------- */
  let pSnow = null;
  function initPlay() {
    paintTree("pGlobeTree", { cx: 150, top: 112, bottom: 226, width: 100, rows: 8, seed: 5, lights: 0 });
    pSnow = globeSnow($("#pGlobeSnow"));
    $("#pWheelWrap").innerHTML = lightsSVG() + wheelSVG(wheelGeom("A"), "pWheel") + '<svg class="pointer" viewBox="0 0 40 52"><path d="M20 52 L4 14 A16 16 0 1 1 36 14Z" fill="#B8975A"/><circle cx="20" cy="16" r="7" fill="#B32231"/></svg><span class="hub">SPIN</span>';
    const g = $("#pGlobe"); let wt = 0;
    const shake = () => { if (reduce() || g.classList.contains("wiggle")) return; g.classList.add("wiggle"); pSnow.storm(true); clearTimeout(wt); wt = setTimeout(() => { g.classList.remove("wiggle"); pSnow.storm(false); }, 1000); };
    $("#pGlobeStage").addEventListener("pointerenter", shake);
    $("#pGlobeStage").addEventListener("focus", shake);
    const luckyGo = () => { track("cta_click", { label: $("#pGlobeCta").textContent, location: "play_lucky" }); if (!S.joined) showJoin({}); else openLucky(); };
    const grandGo = () => { track("cta_click", { label: $("#pWheelCta").textContent, location: "play_grand" }); if (!S.joined) showJoin({}); else openGrand(); };
    $("#pGlobeStage").addEventListener("click", () => { shake(); setTimeout(luckyGo, reduce() ? 0 : 350); });
    $("#pGlobeCta").addEventListener("click", luckyGo);
    $("#pWheelStage").addEventListener("click", grandGo);
    $("#pWheelCta").addEventListener("click", grandGo);
  }
  function syncPlay() {
    const d = today(), isDay = d && LUCKY_DAYS.indexOf(d) >= 0, nx = nextLuckyDay();
    $("#pDays").innerHTML = LUCKY_DAYS.map((x) => '<li class="' + (S.lucky[x] ? "done" : x === d ? "today" : "") + '"><span>DEC<br>' + x + "</span></li>").join("");
    let lc, ls;
    if (!S.joined) { lc = "Join Glowmas for Free"; ls = "Join free to play on Dec 1, 3, 6 and 9."; }
    else if (S.age === false) { lc = "Open the Snow Globe"; ls = "Draws are for US residents 18 and older."; }
    else if (isDay && !S.lucky[d]) { lc = "Try Your Luck"; ls = "Today is a lucky day."; }
    else if (isDay) { lc = "See Today's Surprise"; ls = "You've shaken today's globe." + (nx ? " Next shake on " + dl(nx) + "." : ""); }
    else { lc = "Open the Snow Globe"; ls = nx ? "The next globe opens " + dl(nx) + "." : "The snow has settled for this year. See you at the Grand Draw."; }
    $("#pGlobeCta").innerHTML = lc + chev; $("#pGlobeState").textContent = ls;
    let wc, ws; const bal = ticketBalance();
    if (!S.joined) { wc = "Join Glowmas for Free"; ws = "Every door you open adds a ticket."; }
    else if (S.day < 12) { wc = "Preview the Prize Wheel"; ws = "The wheel opens Dec 12 at 12:00 AM ET."; }
    else if (S.day > 13) { wc = "See My Results"; ws = "The wheel has stopped for this year."; }
    else if (S.age === false) { wc = "Open the Prize Wheel"; ws = "Draws are for US residents 18 and older."; }
    else if (bal) { wc = "Spin the Wheel"; ws = "Open until Dec 14 at 12:00 AM ET."; }
    else { wc = "See My Results"; ws = "Every ticket is spun."; }
    $("#pWheelCta").innerHTML = wc + chev; $("#pWheelState").textContent = ws;
    const tl = $("#pTickets"); tl.hidden = !S.joined; tl.innerHTML = '<svg viewBox="0 0 24 16" aria-hidden="true"><use href="#i-ticket"/></svg>' + plural(bal, "ticket", "tickets") + " ready";
  }

  /* ---------- Rules letter with full disclosures ---------- */
  let rulesHTML = "";
  function buildRules() {
    const pc = (x, t) => { const v = x / t * 100; return (v < .01 ? v.toFixed(3) : v < 1 ? v.toFixed(2) : v.toFixed(1)) + "%"; };
    const tA = Object.values(POOL_A).reduce((a, b) => a + b, 0), tB = Object.values(POOL_B).reduce((a, b) => a + b, 0);
    const lrows = LUCKY_DAYS.map((d) => "<tr><td>" + dl(d) + "</td><td>" + LUCKY[d].fortune + "%</td><td>" + LUCKY[d].coupon + "%</td><td>" + LUCKY[d].bag + "%</td><td>" + LUCKY[d].ticket + "%</td></tr>").join("");
    const caps = LUCKY_DAYS.map((d) => dl(d) + " " + LUCKY[d].caps.coupon + " coupons, " + LUCKY[d].caps.bag + " gift bags and " + LUCKY[d].caps.ticket + " tickets").join(". ");
    const prow = (pool, tot) => Object.keys(pool).map((k) => "<tr><td>" + PRIZE[k].t + "</td><td>" + pool[k].toLocaleString("en-US") + "</td><td>" + pc(pool[k], tot) + "</td></tr>").join("");
    rulesHTML =
      "<h4>WHO CAN TAKE PART</h4><ul><li>Joining is free. No purchase is ever needed to open doors, earn tickets or play.</li><li>Anyone can open doors. Draw prizes are for US residents 18 and older. Points prizes need a linked O.Y MEMBERS account.</li></ul>" +
      "<h4>DOORS AND PERKS</h4><ul><li>One door opens each day from Dec 1 to Dec 12, 2026. No doors open after Dec 12.</li><li>Each Perk lasts for its own day only and expires at 11:59 PM ET. Gifts can combine with a milestone code. Price discounts never combine with each other.</li><li>One Catch&#8209;up Key per member opens one missed door through Dec 12. Its Perk stays expired.</li></ul>" +
      "<h4>MILESTONE GIFT BOXES</h4><ul><li>5% off at 4 doors, 8% off at 8 doors and 10% off at 12 doors. Orders of $35 or more. Sale items excluded. Use by Dec 15.</li><li>Only the highest earned code stays active. A member can redeem one milestone coupon. Other milestone coupons then become unavailable.</li></ul>" +
      "<h4>TICKETS</h4><ul><li>One ticket per door opened. Three more for opening all 12. One bonus ticket at most from the Lucky Draw. Up to 16 tickets per member.</li><li>No purchase ever earns a ticket. Each Grand Draw spin uses one ticket.</li></ul>" +
      '<h4>GLOWMAS LUCKY DRAW ODDS</h4><p>One play per member on each Lucky Draw day.</p><div class="odds-wrap"><table><tr><th>Day</th><th>Beauty Fortune</th><th>$3 off $25 Health &amp; Wellness</th><th>Gift Bag ($50+ order)</th><th>+1 ticket</th></tr>' + lrows + "</table></div><p>Daily caps. " + caps + ". A capped reward becomes a Beauty Fortune.</p>" +
      '<h4>GRAND DRAW ODDS · MAIN POOL</h4><div class="odds-wrap"><table><tr><th>Outcome</th><th>Slots</th><th>Chance per spin</th></tr>' + prow(POOL_A, tA) + "</table></div>" +
      '<h4>ONE MORE CHANCE POOL</h4><div class="odds-wrap"><table><tr><th>Outcome</th><th>Slots</th><th>Chance per spin</th></tr>' + prow(POOL_B, tB) + "</table></div><p>The prize wheel on the page is an illustration. Its slices are equal in size and do not reflect these odds.</p><p>The Special Stackable Coupon is limited to one per account and stacks only with a Milestone Coupon. Leftover physical prizes go to a Second&#8209;Chance Drawing after Dec 14.</p>" +
      "<h4>PERFECT 12</h4><ul><li>Open every door on its own day without a Catch&#8209;up Key, be 18 or older and hold an O.Y MEMBERS account. A separate drawing awards 30 deluxe sets.</li></ul>" +
      "<h4>ABOUT THIS PROTOTYPE</h4><ul><li>Rutgers Business School class prototype for AI in Marketing. Not an official Olive Young US campaign.</li><li>All codes are demos. Coupon redemption is simulated. No discount, order, email or prize is real. Data stays in your browser.</li><li>Sample rules. Not legally reviewed.</li></ul>";
  }
  function openRules() {
    const env = $("#envelope"); env.classList.add("open");
    setTimeout(() => {
      openSheet('<div class="simple rules-sheet"><p class="eyebrow">PARTICIPATION RULES · SAMPLE</p><h2 class="h2" id="sheetTitle">Glowmas Official Rules (Sample)</h2><div class="full-rules">' + rulesHTML + '</div><button class="cta" type="button" data-x>Fold the Letter' + chev + "</button></div>", "", () => env.classList.remove("open"));
      $("[data-x]", body).addEventListener("click", closeSheet);
    }, reduce() ? 0 : 520);
  }
  $("#openLetter").addEventListener("click", openRules);
  (() => {
    const d = $("#deer"), wrap = d.parentNode; let t = 0;
    const up = (ms) => { clearTimeout(t); wrap.classList.add("up"); d.classList.remove("jingle"); void d.offsetWidth; d.classList.add("jingle"); if (ms) t = setTimeout(() => wrap.classList.remove("up"), ms); };
    d.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") up(0); });
    d.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") { clearTimeout(t); t = setTimeout(() => wrap.classList.remove("up"), 700); } });
    d.addEventListener("click", () => up(1800));
  })();

  /* =========================================================
     18. DEMO MODE
     ========================================================= */
  const demoPanel = $("#demoPanel"), daySel = $("#demoDay");
  function toggleDemo(v) { demoPanel.hidden = !v; $("#demoPill").setAttribute("aria-expanded", String(v)); }
  $("#demoPill").addEventListener("click", () => toggleDemo(demoPanel.hidden));
  daySel.innerHTML = Array.from({ length: 12 }, (_, i) => '<option value="' + (i + 1) + '">Day ' + (i + 1) + " · Dec " + (i + 1) + "</option>").join("") + '<option value="13">Dec 13 · Grand Draw open</option><option value="14">Dec 14 · Grand Draw closed</option>';
  function enterSandbox() {
    if (sandbox) return;
    sandbox = true; save(DEMO_FLAG, true); Object.assign(K, DEMO_K);
    S = JSON.parse(JSON.stringify(S)); save(K.state, S); if (R) save(K.redeem, R); else drop(K.redeem); save(K.pools, POOLS);
    syncSandboxUI();
  }
  function exitSandbox() {
    sandbox = false; drop(DEMO_FLAG); drop(DEMO_K.state); drop(DEMO_K.redeem); drop(DEMO_K.pools); Object.assign(K, USER_K);
    S = load(K.state, null) || preset("first"); if (!S.shopList) S.shopList = []; if (!S.revealed) S.revealed = []; R = load(K.redeem, null); POOLS = load(K.pools, null) || freshPools();
    previewDay = null; peeked = {}; selBox = null; demoPrizeNext = false; const dp = $("#demoPrize"); if (dp) dp.checked = false;
    markSim("demo_exit"); syncSandboxUI(); syncAll(true); toast("Demo data cleared. Your own progress is back.");
  }
  function syncSandboxUI() { const b = $("#demoExit"); if (b) b.hidden = !sandbox; $("#demoPill").textContent = sandbox ? "Demo Mode · Demo Data" : "Demo Mode"; }
  // Going back to an earlier day rewinds to that day's starting state. Day 1 is a fresh first visit.
  function rewindTo(d) {
    if (d === 1) { S = preset("first"); drop(K.redeem); R = null; POOLS = freshPools(); return; }
    const keep = (n) => +n < d;
    Object.keys(S.opened).forEach((n) => { if (!keep(n)) delete S.opened[n]; });
    S.claimed = S.claimed.filter(keep); S.revealed = (S.revealed || []).filter(keep); S.glowList = S.glowList.filter(keep); S.seenOrn = S.seenOrn.filter(keep); S.shopList = (S.shopList || []).filter(keep);
    Object.keys(S.lucky).forEach((n) => { if (!keep(n)) delete S.lucky[n]; });
    S.luckyBonus = Object.keys(S.lucky).some((n) => S.lucky[n].o === "ticket");
    S.keyUsed = Object.keys(S.opened).some((n) => S.opened[n] === "caught");
    if (d <= 12) { S.grand = { used: 0, results: [], stackWon: false, complete: false }; S.p12Entered = false; }
    S.treeLit = false;
    if (R && R.demoDay >= d) { drop(K.redeem); R = null; }
    POOLS = freshPools();
  }
  const setDay = (d) => {
    enterSandbox();
    const back = d < S.day; if (back) rewindTo(d);
    S.day = d; previewDay = null; peeked = {}; selBox = null; persist(); markSim("set_day_" + d + (back ? "_rewind" : "")); syncAll(true);
    if (back) toast(d === 1 ? "Day 1. Fresh start with every door closed." : "Back to Day " + d + ". Doors from Day " + d + " on are closed again.");
  };
  daySel.addEventListener("change", () => setDay(+daySel.value));
  $("#demoNext").addEventListener("click", () => setDay(Math.min(14, S.day + 1)));
  $$("[data-ver]", demoPanel).forEach((b) => b.addEventListener("click", () => { variant = b.dataset.ver; assignSource = "override"; markSim("version_" + variant); syncAll(); toast("Showing Version " + variant + ". Demo override."); }));
  $$("[data-preset]", demoPanel).forEach((b) => b.addEventListener("click", () => {
    const p = b.dataset.preset; markSim("preset_" + p); enterSandbox();
    S = preset(p === "reset" ? "first" : p); drop(K.redeem); R = null; POOLS = freshPools(); previewDay = null; peeked = {}; selBox = null;
    if (p === "complete") S.seenOrn = [];
    persist(); syncAll(true); toast(p === "reset" ? "Demo progress reset." : "Demo state loaded.");
  }));
  $("#demoExit").addEventListener("click", exitSandbox);
  syncSandboxUI();
  $("#demoPrize").addEventListener("change", (e) => { if (e.target.checked) enterSandbox(); demoPrizeNext = e.target.checked; markSim("presenter_demo_prize_" + (demoPrizeNext ? "on" : "off")); toast(demoPrizeNext ? "Next Grand Draw spin shows a simulated demo prize." : "Demo prize off. Spins use the real draw."); });
  $("#peek").addEventListener("change", (e) => { peek = e.target.checked; markSim("design_preview_" + peek); if (!peek) { peeked = {}; syncDoors(); } });
  $("#previewAll").addEventListener("click", () => {
    markSim("preview_all_outcomes");
    const lk = Object.keys(LUCKY_OUT).map((k) => "<div><small>LUCKY DRAW</small><b>" + LUCKY_OUT[k].title + "</b>" + (LUCKY_OUT[k].code || "") + "</div>").join("");
    const gd = Object.keys(PRIZE).map((k) => "<div><small>GRAND DRAW" + (PRIZE[k].cat === "prize" ? " · MYSTERY PRIZE" : "") + "</small><b>" + PRIZE[k].t + "</b>" + (PRIZE[k].code || (PRIZE[k].cat === "prize" ? "Demo result" : "")) + "</div>").join("");
    openSheet('<div class="simple"><p class="eyebrow">PRESENTER · PREVIEW ALL OUTCOMES</p><h2 class="h2" id="sheetTitle">Every Possible Result</h2><p class="note">Demo results. No real prizes are awarded.</p><div class="gallery">' + lk + gd + "</div></div>", "");
  });

  /* =========================================================
     19. EVENTS DRAWER
     ========================================================= */
  let drTab = "list", incSim = false;
  function toggleDrawer(v) { $("#drawer").hidden = !v; $("#eventsPill").setAttribute("aria-expanded", String(v)); if (v) renderDrawer(); }
  $("#eventsPill").addEventListener("click", () => toggleDrawer($("#drawer").hidden));
  $("#drawerX").addEventListener("click", () => toggleDrawer(false));
  $$(".dr-tabs button").forEach((b) => b.addEventListener("click", () => { drTab = b.dataset.tab; $$(".dr-tabs button").forEach((x) => x.setAttribute("aria-selected", String(x === b))); renderDrawer(); }));
  const organic = (src) => EVENTS.filter((e) => e.data_mode === "organic" && (!src || e.assignment_source === src));
  function funnel(list) {
    const vis = (name) => new Set(list.filter((e) => e.event === name).map((e) => e.visitor_id)).size;
    const v = vis("page_view"); const rows = [["Visitors", v], ["Reveal", vis("door_reveal_complete")], ["Join", vis("join_complete")], ["Claim", vis("perk_claim")]];
    return '<table><tr><th>Step</th><th>Unique visitors</th><th></th></tr>' + rows.map((r) => "<tr><td>" + r[0] + "</td><td>" + r[1] + '</td><td style="width:45%"><div class="bar" style="width:' + (v ? Math.round(r[1] / v * 100) : 0) + '%"></div></td></tr>').join("") + "</table><p><b>Join rate</b> " + (v ? (vis("join_complete") / v * 100).toFixed(1) + "%" : "n/a") + " (signups ÷ unique landing visitors)</p>";
  }
  function renderDrawer() {
    const b = $("#drBody"); let h = "";
    if (drTab === "list") {
      const list = (incSim ? EVENTS : organic()).slice(-120).reverse();
      h = '<label class="demo-check"><input type="checkbox" id="incSim"' + (incSim ? " checked" : "") + "> Include simulated</label>" + (list.map((e) => '<div class="ev"><b>' + e.event + '</b><span class="tg' + (e.data_mode === "simulated" ? " sim" : "") + '">' + e.data_mode + '</span><span class="tg">' + e.assignment_source + " · " + e.cta_variant + "</span><pre>" + JSON.stringify(Object.fromEntries(Object.entries(e).filter(([k]) => ["event", "event_id", "timestamp", "session_id", "visitor_id", "data_mode", "assignment_source", "cta_variant", "utm_source"].indexOf(k) < 0))) + "</pre></div>").join("") || '<p class="dr-note">No events yet.</p>');
    } else if (drTab === "funnel") h = '<p class="dr-note">Organic events only. Tester data, not campaign results.</p>' + funnel(organic());
    else if (drTab === "ab") h = '<p class="dr-note">Randomized comparison. Organic sessions with assignment_source = random only.</p><h4>Version A · Value First</h4>' + funnel(organic("random").filter((e) => e.cta_variant === "A")) + "<h4>Version B · Join First</h4>" + funnel(organic("random").filter((e) => e.cta_variant === "B"));
    else if (drTab === "mt") h = '<p class="dr-note"><b>Not a randomized experiment.</b> Moderated class test sessions (?mt=A or ?mt=B) only.</p><h4>Moderated A</h4>' + funnel(organic("moderated_test").filter((e) => e.cta_variant === "A")) + "<h4>Moderated B</h4>" + funnel(organic("moderated_test").filter((e) => e.cta_variant === "B"));
    else {
      const pack = { exported_at: new Date().toISOString(), note: "Glowmas student prototype. Tester data only.", all: EVENTS, random_A: organic("random").filter((e) => e.cta_variant === "A"), random_B: organic("random").filter((e) => e.cta_variant === "B"), moderated_A: organic("moderated_test").filter((e) => e.cta_variant === "A"), moderated_B: organic("moderated_test").filter((e) => e.cta_variant === "B") };
      h = '<p class="dr-note">All events plus four organic buckets. Download works on the hosted site. Copy works everywhere.</p><div class="row"><button type="button" id="exCopy">Copy JSON</button><button type="button" id="exDl">Download JSON</button><button type="button" id="exClear">Clear events</button></div><textarea id="exText" readonly aria-label="Exported events JSON">' + JSON.stringify(pack, null, 1).replace(/</g, "&lt;") + '</textarea><p class="dr-note">Real launch only, never fired here: perk_redeem, order_complete, email_open, email_click, unsubscribe.</p>';
    }
    b.innerHTML = h;
    const is = $("#incSim"); if (is) is.addEventListener("change", (e) => { incSim = e.target.checked; renderDrawer(); });
    const cp = $("#exCopy"); if (cp) cp.addEventListener("click", () => { const t = $("#exText"); const done = () => toast("Events copied as JSON."); try { navigator.clipboard.writeText(t.value).then(done, () => { t.select(); toast("Text selected. Copy it manually."); }); } catch (e) { t.select(); } });
    const dlb = $("#exDl"); if (dlb) dlb.addEventListener("click", () => { const blob = new Blob([$("#exText").value], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "glowmas-events.json"; document.body.appendChild(a); a.click(); a.remove(); });
    const cl = $("#exClear"); if (cl) cl.addEventListener("click", () => { EVENTS = []; save(K.events, EVENTS); $("#evCount").textContent = 0; renderDrawer(); });
  }


  /* =========================================================
     PRIZE POOL SHOWCASE (types only, no counts or odds)
     ========================================================= */
  const SHOWCASE = [
    ["premium", "Premium Holiday Beauty Box", "Our biggest holiday box of K-beauty favorites.", "box", "#B32231"],
    ["box", "Holiday Beauty Box", "A festive box of K-beauty favorites.", "box", "#24563A"],
    ["full", "Full Size Product", "A full size K-beauty favorite.", "bottle", "#5C1820"],
    ["travel", "Travel Kit", "Travel sizes for holidays on the go.", "pouch", "#B8975A"],
    ["mini", "Mini Sample Bundle", "A bundle of minis to try.", "minis", "#B32231"],
    ["tote", "Glowmas Tote", "A tote for all your holiday hauls.", "tote", "#24563A"],
    ["stack", "Special Stackable Coupon", "$5 off $60. Stacks with a Milestone Coupon.", "coupon", "#B32231"],
    ["hair", "Hair Coupon", "$3 off Hair orders of $30 or more.", "coupon", "#24563A"],
    ["points", "O.Y MEMBERS Points", "1, 5 or 10 points for a linked member account.", "points", "#B8975A"],
    ["omc", "One More Chance", "A free bonus spin.", "burst", "#B32231"],
    ["glow", "Glow Fortune", "A little wish for the season ahead.", "flake", "#24563A"]
  ];
  function prizeArt(kind, c) {
    const a = {
      box: '<svg viewBox="0 0 40 40"><use href="#i-gift" color="' + c + '"/></svg>',
      bottle: '<svg viewBox="0 0 40 40"><rect x="14" y="4" width="12" height="7" rx="2" fill="#D4B677"/><rect x="10" y="11" width="20" height="26" rx="5" fill="' + c + '"/><rect x="13" y="19" width="14" height="10" rx="2" fill="#F3EBDB"/></svg>',
      pouch: '<svg viewBox="0 0 40 40"><path d="M6 14h28l-3 22H9z" fill="' + c + '"/><path d="M6 14l14 9 14-9" fill="none" stroke="#F3EBDB" stroke-width="2"/><rect x="17" y="8" width="6" height="6" rx="2" fill="#5C1820"/></svg>',
      minis: '<svg viewBox="0 0 40 40"><rect x="4" y="16" width="9" height="20" rx="3" fill="' + c + '"/><rect x="15.5" y="10" width="9" height="26" rx="3" fill="#24563A"/><rect x="27" y="18" width="9" height="18" rx="3" fill="#B8975A"/></svg>',
      tote: '<svg viewBox="0 0 40 40"><path d="M13 14V10a7 7 0 0 1 14 0v4" fill="none" stroke="#D4B677" stroke-width="2.5"/><path d="M7 14h26l-2 22H9z" fill="' + c + '"/><text x="20" y="29" text-anchor="middle" font-size="6.5" font-weight="700" fill="#F3EBDB" font-family="DM Sans, sans-serif">GLOW</text></svg>',
      coupon: '<svg viewBox="0 0 24 16"><use href="#i-ticket" color="' + c + '"/></svg>',
      points: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="' + c + '"/><circle cx="20" cy="20" r="11" fill="none" stroke="#F3EBDB" stroke-width="1.5"/><text x="20" y="25" text-anchor="middle" font-size="13" font-weight="800" fill="#F3EBDB" font-family="Bricolage Grotesque, sans-serif">P</text></svg>',
      burst: '<svg viewBox="0 0 40 40"><use href="#i-burst" color="' + c + '"/></svg>',
      flake: '<svg viewBox="0 0 24 24"><use href="#i-flake" color="' + c + '"/></svg>'
    };
    return a[kind] || "";
  }
  function poolShowcase(id) {
    return '<div class="pool"><button class="pool-toggle" type="button" aria-expanded="false" aria-controls="pool-' + id + '"><span>What\'s in the Prize Pool?</span><svg aria-hidden="true"><use href="#i-chev"/></svg></button><div class="pool-panel" id="pool-' + id + '" hidden><p class="pool-intro">From beauty boxes to bonus spins, here\'s what could turn up.</p><ul class="shelf">' +
      SHOWCASE.map((x) => '<li class="prize-item"><span class="pi-art">' + prizeArt(x[3], x[4]) + "</span><b>" + x[1] + "</b><span>" + x[2] + "</span></li>").join("") +
      '</ul><p class="pool-foot">Demo prizes only. Full details are in the official rules.</p></div></div>';
  }
  function bindPool(root) {
    $$(".pool-toggle", root).forEach((b) => b.addEventListener("click", () => {
      const panel = document.getElementById(b.getAttribute("aria-controls")), open = panel.hidden;
      panel.hidden = !open; b.setAttribute("aria-expanded", String(open)); b.parentNode.classList.toggle("open", open);
      if (open) track("prize_pool_open", { location: b.getAttribute("aria-controls") });
    }));
  }

  /* =========================================================
     GIFT SACK (Glow List) + SHOPPING LIST
     ========================================================= */
  const priceNum = (d) => parseFloat(pick(d).price.replace(/[^0-9.]/g, "")) || 0;
  function sackSVG(front) {
    if (!front) return '<svg class="sack-back" viewBox="0 0 300 300"><ellipse cx="150" cy="92" rx="92" ry="26" fill="#4A0E15"/></svg>';
    return '<svg class="sack-front" viewBox="0 0 300 300"><path d="M58 96 C40 150 28 214 52 262 C80 292 220 292 248 262 C272 214 260 150 242 96 C210 112 90 112 58 96Z" fill="#B32231"/><path d="M58 96 C46 140 44 180 60 214 C66 170 74 136 92 108Z" fill="#861824" opacity=".75"/><path d="M242 96 C256 150 258 200 236 250 C232 196 222 150 204 110Z" fill="#861824" opacity=".75"/><path d="M120 110 C112 160 116 220 132 272" fill="none" stroke="#861824" stroke-width="5" opacity=".6" stroke-linecap="round"/><path d="M182 110 C192 160 188 220 172 274" fill="none" stroke="#861824" stroke-width="5" opacity=".6" stroke-linecap="round"/><path d="M150 112 C146 170 150 230 152 280" fill="none" stroke="#C9434F" stroke-width="4" opacity=".35" stroke-linecap="round"/><path d="M56 98 C100 120 200 120 244 98 L238 120 C200 138 100 138 62 120Z" fill="#861824"/><path d="M60 108 C104 128 196 128 240 108" fill="none" stroke="#D4B677" stroke-width="6" stroke-linecap="round"/><path d="M176 122 C186 150 178 172 168 190 M190 120 C206 146 204 172 196 190" fill="none" stroke="#D4B677" stroke-width="4" stroke-linecap="round"/><circle cx="168" cy="194" r="6" fill="#D4B677"/><circle cx="196" cy="194" r="6" fill="#D4B677"/></svg>';
  }
  function renderSack() {
    const n = S.glowList.length, art = $("#sackArt");
    const shown = S.glowList.slice(-4);
    art.className = "sack " + (n >= 5 ? "l" : n >= 2 ? "m" : "s");
    art.innerHTML = sackSVG(false) + '<span class="peek">' + shown.map((d, i) => '<img src="' + IMG + pick(d).img + '" alt="" style="--i:' + i + ";--n:" + shown.length + '">').join("") + "</span>" + sackSVG(true) + '<span class="sack-tag">' + (n ? plural(n, "Pick", "Picks") + " inside" : "Empty for now") + "</span>";
    $("#sackLede").textContent = !S.joined ? "Join free, then tap the heart on any Pick to drop it in." : n ? plural(n, "Pick", "Picks") + " inside. Tap the sack to open it." : "Your sack is empty. Tap the heart on any Pick to drop it in.";
    $("#sackShop").textContent = S.shopList.length ? plural(S.shopList.length, "Pick", "Picks") + " on your Shopping List." : "";
  }
  function openSack() {
    track("cta_click", { label: "Open My Gift Sack", location: "gift_sack" });
    if (!S.joined) { showJoin({}); return; }
    const items = S.glowList.slice().sort((a, b) => a - b);
    const list = items.length ? '<ul class="shelf-items">' + items.map((d) => { const p = pick(d), on = S.shopList.indexOf(d) >= 0; return '<li class="gitem"><span class="g-box"><img src="' + IMG + p.img + '" alt="' + p.brand + " " + p.name + '"></span><span class="g-txt"><b>' + p.brand + "</b><span>" + p.name + '</span><span class="g-price">' + p.price + '</span></span><span class="g-act"><button class="btn-sm' + (on ? " dark" : "") + '" type="button" data-shop="' + d + '" aria-pressed="' + on + '">' + (on ? "On My Shopping List" : "Add to Shopping List") + '</button><button class="text-link" type="button" data-rm="' + d + '">Remove</button></span></li>'; }).join("") + "</ul>" : '<p class="empty">Your sack is empty. Tap the heart on any Pick to drop it in.</p>';
    const shop = S.shopList.slice().sort((a, b) => a - b), total = shop.reduce((t, d) => t + priceNum(d), 0);
    const receipt = '<aside class="receipt" aria-labelledby="rcT"><h3 id="rcT">My Shopping List</h3>' + (shop.length ? "<ul>" + shop.map((d) => "<li><span>" + pick(d).brand + " " + pick(d).name + "</span><b>" + pick(d).price + "</b></li>").join("") + '</ul><p class="rc-total"><span>Sample total</span><b>$' + total.toFixed(2) + '</b></p><p class="note">Prices as of Nov 6.</p><button class="btn-sm dark" type="button" id="copyList">Copy My List</button>' : '<p class="note">Add Picks from your sack to plan your shopping.</p>') + '<p class="note">A list to take shopping. There is no cart or checkout here.</p></aside>';
    openSheet('<div class="workshop"><div class="ws-head"><p class="eyebrow">MY GLOW LIST</p><h2 class="h2" id="sheetTitle">Inside Your Gift Sack</h2></div><div class="ws-grid">' + list + receipt + "</div></div>", "full workshop-sheet");
    $$("[data-shop]", body).forEach((b) => b.addEventListener("click", () => { const d = +b.dataset.shop, i = S.shopList.indexOf(d); if (i < 0) { S.shopList.push(d); track("shopping_list_add", { pick_id: "day" + d, list_size: S.shopList.length }); toast("Added to your Shopping List."); } else { S.shopList.splice(i, 1); track("shopping_list_remove", { pick_id: "day" + d, list_size: S.shopList.length }); toast("Removed from your Shopping List."); } persist(); renderSack(); openSack(); }));
    $$("[data-rm]", body).forEach((b) => b.addEventListener("click", () => { const d = +b.dataset.rm; S.glowList.splice(S.glowList.indexOf(d), 1); persist(); track("glow_list_save", { pick_id: "day" + d, saved: false, list_size: S.glowList.length }); toast("Removed from your Gift Sack."); renderSack(); renderWallet(); openSack(); }));
    const cp = $("#copyList"); if (cp) cp.addEventListener("click", () => { const txt = "My Glowmas Shopping List\n" + shop.map((d) => "- " + pick(d).brand + " " + pick(d).name + " · " + pick(d).price).join("\n") + "\nSample total $" + total.toFixed(2) + " (prices as of Nov 6)"; const done = () => toast("Your Shopping List is copied."); try { navigator.clipboard.writeText(txt).then(done, done); } catch (e) { done(); } });
  }

  /* =========================================================
     CHRISTMAS CARD (PNG, no personal data, codes or tickets)
     ========================================================= */
  async function makeCard() {
    if (openedCount() < 12) return;
    track("card_create", {});
    const NS = 'xmlns="http://www.w3.org/2000/svg"';
    const defs = document.querySelector("svg.defs defs").innerHTML;
    const art = $("#myTreeArt").innerHTML;
    const bulbs = treeBulbs.map((b) => '<circle cx="' + b.getAttribute("cx") + '" cy="' + b.getAttribute("cy") + '" r="3.6" fill="#F2C46B"/><circle cx="' + b.getAttribute("cx") + '" cy="' + b.getAttribute("cy") + '" r="7" fill="#F2C46B" opacity=".22"/>').join("");
    bannerInto("myBanner", 260, 566, 260, "MERRY GLOWMAS"); const banner = $("#myBanner").innerHTML.replace(/Bricolage Grotesque, Arial Narrow, sans-serif/g, "Arial, Helvetica, sans-serif");
    let orns = "";
    for (let d = 1; d <= 12; d++) {
      const [x, y] = SLOTS[d]; let svg = ornSVG(d, true);
      if (d === 12) svg = svg.replace("<svg ", '<svg x="' + (x - 46.8) + '" y="' + (y - 46.8) + '" width="93.6" height="93.6" ');
      else svg = svg.replace("<svg ", '<svg x="' + (x - 28.6) + '" y="' + (y - 13.9) + '" width="57.2" height="77.2" ');
      orns += svg;
    }
    const R0 = rng(77); let snow = ""; for (let k = 0; k < 70; k++) snow += '<circle cx="' + (R0() * 520).toFixed(1) + '" cy="' + (R0() * 640).toFixed(1) + '" r="' + (1 + R0() * 2.2).toFixed(1) + '" fill="#F8F4EA" opacity="' + (.35 + R0() * .5).toFixed(2) + '"/>';
    const svgStr = '<svg ' + NS + ' viewBox="0 0 520 640" width="1040" height="1280"><defs>' + defs + '</defs><rect width="520" height="640" fill="#143222"/>' + snow + art + bulbs + banner + orns + "</svg>";
    const img = new Image(); img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);
    try { await img.decode(); } catch (e) { toast("The card couldn't be drawn in this browser."); return; }
    try { await Promise.all([document.fonts.load('800 96px "Bricolage Grotesque"'), document.fonts.load('500 30px "DM Sans"'), document.fonts.load('700 22px "DM Sans"')]); } catch (e) {}
    const c = document.createElement("canvas"); c.width = 1080; c.height = 1350; const x = c.getContext("2d");
    x.fillStyle = "#E4D6B8"; x.fillRect(0, 0, 1080, 1350);
    x.fillStyle = "#F8F4EA"; x.fillRect(36, 36, 1008, 1278);
    x.strokeStyle = "rgba(36,86,58,.35)"; x.lineWidth = 2; x.strokeRect(58, 58, 964, 1234);
    x.textAlign = "center"; x.fillStyle = "#24563A"; x.font = '700 22px "DM Sans", Arial, sans-serif'; x.fillText("OLIVE YOUNG US  ·  GLOWMAS 2026", 540, 112);
    const tw = 700, th = tw * 640 / 520, tx = 540 - tw / 2, ty = 140;
    x.fillStyle = "#B8975A"; x.fillRect(tx - 8, ty - 8, tw + 16, th + 16);
    x.drawImage(img, tx, ty, tw, th);
    x.font = '800 104px "Bricolage Grotesque", Arial, sans-serif';
    const w1 = x.measureText("MERRY ").width, w2 = x.measureText("GLOWMAS").width, sx = 540 - (w1 + w2) / 2;
    x.textAlign = "left"; x.fillStyle = "#193D2A"; x.fillText("MERRY ", sx, ty + th + 118); x.fillStyle = "#B32231"; x.fillText("GLOWMAS", sx + w1, ty + th + 118);
    x.textAlign = "center"; x.fillStyle = "#4E4A40"; x.font = '500 30px "DM Sans", Arial, sans-serif'; x.fillText("12 doors, 12 beauty picks and one very bright tree.", 540, ty + th + 168);
    x.fillStyle = "#50DF00"; x.beginPath(); x.arc(540, ty + th + 202, 5, 0, 7); x.fill();
    x.fillStyle = "#7A7366"; x.font = '500 18px "DM Sans", Arial, sans-serif'; x.fillText("Olive Young US Glowmas 2026 · Class prototype. Not an official Olive Young US campaign.", 540, 1270);
    let url = ""; try { url = c.toDataURL("image/png"); } catch (e) { toast("The card couldn't be saved in this browser."); return; }
    openSheet('<div class="simple card-sheet" style="text-align:center"><p class="eyebrow">YOUR CHRISTMAS CARD</p><h2 class="h2" id="sheetTitle">Merry Glowmas!</h2><img class="card-img" src="' + url + '" alt="Your Glowmas Christmas card with your fully lit tree"><button class="cta block" type="button" id="cardDl">Download My Card' + chev + '</button><p class="note">If the download doesn\'t start, press and hold the card to save it.</p></div>', "narrow");
    $("#cardDl").addEventListener("click", () => {
      track("card_download", {});
      c.toBlob(async (blob) => {
        if (!blob) { toast("The card couldn't be saved in this browser."); return; }
        // Inside claude.ai the page is sandboxed, so the save goes through the viewer's download prompt.
        if (dlCap) {
          try { await dlCap.save({ filename: "my-glowmas-card.png", data: blob }); toast("Your Glowmas card is saved."); }
          catch (e) { if (e && e.code === "declined") toast("Download cancelled."); else if (e && e.code === "rate_limited") toast("A save prompt is already open."); else anchorSave(blob); }
          return;
        }
        anchorSave(blob);
      }, "image/png");
    });
  }
  // Card download. claude.ai pages use the downloads capability. Elsewhere (GitHub Pages) a normal link download.
  let dlCap = null;
  try { if (window.claude && typeof window.claude.use === "function") window.claude.use("downloads").then((d) => { dlCap = d; }).catch(() => {}); } catch (e) {}
  function anchorSave(blob) { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "my-glowmas-card.png"; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); }
  /* =========================================================
     20. BOOT
     ========================================================= */
  function syncAll(rebuild) {
    if (rebuild) renderDoors(); else syncDoors();
    renderTree(true); renderWallet(); syncHero(); syncPlay(); renderSack();
    daySel.value = String(S.day);
    $$("[data-ver]", demoPanel).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ver === variant)));
  }
  buildClips(); initHero(); initPlay(); buildRules();
  $("#poolWrap").innerHTML = poolShowcase("band"); bindPool($("#poolWrap"));
  function fitHeadline() {
    const h = $(".glowmas"), w = $(".headline"); h.style.fontSize = "";
    const max = w.clientWidth; if (h.scrollWidth > max) { const cur = parseFloat(getComputedStyle(h).fontSize); h.style.fontSize = Math.floor(cur * max / h.scrollWidth * .98) + "px"; }
    $(".deer-peek").style.fontSize = getComputedStyle(h).fontSize;
  }
  fitHeadline(); addEventListener("resize", fitHeadline); try { document.fonts.ready.then(fitHeadline); } catch (e) {}
  $("#sackOpen").addEventListener("click", openSack); $("#sackStage").addEventListener("click", openSack);
  const mt = paintTree("myTreeArt", { cx: 260, top: 74, bottom: 560, width: 410, rows: 15, seed: 31, lights: 40 });
  treeBulbs = lightsInto("treeBulbs", mt.lights, "");
  bannerInto("myBanner", 260, 566, 260, "MY GLOWMAS TREE");
  snowSparkleTree();
  function snowSparkleTree() { /* gentle snow over the tree panel */ snowCanvas($("#treeSparkle"), { n: 34, speed: .7 }); }
  new IntersectionObserver((en) => { treeVisible = en[0].isIntersecting; if (treeVisible) arriveOrnaments(); }, { threshold: .35 }).observe($("#treeStage"));
  renderDoors(); syncAll();
  $("#evCount").textContent = EVENTS.length;
  track("page_view", { returning: !firstEver, joined: S.joined });
  if (firstEver) setTimeout(() => toast("Tip for reviewers. Demo Mode switches days and loads member states."), 1600);
})();
