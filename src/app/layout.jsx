// app/layout.tsx o app/layout.js
import "./globals.css";
import { TranslationProvider } from "../context/TranslationContext";
import { ThemeProvider } from "../context/ThemeContext";
import ConditionalTranslationButton from "../components/ConditionalTranslationButton";
import ConditionalThemeButton from "../components/ConditionalThemeButton";

export const metadata = {
  // Asegura que todas las rutas relativas se vuelvan absolutas
  metadataBase: new URL("https://dr-developer.vercel.app"),

  title: "Dr. Dev Portfolio",
  description:
    "Portfolio personal de Dr. Dev - Abogado apasionado por la tecnología y desarrollo de software",

  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },

  openGraph: {
    title: "Dr. Dev Portfolio",
    description:
      "Portfolio personal de Dr. Dev - Abogado apasionado por la tecnología y desarrollo de software",
    url: "/", // con metadataBase se resuelve a https://dr-developer.vercel.app/
    siteName: "Dr. Dev Portfolio",
    images: [
      {
        // ⚠️ Usa el MISMO nombre que en el filesystem (respetando mayúsculas)
        url: "/images/MartilloRed.png", // -> https://dr-developer.vercel.app/images/MartilloRed.png
        width: 1200,
        height: 630,
        alt: "Dr. Dev - Abogado y Desarrollador de Software",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Dev Portfolio",
    description:
      "Portfolio personal de Dr. Dev - Abogado apasionado por la tecnología y desarrollo de software",
    // ❗ Usa exactamente el mismo path/caso que en Open Graph
    images: ["/images/MartilloRed.png"],
    // creator: "@drdev", // dejalo solo si es real
  },

  keywords: [
    "abogado",
    "desarrollador",
    "software",
    "tecnología",
    "portfolio",
    "lawyer",
    "developer",
  ],
  authors: [{ name: "Dr. Dev" }],
  creator: "Dr. Dev",
  publisher: "Dr. Dev",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-secondary overflow-x-hidden">
        <TranslationProvider>
          <ThemeProvider>
            <ConditionalTranslationButton />
            <ConditionalThemeButton />
            {children}
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
