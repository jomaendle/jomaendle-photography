import { ui, defaultLang } from "./ui";
import type { NavItem } from "../models/nav-item.ts";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// write a function which returns the correct language and url for a given NavItem
export function getNavItemLink(lang: keyof typeof ui, item: NavItem) {
  return `/${lang}${item.url}`;
}
