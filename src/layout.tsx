import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRS Online Service | PAN Card, Aadhaar, PF & Insurance Services",
  
  description:
    "SRS Online Service provides PAN Card, Aadhaar Update, PF Withdrawal, PF Transfer, Insurance, Passport, Train Ticket Booking and other online services with fast support and trusted assistance.",

  keywords: [
    "SRS Online Service",
    "PAN Card Service",
    "Aadhaar Update",
    "PF Withdrawal",
    "PF Transfer",
    "Insurance Service",
    "Passport Service",
    "Train Ticket Booking",
    "Online Services India",
    "Digital Services",
    "Surat Online Services",
  ],

  authors: [{ name: "SRS Online Service" }],

  creator: "SRS Online Service",

  metadataBase: new URL("https://srs-online-services.vercel.app"),

  openGraph: {
    title: "SRS Online Service",
    description:
      "Fast and trusted online services including PAN Card, Aadhaar Update, PF Withdrawal, Insurance, Passport and more.",
    url: "https://srs-online-services.vercel.app",
    siteName: "SRS Online Service",
    images: [
      {
        url: "images/logo.svg",
        width: 1200,
        height: 630,
        alt: "SRS Online Service",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

//   twitter: {
//     card: "summary_large_image",
//     title: "SRS Online Service",
//     description:
//       "Trusted PAN Card, Aadhaar, PF & Insurance services online.",
//     images: ["/logo.png"],
//   },

//   icons: {
//     icon: "/logo.png",
//     shortcut: "/logo.png",
//     apple: "/logo.png",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}