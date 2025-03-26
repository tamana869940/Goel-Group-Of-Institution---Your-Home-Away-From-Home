import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata = {
  title: "Goel Group Of Institution - Your Home Away From Home",
  description: "Premium hostel accommodation for students and working professionals with AC and Non-AC rooms.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'