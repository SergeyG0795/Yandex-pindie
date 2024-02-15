import {Inter} from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Pindie",
    description: "Портал инди-игр от студентов Яндекс Практикума",
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">

        <body>
        <link rel="stylesheet" href="/fonts/fonts.css"/>


        <Header/>
        {children}
        <Footer/>
        </body>


        </html>
    );
}
