"use client";
import { useLang } from "./ui/LangToggle";
import Icon from "./ui/Icon";
import type { LinkItem } from "@/types";

interface LinkButtonProps {
  link: LinkItem;
  index: number;
}

export default function LinkButton({ link, index }: LinkButtonProps) {
  const { lang } = useLang();
  const label = lang === "th" ? link.labelTh : link.labelEn;
  const delayClass = `delay-${Math.min((index + 3) * 100, 800)}`;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-btn fade-up ${delayClass} group`}
      style={link.featured ? { borderColor: `${link.color}40` } : {}}
    >
      {/* Icon */}
      <span
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ background: `${link.color}20`, color: link.color }}
      >
        <Icon name={link.icon} size={20} />
      </span>

      {/* Label */}
      <span className="flex-1 text-sm font-medium text-slate-200 text-left">
        {label}
        {link.featured && (
          <span
            className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{ background: `${link.color}20`, color: link.color }}
          >
            {lang === "th" ? "แนะนำ" : "Featured"}
          </span>
        )}
      </span>

      {/* Arrow */}
      <Icon
        name="external-link"
        size={16}
        className="text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0"
      />
    </a>
  );
}
