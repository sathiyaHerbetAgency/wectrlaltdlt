import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import { Rajdhani } from "next/font/google"


import { Suspense } from "react"
import "./globals.css"
import GtmRouteListener from './../components/GtmRouteListener';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
})
export const metadata: Metadata = {
  metadataBase: new URL("https://wectrlaltdlt.com"), // ✅ so relative URLs resolve to absolute
  title: "WE CTRL ALT DLT",
  description:
    "Join CTRL + ALT + DLT — New Year’s Eve 2025 at Sepang International Circuit. Reset your reality with immersive visuals, top-tier DJs and a full night of electronic chaos. Take control. Live the alternate. Delete the rest.",
  generator: "WECTRLALTDLT",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/site-icon.jpg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "WE CTRL ALT DLT",
    description:
      "Join CTRL + ALT + DLT — New Year’s Eve 2025 at Sepang International Circuit. Reset your reality with immersive visuals, top-tier DJs and a full night of electronic chaos. Take control. Live the alternate. Delete the rest.",
    url: "https://wectrlaltdlt.com/",
    siteName: "WE CTRL ALT DLT",
    images: [
      {
        url: "https://wectrlaltdlt.com/social/og-1200x630.jpg", // ✅ absolute, JPG, no transparency
        width: 1200,
        height: 630,
        alt: "WE CTRL ALT DLT Preview",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WE CTRL ALT DLT",
    description:
      "Join CTRL + ALT + DLT — New Year’s Eve 2025 at Sepang International Circuit.",
    images: ["https://wectrlaltdlt.com/social/og-1200x630.jpg"], // ✅ absolute
  },
};
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-######"; 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {GTM_ID && (
          <script id="gtm">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </script>
        )}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}  suppressHydrationWarning >
          {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Suspense fallback={null}>
          <GtmRouteListener />
          {/* <>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property='og:title' content='WE CTRL ALT DLT'/>
    <meta property='og:image' content='/social/og-1200x630.jpg'/>
    <meta property='og:description' content="Join CTRL + ALT + DLT — New Year’s Eve 2025 at Sepang International Circuit. Reset your reality with immersive visuals, top-tier DJs and a full night of electronic chaos. Take control. Live the alternate. Delete the rest." />
    <meta property='og:url' content='www.pinkfishfestival.com'/>
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='627' />
    <link rel="icon" href="/fav_icon.png" />
  </> */}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>

    
  )
}


