import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Common Ground — A place to begin",
  description:
    "Find resources, discover opportunities, and explore what is available in your community.",
  icons: {
    icon: "/common-ground-logo.png",
    apple: "/common-ground-logo.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8e9a9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
