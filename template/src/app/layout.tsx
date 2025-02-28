

import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const fontBarlow = Barlow({
  subsets: ["latin"], 
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Template Personal Trainer",
  description: "Descrição",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontBarlow.className}>{children}</body>
    </html>
  );
}
