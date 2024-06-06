import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Button from "../utils/Button";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Dot2Dot Printing Marrickville – T-Shirt Printing | Design | Print | Photocopy | Scanning | Website",
  description:
    "Dot2Dot Printing Marrickville – T-Shirt Printing | Design | Print | Photocopy | Scanning | Website.",
  keywords:
    "t shirt printing near me custom polo shirts Custom Polo Shirts Design Cotton Tshirts printing Tshirts printing in Sydenham Polo shirts printing Shop Sticker printing Sticker printing for Shop Website Design in online Responsive Website Design Photo copy service Document printing service Scaning service near me Business card printing Flyer printing Flyer digital printing Menu digital printing Invoice printing nea me Invoice books printing Label printingT-shirt printing Scaning service in Sydenham Business card printing service Flyer printing Flyer digital printing Menu digital printing Invoice books printing Label printing in Sydenham Banner printingT-shirt printing Flyer digital printing Menu digital printing Invoice books printing Car Label printing Banner printing service Business card printing in Marrickville Calendar in Marrickville Calendar printing in Sydenham Digital printing in Marrickville Stationery design Banner printing service Business card printing in Sydenham Digital printing in Marrickville Stationery design Shop Display Stationery design in Marrickville Stationery design in Sydenham Label printing in Sydenham Car Label printing Banner printing service Business card printing in Sydenham",
  author: "dot2dotprinting",
  url: "https://dot2dotprinting.com.au/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title} />
      </Head>
      <body className={inter.className}>
        <Button></Button>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
