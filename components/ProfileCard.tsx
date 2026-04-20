"use client";
import Image from "next/image";
import { useLang } from "./ui/LangToggle";
import config from "@/config.json";

export default function ProfileCard() {
  const { lang } = useLang();
  const { profile } = config;

  return (
    <div className="flex flex-col items-center text-center fade-up">
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/10 ring-offset-2 ring-offset-transparent">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
            onError={(e) => {
              // Fallback to initials if image fails
              e.currentTarget.style.display = "none";
            }}
          />
          {/* Fallback initials */}
          <div className="absolute inset-0 flex items-center justify-center bg-indigo-600 text-white text-2xl font-bold rounded-full" style={{ fontFamily: "'Prompt', sans-serif" }}>
            IQ
          </div>
        </div>
        {/* Online indicator */}
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0a0a0f] block" />
      </div>

      {/* Name */}
      <h1
        className="text-xl font-semibold text-white flex items-center gap-2"
        style={{ fontFamily: "'Prompt', sans-serif" }}
      >
        {lang === "th" ? profile.name : profile.nameEn}
        {profile.verified && (
          <span className="inline-flex items-center justify-center w-5 h-5 bg-indigo-500 rounded-full">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
              <polyline points="20 6 9 17 4 12" strokeWidth="3" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </h1>

      {/* Role */}
      <p className="text-sm text-indigo-400 font-medium mt-1">
        {lang === "th" ? profile.role : profile.roleEn}
      </p>

      {/* Bio */}
      <p className="text-sm text-slate-400 mt-3 leading-relaxed max-w-xs whitespace-pre-line">
        {lang === "th" ? profile.bio : profile.bioEn}
      </p>
    </div>
  );
}
