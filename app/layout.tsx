import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Thendy Hose | Practical Systems Builder",
    template: "%s | Thendy Hose",
  },
  description:
    "Interactive engineering portfolio for tax automation, booking systems, and financial UI logic.",
  keywords: [
    "Thendy Hose",
    "portfolio",
    "Next.js",
    "TypeScript",
    "systems builder",
    "tax engine",
  ],
  openGraph: {
    title: "Thendy Hose | Practical Systems Builder",
    description:
      "Interactive proof-of-work portfolio with tax, scheduling, and budget sandboxes.",
    type: "website",
    siteName: "Thendy Hose Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thendy Hose | Practical Systems Builder",
    description:
      "Interactive proof-of-work portfolio with tax, scheduling, and budget sandboxes.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#090d16] text-slate-100">{children}</body>
    </html>
  );
}
