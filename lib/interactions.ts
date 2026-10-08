// Site-wide behaviour and motion. Runs after each page renders (components/Interactions.tsx)
// and returns a cleanup so client-side navigation never stacks listeners or timers.
// Content is fully visible without JavaScript; nothing moves for visitors who prefer reduced motion.
import { site } from "@/lib/site";

type El = HTMLElement;
const $ = <T extends Element = El>(s: string, root: ParentNode = document) => root.querySelector<T>(s);
const $$ = <T extends Element = El>(s: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(s));

const ALIX_ROLES: { t: string; l: string; chips: string[]; c: [string, string, string, number][] }[] = [
  { t: "Operations Manager · Logistics", l: "Dubai, UAE", chips: ["Fleet ops", "Arabic preferred", "8+ yrs"], c: [
    ["RK", "Rahul K.", "Ops lead · Jebel Ali", 94], ["SA", "Sara A.", "Supply chain · Sharjah", 87], ["MT", "Mark T.", "Warehouse mgr · Mumbai", 72]] },
  { t: "Senior Staff Nurse · ICU", l: "Abu Dhabi, UAE", chips: ["DOH licence", "Critical care", "5+ yrs"], c: [
    ["AM", "Anjali M.", "ICU nurse · Kochi", 96], ["JF", "Joy F.", "ER nurse · Manila", 89], ["LB", "Lina B.", "Ward nurse · Cairo", 74]] },
  { t: "Finance Controller", l: "Riyadh, Saudi Arabia", chips: ["CA / CPA", "IFRS", "Manufacturing"], c: [
    ["PV", "Priya V.", "FP&A lead · Dubai", 92], ["OH", "Omar H.", "Group finance · Jeddah", 85], ["DS", "Dev S.", "Audit manager · Doha", 70]] },
];

// Office hours behind the "Open now" badges (assumed: Dubai Sun–Fri 9–6, Mumbai Mon–Sat 10–7).
const isOpen = (tz: string) => {
  const p = new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "short", hour: "numeric", hour12: false }).formatToParts(new Date());
  const d = p.find((x) => x.type === "weekday")!.value;
  const h = Number(p.find((x) => x.type === "hour")!.value) % 24;
  return tz === "Asia/Dubai" ? d !== "Sat" && h >= 9 && h < 18 : d !== "Sun" && h >= 10 && h < 19;
};

const sendToWhatsApp = (form: HTMLFormElement, intro: string) => {
  const lines = [intro];
  for (const [k, v] of new FormData(form)) if (v) lines.push(`${k}: ${v}`);
  window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
};

export function initSite(): () => void {
  const ac = new AbortController();
  const on = (t: EventTarget, ev: string, fn: (e: Event) => void, opts: AddEventListenerOptions = {}) =>
    t.addEventListener(ev, fn, { ...opts, signal: ac.signal });
  const timers: number[] = [];
  const observers: IntersectionObserver[] = [];
  const created: Element[] = [];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Header: shadow on scroll, transparent over full-bleed photo heroes, mobile menu
  const header = $("#header")!;
  header.classList.toggle("over-dark", !!$(".rx-hero"));
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 8);
  on(window, "scroll", onScroll, { passive: true });
  onScroll();
  const menuBtn = $("#menuBtn")!;
  const setMenu = (open: boolean) => {
    document.body.classList.toggle("nav-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  on(menuBtn, "click", () => setMenu(!document.body.classList.contains("nav-open")));
  $$("#nav a").forEach((a) => on(a, "click", () => setMenu(false)));

  // Headlines rise word by word (section headings join in automatically)
  $$("h2.reveal, .head h2, .head-split h2").forEach((h) => { if (!h.closest(".hero-form")) h.classList.add("words", "reveal"); });
  $$(".words").forEach((el) => {
    if (el.dataset.split) return;
    el.dataset.split = "1";
    const walk = (node: Node) => Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (n.textContent ?? "").split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span"); w.className = "w";
          const inner = document.createElement("span"); inner.textContent = part;
          w.appendChild(inner); frag.appendChild(w);
        });
        (n as ChildNode).replaceWith(frag);
      } else if (n.nodeType === Node.ELEMENT_NODE) walk(n);
    });
    walk(el);
    $$(".w > span", el).forEach((s, i) => { s.style.transitionDelay = `${i * 0.06}s`; });
  });

  // Fade/rise reveals
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  observers.push(io);

  // Image wipes — a fully clipped element has no visible area, so watch its parent instead
  const wipeIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    $$(":scope > .img-reveal", e.target).forEach((el) => el.classList.add("in"));
    wipeIO.unobserve(e.target);
  }), { threshold: 0.15 });
  observers.push(wipeIO);
  $$(".drow-media, .split-media, .collar, .also-img, .dhero-media .ph, .rx-sticky").forEach((el) => {
    el.classList.add("img-reveal"); el.classList.remove("reveal");
    if (el.parentElement) wipeIO.observe(el.parentElement);
  });
  $$(".reveal, .steps").forEach((el) => io.observe(el));

  if (!reduce) {
    // Scroll progress bar + gentle parallax on photos
    const bar = document.createElement("div");
    bar.className = "progress";
    document.body.appendChild(bar);
    created.push(bar);
    const par = $$(".photo-hero .frame > img, .collar > img, .split-media img, .drow-media img, .rx-hero-bg, .rx-nri-bg, .rx-cta-bg")
      .map((el) => ({ el, box: el.parentElement! }));
    let ticking = false;
    const frame = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
      par.forEach(({ el, box }) => {
        const r = box.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        el.style.translate = `0 ${(-p * 40).toFixed(1)}px`;
      });
      ticking = false;
    };
    on(window, "scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
    frame();

    if (matchMedia("(hover: hover)").matches) {
      // Cursor spotlight on cards
      $$(".card, .also-card").forEach((c) => on(c, "pointermove", (e) => {
        const { clientX, clientY } = e as PointerEvent;
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", `${clientX - r.left}px`);
        c.style.setProperty("--my", `${clientY - r.top}px`);
      }));
      // 3D tilt on the big photo cards
      $$(".collar").forEach((c) => {
        on(c, "pointermove", (e) => {
          const { clientX, clientY } = e as PointerEvent;
          const r = c.getBoundingClientRect();
          const x = (clientX - r.left) / r.width - 0.5, y = (clientY - r.top) / r.height - 0.5;
          c.style.transform = `perspective(1200px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
        });
        on(c, "pointerleave", () => { c.style.transform = ""; });
      });
      // Magnetic primary buttons
      $$(".btn-red").forEach((b) => {
        b.classList.add("magnetic");
        on(b, "pointermove", (e) => {
          const { clientX, clientY } = e as PointerEvent;
          const r = b.getBoundingClientRect();
          b.style.transform = `translate(${(clientX - r.left - r.width / 2) * 0.18}px, ${(clientY - r.top - r.height / 2) * 0.3}px)`;
        });
        on(b, "pointerleave", () => { b.style.transform = ""; });
      });
    }
  }

  // Count-up numbers: <span data-count="12">12</span>
  const cio = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target as El, end = Number(el.dataset.count), t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    if (reduce) el.textContent = String(end); else requestAnimationFrame(tick);
    cio.unobserve(el);
  }), { threshold: 0.6 });
  observers.push(cio);
  $$("[data-count]").forEach((el) => cio.observe(el));

  // Rotating word in a headline
  const rot = $(".rotator");
  if (rot && !reduce) {
    const words = $$("span", rot);
    let i = 0;
    timers.push(window.setInterval(() => {
      const prev = words[i];
      prev.classList.replace("on", "out");
      timers.push(window.setTimeout(() => prev.classList.remove("out"), 600));
      i = (i + 1) % words.length;
      words[i].classList.add("on");
    }, 2600));
  }

  // Alix demo: cycles roles and re-ranks candidates
  const demo = $("[data-alix-demo]");
  if (demo) {
    let r = 0;
    const render = () => {
      const role = ALIX_ROLES[r];
      $("[data-role]", demo)!.textContent = role.t;
      $("[data-loc]", demo)!.textContent = role.l;
      $("[data-chips]", demo)!.innerHTML = role.chips.map((c) => `<span class="chip">${c}</span>`).join("");
      $$(".cand", demo).forEach((el, i) => {
        const [ini, name, meta, score] = role.c[i];
        el.classList.remove("top");
        $(".avatar", el)!.textContent = ini;
        $(":scope > div > b", el)!.textContent = name;
        $(":scope > div > span", el)!.textContent = meta;
        $(".score b", el)!.textContent = `${score}%`;
        const fill = $(".bar i", el)!;
        fill.style.width = "0";
        timers.push(window.setTimeout(() => { fill.style.width = `${score}%`; if (i === 0) el.classList.add("top"); }, 120 + i * 160));
      });
      $("[data-screened]", demo)!.textContent = `${180 + Math.floor(Math.random() * 160)} profiles`;
      r = (r + 1) % ALIX_ROLES.length;
    };
    render();
    if (!reduce) timers.push(window.setInterval(render, 5200));
  }

  // Office clocks and "open now" status
  const clocks = () => {
    $$("[data-clock]").forEach((el) => {
      const tz = el.dataset.clock!;
      const b = $("b", el), s = $("span", el);
      if (b) b.textContent = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
      if (s) s.textContent = isOpen(tz) ? "Open now" : "Closed · leave a message";
    });
    const st = $("[data-status]");
    if (st) {
      const o = isOpen("Asia/Dubai");
      st.classList.toggle("open", o);
      st.textContent = o ? "Dubai HQ open now" : "Dubai HQ closed · we reply next business day";
    }
  };
  clocks();
  timers.push(window.setInterval(clocks, 30000));

  // Form tabs (contact page: hiring / general / realty / tech), chosen by ?division=
  const params = new URLSearchParams(location.search);
  $$("[data-tabs]").forEach((tabs) => {
    const btns = $$<HTMLButtonElement>("button", tabs);
    const set = (v: string) => {
      btns.forEach((b) => b.classList.toggle("on", b.dataset.v === v));
      $$("[data-for]").forEach((el) => { el.hidden = !el.dataset.for!.split(" ").includes(v); });
      const f = tabs.closest("form");
      if (f) {
        f.dataset.type = v;
        const h = $<HTMLInputElement>("[data-division]", f);
        if (h) h.value = $("button.on", tabs)?.textContent ?? "";
      }
    };
    btns.forEach((b) => on(b, "click", () => set(b.dataset.v!)));
    const want = params.get(tabs.dataset.tabs || "type");
    set(btns.some((b) => b.dataset.v === want) ? want! : btns[0].dataset.v!);
  });

  // Preselect the service from ?service=
  const svc = params.get("service"), sel = $<HTMLSelectElement>("#f-service");
  if (svc && sel) Array.from(sel.options).forEach((o) => { if (o.text === svc) sel.value = o.text; });

  // CV drop zone shows the chosen file name
  $$("label.drop").forEach((drop) => {
    const input = $<HTMLInputElement>("input", drop)!, label = $("b", drop)!;
    ["dragenter", "dragover"].forEach((ev) => on(drop, ev, (e) => { e.preventDefault(); drop.classList.add("drag"); }));
    ["dragleave", "drop"].forEach((ev) => on(drop, ev, (e) => { e.preventDefault(); drop.classList.remove("drag"); }));
    on(drop, "drop", (e) => {
      const files = (e as DragEvent).dataTransfer?.files;
      if (files?.[0]) { input.files = files; label.textContent = files[0].name; }
    });
    on(input, "change", () => { if (input.files?.[0]) label.textContent = input.files[0].name; });
  });

  // Enquiry forms send straight to WhatsApp
  $$<HTMLFormElement>("form[data-whatsapp]").forEach((form) => on(form, "submit", (e) => {
    e.preventDefault(); sendToWhatsApp(form, "Hi BiznorX, we are hiring:");
  }));
  $$<HTMLFormElement>("form[data-whatsapp-realty]").forEach((form) => on(form, "submit", (e) => {
    e.preventDefault(); sendToWhatsApp(form, "Hi BiznorX Realty, I have a property enquiry:");
  }));

  // No form backend yet: open the visitor's email app with the details filled in
  $$<HTMLFormElement>("form[data-mailto]").forEach((form) => on(form, "submit", (e) => {
    e.preventDefault();
    const data = new FormData(form), lines: string[] = [];
    let file = "";
    for (const [k, v] of data) {
      if (v instanceof File) { if (v.name) file = v.name; continue; }
      const field = form.elements.namedItem(k);
      if (v && !(field instanceof Element && field.closest("[hidden]"))) lines.push(`${k}: ${v}`);
    }
    const who = String(data.get("Company") || data.get("Name") || "");
    const subject = form.dataset.mailto === "cv" ? `CV submission — ${who}` : `${data.get("Division") || "General"} enquiry — ${who}`;
    if (file) lines.push("", `(Please attach your CV: ${file})`);
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    const ok = $(".form-ok", form);
    if (ok) ok.style.display = "block";
  }));

  return () => {
    ac.abort();
    timers.forEach((t) => { clearInterval(t); clearTimeout(t); });
    observers.forEach((o) => o.disconnect());
    created.forEach((el) => el.remove());
    setMenu(false);
    header.classList.remove("over-dark", "scrolled");
  };
}
