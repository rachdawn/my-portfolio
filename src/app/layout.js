import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rachel Little",
  description: "Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
            <ResponsiveAppBar />
            {children}
            <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
