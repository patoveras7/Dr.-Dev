import "./globals.css";
import { TranslationProvider } from "../context/TranslationContext";
import ConditionalTranslationButton from "../components/ConditionalTranslationButton";

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
          {children} 
        </TranslationProvider>
      </body>
    </html>
  );
}