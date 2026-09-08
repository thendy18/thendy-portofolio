import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Thendy Hose | Practical Systems Builder",
  description: "Building Compliant Tax Engines, Operational Scheduling, and Financial Systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
