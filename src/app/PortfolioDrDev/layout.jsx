import Navbar from '../../components/navbarComponents/Navbar';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
            {children} 
        </body>
      </html>
    );
  }