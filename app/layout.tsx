import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohit Uchit - Backend Engineer | Automation Developer",
  description:
    "Backend Engineer specializing in scalable REST APIs, cloud automation, and secure web systems. Expert in Node.js, MongoDB, AWS, and cybersecurity.",
  keywords:
    "backend engineer, node.js developer, API development, cloud automation, cybersecurity, freelance developer",
  authors: [{ name: "Mohit Uchit" }],
  openGraph: {
    title: "Mohit Uchit - Backend Engineer",
    description: "Backend Engineer specializing in scalable REST APIs and cloud automation",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
