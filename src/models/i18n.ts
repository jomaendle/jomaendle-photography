import { defaultLang, ui } from '@/i18n/ui.ts';

export type TranslationFunction = (key: keyof (typeof ui)[typeof defaultLang]) => string;
