import "./globals.css";
import { TranslationProvider } from "../context/TranslationContext";
import { ThemeProvider } from "../context/ThemeContext";
import ConditionalTranslationButton from "../components/ConditionalTranslationButton";
import ConditionalThemeButton from "../components/ConditionalThemeButton";

export const metadata = {
  title: "Dr. Dev Portfolio",
  description: "Portfolio personal de Dr. Dev - Abogado apasionado por la tecnología y desarrollo de software",
  
  // Favicon configuration
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  
  // Open Graph / Facebook
  openGraph: {
    title: "Dr. Dev Portfolio",
    description: "Portfolio personal de Dr. Dev - Abogado apasionado por la tecnología y desarrollo de software",
    url: "https://dr-developer.vercel.app",
    siteName: "Dr. Dev Portfolio",
    images: [
      {
        url: "/images/martillo1.png",
        width: 1200,
        height: 630,
        alt: "Dr. Dev - Abogado y Desarrollador de Software",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dev Portfolio",
    description: "Portfolio personal de Dr. Dev - Abogado apasionado por la tecnología y desarrollo de software",
    images: ["/images/martillo1.png"],
    creator: "@drdev",
  },
  
  // Meta tags adicionales
  keywords: ["abogado", "desarrollador", "software", "tecnología", "portfolio", "lawyer", "developer"],
  authors: [{ name: "Dr. Dev" }],
  creator: "Dr. Dev",
  publisher: "Dr. Dev",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondary overflow-x-hidden">
        <TranslationProvider>
          <ThemeProvider>
            {/* Botón de traducción solo visible en la landing principal */}
            <ConditionalTranslationButton />
            {/* Botón de tema solo visible en las vistas de PortfolioDrDev */}
            <ConditionalThemeButton />
            {children} 
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}