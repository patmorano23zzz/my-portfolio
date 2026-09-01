import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrick Morano | Portfolio",
  description:
    "Portfolio of Patrick Morano — BS Computer Science student building clean, efficient, and purposeful web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
