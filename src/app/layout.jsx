import "./globals.css";
import { TranslationProvider } from "../context/TranslationContext";
import ConditionalTranslationButton from "../components/ConditionalTranslationButton";
import ConditionalThemeButton from "../components/ConditionalThemeButton";

export const metadata = {
  title: "Dr. Dev Portfolio",
  description: "Created by Veras Carrara Patricio Raúl",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondary overflow-x-hidden">
        <TranslationProvider>
          {/* Botón de traducción solo visible en la landing principal */}
          <ConditionalTranslationButton />
          {/* Botón de tema solo visible en las vistas de PortfolioDrDev */}
          <ConditionalThemeButton />
          {children} 
        </TranslationProvider>
      </body>
    </html>
  );
}