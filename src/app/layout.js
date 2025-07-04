import "./globals.css";
import { Inconsolata, Quicksand, Roboto_Slab } from "next/font/google";
import Navbar from "./components/navbar";

const inconsolata = Inconsolata({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
})

const quicksand = Quicksand({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
})

const roboto_slab = Roboto_Slab({
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
      <body className={`${inconsolata.className}`} data-theme="coffee">
        <Navbar/>
        <div className={"grid min-h-screen"}>
            {children}
        </div>
      </body>
    </html>
  );
}
