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
      <body>
        <TranslationProvider>
          <TranslationButton />
          {children} 
        </TranslationProvider>
      </body>
    </html>
  );
}