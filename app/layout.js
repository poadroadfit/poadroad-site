import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";
const shareImage = "/PoadRoad-2.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PoadRoad Beach Workouts | Honolulu Beach Fitness",
    template: "%s | PoadRoad Beach Workouts",
  },
  description:
    "Outdoor beach workouts in Honolulu led by a professional lifeguard and certified personal trainer. Visitors and locals welcome.",
  openGraph: {
    title: "PoadRoad Beach Workouts | Honolulu Beach Fitness",
    description:
      "Outdoor beach workouts in Honolulu led by a professional lifeguard and certified personal trainer. Visitors and locals welcome.",
    url: siteUrl,
    siteName: "PoadRoad Beach Workouts",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: shareImage,
        alt: "PoadRoad Beach Workouts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PoadRoad Beach Workouts | Honolulu Beach Fitness",
    description:
      "Outdoor beach workouts in Honolulu led by a professional lifeguard and certified personal trainer. Visitors and locals welcome.",
    images: [shareImage],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/PoadRoad-2.png", type: "image/png" }],
    apple: [{ url: "/PoadRoad-2.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
