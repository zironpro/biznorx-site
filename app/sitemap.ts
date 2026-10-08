import type { MetadataRoute } from "next";
import { divisions, nav, site } from "@/lib/site";

export const dynamic = "force-static";

// Main-domain pages; the divisions are listed under their own subdomains.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, lastModified: site.updated, priority: 1 },
    ...[...nav.map((n) => n.href), "/alix/"].map((href) => ({ url: `${site.url}${href}`, lastModified: site.updated, priority: 0.8 })),
    ...Object.values(divisions).map((d) => ({ url: `${d.domain}/`, lastModified: site.updated, priority: 0.8 })),
  ];
}
