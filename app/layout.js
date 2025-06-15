import "./globals.css";
import { Roboto, Work_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${work_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
