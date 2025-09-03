import Navigations from "./(Navigation)/Navigations";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Navigations/>
        {children}
      </body>
    </html>
  );
}
