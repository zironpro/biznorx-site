import Link from "next/link";
import { Supply } from "@/components/Supply";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "BiznorX | Recruitment & Manpower Agency in the UAE" },
  description: "BiznorX is a Dubai-based recruitment and manpower agency. We supply pre-screened professionals and skilled workforce to companies across the UAE — with visas, documentation and onboarding support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="photo-hero">
        <div className="frame on-photo">
          <img src="/images/dubai-sunset.jpg" alt="Dubai skyline at sunset" fetchPriority="high" />
          <div className="container inner">
            <div className="hero-split">
              <div className="hero-copy">
                <div className="meta-line reveal"><span>UAE recruitment &amp; manpower</span><i></i><span>Dubai</span></div>
                <h1 className="words reveal">The right people for <span className="serif">every role</span> in your business.</h1>
                <p className="lead reveal d2">From finance managers to forklift operators — BiznorX sources, screens and delivers professionals and skilled manpower for companies across the UAE, with visas, documentation and onboarding support.</p>
                <div className="hero-actions reveal d3">
                  <a href="#request" className="btn btn-red hide-lg">Request staff <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <Link href="/careers/#apply" className="btn btn-glass"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg> Looking for a job? Submit CV</Link>
                </div>
                <ul className="hero-points reveal d4">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Pre-screened candidates</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Every level &amp; trade</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Single hires to bulk teams</li>
                </ul>
              </div>

              <form className="hero-form reveal d2" id="request" data-whatsapp>
                <span className="hf-kicker">For employers</span>
                <h2>Tell us who you need.</h2>
                <p>Share your requirement and our team will come back with matched candidates.</p>
                <div className="seg" role="radiogroup" aria-label="Hiring category">
                  <label><input type="radio" name="Category" value="Professional roles" defaultChecked /><span>Professionals</span></label>
                  <label><input type="radio" name="Category" value="Skilled manpower" /><span>Manpower</span></label>
                  <label><input type="radio" name="Category" value="Both" /><span>Both</span></label>
                </div>
                <div className="fields">
                  <div className="field"><label htmlFor="h-company">Company</label><input id="h-company" name="Company" required autoComplete="organization" /></div>
                  <div className="field"><label htmlFor="h-name">Your name</label><input id="h-name" name="Name" required autoComplete="name" /></div>
                  <div className="field"><label htmlFor="h-phone">Phone / WhatsApp</label><input id="h-phone" name="Phone" type="tel" required autoComplete="tel" /></div>
                  <div className="field"><label htmlFor="h-count">Headcount</label>
                    <select id="h-count" name="Headcount"><option>1</option><option>2–5</option><option>6–20</option><option>21–50</option><option>50+</option></select></div>
                  <div className="field full"><label htmlFor="h-roles">Role(s) you’re hiring for</label><input id="h-roles" name="Roles" placeholder="e.g. Accountant, 10 electricians, HR manager" /></div>
                </div>
                <button className="btn btn-red" type="submit">Get candidates <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
                <small className="hf-note">Opens WhatsApp with your request · or email <a href="mailto:business@biznorx.com">business@biznorx.com</a></small>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee roles-strip" aria-label="Roles we recruit for">
        <div className="marquee-track">
          <span>Accountants</span><span>Electricians</span><span>Sales executives</span><span>Masons &amp; carpenters</span><span>HR managers</span><span>Heavy drivers</span><span>Engineers</span><span>Warehouse staff</span><span>Nurses</span><span>Hospitality crew</span><span>IT professionals</span><span>Security guards</span><span>Admin &amp; reception</span><span>Cleaners &amp; helpers</span>
          <span aria-hidden="true">Accountants</span><span aria-hidden="true">Electricians</span><span aria-hidden="true">Sales executives</span><span aria-hidden="true">Masons &amp; carpenters</span><span aria-hidden="true">HR managers</span><span aria-hidden="true">Heavy drivers</span><span aria-hidden="true">Engineers</span><span aria-hidden="true">Warehouse staff</span><span aria-hidden="true">Nurses</span><span aria-hidden="true">Hospitality crew</span><span aria-hidden="true">IT professionals</span><span aria-hidden="true">Security guards</span><span aria-hidden="true">Admin &amp; reception</span><span aria-hidden="true">Cleaners &amp; helpers</span>
        </div>
      </div>

      <section className="section supply-section">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">What we supply</span>
              <h2 className="reveal d1">Two workforces.<br /><span className="serif">One accountable partner.</span></h2>
            </div>
            <p className="lead reveal d2">Whether you need one senior hire or a full site crew next month, you get one team that understands both — and the UAE rules that come with them.</p>
          </div>
          <Supply />
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">Why UAE employers choose us</span>
            <h2 className="reveal d1">Hiring that’s faster, safer<br /><span className="serif">and simply easier.</span></h2>
          </div>
          <div className="grid-4">
            <div className="card reveal"><span className="num">i.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span><h3>Shortlists, not CV piles</h3><p>Every candidate is screened against your brief before you see them — so you only interview people who fit.</p></div>
            <div className="card reveal d1"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg></span><span className="num">ii.</span><h3>Visas &amp; paperwork</h3><p>Support with offer letters, visa processing, documentation and onboarding — handled with you, end to end.</p></div>
            <div className="card reveal d2"><span className="num">iii.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></svg></span><h3>Scale on demand</h3><p>Bulk hiring and mobilisation for projects, new sites and seasonal peaks — one hire or one hundred.</p></div>
            <div className="card reveal d3"><span className="num">iv.</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg></span><h3>Compliant &amp; ethical</h3><p>Transparent, responsible recruitment aligned with UAE labour regulations — protecting you and your workers.</p></div>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="navy-pattern"></div>
        <div className="navy-glow"></div>
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">How it works</span>
              <h2 className="reveal d1">From requirement to<br /><span className="serif">first day at work.</span></h2>
            </div>
            <a href="#request" className="btn btn-red reveal d2">Request staff <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
          </div>
          <div className="steps steps-light">
            <div className="step reveal"><div className="dot">01</div><h3>Share your requirement</h3><p>Tell us the roles, headcount, salary range and start date. A consultant confirms the brief with you.</p></div>
            <div className="step reveal d1"><div className="dot">02</div><h3>Receive a shortlist</h3><p>We source and screen candidates — using Alix, our matching intelligence — and send only the best fits.</p></div>
            <div className="step reveal d2"><div className="dot">03</div><h3>Interview &amp; select</h3><p>We arrange interviews and trade tests, collect feedback and manage offers on your behalf.</p></div>
            <div className="step reveal d3"><div className="dot">04</div><h3>Onboard &amp; mobilise</h3><p>Visa, documentation and travel support until your new team member is ready to start.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container alix-grid">
          <div className="reveal">
            <span className="eyebrow">Powered by Alix</span>
            <h2>Matching on fit,<br /><span className="serif">not keywords.</span></h2>
            <p className="lead" style={{ margin: "22px 0 30px" }}>Alix, our hiring intelligence layer, scores every candidate against your real requirement — skills, experience, role intent and team structure — so your shortlist is consistent, explainable and fast.</p>
            <Link href="/alix/" className="link-arrow">See how Alix works <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          </div>
          <div className="match reveal d1" data-alix-demo>
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

      <section className="section tint">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">Industries</span>
              <h2 className="reveal d1">Staffing the sectors<br /><span className="serif">that build the UAE.</span></h2>
            </div>
            <Link href="/industries/" className="link-arrow reveal d2">All industries <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          </div>
          <div className="ind">
            <Link href="/industries/#construction" className="ind-item reveal"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 21V3l14 4H6M6 7l6 14M2 21h8M17 7v5" /><path d="M15 12h4v3h-4z" /></svg></span>Construction</Link>
            <Link href="/industries/#logistics" className="ind-item reveal d1"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></span>Logistics</Link>
            <Link href="/industries/#hospitality" className="ind-item reveal d2"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg></span>Hospitality</Link>
            <Link href="/industries/#healthcare" className="ind-item reveal d3"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" /><path d="M12 9v5M9.5 11.5h5" /></svg></span>Healthcare</Link>
            <Link href="/industries/#manufacturing" className="ind-item reveal"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 20V9l6 4V9l6 4V4h6v16z" /><path d="M6 17h2M11 17h2M16 17h2" /></svg></span>Manufacturing</Link>
            <Link href="/industries/#finance" className="ind-item reveal d1"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 9 9-6 9 6M5 9v9M9 9v9M15 9v9M19 9v9M3 21h18" /></svg></span>Banking &amp; Finance</Link>
            <Link href="/industries/#retail" className="ind-item reveal d2"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg></span>Retail</Link>
            <Link href="/industries/#technology" className="ind-item reveal d3"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" /></svg></span>Technology</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-media reveal">
            <img src="/images/candidate-handshake.jpg" alt="Candidate shaking hands after an interview" loading="lazy" />
            <div className="media-caption"><div><strong style={{ fontSize: "2.2rem" }}>Your next job</strong><span>Office, technical and skilled roles across the UAE.</span></div></div>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">For job seekers</span>
            <h2>Looking for work<br /><span className="serif">in the UAE?</span></h2>
            <p className="lead" style={{ marginTop: "18px" }}>Submit your CV once and our consultants will match you to roles that suit your skills and experience — from office and management positions to skilled trades and operations.</p>
            <ul className="checks">
              <li>One simple form — upload your CV in a minute</li>
              <li>Matched to real openings with UAE employers</li>
              <li>A consultant contacts you before you’re put forward</li>
            </ul>
            <div className="hero-actions">
              <Link href="/careers/#apply" className="btn btn-navy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg> Submit your CV</Link>
              <a href="https://wa.me/971522585437?text=Hi%20BiznorX%2C%20I%27m%20looking%20for%20a%20job%20in%20the%20UAE." target="_blank" rel="noopener" className="btn btn-ghost"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.6-8.4z" /></svg> WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">Also from BiznorX</span>
              <h2 className="reveal d1">More ways we can help.</h2>
            </div>
          </div>
          <div className="also">
            <Link href="/realty/" className="also-card reveal">
              <div className="also-img"><img src="/images/mumbai-marine-drive.jpg" alt="Marine Drive, Mumbai" loading="lazy" /></div>
              <div className="also-body"><span className="collar-tag dark">BiznorX Realty · Mumbai</span><h3>Property in Mumbai, <span className="serif">handled for you.</span></h3><p>Buying, selling and managing Mumbai property — ideal for NRIs living in the UAE.</p><span className="link-arrow">Explore Realty <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></div>
            </Link>
            <Link href="/tech/" className="also-card reveal d1">
              <div className="also-img"><img src="/images/tech-code.jpg" alt="Code on screens" loading="lazy" /></div>
              <div className="also-body"><span className="collar-tag dark">BiznorX Tech · Worldwide</span><h3>Websites, apps <span className="serif">&amp; growth.</span></h3><p>Digital products, marketing and automation for businesses anywhere.</p><span className="link-arrow">Explore Tech <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></div>
            </Link>
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
