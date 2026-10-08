"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { initSite } from "@/lib/interactions";

// Wires up motion, forms and widgets for the current page; re-runs (with cleanup) on every navigation.
export function Interactions() {
  const pathname = usePathname();
  useEffect(() => initSite(), [pathname]);
  return null;
}
