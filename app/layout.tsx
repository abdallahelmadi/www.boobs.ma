import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "@/app/globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Boobs",
  description: "An all-in-one platform to create, manage, and grow your apps and digital businesses."
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