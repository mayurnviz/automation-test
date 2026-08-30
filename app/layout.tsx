import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Created with Next.js, TypeScript, and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
