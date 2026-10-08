import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "BiznorX Realty | Premium Property & Land Advisory in Mumbai" },
  description: "BiznorX Realty helps buyers, investors, businesses and NRIs in the UAE & GCC buy, sell, lease and manage property and land in Mumbai and the MMR — with a team on the ground and every document in order.",
  alternates: { canonical: "/realty/" },
};

export default function RealtyPage() {
  return (
    <>
      <section className="rx-hero">
        <img src="/images/mumbai-marine-drive.jpg" alt="Marine Drive, Mumbai, at dusk" fetchPriority="high" className="rx-hero-bg" />
        <div className="container rx-hero-inner">
          <div className="meta-line reveal"><img src="/images/mark-white.png" alt="" /><span>BiznorX Realty</span><i></i><span>Mumbai</span></div>
          <h1 className="words reveal">Your address in Mumbai, <span className="serif">chosen with care.</span></h1>
          <p className="lead reveal d2">Homes, offices and land across Mumbai and the MMR — sourced, verified and secured by a team on the ground, for buyers here and NRIs across the Gulf.</p>

          <form className="rx-search reveal d3" data-whatsapp-realty aria-label="Property enquiry">
            <div className="rx-tabs" role="radiogroup" aria-label="I want to">
              <label><input type="radio" name="Looking to" value="Buy" defaultChecked /><span>Buy</span></label>
              <label><input type="radio" name="Looking to" value="Invest" /><span>Invest</span></label>
              <label><input type="radio" name="Looking to" value="Sell" /><span>Sell</span></label>
              <label><input type="radio" name="Looking to" value="Lease / rent out" /><span>Lease</span></label>
            </div>
            <div className="rx-fields">
              <label className="rx-field"><span>Location</span>
                <select name="Location"><option>Any — advise me</option><option>South Mumbai</option><option>Bandra &amp; Worli</option><option>BKC &amp; Andheri</option><option>Powai</option><option>Thane</option><option>Navi Mumbai</option></select></label>
              <label className="rx-field"><span>Property type</span>
                <select name="Property type"><option>Apartment</option><option>Penthouse / luxury home</option><option>Office</option><option>Retail / showroom</option><option>Land / plot</option></select></label>
              <label className="rx-field"><span>Budget</span>
                <select name="Budget"><option>Under ₹1 Cr</option><option>₹1 – 3 Cr</option><option>₹3 – 7 Cr</option><option>₹7 – 15 Cr</option><option>₹15 Cr +</option></select></label>
              <button className="btn btn-red" type="submit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg> Find property</button>
            </div>
          </form>
        </div>
        <div className="rx-scroll" aria-hidden="true"><span></span></div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow reveal">BiznorX Realty</span>
          <p className="statement reveal d1">Buying property in Mumbai should feel <span className="serif">certain</span> — not stressful. We find the right place, check every document and negotiate the right price, <span className="muted">so you can decide with confidence, whether you live here or abroad.</span></p>
          <div className="rx-pillars reveal d2">
            <div><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span><b>Off-market access</b><p>Opportunities from our network before they reach the open market.</p></div>
            <div><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg></span><b>Every title checked</b><p>Legal, RERA and documentation due diligence on every shortlisted property.</p></div>
            <div><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18M5 21h14M3 7h18M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z" /></svg></span><b>Honest pricing</b><p>Data-led valuation, so you never overpay and always know your return.</p></div>
          </div>
        </div>
      </section>

      <section className="section tint rx-types-section">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">What we offer</span>
              <h2 className="reveal d1">Every kind of property,<br /><span className="serif">one trusted advisor.</span></h2>
            </div>
            <p className="lead reveal d2">Hover to explore. From a first apartment to a portfolio of commercial assets, we handle the search, the paperwork and everything after.</p>
          </div>
          <div className="rx-types reveal">
            <a href="#enquire" className="rx-type">
              <img src="/images/realty-penthouse-view.jpg" alt="High-floor residence with a city view" loading="lazy" />
              <div className="rx-type-body"><span className="rx-num">01</span><h3>Residences</h3><p>Apartments and high-floor homes in established and emerging neighbourhoods.</p><span className="rx-more">Enquire <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></span></div>
            </a>
            <a href="#enquire" className="rx-type">
              <img src="/images/realty-villa.jpg" alt="Luxury home with a private pool" loading="lazy" />
              <div className="rx-type-body"><span className="rx-num">02</span><h3>Luxury homes</h3><p>Penthouses, sea-facing apartments and bungalows, shown privately.</p><span className="rx-more">Enquire <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></span></div>
            </a>
            <a href="#enquire" className="rx-type">
              <img src="/images/realty-office.jpg" alt="Bright modern office space" loading="lazy" />
              <div className="rx-type-body"><span className="rx-num">03</span><h3>Commercial</h3><p>Offices, retail and showrooms — to buy, lease or hold for yield.</p><span className="rx-more">Enquire <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></span></div>
            </a>
            <a href="#enquire" className="rx-type">
              <img src="/images/realty-land.jpg" alt="Aerial view of green land parcels" loading="lazy" />
              <div className="rx-type-body"><span className="rx-num">04</span><h3>Land</h3><p>Plots and land parcels with zoning checks, valuation and negotiation.</p><span className="rx-more">Enquire <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></span></div>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container rx-areas">
          <div className="rx-areas-media reveal">
            <div className="rx-sticky">
              <img src="/images/realty-marine-drive-day.jpg" alt="Marine Drive promenade, South Mumbai" loading="lazy" />
              <span className="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg> Marine Drive, South Mumbai</span>
            </div>
          </div>
          <div>
            <span className="eyebrow reveal">Where we work</span>
            <h2 className="reveal d1">Mumbai &amp; the MMR,<br /><span className="serif">street by street.</span></h2>
            <p className="lead reveal d2" style={{ margin: "20px 0 34px" }}>We focus on the micro-markets we know best — so our advice is specific, current and local.</p>
            <div className="rx-list">
              <a href="#enquire" className="rx-row reveal"><span className="rx-n">01</span><div><b>South Mumbai</b><small>Marine Drive · Malabar Hill · Colaba</small></div><span className="rx-tag">Luxury · Heritage</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
              <a href="#enquire" className="rx-row reveal"><span className="rx-n">02</span><div><b>Bandra &amp; Worli</b><small>Sea-facing living · Lifestyle hubs</small></div><span className="rx-tag">Premium residential</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
              <a href="#enquire" className="rx-row reveal"><span className="rx-n">03</span><div><b>BKC &amp; Andheri</b><small>Business districts · Airport access</small></div><span className="rx-tag">Commercial · Rental</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
              <a href="#enquire" className="rx-row reveal"><span className="rx-n">04</span><div><b>Powai</b><small>Lakeside townships · Tech corridor</small></div><span className="rx-tag">Family homes</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
              <a href="#enquire" className="rx-row reveal"><span className="rx-n">05</span><div><b>Thane</b><small>Green spaces · New launches</small></div><span className="rx-tag">Value · Growth</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
              <a href="#enquire" className="rx-row reveal"><span className="rx-n">06</span><div><b>Navi Mumbai</b><small>Planned city · Infrastructure-led growth</small></div><span className="rx-tag">Investment · Land</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
            </div>
          </div>
        </div>
      </section>

      <section className="rx-nri">
        <img src="/images/realty-sealink-shore.jpg" alt="Bandra–Worli Sea Link from the shore" loading="lazy" className="rx-nri-bg" />
        <div className="container rx-nri-inner">
          <div className="rx-nri-head">
            <span className="eyebrow reveal">For NRIs in the UAE &amp; GCC</span>
            <h2 className="reveal d1">Living in the Gulf?<br /><span className="serif">Own in Mumbai.</span></h2>
            <p className="lead reveal d2">Our Dubai headquarters and Mumbai team work together, so you can buy, rent out and manage property back home — without flying in for every step.</p>
            <div className="hero-actions reveal d3">
              <a href="#enquire" className="btn btn-red">Book a consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              <a href="https://wa.me/971522585437?text=Hi%20BiznorX%20Realty%2C%20I%27m%20an%20NRI%20interested%20in%20Mumbai%20property." target="_blank" rel="noopener" className="btn btn-glass"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.6-8.4z" /></svg> WhatsApp from the UAE</a>
            </div>
          </div>
          <div className="rx-nri-steps">
            <div className="rx-step reveal"><span>01</span><b>Remote shortlisting</b><p>Curated options with video walkthroughs and honest notes on each.</p></div>
            <div className="rx-step reveal d1"><span>02</span><b>Legal &amp; title checks</b><p>RERA, title and society documents verified before you commit.</p></div>
            <div className="rx-step reveal d2"><span>03</span><b>Registration support</b><p>Power of attorney, payments and registration coordinated for you.</p></div>
            <div className="rx-step reveal d3"><span>04</span><b>Rent &amp; manage</b><p>Tenant search, rent collection and upkeep while you’re abroad.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-split">
            <div>
              <span className="eyebrow reveal">Services</span>
              <h2 className="reveal d1">End-to-end,<br /><span className="serif">start to keys.</span></h2>
            </div>
            <p className="lead reveal d2">One advisory team for every stage — so nothing falls between the cracks.</p>
          </div>
          <div className="rx-services">
            <div className="rx-svc reveal"><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg></span><div><h3>Land brokerage</h3><p>Acquire and sell land with market analysis, zoning checks and expert negotiation.</p></div></div>
            <div className="rx-svc reveal d1"><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" /></svg></span><div><h3>Buyer advisory</h3><p>Evaluation, inspections, financing structure and closing — handled for you.</p></div></div>
            <div className="rx-svc reveal"><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 7 13.5 15.5 8.5 10.5 2 17" /><path d="M16 7h6v6" /></svg></span><div><h3>Selling &amp; marketing</h3><p>Premium presentation, qualified buyers and strong negotiation.</p></div></div>
            <div className="rx-svc reveal d1"><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span><div><h3>Off-market sourcing</h3><p>Exclusive opportunities matched to your investment criteria.</p></div></div>
            <div className="rx-svc reveal"><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18M5 21h14M3 7h18M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z" /></svg></span><div><h3>Investment advisory</h3><p>Yield analysis, ROI modelling and risk-aware portfolio strategy.</p></div></div>
            <div className="rx-svc reveal d1"><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg></span><div><h3>Commercial leasing</h3><p>Offices, retail and warehousing — with tenant representation.</p></div></div>
            <div className="rx-svc reveal"><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg></span><div><h3>NRI property services</h3><p>Buy, rent out and manage Mumbai property from the UAE &amp; GCC.</p></div></div>
            <div className="rx-svc reveal d1"><span className="rx-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg></span><div><h3>Documentation</h3><p>Title deeds, transfers, approvals and due diligence without friction.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">How we work</span>
            <h2 className="reveal d1">Four steps <span className="serif">to your keys.</span></h2>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="dot">01</div><h3>Understand</h3><p>Your goals, budget, timeline and preferred neighbourhoods.</p></div>
            <div className="step reveal d1"><div className="dot">02</div><h3>Shortlist</h3><p>Listed and off-market options that genuinely fit — nothing to fill a list.</p></div>
            <div className="step reveal d2"><div className="dot">03</div><h3>Verify</h3><p>Valuation, site visits and full legal due diligence on each option.</p></div>
            <div className="step reveal d3"><div className="dot">04</div><h3>Close &amp; care</h3><p>Negotiation, registration, handover — and management if you need it.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow reveal">FAQ</span>
            <h2 className="reveal d1">Questions we’re <span className="serif">often asked.</span></h2>
          </div>
          <div className="faq reveal">
            <details><summary>Where do you operate?</summary><p>BiznorX Realty focuses on Mumbai and the wider MMR — South Mumbai, Bandra, Worli, BKC, Andheri, Powai, Thane and Navi Mumbai — with our team based in Mumbai and NRI support from our Dubai headquarters.</p></details>
            <details><summary>I live in the UAE. Can you help me buy in Mumbai?</summary><p>Yes — this is one of the things we do best. We shortlist, inspect and negotiate on your behalf, coordinate documentation and registration, and can manage the property after purchase.</p></details>
            <details><summary>Do you check legal documents before I buy?</summary><p>Every shortlisted property goes through title, RERA and society document checks before you’re asked to commit.</p></details>
            <details><summary>Can you help a business find office or retail space?</summary><p>Yes — we source and negotiate offices, retail units and industrial space across Mumbai and the MMR, to buy or to lease.</p></details>
          </div>
        </div>
      </section>

      <section className="rx-cta" id="enquire">
        <img src="/images/realty-interior.jpg" alt="Elegant living room at dusk" loading="lazy" className="rx-cta-bg" />
        <div className="container rx-cta-inner">
          <div>
            <span className="eyebrow reveal">Private consultation</span>
            <h2 className="reveal d1">Let’s find your place<br /><span className="serif">in Mumbai.</span></h2>
            <p className="lead reveal d2">Tell us what you’re looking for. An advisor will call you back with a first shortlist and honest advice.</p>
            <ul className="rx-contact reveal d3">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg> <a href="tel:+919004072449">+91 90040 72449</a> <small>Mumbai</small></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg> <a href="tel:+971522585437">+971 52 258 5437</a> <small>Dubai · NRI desk</small></li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg> <a href="mailto:business@biznorx.com">business@biznorx.com</a></li>
            </ul>
          </div>
          <form className="hero-form reveal d2" data-whatsapp-realty>
            <span className="hf-kicker">BiznorX Realty</span>
            <h2>Request a callback</h2>
            <p>We usually reply within one business day.</p>
            <div className="fields">
              <div className="field"><label htmlFor="r-name">Full name</label><input id="r-name" name="Name" required autoComplete="name" /></div>
              <div className="field"><label htmlFor="r-phone">Phone / WhatsApp</label><input id="r-phone" name="Phone" type="tel" required autoComplete="tel" /></div>
              <div className="field"><label htmlFor="r-live">I live in</label><select id="r-live" name="Based in"><option>Mumbai / India</option><option>UAE</option><option>Other GCC country</option><option>Elsewhere abroad</option></select></div>
              <div className="field"><label htmlFor="r-want">Looking to</label><select id="r-want" name="Looking to"><option>Buy a home</option><option>Invest</option><option>Sell</option><option>Lease commercial space</option><option>Buy land</option><option>Rent out / manage</option></select></div>
              <div className="field full"><label htmlFor="r-msg">Anything else?</label><input id="r-msg" name="Details" placeholder="Area, size, budget, timeline…" /></div>
            </div>
            <button className="btn btn-red" type="submit">Request callback <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
            <small className="hf-note">Opens WhatsApp with your details · or email <a href="mailto:business@biznorx.com">business@biznorx.com</a></small>
          </form>
        </div>
      </section>
    </>
  );
}
