import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout flex ">
          <NavBar />

          <div className="flex-1 flex flex-col">
            <Header />
            <main className="content p-4">{children}</main>
          </div>
        </div>
          <Footer />
      </body>
    </html>
  );
}
