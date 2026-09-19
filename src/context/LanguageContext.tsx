import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'pt-BR' | 'en';

interface LanguageContextValue {
  lang: Lang;
}

const LanguageContext = createContext<LanguageContextValue>({ lang: 'pt-BR' });

interface LanguageProviderProps {
  lang: Lang;
  children: ReactNode;
}

export function LanguageProvider({ lang, children }: LanguageProviderProps) {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
