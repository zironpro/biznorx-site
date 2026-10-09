"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Building, Code, Users } from "@/components/Icons";

// First-visit intro on the homepage: choose People, Realty or Tech.
// Shown once per browser session. The inline script in app/layout.tsx hides it before paint for visitors who
// have already seen it, so there is no flash. The homepage content underneath is always in the HTML (good for SEO).
// Styles: "cards" (default), "split", "modal", "list". Preview any of them with ?intro=<style> (always shows).
export const INTRO_KEY = "bx-intro-seen";
type Variant = "cards" | "split" | "modal" | "list";
const DEFAULT_VARIANT: Variant = "cards";

const CHOICES = [
  { key: "people", href: "/", stay: true, image: "/images/bluecollar-site.jpg", tag: "People", title: "Recruitment & manpower", note: "Hire professionals and skilled workforce across the UAE", Icon: Users },
  { key: "realty", href: "/realty/", stay: false, image: "/images/mumbai-marine-drive.jpg", tag: "Realty", title: "Real estate & land", note: "Buy, invest and manage property in Mumbai", Icon: Building },
  { key: "tech", href: "/tech/", stay: false, image: "/images/tech-code.jpg", tag: "Tech", title: "IT & digital", note: "Websites, apps and growth — for clients worldwide", Icon: Code },
];

const LOADER = (
  <div className="intro-loader" aria-hidden="true">
    <img src="/images/mark-white.png" alt="" className="intro-mark" />
    <span className="intro-bar"><i /></span>
  </div>
);

// Each choice is a button (People: stay on this page) or a link (Realty / Tech).
function Choice({ c, i, className, children, variant, close, remember, setHover }: {
  c: (typeof CHOICES)[number]; i: number; className: string; children: React.ReactNode;
  variant: Variant; close: () => void; remember: () => void; setHover: (i: number | null) => void;
}) {
  const props = {
    className,
    style: { animationDelay: `${(variant === "modal" ? 0.25 : variant === "list" ? 0.3 : 1.5) + i * 0.12}s` },
    onPointerEnter: () => setHover(i),
    onPointerLeave: () => setHover(null),
  };
  return c.stay
    ? <button type="button" {...props} onClick={close}>{children}</button>
    : <Link href={c.href} {...props} onClick={remember}>{children}</Link>;
}

const Lockup = ({ tag, white = true }: { tag: string; white?: boolean }) => (
  <span className="lockup">
    <span className="lockup-logo"><img src={white ? "/images/logo-white.png" : "/images/logo.png"} alt="" width="96" height="18" /></span>
    <span className="lockup-tag">{tag}</span>
  </span>
);

export function Intro() {
  const [open, setOpen] = useState(true);
  const [closing, setClosing] = useState(false);
  const [variant, setVariant] = useState<Variant>(DEFAULT_VARIANT);
  const [hover, setHover] = useState<number | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  const remember = () => { try { sessionStorage.setItem(INTRO_KEY, "1"); } catch {} };
  const close = useCallback(() => {
    remember();
    setClosing(true);
    window.setTimeout(() => setOpen(false), 700);
  }, []);

  useEffect(() => {
    const forced = new URLSearchParams(location.search).get("intro") as Variant | null;
    if (forced && ["cards", "split", "modal", "list"].includes(forced)) {
      setVariant(forced);
      document.documentElement.classList.remove("intro-seen");
    } else {
      let seen = false;
      try { seen = sessionStorage.getItem(INTRO_KEY) === "1"; } catch {}
      if (seen) { setOpen(false); return; }
    }
    document.body.classList.add("intro-open");
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.classList.remove("intro-open"); };
  }, [close]);

  useEffect(() => { if (!open) document.body.classList.remove("intro-open"); }, [open]);

  if (!open) return null;

  const choiceProps = { variant, close, remember, setHover };

  const label = (c: (typeof CHOICES)[number]) => (c.stay ? "Enter" : "Visit");

  return (
    <div
      className={`intro intro--${variant}${closing ? " is-closing" : ""}`}
      role="dialog" aria-modal="true" aria-label="Choose a BiznorX division"
      onPointerMove={variant === "list" ? (e) => { if (floatRef.current) floatRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; } : undefined}
    >
      <div className="intro-bg" aria-hidden="true" />

      {variant === "cards" && (
        <>
          {LOADER}
          <div className="intro-content">
            <div className="intro-head">
              <img src="/images/logo-white.png" alt="BiznorX" className="intro-brand" width="180" height="34" />
              <p>Welcome. <span className="serif">Where would you like to go?</span></p>
            </div>
            <div className="intro-choices">
              {CHOICES.map((c, i) => (
                <Choice key={c.key} c={c} i={i} {...choiceProps} className="intro-choice">
                  <img src={c.image} alt="" />
                  <span className="ic-body">
                    <Lockup tag={c.tag} />
                    <b>{c.title}</b>
                    <small>{c.note}</small>
                    <span className="ic-go">{label(c)} <ArrowUpRight /></span>
                  </span>
                </Choice>
              ))}
            </div>
            <button type="button" className="intro-skip" onClick={close}>Skip to the main site</button>
          </div>
        </>
      )}

      {variant === "split" && (
        <>
          {LOADER}
          <div className="sp-top">
            <img src="/images/logo-white.png" alt="BiznorX" width="180" height="34" />
            <span>Welcome. <span className="serif">Choose your BiznorX.</span></span>
          </div>
          <div className="sp-panels">
            {CHOICES.map((c, i) => (
              <Choice key={c.key} c={c} i={i} {...choiceProps} className="sp-panel">
                <img src={c.image} alt="" />
                <span className="sp-num">0{i + 1}</span>
                <span className="sp-body">
                  <Lockup tag={c.tag} />
                  <b>{c.title}</b>
                  <small>{c.note}</small>
                  <span className="ic-go">{label(c)} <ArrowUpRight /></span>
                </span>
              </Choice>
            ))}
          </div>
          <button type="button" className="intro-skip sp-skip" onClick={close}>Skip to the main site</button>
        </>
      )}

      {variant === "modal" && (
        <div className="md-card">
          <button type="button" className="md-close" onClick={close} aria-label="Close">×</button>
          <img src="/images/logo.png" alt="BiznorX" className="md-logo" width="160" height="30" />
          <h2>Welcome to BiznorX</h2>
          <p>Three specialist companies, one trusted name. Where would you like to go?</p>
          <div className="md-list">
            {CHOICES.map((c, i) => (
              <Choice key={c.key} c={c} i={i} {...choiceProps} className="md-item">
                <span className="md-thumb"><img src={c.image} alt="" /><c.Icon /></span>
                <span className="md-text"><Lockup tag={c.tag} white={false} /><b>{c.title}</b><small>{c.note}</small></span>
                <span className="md-go"><ArrowUpRight /></span>
              </Choice>
            ))}
          </div>
          <button type="button" className="md-skip" onClick={close}>Continue to the main site</button>
        </div>
      )}

      {variant === "list" && (
        <>
          <div className="ls-wrap">
            <div className="ls-top">
              <img src="/images/logo.png" alt="BiznorX" width="170" height="32" />
              <span>Welcome — choose where to begin</span>
            </div>
            <div className="ls-rows">
              {CHOICES.map((c, i) => (
                <Choice key={c.key} c={c} i={i} {...choiceProps} className={`ls-row${hover === i ? " on" : ""}`}>
                  <span className="ls-n">0{i + 1}</span>
                  <span className="ls-name">{c.tag}</span>
                  <span className="ls-meta"><b>{c.title}</b><small>{c.note}</small></span>
                  <span className="ls-go"><ArrowUpRight /></span>
                </Choice>
              ))}
            </div>
            <button type="button" className="intro-skip ls-skip" onClick={close}>Skip to the main site</button>
          </div>
          <div className="ls-float" ref={floatRef} aria-hidden="true">
            {CHOICES.map((c, i) => <img key={c.key} src={c.image} alt="" className={hover === i ? "on" : ""} />)}
          </div>
        </>
      )}
    </div>
  );
}
