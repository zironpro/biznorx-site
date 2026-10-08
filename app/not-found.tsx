import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section center">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>This page has <span className="serif">moved on.</span></h1>
        <p className="lead" style={{ margin: "20px auto 34px" }}>The page you’re looking for doesn’t exist. Let’s get you back on track.</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-red">Go to homepage</Link>
          <Link href="/contact/" className="btn btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
