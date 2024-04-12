import "../globals.css";
import "./styles/typography.css";
import "./styles/colours.css";
// import "../page.module.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import "@fontsource/karla/400.css";
import "@fontsource/karla/300.css";
import "@fontsource/lato";
import "@fontsource/lato/400.css";

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
        <div className="page background-animation">
          <div className="container">
            <header className="header">
              <Intro />
              <Navbar />
            </header>
            <section className="content">{children}</section>
            <Footer />
            <Socials />
          </div>
        </div>
      </body>
    </html>
  );
}
