import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TJ's Brew Works | To Joy - Craft Beer & Community",
  description: "Experience TJ's craft beers, delicious food, and vibrant community. Tap into joy with our unique brews and memorable moments.",
  keywords: "craft beer, TJ's Brew Works, brewery, Maharashtra, beer variants, TJ's Tappin, self-pour beer",
  openGraph: {
    title: "TJ's Brew Works | To Joy",
    description: "Good beer. Great people. Chaos optional.",
    type: "website",
  },
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
      </body>
    </html>
  );
}
