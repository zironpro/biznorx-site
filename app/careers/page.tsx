import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Jobs in the UAE & GCC | Upload Your CV | BiznorX People" },
  description: "Looking for your next role in the UAE or GCC? Upload your CV to BiznorX and our recruiters will match you to opportunities that fit your skills and goals.",
  alternates: { canonical: "/careers/" },
};

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="crumbs reveal"><Link href="/">Home</Link><span>/</span>Careers</div>
          <span className="eyebrow reveal">For professionals</span>
          <h1 className="reveal d1">Your next role,<br /><span className="serif">matched properly.</span></h1>
          <p className="lead reveal d2">Share your CV once. We’ll match you to roles across the UAE and GCC that fit your skills, experience and where you want your career to go — and we’ll always tell you where you stand.</p>
          <div className="hero-actions reveal d3" style={{ marginTop: "32px" }}>
            <a href="#apply" className="btn btn-red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg> Upload your CV</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card reveal"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span><h3>Matched on fit</h3><p>Alix looks at what you can actually do — not just keywords — so you’re put forward for roles where you’ll thrive.</p></div>
            <div className="card reveal d1"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span><h3>A real recruiter</h3><p>A BiznorX consultant reviews your profile and talks you through every opportunity before you’re submitted.</p></div>
            <div className="card reveal d2"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg></span><h3>Never a fee</h3><p>We are paid by employers. You will never be asked to pay BiznorX to apply or to be placed.</p></div>
          </div>
        </div>
      </section>

      <section className="section tint" id="apply">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Upload CV</span>
            <h2>Tell us about you.</h2>
            <p className="lead" style={{ marginTop: "18px" }}>Fill in a few details and attach your CV. We review every profile and will contact you when a suitable role opens.</p>
            <ul className="checks">
              <li>Roles across technology, finance, healthcare, logistics, construction and more</li>
              <li>Opportunities in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman</li>
              <li>Your details are only shared with employers with your consent</li>
            </ul>
            <p style={{ fontSize: ".92rem" }}>Prefer email? Send your CV to <a className="red" href="mailto:business@biznorx.com?subject=CV%20submission">business@biznorx.com</a></p>
          </div>
          <form className="form-card reveal d1" data-mailto="cv">
            <div className="fields">
              <div className="field"><label htmlFor="c-name">Full name</label><input id="c-name" name="Name" required autoComplete="name" /></div>
              <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" name="Email" type="email" required autoComplete="email" /></div>
              <div className="field"><label htmlFor="c-phone">Phone / WhatsApp</label><input id="c-phone" name="Phone" type="tel" autoComplete="tel" /></div>
              <div className="field"><label htmlFor="c-loc">Current location</label><input id="c-loc" name="Location" placeholder="e.g. Dubai, UAE" /></div>
              <div className="field"><label htmlFor="c-ind">Industry</label>
                <select id="c-ind" name="Industry"><option>Technology</option><option>Manufacturing</option><option>Logistics</option><option>Banking &amp; Finance</option><option>Healthcare</option><option>Construction</option><option>Real Estate</option><option>Hospitality</option><option>Retail</option><option>Energy</option><option>Aviation</option><option>Education</option><option>Other</option></select></div>
              <div className="field"><label htmlFor="c-exp">Experience</label>
                <select id="c-exp" name="Experience"><option>0–2 years</option><option>3–5 years</option><option>6–10 years</option><option>10+ years</option></select></div>
              <div className="field full"><label htmlFor="c-role">Role you’re looking for</label><input id="c-role" name="Desired role" placeholder="e.g. Senior Accountant" /></div>
              <label className="drop">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg>
                <b>Drop your CV here or click to browse</b>
                <small>PDF or Word · up to 5 MB</small>
                <input type="file" name="CV" accept=".pdf,.doc,.docx" />
              </label>
            </div>
            <button className="btn btn-red" type="submit" style={{ marginTop: "22px", width: "100%", justifyContent: "center" }}>Submit my CV <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
            <p className="form-note">Submitting opens your email app with your details filled in — just attach your CV and press send.</p>
            <div className="form-ok">Your email app should now be open. Attach your CV and send — we’ll be in touch.</div>
          </form>
        </div>
      </section>
    </>
  );
}
