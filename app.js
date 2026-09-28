(async () => {
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const ld = k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const sv = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return 1; } catch { return 0; } };
let P = {}, L = {};
try { [P, L] = await Promise.all(["phones.json", "lang.json"].map(u => fetch(u).then(r => r.json()))); } catch {}

const BGS = ["default", "neon", "space", "sunset", "grid"];
const o = Object.assign({ lang: "", light: 0, bg: "default", stretch: 1, tilt: 1, ois: 1, lite: 0, glow: 1, fx: "none", cur: "" }, ld("jx4"));
o.stretch = Math.min(2, Math.max(0.5, Number(o.stretch) || 1));
if (!BGS.includes(o.bg)) o.bg = "default";
if (!["none", "snow", "text", "phones"].includes(o.fx)) o.fx = "none";
const save = () => sv("jx4", o);

const BI = /^phones\/[\w .+\-]+\.png$/, DI = /^data:image\/png;base64,[A-Za-z0-9+/]+=*$/;
const safe = s => typeof s === "string" && (BI.test(s) || (s.length < 6e5 && DI.test(s)));
const clean = (v, n) => String(v ?? "").replace(/[\u0000-\u001f\u007f<>"'`&\\]/g, "").replace(/\s+/g, " ").trim().slice(0, n);
const pc = (v, d) => { v = parseFloat(v); return (isFinite(v) ? Math.min(100, Math.max(0, v)) : d) + "%"; };
const nid = () => "custom_" + Array.from(crypto.getRandomValues(new Uint8Array(6)), b => (b % 36).toString(36)).join("");
const nm = k => clean(P[k].name || k.replace(/([a-z])([A-Z0-9])/g, "$1 $2").replace(/([0-9])([A-Z])/g, "$1 $2"), 40);
const say = k => (L[o.lang] || L.en || {})[k] || "";
const toast = m => { const e = $("#toast"); e.textContent = m; e.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove("show"), 3000); };

const C = {}, st = ld("jxCustomPhones");
if (st && typeof st === "object") Object.keys(st).slice(0, 10).forEach(k => {
  const p = st[k];
  if (!p || !safe(p.image)) return;
  const id = /^custom_[a-z0-9]{6}$/.test(k) ? k : nid(), pt = p.stabilizationPoint || {}, sp = p.specs || {};
  C[id] = P[id] = { name: clean(p.name || k, 32) || "Phone", image: p.image, stabilizationPoint: { x: pc(pt.x, 37.5), y: pc(pt.y, 17.5) }, specs: { processor: clean(sp.processor, 32) || "Custom", camera: clean(sp.camera, 32) || "Custom" } };
});

const phone = $("#phone"), stage = $("#stage");
let cur, rot = 0, tgt = 0, spin = 0, drag = 0, mx = 0, my = 0, propOn = 0, la = 0, hotT;

function setLang(c) {
  if (!L[c]) c = L.en ? "en" : Object.keys(L)[0];
  if (!c) return;
  o.lang = c; document.documentElement.lang = c; const t = L[c];
  $$("[data-i]").forEach(e => { if (t[e.dataset.i]) e.textContent = t[e.dataset.i]; });
  $$("[data-p]").forEach(e => { e.placeholder = t[e.dataset.p] || ""; });
  if (t.h1) document.title = t.h1;
  $("#lang").value = c; save();
}

function sel(k) {
  if (!P[k] || !safe(P[k].image)) return;
  cur = o.cur = k;
  const d = P[k], pt = d.stabilizationPoint || {};
  phone.src = d.image;
  phone.style.transformOrigin = o.ois ? `${pc(pt.x, 50)} ${pc(pt.y, 20)}` : "50% 50%";
  $("#cpu").textContent = clean(d.specs && d.specs.processor, 32);
  $("#cam").textContent = "📷 " + clean(d.specs && d.specs.camera, 32);
  save();
}

const closeAll = () => $$(".sheet").forEach(s => { s.hidden = true; });

function renderList() {
  const q = $("#q").value.toLowerCase(), pl = $("#pl");
  pl.replaceChildren(...Object.keys(P).filter(k => nm(k).toLowerCase().includes(q))
    .sort((a, b) => !!C[b] - !!C[a] || nm(a).localeCompare(nm(b)))
    .map(k => {
      const row = document.createElement("div"), b = document.createElement("button");
      b.textContent = (C[k] ? "★ " : "") + nm(k);
      if (k === cur) b.className = "on";
      b.onclick = () => { sel(k); closeAll(); };
      row.append(b);
      if (C[k]) {
        const x = document.createElement("button");
        x.className = "x"; x.textContent = "✕"; x.setAttribute("aria-label", "Delete");
        x.onclick = () => { delete C[k]; delete P[k]; sv("jxCustomPhones", C); if (cur === k) sel(Object.keys(P)[0]); renderList(); };
        row.append(x);
      }
      return row;
    }));
}

/* FX: own canvas, no third-party scripts */
const cv = $("#fx"), cx = cv.getContext("2d"); let ps = [], ims = [];
const fit = () => { cv.width = innerWidth; cv.height = innerHeight; };
addEventListener("resize", fit); fit();
function setFx(m) {
  o.fx = m; ps = []; ims = [];
  $$("[data-fx]").forEach(b => b.classList.toggle("on", b.dataset.fx === m));
  save();
  if (m === "none" || o.lite) return;
  if (m === "phones") ims = Object.keys(P).filter(k => BI.test(P[k].image)).sort(() => Math.random() - .5).slice(0, 8).map(k => { const i = new Image(); i.src = P[k].image; return i; });
  for (let i = 0; i < (m === "snow" ? 90 : 22); i++) ps.push({ x: Math.random() * cv.width, y: Math.random() * cv.height, v: 1 + Math.random() * 2.5, s: m === "snow" ? 1 + Math.random() * 3 : 12 + Math.random() * 16, a: Math.random() * 6.28, k: i });
}
function draw() {
  cx.clearRect(0, 0, cv.width, cv.height);
  if (!ps.length) return;
  cx.fillStyle = o.light ? "#000" : "#fff";
  for (const p of ps) {
    p.y += p.v; p.a += .02;
    if (p.y > cv.height + 40) { p.y = -40; p.x = Math.random() * cv.width; }
    cx.save(); cx.translate(p.x, p.y); cx.globalAlpha = .75;
    if (o.fx === "snow") { cx.beginPath(); cx.arc(0, 0, p.s, 0, 6.3); cx.fill(); }
    else {
      cx.rotate(Math.sin(p.a) * .5);
      if (o.fx === "text") { cx.font = `700 ${p.s * 2}px sans-serif`; cx.fillText("JX", 0, 0); }
      else { const im = ims[p.k % ims.length]; if (im && im.complete && im.naturalWidth) cx.drawImage(im, -p.s, -p.s * 2, p.s * 2, p.s * 4); }
    }
    cx.restore();
  }
}

function apply() {
  document.body.classList.toggle("light", !!o.light);
  document.body.dataset.bg = o.bg;
  if (cur) sel(cur);
  setFx(o.fx);
}

/* render loop */
let fr = 0, t0 = performance.now();
(function loop(now) {
  if (!propOn) {
    if (spin && !drag) tgt += 2;
    rot += (tgt - rot) * .15;
    let t = `perspective(1000px) rotateZ(${rot}deg) scaleX(${o.stretch})`;
    if (o.tilt && !o.lite) t += ` rotateX(${my * 12}deg) rotateY(${-mx * 12}deg)`;
    phone.style.transform = t;
  }
  draw(); fr++;
  if (now - t0 >= 1000) { $("#fps").textContent = fr; fr = 0; t0 = now; }
  requestAnimationFrame(loop);
})(t0);

/* drag: angle around stage centre */
const ang = e => { const r = stage.getBoundingClientRect(); return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI; };
stage.addEventListener("pointerdown", e => {
  if (propOn) return;
  drag = 1; spin = 0; $("#spin").classList.remove("on");
  la = ang(e); stage.setPointerCapture(e.pointerId); stage.classList.add("g"); $("#hint").classList.add("off");
});
stage.addEventListener("pointermove", e => {
  mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5;
  if (!drag) return;
  const a = ang(e); let d = a - la;
  if (d > 180) d -= 360; if (d < -180) d += 360;
  la = a; tgt += d;
  if (o.glow && !o.lite && Math.abs(d) > 3) { stage.classList.add("hot"); clearTimeout(hotT); hotT = setTimeout(() => stage.classList.remove("hot"), 200); }
});
const up = () => { drag = 0; stage.classList.remove("g"); };
stage.addEventListener("pointerup", up); stage.addEventListener("pointercancel", up);

$("#spin").onclick = e => { spin = !spin; e.currentTarget.classList.toggle("on", spin); };

$("#go").onclick = () => {
  if (propOn) return;
  closeAll(); spin = 0; $("#spin").classList.remove("on"); propOn = 1;
  const s = Math.min(60, Math.max(1, +$("#pt").value || 5)), w = +$("#pw").value || 25;
  phone.style.animationDuration = Math.max(.01, 1 - w * .019) + "s"; phone.classList.add("prop");
  setTimeout(() => { propOn = 0; phone.classList.remove("prop"); phone.style.animationDuration = ""; rot = tgt = 0; }, s * 1000);
};

/* sheets */
$$("[data-open]").forEach(b => b.onclick = () => { closeAll(); $("#" + b.dataset.open).hidden = false; if (b.dataset.open === "s-phone") renderList(); });
$$(".sheet").forEach(s => s.addEventListener("click", e => { if (e.target === s || e.target.closest("[data-close]")) closeAll(); }));
addEventListener("keydown", e => { if (e.key === "Escape") { closeAll(); document.body.classList.remove("photo"); } });
$("#q").oninput = renderList;

/* settings */
["light", "tilt", "ois", "lite", "glow"].forEach(k => { const e = $("#" + k); e.checked = !!o[k]; e.onchange = () => { o[k] = e.checked ? 1 : 0; apply(); save(); }; });
$("#bg").value = o.bg; $("#bg").onchange = e => { o.bg = BGS.includes(e.target.value) ? e.target.value : "default"; apply(); save(); };
$("#stretch").value = o.stretch; $("#stretch").oninput = e => { o.stretch = Math.min(2, Math.max(0.5, +e.target.value || 1)); save(); };
$$("[data-fx]").forEach(b => b.onclick = () => setFx(b.dataset.fx));
$("#lang").onchange = e => setLang(e.target.value);

/* music */
const au = $("#au");
$$("[data-t]").forEach(b => b.onclick = () => {
  const t = b.dataset.t;
  if (!/^[\w\-]+\.mp3$/.test(t)) return;
  if (au.dataset.t === t && !au.paused) { au.pause(); b.classList.remove("on"); return; }
  au.dataset.t = t; au.src = t; au.play().catch(() => {});
  $$("[data-t]").forEach(x => x.classList.toggle("on", x === b));
});

/* photo mode */
$("#mk").onclick = () => {
  closeAll();
  $("#cn").textContent = clean($("#nick").value, 24) || "USER";
  $("#cp").textContent = nm(cur);
  $("#cc").textContent = clean(P[cur].specs && P[cur].specs.processor, 32) + " · " + clean(P[cur].specs && P[cur].specs.camera, 32);
  document.body.classList.add("photo");
};
$("#card").onclick = () => document.body.classList.remove("photo");

/* add custom phone */
async function proc(f) {
  if (f.size > 8e6 || !/\.(png|jpe?g|jfif|webp|gif|bmp|avif)$/i.test(f.name)) throw 0;
  const b = new Uint8Array(await f.slice(0, 16).arrayBuffer()), s = (i, n) => String.fromCharCode(...b.slice(i, i + n));
  if (!((b[0] === 0x89 && s(1, 3) === "PNG") || (b[0] === 255 && b[1] === 216) || s(0, 4) === "GIF8" || (s(0, 4) === "RIFF" && s(8, 4) === "WEBP") || s(0, 2) === "BM" || s(4, 8) === "ftypavif")) throw 0;
  const u = URL.createObjectURL(f);
  try {
    const i = await new Promise((r, j) => { const m = new Image(); m.onload = () => r(m); m.onerror = j; m.src = u; });
    if (!i.width || !i.height || i.width * i.height > 4e7) throw 0;
    for (let side = 640, n = 0; n < 6; n++, side *= .8) {
      const k = Math.min(1, side / Math.max(i.width, i.height)), c = document.createElement("canvas");
      c.width = Math.max(1, Math.round(i.width * k)); c.height = Math.max(1, Math.round(i.height * k));
      c.getContext("2d").drawImage(i, 0, 0, c.width, c.height);
      const d = c.toDataURL("image/png");
      if (d.length <= 38e4) return d;
    }
    throw 0;
  } finally { URL.revokeObjectURL(u); }
}
let pImg = null, pPt = null;
const resetAdd = () => { pImg = pPt = null; $("#pk").hidden = true; $("#mrk").hidden = true; $("#pv").removeAttribute("src"); $("#file").value = ""; ["nm", "c1", "c2"].forEach(i => { $("#" + i).value = ""; }); };
$("#file").onchange = async e => {
  const f = e.target.files[0]; pImg = pPt = null; $("#pk").hidden = true; $("#mrk").hidden = true;
  if (!f) return;
  try { pImg = await proc(f); $("#pv").src = pImg; $("#pk").hidden = false; toast(say("pick")); }
  catch { toast(say("err")); e.target.value = ""; }
};
$("#pk").onclick = e => {
  const r = $("#pv").getBoundingClientRect();
  if (!pImg || !r.width || !r.height) return;
  const x = Math.min(100, Math.max(0, (e.clientX - r.left) / r.width * 100)), y = Math.min(100, Math.max(0, (e.clientY - r.top) / r.height * 100));
  pPt = { x: x.toFixed(2) + "%", y: y.toFixed(2) + "%" };
  const m = $("#mrk"); m.style.left = x + "%"; m.style.top = y + "%"; m.hidden = false;
};
$("#sv").onclick = () => {
  const name = clean($("#nm").value, 32);
  if (!name || !pImg || !pPt || Object.keys(C).length >= 10) return toast(say("err"));
  const id = nid();
  C[id] = P[id] = { name, image: pImg, stabilizationPoint: pPt, specs: { processor: clean($("#c1").value, 32) || "Custom", camera: clean($("#c2").value, 32) || "Custom" } };
  if (!sv("jxCustomPhones", C)) { delete C[id]; delete P[id]; return toast(say("err")); }
  sel(id); resetAdd(); closeAll();
};

/* init */
Object.keys(L).forEach(c => $("#lang").add(new Option(L[c].n || c, c)));
setLang(L[o.lang] ? o.lang : ((navigator.language || "en").slice(0, 2)));
cur = P[o.cur] ? o.cur : (P.Iphone16ProMax ? "Iphone16ProMax" : Object.keys(P)[0]);
apply();
})();
