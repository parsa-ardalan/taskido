import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Provider from "@/redux/store/provider"
import { ThemeProvider } from "next-themes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Taskido",
  description: "simple to-do list for daily tasks",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Provider>
            {children}
          </Provider>
        </ThemeProvider>

      </body>
    </html>
  )
}