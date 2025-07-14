import "./globals.css";
import { TranslationProvider } from "../context/TranslationContext";
import TranslationButton from "../components/TranslationButton";

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
          {/* Botón de traducción siempre visible arriba a la derecha */}
          <div className="fixed top-4 right-4 z-[100]">
            <TranslationButton />
          </div>
          {children} 
        </TranslationProvider>
      </body>
    </html>
  );
}