import "../globals.css";
import { Roboto, Work_Sans} from "next/font/google";
import Navigation from "@/components/Navigation";

const roboto = Roboto({
  subsets: ["latin"],
});

const work_sans = Work_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
