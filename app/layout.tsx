import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "@/app/globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Boobs",
  description: "An all-in-one platform to create, manage, and grow your apps and digital businesses.",
  keywords: [
    "Boobs",
    "app builder",
    "website builder",
    "digital business",
    "startup",
    "SaaS",
    "productivity",
    "business management"
  ],
  openGraph: {
    title: "Boobs",
    description: "An all-in-one platform to create, manage, and grow your apps and digital businesses.",
    url: "https://www.boobs.ma",
    siteName: "Boobs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boobs"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Boobs",
    description: "An all-in-one platform to create, manage, and grow your apps and digital businesses.",
    images: ["/og-image.jpg"]
  },
  authors: [
    {
      name: "Boobs",
      url: "https://www.boobs.ma"
    }
  ],
  creator: "Boobs",
  publisher: "Boobs",
  category: "Business"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.ReactNode {
  return (
    <html
      lang="en"
      className={`${geistMono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}