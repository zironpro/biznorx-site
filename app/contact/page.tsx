import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact BiznorX Group | Dubai & Mumbai Offices" },
  description: "Talk to BiznorX — People (UAE & GCC recruitment), Realty (Mumbai real estate) or Tech (worldwide digital). Call +971 52 258 5437 (Dubai) or +91 90040 72449 (Mumbai), or email business@biznorx.com.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="container">
          <div className="crumbs reveal"><Link href="/">Home</Link><span>/</span>Contact</div>
          <span className="eyebrow reveal">Contact</span>
          <h1 className="reveal d1">Let’s talk about<br /><span className="serif">what’s next.</span></h1>
          <p className="lead reveal d2">Whether you’re hiring, investing in property or building something digital, tell us what you need and the right BiznorX team will reply within one business day.</p>
        </div>
      </section>

      <section className="section" id="form">
        <div className="container split" style={{ alignItems: "start" }}>
          <form className="form-card reveal" data-mailto="contact">
            <div className="tabs" data-tabs="division">
              <button type="button" data-v="people">Hiring</button>
              <button type="button" data-v="general">General</button>
              <button type="button" data-v="realty">Realty</button>
              <button type="button" data-v="tech">Tech</button>
            </div>
            <input type="hidden" name="Division" data-division />
            <div className="fields">
              <div className="field"><label htmlFor="f-name">Full name</label><input id="f-name" name="Name" required autoComplete="name" /></div>
              <div className="field"><label htmlFor="f-company">Company <small style={{ fontWeight: "400" }}>(optional)</small></label><input id="f-company" name="Company" autoComplete="organization" /></div>
              <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" name="Email" type="email" required autoComplete="email" /></div>
              <div className="field"><label htmlFor="f-phone">Phone / WhatsApp</label><input id="f-phone" name="Phone" type="tel" autoComplete="tel" /></div>
              <div className="field" data-for="people"><label htmlFor="f-service">Service</label>
                <select id="f-service" name="Recruitment service"><option>Executive Recruitment</option><option>Bulk Recruitment</option><option>EOR Services</option><option>Skilled Manpower</option><option>Global Placement</option><option>Training Academy</option><option>Not sure yet</option></select></div>
              <div className="field" data-for="people"><label htmlFor="f-loc">Hiring location</label>
                <select id="f-loc" name="Hiring location"><option>UAE</option><option>Saudi Arabia</option><option>Qatar</option><option>Kuwait</option><option>Bahrain</option><option>Oman</option><option>Multiple GCC countries</option></select></div>
              <div className="field" data-for="realty"><label htmlFor="f-interest">I’m interested in</label>
                <select id="f-interest" name="Property interest"><option>Buying property</option><option>Selling property</option><option>Commercial space / leasing</option><option>Land</option><option>Investment advice</option><option>NRI property services</option></select></div>
              <div className="field" data-for="realty"><label htmlFor="f-market">Area</label>
                <select id="f-market" name="Property area"><option>Mumbai city</option><option>Navi Mumbai</option><option>Thane</option><option>Elsewhere in MMR</option><option>Not sure yet</option></select></div>
              <div className="field" data-for="tech"><label htmlFor="f-tech">Project type</label>
                <select id="f-tech" name="Tech project"><option>Website</option><option>Mobile app</option><option>Digital marketing / SEO</option><option>Branding</option><option>AI &amp; automation</option><option>E-commerce</option><option>Custom software</option><option>Not sure yet</option></select></div>
              <div className="field" data-for="tech"><label htmlFor="f-time">Timeline</label>
                <select id="f-time" name="Timeline"><option>As soon as possible</option><option>1–3 months</option><option>3+ months</option><option>Just exploring</option></select></div>
              <div className="field full"><label htmlFor="f-msg">How can we help?</label><textarea id="f-msg" name="Message" placeholder="Tell us a little about what you need…"></textarea></div>
            </div>
            <button className="btn btn-red" type="submit" style={{ marginTop: "22px", width: "100%", justifyContent: "center" }}>Send enquiry <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
            <p className="form-note" data-for="people">Looking for a job instead? <Link className="red" href="/careers/#apply">Upload your CV on our careers page</Link>.</p>
            <div className="form-ok">Your email app should now be open with your enquiry — press send and we’ll be in touch.</div>
          </form>
          <div className="reveal d1" style={{ display: "grid", gap: "20px" }}>
            <div className="office dark">
              <div className="clock" data-clock="Asia/Dubai"><b>--:--</b><span></span></div>
              <span className="country">Group HQ · People · Tech</span>
              <div className="city">Dubai</div>
              <ul>
                <li><a href="tel:+971522585437"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg> +971 52 258 5437</a></li>
                <li><a href="https://wa.me/971522585437" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.6-8.4z" /></svg> WhatsApp us</a></li>
                <li><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg> Dubai, United Arab Emirates</span></li>
              </ul>
            </div>
            <div className="office">
              <div className="clock" data-clock="Asia/Kolkata"><b>--:--</b><span></span></div>
              <span className="country">BiznorX Realty</span>
              <div className="city">Mumbai</div>
              <ul>
                <li><a href="tel:+919004072449"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg> +91 90040 72449</a></li>
                <li><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg> Mumbai, Maharashtra, India</span></li>
              </ul>
            </div>
            <a href="mailto:business@biznorx.com" className="card" style={{ display: "flex", gap: "16px", alignItems: "center", padding: "24px 28px" }}>
              <span className="icon" style={{ margin: "0" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></span>
              <div><b style={{ color: "var(--navy)", fontFamily: "var(--font-display)" }}>business@biznorx.com</b><p style={{ fontSize: ".88rem" }}>For all divisions, partnerships and general enquiries</p></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
