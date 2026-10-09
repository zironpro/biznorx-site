"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow, ArrowUpRight } from "@/components/Icons";
import { divisions, nav } from "@/lib/site";

// Division logo: the BiznorX wordmark with the division name set small underneath (as on the brand banner).
// Two versions of the logo so it reads on the white header and the transparent one over photos.
function DivisionLockup({ tag, note }: { tag: string; note?: string }) {
  return (
    <span className="lockup">
      <span className="lockup-logo">
        <img src="/images/logo.svg" alt="" className="on-light" width="98" height="18" />
        <img src="/images/logo-white.svg" alt="" className="on-dark" width="98" height="18" />
      </span>
      <span className="lockup-tag">{tag}</span>
      {note && <span className="lockup-note">{note}</span>}
    </span>
  );
}

// Sticky header. The menu button, scroll shadow and transparent-over-photo state are wired in lib/interactions.ts.
export function Header() {
  const path = usePathname();
  const active = (href: string) => (path === href ? { className: "active", "aria-current": "page" as const } : {});

  return (
    <header className="header" id="header">
      <div className="container">
        <Link href="/" className="logo" aria-label="BiznorX home"><img src="/images/logo.svg" alt="BiznorX" width="186" height="34" /></Link>
        <nav className="nav" id="nav" aria-label="Main">
          {nav.map((n) => <Link key={n.href} href={n.href} {...active(n.href)}>{n.label}</Link>)}
          <div className="nav-divisions">
            <span>Our divisions</span>
            <Link href={divisions.realty.href} className="div-btn"><DivisionLockup tag="Realty" note="Real estate · Mumbai" /><ArrowUpRight /></Link>
            <Link href={divisions.tech.href} className="div-btn"><DivisionLockup tag="Tech" note="IT & digital · Worldwide" /><ArrowUpRight /></Link>
          </div>
        </nav>
        <div className="header-cta">
          <div className="div-switch" aria-label="BiznorX divisions">
            <Link href={divisions.realty.href} aria-label={divisions.realty.name} {...active(divisions.realty.href)}><DivisionLockup tag="Realty" /></Link>
            <Link href={divisions.tech.href} aria-label={divisions.tech.name} {...active(divisions.tech.href)}><DivisionLockup tag="Tech" /></Link>
          </div>
          <Link href="/#request" className="btn btn-red">Start hiring <Arrow /></Link>
          <button className="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false"><span></span></button>
        </div>
      </div>
    </header>
  );
}
