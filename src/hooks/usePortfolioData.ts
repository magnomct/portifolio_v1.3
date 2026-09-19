import { useLanguage } from '@/context/LanguageContext';
import type { Lang } from '@/context/LanguageContext';
import * as ptBR from '@/data/portfolio';
import * as en from '@/data/portfolio.en';

const dataMap = {
  'pt-BR': ptBR,
  'en': en,
} as const;

export function usePortfolioData() {
  const { lang } = useLanguage();
  return dataMap[lang];
}

/**
 * Generic translation helper.
 * Each slide defines its own `translations` object like:
 *   const t = { 'pt-BR': { ... }, 'en': { ... } };
 * Then calls: const text = useTranslations(t);
 */
export function useTranslations<T>(translations: Record<Lang, T>): T {
  const { lang } = useLanguage();
  return translations[lang];
}
