"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow, Mail, Phone, Pin, WhatsApp } from "@/components/Icons";
import { site, waLink } from "@/lib/site";

// The closing line above the footer changes per division (each division runs on its own subdomain).
function Statement({ path }: { path: string }) {
  if (path.startsWith("/realty")) {
    return (
      <>
        <h3>Property in Mumbai?<br /><span className="serif grad-text">Let’s find your place.</span></h3>
        <div className="hero-actions"><a href="#enquire" className="btn btn-red">Request a callback <Arrow /></a><a href={waLink("Hi BiznorX Realty")} target="_blank" rel="noopener" className="btn btn-ghost">WhatsApp us</a></div>
      </>
    );
  }
  if (path.startsWith("/tech")) {
    return (
      <>
        <h3>Ready to build?<br /><span className="serif grad-text">Let’s engineer your growth.</span></h3>
        <div className="hero-actions"><Link href="/contact/?division=tech#form" className="btn btn-red">Start a project <Arrow /></Link><a href={waLink("Hi BiznorX Tech")} target="_blank" rel="noopener" className="btn btn-ghost">WhatsApp us</a></div>
      </>
    );
  }
  return (
    <>
      <h3>Hiring in the UAE?<br /><span className="serif grad-text">We’ll find your people.</span></h3>
      <div className="hero-actions"><Link href="/#request" className="btn btn-red">Request staff <Arrow /></Link><Link href="/careers/#apply" className="btn btn-ghost">Submit your CV</Link></div>
    </>
  );
}

export function Footer() {
  const path = usePathname();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-statement"><Statement path={path} /></div>
          <div className="footer-grid">
            <div className="footer-about">
              <Link href="/" className="logo"><img src="/images/logo.png" alt="BiznorX" width="194" height="36" /></Link>
              <p>Dubai-based recruitment and manpower for UAE businesses — professionals and skilled workforce. Part of the BiznorX group with BiznorX Realty (Mumbai) and BiznorX Tech.</p>
              <span className="status" data-status>Dubai HQ</span>
            </div>
            <div>
              <h4>Employers</h4>
              <ul>
                <li><Link href="/#request">Request staff</Link></li>
                <li><Link href="/people/">Recruitment services</Link></li>
                <li><Link href="/people/#executive">Executive search</Link></li>
                <li><Link href="/people/#manpower">Skilled manpower</Link></li>
                <li><Link href="/industries/">Industries</Link></li>
                <li><Link href="/alix/">Meet Alix</Link></li>
              </ul>
            </div>
            <div>
              <h4>Job seekers &amp; group</h4>
              <ul>
                <li><Link href="/careers/#apply">Submit your CV</Link></li>
                <li><Link href="/about/">About BiznorX</Link></li>
                <li><Link href="/realty/">BiznorX Realty</Link></li>
                <li><Link href="/tech/">BiznorX Tech</Link></li>
                <li><Link href="/contact/">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Get in touch</h4>
              <ul className="contact-list">
                <li><Pin /><span><b style={{ color: "var(--navy)" }}>Dubai HQ</b> · People &amp; Tech</span></li>
                <li><Phone /><a href={`tel:${site.dubai.phone}`}>{site.dubai.phoneDisplay}</a></li>
                <li><Pin /><span><b style={{ color: "var(--navy)" }}>Mumbai</b> · BiznorX Realty</span></li>
                <li><Phone /><a href={`tel:${site.mumbai.phone}`}>{site.mumbai.phoneDisplay}</a></li>
                <li><Mail /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} BiznorX. All rights reserved.</span>
            <span>Recruitment &amp; manpower · Dubai, UAE</span>
          </div>
        </div>
      </footer>
      <a className="wa" href={waLink("Hi BiznorX, I'd like to know more.")} target="_blank" rel="noopener" aria-label="Chat with BiznorX on WhatsApp"><WhatsApp /></a>
    </>
  );
}
