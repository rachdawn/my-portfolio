import { Analytics } from '@vercel/analytics/react';
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
// const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Rachel Little",
  description: "Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <AppRouterCacheProvider>
            <ResponsiveAppBar />
            {children}
            <Analytics />
            <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
