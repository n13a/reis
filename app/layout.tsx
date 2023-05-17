import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import BurgerMenu from "./components/burgerMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reis Çelik",
  description: "Generated by create next app",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:px-4`}>
        <div className="md:hidden">
          <BurgerMenu />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
