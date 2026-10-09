import press from "@/content/press.json";
import { ArrowUpRight } from "@/components/Icons";

// Press coverage (content/press.json — newest first). The outlet name is set as text, not their logo.
const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export function PressBadge() {
  const p = press[0];
  return (
    <a className="press-badge" href={p.url} target="_blank" rel="noopener">
      <span className="press-label">Featured in</span>
      <span className="press-outlet">{p.outlet}</span>
      <ArrowUpRight />
    </a>
  );
}

export function PressFeature() {
  const p = press[0];
  return (
    <a className="press-feature reveal" href={p.url} target="_blank" rel="noopener">
      <div className="pf-side">
        <span className="pf-kicker">In the news</span>
        <span className="pf-outlet">{p.outlet}</span>
        <span className="pf-date">{fmt(p.date)} · {p.section}</span>
      </div>
      <div className="pf-main">
        <h3>“{p.title}”</h3>
        <p>{p.summary}</p>
        <span className="pf-link">Read the article on khaleejtimes.com <ArrowUpRight /></span>
      </div>
    </a>
  );
}
