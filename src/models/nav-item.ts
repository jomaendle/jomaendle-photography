import type { ui } from "../i18n/ui.ts";

export type NavItem = {
  labelKey: keyof (typeof ui)["de"];
  url: string;
};

export const LINKS: NavItem[] = [
  {
    labelKey: "nav.work",
    url: "/",
  },
  {
    labelKey: "nav.services",
    url: "/services",
  },
  {
    labelKey: "nav.FAQ",
    url: "/faq",
  },
  {
    labelKey: "nav.contact",
    url: "/contact",
  },
];
