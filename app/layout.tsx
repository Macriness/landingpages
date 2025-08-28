import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
      <body className={`${poppins.variable} font-sans text-white antialiased`} style={{ backgroundColor: '#333333' }}>
        {children}
      </body>
    </html>
  );
}
