import "../styles/globals.css";
import { Poppins } from 'next/font/google';
import Layout from "../components/Layout";
import type { AppProps } from "next/app";


const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
         <main className={poppins.variable + ' font-sans'}>
         <Component {...pageProps} />

         </main>
     
    </Layout>
  );
}