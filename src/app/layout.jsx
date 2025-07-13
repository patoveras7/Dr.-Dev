import "./globals.css";
import { TranslationProvider } from "../context/TranslationContext";

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
          {children} 
        </TranslationProvider>
      </body>
    </html>
  );
}