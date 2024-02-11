import type { ui } from "../i18n/ui.ts";

export type NavItem = {
  labelKey: keyof (typeof ui)["de"];
  url: string;
};

export const LINKS: NavItem[] = [
  {
    labelKey: "nav.people",
    url: "/",
  },
  {
    labelKey: "nav.nature",
    url: "/nature",
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
