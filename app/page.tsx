import { LangProvider, LangToggle } from "@/components/ui/LangToggle";
import ProfileCard from "@/components/ProfileCard";
import LinkButton from "@/components/LinkButton";
import ServicesGrid from "@/components/ServicesGrid";
import config from "@/config.json";

export default function Home() {
  return (
    <LangProvider>
      <LangToggle />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-start py-12 px-4">
        <div className="w-full max-w-sm flex flex-col gap-5">

          {/* Profile */}
          <ProfileCard />

          {/* Divider */}
          <div className="flex items-center gap-3 fade-up delay-300">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-slate-600">links</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {config.links.map((link, i) => (
              <LinkButton key={link.id} link={link} index={i} />
            ))}
          </div>

          {/* Services */}
          <ServicesGrid />

          {/* Footer */}
          <p className="text-center text-xs text-slate-700 fade-up delay-800 pb-4">
            © 2025 IQ — ธีรภัทร เตโช
          </p>
        </div>
      </main>
    </LangProvider>
  );
}
