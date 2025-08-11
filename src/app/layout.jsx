import "./globals.css";
import { TranslationProvider } from "../context/TranslationContext";
import { ThemeProvider } from "../context/ThemeContext";
import ConditionalTranslationButton from "../components/ConditionalTranslationButton";
import ConditionalThemeButton from "../components/ConditionalThemeButton";

export const metadata = {
  title: "Dr. Dev Portfolio",
  description: "Portfolio personal de Dr. Dev",
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