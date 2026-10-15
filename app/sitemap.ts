import type { MetadataRoute } from "next";
import { divisions, nav, site } from "@/lib/site";

export const dynamic = "force-static";

// All pages, including the Realty and Tech division pages (served at /realty/ and /tech/).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, lastModified: site.updated, priority: 1 },
    ...[...nav.map((n) => n.href), "/alix/", ...Object.values(divisions).map((d) => d.href)]
      .map((href) => ({ url: `${site.url}${href}`, lastModified: site.updated, priority: 0.8 })),
  ];
}
