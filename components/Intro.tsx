"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight } from "@/components/Icons";

// First-visit intro on the homepage: a short logo "loading" moment, then the three divisions to choose from.
// Shown once per browser session. The inline script in app/layout.tsx hides it before paint for visitors who
// have already seen it, so there is no flash. The homepage content underneath is always in the HTML (good for SEO).
export const INTRO_KEY = "bx-intro-seen";

const CHOICES = [
  { key: "people", href: "/", stay: true, image: "/images/bluecollar-site.jpg", tag: "People", title: "Recruitment & manpower", note: "Hire professionals and skilled workforce across the UAE" },
  { key: "realty", href: "/realty/", stay: false, image: "/images/mumbai-marine-drive.jpg", tag: "Realty", title: "Real estate & land", note: "Buy, invest and manage property in Mumbai" },
  { key: "tech", href: "/tech/", stay: false, image: "/images/tech-code.jpg", tag: "Tech", title: "IT & digital", note: "Websites, apps and growth — for clients worldwide" },
];

export function Intro() {
  const [open, setOpen] = useState(true);
  const [closing, setClosing] = useState(false);

  const remember = () => { try { sessionStorage.setItem(INTRO_KEY, "1"); } catch {} };

  const close = useCallback(() => {
    remember();
    setClosing(true);
    window.setTimeout(() => setOpen(false), 700);
  }, []);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(INTRO_KEY) === "1"; } catch {}
    if (seen) { setOpen(false); return; }
    document.body.classList.add("intro-open");
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.classList.remove("intro-open"); };
  }, [close]);

  useEffect(() => { if (!open) document.body.classList.remove("intro-open"); }, [open]);

  if (!open) return null;

  return (
    <div className={`intro${closing ? " is-closing" : ""}`} role="dialog" aria-modal="true" aria-label="Choose a BiznorX division">
      <div className="intro-bg" aria-hidden="true" />
      <div className="intro-loader" aria-hidden="true">
        <img src="/images/mark-white.svg" alt="" className="intro-mark" />
        <span className="intro-bar"><i /></span>
      </div>

      <div className="intro-content">
        <div className="intro-head">
          <img src="/images/logo-white.svg" alt="BiznorX" className="intro-brand" width="186" height="34" />
          <p>Welcome. <span className="serif">Where would you like to go?</span></p>
        </div>
        <div className="intro-choices">
          {CHOICES.map((c, i) => {
            const inner = (
              <>
                <img src={c.image} alt="" />
                <span className="ic-body">
                  <span className="lockup">
                    <span className="lockup-logo"><img src="/images/logo-white.svg" alt="" width="98" height="18" /></span>
                    <span className="lockup-tag">{c.tag}</span>
                  </span>
                  <b>{c.title}</b>
                  <small>{c.note}</small>
                  <span className="ic-go">{c.stay ? "Enter" : "Visit"} <ArrowUpRight /></span>
                </span>
              </>
            );
            const style = { animationDelay: `${1.5 + i * 0.12}s` };
            return c.stay
              ? <button key={c.key} type="button" className="intro-choice" style={style} onClick={close} autoFocus>{inner}</button>
              : <Link key={c.key} href={c.href} className="intro-choice" style={style} onClick={remember}>{inner}</Link>;
          })}
        </div>
        <button type="button" className="intro-skip" onClick={close}>Skip to the main site</button>
      </div>
    </div>
  );
}
