import "./globals.css";
import {Noto_Sans, Work_Sans, Inconsolata} from "next/font/google";

const workSans = Work_Sans({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

const notoSans = Noto_Sans({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
})

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
          <title>a website for myself?</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inconsolata.className} antialiased`} data-theme="coffee">
        {children}
      </body>
    </html>
  );
}
