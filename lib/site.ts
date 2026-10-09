// Business details — header, footer, forms and metadata read from here.
// Phone numbers, email and WhatsApp are edited in content/contact.json.
import contact from "@/content/contact.json";

const digits = (n: string) => n.replace(/\D/g, "");

export const site = {
  name: "BiznorX",
  // Preview address for now. At launch: set url to "https://biznorx.com" and live to true (lets Google index the site).
  url: "https://biznorx.zironpro.com",
  live: false,
  email: contact.email,
  dubai: contact.dubai,
  mumbai: contact.mumbai,
  whatsapp: digits(contact.whatsapp),
  updated: "2026-10-08",
};

// Each division gets its own subdomain in production (see deploy/nginx.conf); locally they are /realty/ and /tech/.
export const divisions = {
  realty: { name: "BiznorX Realty", href: "/realty/", domain: "https://realty.biznorx.com" },
  tech: { name: "BiznorX Tech", href: "/tech/", domain: "https://tech.biznorx.com" },
};

export const nav = [
  { href: "/people/", label: "Hire Talent" },
  { href: "/careers/", label: "Find a Job" },
  { href: "/industries/", label: "Industries" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
