import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXPRESS JWT AUTH APP",
  description: "Fullstack Training Project (Express.js, Next.js, JWT)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
