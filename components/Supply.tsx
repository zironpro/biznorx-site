"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/Icons";

// "What we supply" showcase on the homepage: switch between the two workforces.
// It auto-advances every few seconds until the visitor interacts (or prefers reduced motion).
const TRACKS = [
  {
    key: "professionals",
    tab: "Professionals",
    image: "/images/whitecollar-team.jpg",
    alt: "Team of office professionals",
    kicker: "Office, technical & leadership",
    title: <>Professionals &amp; <span className="serif">leadership.</span></>,
    text: "Talent for your offices, projects and management team — screened for skills, experience and culture fit before you meet them.",
    roles: ["Finance & accounts", "Sales & business development", "HR & administration", "Engineering & projects", "IT & technology", "Healthcare", "Hospitality management", "Senior leadership"],
    checks: ["Skills & experience verified", "Structured interviews", "Reference checks"],
    cta: { label: "Hire professionals", href: "/contact/?division=people&service=Executive%20Recruitment#form" },
  },
  {
    key: "workforce",
    tab: "Skilled workforce",
    image: "/images/bluecollar-site.jpg",
    alt: "Construction team in safety gear on site",
    kicker: "Sites, fleets & facilities",
    title: <>Skilled &amp; <span className="serif">semi-skilled</span> manpower.</>,
    text: "Reliable people for sites, warehouses, fleets and facilities — from a few workers to complete teams, mobilised when you need them.",
    roles: ["Construction trades", "Electricians & plumbers", "Drivers & heavy operators", "Warehouse & logistics", "Hospitality & F&B crew", "Security staff", "Cleaning & facilities", "Technicians & HVAC"],
    checks: ["Trade & skills tests", "Document checks", "Mobilisation support"],
    cta: { label: "Hire manpower", href: "/contact/?division=people&service=Skilled%20Manpower#form" },
  },
];

const ROTATE_MS = 7000;

export function Supply() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!auto || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = window.setTimeout(() => setActive((a) => (a + 1) % TRACKS.length), ROTATE_MS);
    return () => window.clearTimeout(timer.current);
  }, [active, auto]);

  const pick = (i: number) => { setAuto(false); setActive(i); };
  const t = TRACKS[active];

  return (
    <div className={`supply${auto ? " is-auto" : ""}`} onPointerEnter={() => setAuto(false)}>
      <div className="sup-switch" role="tablist" aria-label="Choose a workforce">
        {TRACKS.map((tr, i) => (
          <button key={tr.key} type="button" role="tab" aria-selected={i === active} className={i === active ? "on" : ""} onClick={() => pick(i)}>
            <span className="sup-n">0{i + 1}</span>{tr.tab}
            {i === active && <i className="sup-progress" style={{ animationDuration: `${ROTATE_MS}ms` }} />}
          </button>
        ))}
      </div>

      <div className="sup-stage">
        <div className="sup-media">
          {TRACKS.map((tr, i) => (
            <img key={tr.key} src={tr.image} alt={tr.alt} loading="lazy" className={i === active ? "on" : ""} />
          ))}
          <div className="sup-checks" key={`checks-${t.key}`}>
            <span>How we screen</span>
            <ul>{t.checks.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <span className="sup-count"><b>0{active + 1}</b> / 0{TRACKS.length}</span>
        </div>

        <div className="sup-panel" key={t.key} role="tabpanel">
          <span className="sup-kicker">{t.kicker}</span>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
          <ol className="sup-roles">
            {t.roles.map((r, i) => <li key={r} style={{ animationDelay: `${120 + i * 45}ms` }}><span>{String(i + 1).padStart(2, "0")}</span>{r}</li>)}
          </ol>
          <div className="hero-actions">
            <Link href={t.cta.href} className="btn btn-red">{t.cta.label} <Arrow /></Link>
            <Link href="/#request" className="btn btn-ghost">Send a requirement</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
