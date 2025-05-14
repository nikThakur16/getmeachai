
import "@/globals.css"
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a Chai",
  description: "Get me a Chai- a web site for funding your projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-[90vh]  z-[-2]  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

