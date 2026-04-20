"use client";
import { useLang } from "./ui/LangToggle";
import Icon from "./ui/Icon";
import config from "@/config.json";

export default function ServicesGrid() {
  const { lang } = useLang();

  return (
    <div className="w-full fade-up delay-700">
      <p className="text-xs text-slate-500 text-center mb-3 uppercase tracking-widest">
        {lang === "th" ? "บริการของฉัน" : "My Services"}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {config.services.map((service) => (
          <a
            key={service.labelEn}
            href={config.profile.fastwork}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-3 flex flex-col items-center gap-1.5 text-center hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
          >
            <Icon name={service.icon} size={18} className="text-indigo-400" />
            <span className="text-xs font-medium text-slate-300">
              {lang === "th" ? service.labelTh : service.labelEn}
            </span>
            <span className="text-xs text-indigo-400 font-semibold">{service.price}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
