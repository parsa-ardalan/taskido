import "./globals.css";
import Provider from "@/redux/store/provider";
import { ThemeProvider } from "next-themes";
import PWARegister from "@/components/pwa/PWARegister";
import AppInitializer from "@/utils/notes/AppInitializer";

export const metadata = {
  title: "Taskido",
  description: "simple to-do list for daily tasks",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#000000ff",
};

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
            <AppInitializer>
              <PWARegister />
              {children}
            </AppInitializer>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}