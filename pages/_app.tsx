// import "../styles/globals.css";
// import { Poppins } from 'next/font/google';
// import Layout from "../components/Layout";
// import type { AppProps } from "next/app";


// const poppins = Poppins({
//   weight: ['400', '500', '600'],
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//          <main className={poppins.variable + ' font-sans'}>
//          <Component {...pageProps} />

//          </main>
     
//     </Layout>
//   );
// }






import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Layout from '../components/Layout';
import '../styles/globals.css';

// Extend NextPage to include noLayout property
type PageWithLayout = NextPage & {
  noLayout?: boolean;
};

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }: AppProps & { Component: PageWithLayout }) {
  const noLayout = Component.noLayout;

  return noLayout ? (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  ) : (
    <Layout>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}