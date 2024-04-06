import "../globals.css";
// import "../page.module.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Socials from "./components/Socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next.js Portfolio Site",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1689892912/docs/project.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="header">
            <div className="mobile-hide">
              <Navbar />
            </div>
            {/* <MobileNav /> */}
            <Intro />
            <div className="mobile-show">
              <Navbar />
              <Socials />
            </div>
          </header>
          <section className="content">{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
