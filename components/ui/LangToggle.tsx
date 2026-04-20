"use client";
import { useState, createContext, useContext } from "react";

type Lang = "th" | "en";
const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "th",
  toggle: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");
  const toggle = () => setLang((l) => (l === "th" ? "en" : "th"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 glass-card px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-all hover:scale-105"
      aria-label="Toggle language"
    >
      {lang === "th" ? "🇺🇸 EN" : "🇹🇭 TH"}
    </button>
  );
}
