// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ScrollBackgrounds from "./components/ScrollBackgrounds";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UpAfrica",
  description: "Connectez-vous à l'Afrique qui innove",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans bg-ua text-white antialiased`}>
        <ScrollBackgrounds />
        {children}
      </body>
    </html>
  );
}
