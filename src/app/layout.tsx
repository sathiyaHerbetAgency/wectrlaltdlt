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
  title: "WE CTRL ALT DLT",
  description: "WECTRLALTDLT",
  generator: "WECTRLALTDLT",
  icons: {
    icon: "/favicon.ico",                  // 🟠 Browser tab icon
    shortcut: "/site-icon.jpg",        // 🟠 Optional
    apple: "/apple-touch-icon.png",        // 🟠 For iOS home screen
  },
  openGraph: {
    title: "WE CTRL ALT DLT",
    description: "WECTRLALTDLT",
    url: "https://your-domain.com",       // replace with your actual domain
    siteName: "WE CTRL ALT DLT",
    images: [
      {
        url: "/og-image.png",            // 🟠 This is your social preview image
        width: 1200,
        height: 630,
        alt: "WE CTRL ALT DLT Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WE CTRL ALT DLT",
    description: "WECTRLALTDLT",
    images: ["/og-image.png"],           // 🟠 Same image can be reused
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
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>

    
  )
}


