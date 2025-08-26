import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Roboto, Work_Sans } from "next/font/google";
import { Toaster } from "sonner";

export const metadata = {
  title: {
    default: "Thapa Technical | Learn Web Development",
    template: "%s | Thapa Technical",
  },
  description:
    "Free Tutorials on React.js Next.js and web development by Thapa Technical",
  keywords: ["React Js", "Next.js", "Web Development", "Thapa Technical"],
  icons: {
    icon: "/vercel.svg",
  },
  metadataBase: new URL("https://yourdomin"),
  openGraph: {
    title: "Thapa Techical",
    description: "Join the best web dev tutorials!",
  },
};

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
      <body
        cz-shortcut-listen="true"
        className={`${roboto.variable} ${work_sans.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
