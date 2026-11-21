
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://madebytrie.vercel.app"),
  title: {
    default: "madebytrie. — Independent Web Designer & Developer",
    template: "%s | madebytrie.",
  },
  description:
    "I'm Trie, an independent web designer and developer creating modern, thoughtful, and effective websites for businesses.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "Web Designer",
    "Web Developer",
    "WordPress Designer",
    "Elementor Developer",
    "Website Design",
    "Landing Page Design",
    "Website Redesign",
  ],
  
openGraph: {
  title: "madebytrie. — Independent Web Designer & Developer",
  description:
    "Creating modern, thoughtful, and effective websites for businesses.",
  url: "https://madebytrie.vercel.app",
  siteName: "madebytrie.",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "madebytrie. — Independent Web Designer & Developer",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title: "madebytrie. — Independent Web Designer & Developer",
  description:
    "Creating modern, thoughtful, and effective websites for businesses.",
  images: ["/og-image.png"],
},

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}
