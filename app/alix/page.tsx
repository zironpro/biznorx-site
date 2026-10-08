import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Meet Alix | BiznorX Hiring Intelligence" },
  description: "Alix is BiznorX’s proprietary intelligence layer — smart matching, bias-reduced decisions and business-centric insight that moves recruitment beyond keyword matching.",
  alternates: { canonical: "/alix/" },
};

export default function AlixPage() {
  return (
    <>
      <section className="hero navy" style={{ padding: "100px 0 110px" }}>
        <div className="navy-pattern"></div>
        <div className="navy-glow"></div>
        <div className="container hero-grid">
          <div>
            <div className="crumbs reveal" style={{ color: "rgba(255,255,255,.6)" }}><Link href="/">BiznorX Group</Link><span>/</span><Link href="/people/">People</Link><span>/</span>Alix</div>
            <span className="eyebrow reveal">Proprietary intelligence layer</span>
            <div className="alix-word reveal d1">Meet Alix<span>.</span></div>
            <p className="lead reveal d2" style={{ margin: "26px 0 36px" }}>Alix transforms recruitment from guesswork into a structured, data-backed process. It evaluates what your business actually needs — role intent, team structure and growth goals — and measures every candidate against it.</p>
            <div className="hero-actions reveal d3">
              <Link href="/contact/?division=people#form" className="btn btn-red">Hire with Alix <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              <a href="#how" className="btn btn-outline-light">How it works</a>
            </div>
          </div>
          <div className="match reveal d2" data-alix-demo>
            <div className="match-card">
              <div className="match-top">
                <span className="tag"><img src="/images/mark.png" alt="" />Alix · Smart Matching</span>
                <span className="live">Live demo</span>
              </div>
              <div className="role">
                <small data-loc>Dubai, UAE</small>
                <h4 data-role>Operations Manager · Logistics</h4>
                <div className="chips" data-chips></div>
              </div>
              <div className="cands">
                <div className="cand"><span className="avatar"></span><div><b></b><span></span></div><div className="score"><b>0%</b><div className="bar"><i></i></div></div></div>
                <div className="cand"><span className="avatar"></span><div><b></b><span></span></div><div className="score"><b>0%</b><div className="bar"><i></i></div></div></div>
                <div className="cand"><span className="avatar"></span><div><b></b><span></span></div><div className="score"><b>0%</b><div className="bar"><i></i></div></div></div>
              </div>
              <div className="match-foot"><span>Screened <b data-screened>240 profiles</b></span><span>Illustrative example</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">Why it matters</span>
            <h2 className="reveal d1">Beyond keyword matching.</h2>
            <p className="lead reveal d2">Most hiring tools look for words on a CV. Alix looks for evidence that a person can deliver what the role is actually for.</p>
          </div>
          <div className="grid-3">
            <div className="card reveal"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span><h3>Smart Matching Engine</h3><p>Evaluates company requirements against candidate skills to ensure relevance, accuracy and long-term alignment.</p></div>
            <div className="card reveal d1"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18M5 21h14M3 7h18M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z" /></svg></span><h3>Bias-Reduced Decisions</h3><p>Every recommendation is supported by transparent logic, reducing subjectivity in recruitment outcomes.</p></div>
            <div className="card reveal d2"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3" /></svg></span><h3>Business-Centric Intelligence</h3><p>Considers role intent, growth goals and organisational structure — not just resumes and keywords.</p></div>
          </div>
        </div>
      </section>

      <section className="section tint" id="how">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">How Alix works</span>
            <h2 className="reveal d1">Technology plus human judgement.</h2>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="dot">01</div><h3>Understand the role</h3><p>Our consultants capture role intent, reporting lines, team structure and business goals.</p></div>
            <div className="step reveal d1"><div className="dot">02</div><h3>Model the requirement</h3><p>Alix turns the brief into weighted criteria — skills, experience, context and growth potential.</p></div>
            <div className="step reveal d2"><div className="dot">03</div><h3>Evaluate candidates</h3><p>Profiles are scored consistently against the same criteria, with clear reasoning for every score.</p></div>
            <div className="step reveal d3"><div className="dot">04</div><h3>Recruiter review</h3><p>Our team validates every shortlist in conversation — technology informs, people decide.</p></div>
          </div>
        </div>
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
              <Link href="/#request" className="btn btn-light">Request staff <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              <Link href="/careers/#apply" className="btn btn-outline-light">Looking for a job? Upload your CV</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
