import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "BiznorX Tech | Web, App & Digital Solutions — Worldwide" },
  description: "BiznorX Tech builds websites, mobile apps, UI/UX, branding, digital marketing, AI automation and e-commerce for businesses worldwide, from our UAE base.",
  alternates: { canonical: "/tech/" },
};

export default function TechPage() {
  return (
    <>
      <section className="hero dhero">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="container hero-grid">
          <div>
            <div className="crumbs reveal"><Link href="/">BiznorX Group</Link><span>/</span>Tech</div>
            <span className="div-lockup reveal"><img src="/images/mark.png" alt="" />BiznorX <b>Tech</b><small>Worldwide</small></span>
            <h1 className="reveal d1">Digital that moves<br />your business <span className="serif">forward.</span></h1>
            <p className="lead reveal d2">From our UAE base, BiznorX Tech builds, markets and automates digital experiences for clients worldwide — high-performance websites and apps, SEO, branding and AI-powered workflows.</p>
            <div className="hero-actions reveal d3">
              <Link href="/contact/?division=tech#form" className="btn btn-red">Start a project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              <a href="https://wa.me/971522585437?text=Hi%20BiznorX%20Tech%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener" className="btn btn-ghost"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.6-8.4z" /></svg> WhatsApp us</a>
            </div>
          </div>
          <div className="dhero-media reveal d2">
            <div className="ph"><img src="/images/tech-code.jpg" alt="Code on screens in a dark workspace" fetchPriority="high" /></div>
            <span className="market-pill">Worldwide</span>
            <div className="match-card">
              <div className="match-top"><span className="tag"><img src="/images/mark.png" alt="" />BiznorX Tech · Delivery</span><span className="live">In progress</span></div>
              <div className="role"><small>Project</small><h4>Website + app + growth</h4><div className="chips"><span className="chip">Next.js</span><span className="chip">React Native</span><span className="chip">SEO</span></div></div>
              <div className="cands">
                <div className="cand top"><span className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span><div><b>Strategy</b><span>Audit &amp; roadmap</span></div><div className="score"><b>✓</b></div></div>
                <div className="cand top"><span className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6" /></svg></span><div><b>Build</b><span>Design, develop &amp; QA</span></div><div className="score"><b>✓</b></div></div>
                <div className="cand"><span className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 7 13.5 15.5 8.5 10.5 2 17" /><path d="M16 7h6v6" /></svg></span><div><b>Grow</b><span>Marketing &amp; optimisation</span></div><div className="score"><b>…</b></div></div>
              </div>
              <div className="match-foot"><span>Built to <b>convert</b></span><span>Measured on results</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint" id="services">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">Capabilities</span>
              <h2 className="reveal d1">Everything you need to win online.</h2>
            </div>
            <p className="lead reveal d2">In a digital-first world, your technology defines how fast you can grow. We design, build and scale it with you.</p>
          </div>
          <div className="grid-3">
            <div className="card reveal"><span className="num">01</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6" /></svg></span><h3>Web Development</h3><p>Fast, secure, scalable websites and web apps built for engagement and conversion.</p><div className="chips"><span className="chip">Next.js</span><span className="chip">React</span><span className="chip">Node.js</span></div></div>
            <div className="card reveal d1"><span className="num">02</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg></span><h3>Mobile Applications</h3><p>Native and cross-platform iOS and Android apps — from concept to app store.</p><div className="chips"><span className="chip">React Native</span><span className="chip">iOS</span><span className="chip">Android</span></div></div>
            <div className="card reveal d2"><span className="num">03</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></svg></span><h3>UI/UX Design</h3><p>Research-led interfaces, wireframes and prototypes that feel natural to use.</p><div className="chips"><span className="chip">Figma</span><span className="chip">Prototyping</span><span className="chip">Usability</span></div></div>
            <div className="card reveal"><span className="num">04</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 7 13.5 15.5 8.5 10.5 2 17" /><path d="M16 7h6v6" /></svg></span><h3>Digital Marketing</h3><p>SEO, performance ads and social media that generate qualified leads.</p><div className="chips"><span className="chip">SEO</span><span className="chip">PPC</span><span className="chip">Social media</span></div></div>
            <div className="card reveal d1"><span className="num">05</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg></span><h3>Branding</h3><p>Visual identities, brand guidelines and positioning that build authority.</p><div className="chips"><span className="chip">Identity</span><span className="chip">Guidelines</span></div></div>
            <div className="card reveal d2"><span className="num">06</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3" /></svg></span><h3>AI &amp; Automation</h3><p>Workflow automation, predictive analytics and data pipelines that save time.</p><div className="chips"><span className="chip">Automation</span><span className="chip">Analytics</span></div></div>
            <div className="card reveal"><span className="num">07</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg></span><h3>E-Commerce</h3><p>Online stores with secure payments, inventory and conversion-optimised checkout.</p><div className="chips"><span className="chip">Shopify</span><span className="chip">Custom</span><span className="chip">Payments</span></div></div>
            <div className="card reveal d1"><span className="num">08</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg></span><h3>Technical Consulting</h3><p>Architecture, digital transformation and technology strategy for growing teams.</p><div className="chips"><span className="chip">Strategy</span><span className="chip">Architecture</span></div></div>
            <div className="card reveal d2"><span className="num">09</span><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg></span><h3>Software Services</h3><p>Custom business software — scalable, secure and built around how you work.</p><div className="chips"><span className="chip">Custom apps</span><span className="chip">Integrations</span></div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">The BiznorX standard</span>
              <h2 className="reveal d1">Why brands choose BiznorX Tech.</h2>
            </div>
          </div>
          <div className="why why-4 reveal">
            <div className="why-item"><small>Strategy first</small><h3>Audit before build</h3><p>Every engagement starts with understanding your ecosystem, so we solve the right problem.</p></div>
            <div className="why-item"><small>Premium</small><h3>Design standards</h3><p>Products that look and feel exceptional — and perform on every device.</p></div>
            <div className="why-item"><small>Measurable</small><h3>Revenue-focused</h3><p>Transparent reporting on rankings, traffic, leads and conversions.</p></div>
            <div className="why-item"><small>Long-term</small><h3>Growth partner</h3><p>We don’t launch and leave — we keep optimising as you grow.</p></div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">How we work</span>
            <h2 className="reveal d1">A clear process, start to finish.</h2>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="dot">01</div><h3>Discover</h3><p>A deep dive into your goals, audience, competitors and digital footprint.</p></div>
            <div className="step reveal d1"><div className="dot">02</div><h3>Strategise</h3><p>A phased roadmap showing exactly what we’ll do, why, and expected outcomes.</p></div>
            <div className="step reveal d2"><div className="dot">03</div><h3>Build</h3><p>Design, development and content — QA-tested against your objectives.</p></div>
            <div className="step reveal d3"><div className="dot">04</div><h3>Grow</h3><p>Launch, measure and continuously optimise for results.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">FAQ</span>
            <h2 className="reveal d1">Questions we’re often asked.</h2>
          </div>
          <div className="faq reveal">
            <details><summary>What kind of projects do you take on?</summary><p>Websites, web apps, mobile apps, e-commerce stores, branding, digital marketing and automation — as single projects or ongoing partnerships.</p></details>
            <details><summary>Do you work with businesses outside the UAE?</summary><p>Yes. BiznorX Tech is a global practice — we work with clients in the GCC, India, Europe and beyond, collaborating remotely across time zones.</p></details>
            <details><summary>Can you also run our marketing after launch?</summary><p>Yes — SEO, paid ads, social media and conversion optimisation can run as a monthly retainer.</p></details>
            <details><summary>How long does a website take?</summary><p>It depends on scope; we share a clear timeline in the roadmap before any work begins.</p></details>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-block reveal">
            <div>
              <span className="eyebrow">BiznorX Tech</span>
              <h2>Ready to engineer your growth?</h2>
              <p>Tell us about your website, app or marketing goals. We’ll come back with a clear, phased plan.</p>
            </div>
            <div className="cta-actions">
              <Link href="/contact/?division=tech#form" className="btn btn-light">Start a project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              <a href="https://wa.me/971522585437" target="_blank" rel="noopener" className="btn btn-outline-light">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
