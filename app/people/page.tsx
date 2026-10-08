import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "BiznorX People | Recruitment Agency in the UAE & GCC" },
  description: "BiznorX People is the Dubai-based recruitment and workforce division of BiznorX — executive search, bulk hiring, EOR, skilled manpower and global placement across the UAE and GCC, powered by Alix.",
  alternates: { canonical: "/people/" },
};

export default function PeoplePage() {
  return (
    <>
      <section className="hero dhero">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="container hero-grid">
          <div>
            <div className="crumbs reveal"><Link href="/">BiznorX Group</Link><span>/</span>People</div>
            <span className="div-lockup reveal"><img src="/images/mark.png" alt="" />BiznorX <b>People</b><small>UAE &amp; GCC</small></span>
            <h1 className="reveal d1">
              <span className="line">Hire people who</span>
              <span className="line">move your business</span>
              <span className="line"><span className="rotator"><span className="on serif">forward.</span><span className="serif">faster.</span><span className="serif">further.</span></span></span>
            </h1>
            <p className="lead reveal d2">From our Dubai headquarters, BiznorX People recruits for growing companies across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. We start with your business — then use Alix, our hiring intelligence layer, to find people who fit the role, the team and where you’re going.</p>
            <div className="hero-actions reveal d3">
              <Link href="/contact/?division=people#form" className="btn btn-red">Hire talent <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              <Link href="/careers/#apply" className="btn btn-ghost"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg> Upload your CV</Link>
            </div>
            <div className="hero-trust reveal d4">
              <div><strong>All</strong><span>Levels &amp; trades</span></div>
              <div><strong><span data-count="12">12</span><em>+</em></strong><span>Industries served</span></div>
              <div><strong>6</strong><span>GCC markets</span></div>
            </div>
          </div>

          <div className="dhero-media reveal d2" data-alix-demo>
            <div className="ph"><img src="/images/people-boardroom.jpg" alt="Recruitment team meeting in a boardroom" fetchPriority="high" /></div>
            <span className="market-pill">UAE &amp; GCC</span>
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
                <div className="cand"><span className="avatar">RK</span><div><b>—</b><span>—</span></div><div className="score"><b>0%</b><div className="bar"><i></i></div></div></div>
                <div className="cand"><span className="avatar">SA</span><div><b>—</b><span>—</span></div><div className="score"><b>0%</b><div className="bar"><i></i></div></div></div>
                <div className="cand"><span className="avatar">MT</span><div><b>—</b><span>—</span></div><div className="score"><b>0%</b><div className="bar"><i></i></div></div></div>
              </div>
              <div className="match-foot"><span>Screened <b data-screened>240 profiles</b></span><span>Fit · skills · role intent</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Industries we serve">
        <div className="marquee-track">
          <span>Technology</span><span>Manufacturing</span><span>Logistics</span><span>Banking &amp; Finance</span><span>Healthcare</span><span>Construction</span><span>Real Estate</span><span>Hospitality</span><span>Retail</span><span>Energy</span><span>Aviation</span><span>Education</span>
          <span aria-hidden="true">Technology</span><span aria-hidden="true">Manufacturing</span><span aria-hidden="true">Logistics</span><span aria-hidden="true">Banking &amp; Finance</span><span aria-hidden="true">Healthcare</span><span aria-hidden="true">Construction</span><span aria-hidden="true">Real Estate</span><span aria-hidden="true">Hospitality</span><span aria-hidden="true">Retail</span><span aria-hidden="true">Energy</span><span aria-hidden="true">Aviation</span><span aria-hidden="true">Education</span>
        </div>
      </div>

      <section className="section tint" id="services">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">What we do</span>
              <h2 className="reveal d1">Capabilities that scale<br />with your business.</h2>
            </div>
            <p className="lead reveal d2">From a single leadership hire to hundreds of skilled workers — one partner, one process, full accountability.</p>
          </div>
          <div className="svc reveal" id="executive"><span className="n">01</span><div><span className="kicker">Executive</span><h3>Executive Recruitment</h3></div><p>Tailored leadership hiring that connects businesses with talent who fit the culture and drive long-term success. Confidential search, structured assessment and market mapping for C-suite, director and senior specialist roles.</p><Link href="/contact/?division=people&amp;service=Executive%20Recruitment#form" className="go" aria-label="Enquire about Executive Recruitment"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
          <div className="svc reveal" id="bulk"><span className="n">02</span><div><span className="kicker">Operations</span><h3>Bulk Recruitment</h3></div><p>Efficient large-scale hiring designed to meet urgent demand without compromising quality — for project launches, new sites, seasonal peaks and expansion into new markets.</p><Link href="/contact/?division=people&amp;service=Bulk%20Recruitment#form" className="go" aria-label="Enquire about Bulk Recruitment"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
          <div className="svc reveal" id="eor"><span className="n">03</span><div><span className="kicker">Compliance</span><h3>EOR &amp; Staffing</h3></div><p>Staffing and Employer of Record solutions that simplify compliance, payroll and HR management across borders — so you can hire across the UAE and GCC without setting up an entity first.</p><Link href="/contact/?division=people&amp;service=EOR%20Services#form" className="go" aria-label="Enquire about EOR Services"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
          <div className="svc reveal" id="manpower"><span className="n">04</span><div><span className="kicker">Manpower</span><h3>Skilled Manpower</h3></div><p>Specialised recruitment of skilled and semi-skilled workers — technicians, drivers, operators, hospitality and facilities staff — screened and mobilised to support operational excellence.</p><Link href="/contact/?division=people&amp;service=Skilled%20Manpower#form" className="go" aria-label="Enquire about Skilled Manpower"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
          <div className="svc reveal" id="global"><span className="n">05</span><div><span className="kicker">Frontier</span><h3>Global Placement</h3></div><p>International recruitment expertise that bridges markets — helping GCC employers access proven talent from India, South Asia, Africa and Europe — with documentation and mobilisation handled.</p><Link href="/contact/?division=people&amp;service=Global%20Placement#form" className="go" aria-label="Enquire about Global Placement"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
          <div className="svc reveal" id="academy"><span className="n">06</span><div><span className="kicker">Academy</span><h3>Training Academy</h3></div><p>Customised upskilling programmes that raise productivity and prepare teams for evolving industry needs — from onboarding readiness to leadership development.</p><Link href="/contact/?division=people&amp;service=Training%20Academy#form" className="go" aria-label="Enquire about Training Academy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
        </div>
      </section>

      <section className="section navy">
        <div className="navy-pattern"></div>
        <div className="navy-glow"></div>
        <div className="container alix-grid">
          <div className="reveal">
            <span className="eyebrow">Proprietary technology</span>
            <div className="alix-word">Meet Alix<span>.</span></div>
            <p className="lead" style={{ margin: "24px 0 34px" }}>Our intelligence layer that turns recruitment from guesswork into a structured, data-backed process — looking past keywords to what your business actually needs.</p>
            <Link href="/alix/" className="btn btn-red">See how Alix works <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          </div>
          <div className="alix-features">
            <div className="alix-f reveal d1"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span><div><h3>Smart Matching Engine</h3><p>Evaluates company requirements against candidate skills for relevance, accuracy and long-term alignment.</p></div></div>
            <div className="alix-f reveal d2"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18M5 21h14M3 7h18M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z" /></svg></span><div><h3>Bias-Reduced Decisions</h3><p>Every recommendation is backed by transparent logic, reducing subjectivity in hiring outcomes.</p></div></div>
            <div className="alix-f reveal d3"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3" /></svg></span><div><h3>Business-Centric Intelligence</h3><p>Considers role intent, growth goals and organisational structure — not just resumes.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">How we work</span>
            <h2 className="reveal d1">A systematic approach to precise hiring.</h2>
            <p className="lead reveal d2">Four clear stages, the same evaluation framework every time — so you always know where your hire stands.</p>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="dot">01</div><h3>Strategic Analysis</h3><p>We get to know your organisation — goals, structure and the exact talent gaps behind the role.</p></div>
            <div className="step reveal d1"><div className="dot">02</div><h3>Precision Sourcing</h3><p>Alix and our recruiters search across the GCC and international talent markets for proven fit.</p></div>
            <div className="step reveal d2"><div className="dot">03</div><h3>Seamless Integration</h3><p>Interviews, offers, visas and onboarding handled end to end, fully compliant.</p></div>
            <div className="step reveal d3"><div className="dot">04</div><h3>Continuous Optimisation</h3><p>We track performance after placement and refine your hiring model as you grow.</p></div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">Why BiznorX</span>
              <h2 className="reveal d1">Why industry leaders<br />trust BiznorX.</h2>
            </div>
            <p className="lead reveal d2">We prioritise execution integrity. Speed is never chosen over alignment.</p>
          </div>
          <div className="why reveal">
            <div className="why-item"><small>Dedicated</small><h3>Your own consultant</h3><p>One point of contact who knows your business, your roles and your timelines.</p></div>
            <div className="why-item"><small>100% Compliant</small><h3>Global Standards</h3><p>Aligned with UAE and GCC labour laws and data protection.</p></div>
            <div className="why-item"><small>Cross-Border</small><h3>Strategic Reach</h3><p>Regional insight with global execution for seamless workforce solutions.</p></div>
            <div className="why-item"><small>Tech-Enabled</small><h3>Digital First</h3><p>Hiring, workforce and reporting systems built for speed and transparency.</p></div>
            <div className="why-item"><small>Always On</small><h3>Human Centric</h3><p>Dedicated account leadership and responsive support teams.</p></div>
            <div className="why-item"><small>Process-Led</small><h3>Execution Precision</h3><p>Delivery frameworks that ensure predictable, consistent outcomes.</p></div>
            <div className="why-item"><small>Built to Scale</small><h3>Scalable Solutions</h3><p>Flexible workforce models that grow rapidly with demand.</p></div>
            <div className="why-item"><small>Insight Driven</small><h3>Market Intelligence</h3><p>Salary benchmarking and talent availability analysis.</p></div>
            <div className="why-item"><small>Risk Secure</small><h3>Risk Mitigation</h3><p>Governance and safeguards that reduce legal and operational exposure.</p></div>
            <div className="why-item"><small>Trusted Ally</small><h3>Partnership Mindset</h3><p>An extension of your organisation, accountable for outcomes.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">Industries</span>
              <h2 className="reveal d1">Workforce expertise<br />across every major sector.</h2>
            </div>
            <Link href="/industries/" className="link-arrow reveal d2">Explore all industries <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          </div>
          <div className="ind">
            <Link href="/industries/#technology" className="ind-item reveal"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" /></svg></span>Technology</Link>
            <Link href="/industries/#manufacturing" className="ind-item reveal d1"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 20V9l6 4V9l6 4V4h6v16z" /><path d="M6 17h2M11 17h2M16 17h2" /></svg></span>Manufacturing</Link>
            <Link href="/industries/#logistics" className="ind-item reveal d2"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></span>Logistics</Link>
            <Link href="/industries/#finance" className="ind-item reveal d3"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 9 9-6 9 6M5 9v9M9 9v9M15 9v9M19 9v9M3 21h18" /></svg></span>Banking &amp; Finance</Link>
            <Link href="/industries/#healthcare" className="ind-item reveal"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" /><path d="M12 9v5M9.5 11.5h5" /></svg></span>Healthcare</Link>
            <Link href="/industries/#construction" className="ind-item reveal d1"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 21V3l14 4H6M6 7l6 14M2 21h8M17 7v5" /><path d="M15 12h4v3h-4z" /></svg></span>Construction</Link>
            <Link href="/industries/#hospitality" className="ind-item reveal d2"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg></span>Hospitality</Link>
            <Link href="/industries/#energy" className="ind-item reveal d3"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg></span>Energy</Link>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">FAQ</span>
            <h2 className="reveal d1">Questions employers ask us.</h2>
          </div>
          <div className="faq reveal">
            <details><summary>Which countries do you recruit for?</summary><p>We operate from Dubai and recruit for employers across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman, sourcing candidates locally and internationally.</p></details>
            <details><summary>How is BiznorX different from a typical recruitment agency?</summary><p>We focus on structured execution rather than volume. Every brief starts with role intent, team structure and business direction, and candidates are evaluated with Alix and a consistent framework — so you receive a short, well-reasoned shortlist instead of a stack of CVs.</p></details>
            <details><summary>Can you handle large-volume or urgent hiring?</summary><p>Yes. Our bulk recruitment and manpower teams are set up for high-volume campaigns, with screening, documentation and mobilisation handled end to end.</p></details>
            <details><summary>What is Employer of Record (EOR)?</summary><p>With EOR, BiznorX becomes the legal employer for your hire and manages contracts, payroll and compliance, while the person works fully for you. It’s a fast, compliant way to hire without opening a local entity.</p></details>
            <details><summary>Do candidates pay any fees?</summary><p>No. BiznorX is engaged by employers. Candidates never pay us to be considered for a role.</p></details>
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
