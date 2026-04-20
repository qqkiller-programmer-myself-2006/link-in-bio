import type { Metadata } from "next";
import "./globals.css";
import config from "@/config.json";

export const metadata: Metadata = {
  title: `${config.profile.name} — Full Stack Developer`,
  description: config.profile.bio,
  openGraph: {
    title: config.profile.name,
    description: config.profile.bio,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: config.profile.name,
    description: config.profile.bio,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
