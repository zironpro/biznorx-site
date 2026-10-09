import Link from "next/link";
import type { Metadata } from "next";
import { PressFeature } from "@/components/Press";

export const metadata: Metadata = {
  title: { absolute: "About BiznorX | Recruitment & Manpower Company in Dubai, UAE" },
  description: "BiznorX is a Dubai-based recruitment and workforce company supplying professionals and skilled manpower to UAE businesses — part of a group that also includes BiznorX Realty (Mumbai) and BiznorX Tech.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero dhero">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="container hero-grid">
          <div>
            <div className="crumbs reveal"><Link href="/">Home</Link><span>/</span>About</div>
            <span className="eyebrow reveal">About BiznorX</span>
            <h1 className="words reveal d1">Connecting UAE businesses with <span className="serif">the right people.</span></h1>
            <p className="lead reveal d2" style={{ marginTop: "24px" }}>BiznorX is a Dubai-based recruitment and workforce company. We help organisations build capable teams — from senior professionals to skilled site crews — while creating meaningful opportunities for the people we place.</p>
            <div className="hero-actions reveal d3" style={{ marginTop: "34px" }}>
              <Link href="/#request" className="btn btn-red">Start hiring <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              <Link href="/careers/#apply" className="btn btn-ghost">Submit your CV</Link>
            </div>
          </div>
          <div className="dhero-media reveal d2">
            <div className="ph"><img src="/images/whitecollar-team.jpg" alt="BiznorX-style professional team" fetchPriority="high" /></div>
            <span className="market-pill">Dubai, UAE</span>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="grid-2">
            <div className="card reveal" style={{ padding: "46px" }}>
              <span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span>
              <span className="eyebrow">Our mission</span>
              <h2 style={{ fontSize: "1.9rem", marginBottom: "16px" }}>Smarter, more <span className="serif">meaningful</span> hiring.</h2>
              <p>To connect exceptional talent with the right opportunities while helping businesses build stronger, future-ready teams. Through expertise, intelligent insight and a people-first approach, we simplify complex hiring — every placement focused on long-term performance, not just filling a vacancy.</p>
            </div>
            <div className="card reveal d1" style={{ padding: "46px" }}>
              <span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg></span>
              <span className="eyebrow">Our vision</span>
              <h2 style={{ fontSize: "1.9rem", marginBottom: "16px" }}>A trusted partner in <span className="serif">talent.</span></h2>
              <p>To transform how organisations discover, hire and retain people — making recruitment more intelligent, transparent and aligned with business success, for employers and professionals alike.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">What we stand for</span>
            <h2 className="reveal d1">Values behind <span className="serif">every placement.</span></h2>
          </div>
          <div className="grid-3">
            <div className="card reveal"><span className="num">i.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg></span><h3>Integrity first</h3><p>Every recommendation is backed by verified information and clear reasoning. We never trade fit for speed.</p></div>
            <div className="card reveal d1"><span className="num">ii.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span><h3>People-first</h3><p>Dedicated consultants for employers, and honest, respectful communication with every candidate.</p></div>
            <div className="card reveal d2"><span className="num">iii.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18M5 21h14M3 7h18M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z" /></svg></span><h3>Fair &amp; compliant</h3><p>Responsible recruitment aligned with UAE labour regulations and data protection standards.</p></div>
            <div className="card reveal"><span className="num">iv.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg></span><h3>Structured execution</h3><p>Clear briefs, consistent screening and predictable timelines — one hire or one hundred.</p></div>
            <div className="card reveal d1"><span className="num">v.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3" /></svg></span><h3>Technology with purpose</h3><p>Alix brings data-driven structure to shortlisting; our consultants bring judgement and context.</p></div>
            <div className="card reveal d2"><span className="num">vi.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 7 13.5 15.5 8.5 10.5 2 17" /><path d="M16 7h6v6" /></svg></span><h3>Long-term partnership</h3><p>We stay involved after the offer letter — supporting onboarding and future hiring as you grow.</p></div>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="navy-pattern"></div>
        <div className="navy-glow"></div>
        <div className="container">
          <div className="head-split" style={{ marginBottom: "0" }}>
            <div>
              <span className="eyebrow reveal">The BiznorX group</span>
              <h2 className="reveal d1">Recruitment first.<br /><span className="serif">More when you need it.</span></h2>
            </div>
            <p className="lead reveal d2">Our core business is UAE recruitment. Two sister companies serve clients who need more.</p>
          </div>
          <div className="presence reveal">
            <div className="place">
              <div className="role">Core business</div>
              <div className="city">People <span className="serif">UAE</span></div>
              <p style={{ marginTop: "18px" }}>Recruitment, manpower supply and EOR for UAE and GCC employers — every level, every trade.</p>
              <ul><li><Link href="/people/">Recruitment services</Link></li></ul>
            </div>
            <div className="place">
              <div className="role">BiznorX Realty</div>
              <div className="city">Realty <span className="serif">Mumbai</span></div>
              <p style={{ marginTop: "18px" }}>Property and land advisory in Mumbai — popular with NRIs living in the UAE.</p>
              <ul><li><Link href="/realty/">Explore Realty</Link></li></ul>
            </div>
            <div className="place">
              <div className="role">BiznorX Tech</div>
              <div className="city">Tech <span className="serif">worldwide</span></div>
              <p style={{ marginTop: "18px" }}>Websites, apps, digital marketing and automation for clients anywhere.</p>
              <ul><li><Link href="/tech/">Explore Tech</Link></li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <span className="eyebrow reveal">Our philosophy</span>
          <p className="statement reveal d1" style={{ margin: "0 auto" }}>“Strong businesses are built through clarity, collaboration and consistent execution. Our role is to align people with opportunity — <span className="serif">responsibly, strategically and at scale.</span>”</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container"><PressFeature /></div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-block reveal">
            <div>
              <span className="eyebrow">Hiring now?</span>
              <h2>The right people, right when you need them.</h2>
              <p>Professionals or skilled manpower, one hire or a full team — share your requirement and we’ll send matched candidates.</p>
            </div>
            <div className="cta-actions">
              <Link href="/#request" className="btn btn-light">Start hiring <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              <Link href="/careers/#apply" className="btn btn-outline-light">Looking for a job? Upload your CV</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
