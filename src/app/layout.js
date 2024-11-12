import "./globals.css";
import {Inconsolata} from "next/font/google";

const inconsolata = Inconsolata({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
})
export const metadata = {
  title: "giabaoo06's website",
  description: "words that will describe this thing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>some stuff about giabao06</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inconsolata.className} antialiased`} data-theme="coffee">
        {children}
      </body>
    </html>
  );
}
