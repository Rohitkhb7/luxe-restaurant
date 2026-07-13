import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Étoile | Contemporary Haute Cuisine & Fine Dining",
  description: "Experience culinary mastery at L'Étoile. Our curated seasonal tasting menus blend traditional techniques with contemporary artistry in an atmosphere of pure luxury.",
  keywords: ["fine dining", "luxury restaurant", "contemporary cuisine", "gastronomy", "michelin star restaurant"],
  authors: [{ name: "L'Étoile Culinary Team" }],
  openGraph: {
    title: "L'Étoile | Contemporary Haute Cuisine & Fine Dining",
    description: "Experience culinary mastery at L'Étoile. Curated tasting menus in an elegant dark-mode luxury setting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-gold/30 selection:text-gold">
        {children}
      </body>
    </html>
  );
}
