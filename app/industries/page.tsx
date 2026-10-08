import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Industries We Recruit For | BiznorX People UAE & GCC" },
  description: "BiznorX People recruits across the UAE and GCC in technology, manufacturing, logistics, finance, healthcare, construction, real estate, hospitality, retail, energy, aviation and education.",
  alternates: { canonical: "/industries/" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="crumbs reveal"><Link href="/">BiznorX Group</Link><span>/</span><Link href="/people/">People</Link><span>/</span>Industries</div>
          <span className="eyebrow reveal">Industries</span>
          <h1 className="reveal d1">Solving workforce challenges<br />across <span className="serif">every major vertical.</span></h1>
          <p className="lead reveal d2">Every sector hires differently. We adapt our approach to the workforce complexity, regulation and pace of your industry — across the UAE and the GCC.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card ind-card reveal" id="technology"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" /></svg></span><h3>Technology</h3><p>Engineering, product and IT talent for software companies, digital teams and enterprise IT.</p><div className="roles"><span className="chip">Software engineers</span><span className="chip">Data & AI</span><span className="chip">Cloud & DevOps</span><span className="chip">IT support</span></div></div>
            <div className="card ind-card reveal d1" id="manufacturing"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 20V9l6 4V9l6 4V4h6v16z" /><path d="M6 17h2M11 17h2M16 17h2" /></svg></span><h3>Manufacturing</h3><p>Plant, production and quality teams that keep operations running at scale.</p><div className="roles"><span className="chip">Plant managers</span><span className="chip">Production supervisors</span><span className="chip">QA/QC</span><span className="chip">Maintenance techs</span></div></div>
            <div className="card ind-card reveal d2" id="logistics"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></span><h3>Logistics</h3><p>Supply chain, warehousing and fleet talent across the UAE’s trade hubs.</p><div className="roles"><span className="chip">Ops managers</span><span className="chip">Warehouse staff</span><span className="chip">Drivers</span><span className="chip">Procurement</span></div></div>
            <div className="card ind-card reveal" id="finance"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 9 9-6 9 6M5 9v9M9 9v9M15 9v9M19 9v9M3 21h18" /></svg></span><h3>Banking &amp; Finance</h3><p>Finance professionals who combine technical depth with regulatory awareness.</p><div className="roles"><span className="chip">Finance controllers</span><span className="chip">Accountants</span><span className="chip">Risk & compliance</span><span className="chip">Relationship managers</span></div></div>
            <div className="card ind-card reveal d1" id="healthcare"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" /><path d="M12 9v5M9.5 11.5h5" /></svg></span><h3>Healthcare</h3><p>Licensed clinical and allied health professionals for hospitals and clinics.</p><div className="roles"><span className="chip">Nurses</span><span className="chip">Doctors</span><span className="chip">Allied health</span><span className="chip">Clinic admin</span></div></div>
            <div className="card ind-card reveal d2" id="construction"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 21V3l14 4H6M6 7l6 14M2 21h8M17 7v5" /><path d="M15 12h4v3h-4z" /></svg></span><h3>Construction</h3><p>Project, engineering and site manpower for build and infrastructure projects.</p><div className="roles"><span className="chip">Project managers</span><span className="chip">Site engineers</span><span className="chip">Foremen</span><span className="chip">Skilled trades</span></div></div>
            <div className="card ind-card reveal" id="real-estate"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" /></svg></span><h3>Real Estate</h3><p>Sales, leasing and property management talent for developers and agencies.</p><div className="roles"><span className="chip">Property consultants</span><span className="chip">Leasing</span><span className="chip">Facilities</span><span className="chip">Community managers</span></div></div>
            <div className="card ind-card reveal d1" id="hospitality"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg></span><h3>Hospitality</h3><p>Guest-facing and back-of-house teams for hotels, F&B and leisure.</p><div className="roles"><span className="chip">F&B staff</span><span className="chip">Front office</span><span className="chip">Housekeeping</span><span className="chip">Chefs</span></div></div>
            <div className="card ind-card reveal d2" id="retail"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg></span><h3>Retail</h3><p>Store, merchandising and regional teams for retail and e-commerce brands.</p><div className="roles"><span className="chip">Store managers</span><span className="chip">Sales associates</span><span className="chip">Merchandisers</span><span className="chip">E-commerce</span></div></div>
            <div className="card ind-card reveal" id="energy"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg></span><h3>Energy</h3><p>Technical and HSE talent for oil & gas, utilities and renewables.</p><div className="roles"><span className="chip">Engineers</span><span className="chip">HSE officers</span><span className="chip">Technicians</span><span className="chip">Project controls</span></div></div>
            <div className="card ind-card reveal d1" id="aviation"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg></span><h3>Aviation</h3><p>Ground operations, engineering and customer service talent for aviation.</p><div className="roles"><span className="chip">Ground handling</span><span className="chip">Aircraft maintenance</span><span className="chip">Cabin & customer service</span><span className="chip">Ops control</span></div></div>
            <div className="card ind-card reveal d2" id="education"><span className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z" /><path d="M4 19.5V22h16" /></svg></span><h3>Education</h3><p>Teachers, academic leaders and administrators for schools and training providers.</p><div className="roles"><span className="chip">Teachers</span><span className="chip">Academic leads</span><span className="chip">Admissions</span><span className="chip">Administration</span></div></div>
          </div>
          <p className="center reveal" style={{ marginTop: "48px" }}>Don’t see your industry? <Link href="/contact/?division=people#form" className="link-arrow">Tell us what you’re hiring for <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></p>
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
