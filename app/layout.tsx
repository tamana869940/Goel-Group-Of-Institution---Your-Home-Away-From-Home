import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Loading from "@/components/common/loading" // 👈 Loading Component Import
import { Suspense } from "react"

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
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <Suspense fallback={<Loading />}> {/* 👈 Show Loading until content loads */}
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
