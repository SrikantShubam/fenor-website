// import Document, { Html, Head, Main, NextScript } from 'next/document';

// export default class MyDocument extends Document {
//   render() {
//     const locale = this.props.__NEXT_DATA__.locale || 'en';
//     const dir = locale === 'ar' ? 'rtl' : 'ltr';

//     return (
//       <Html lang={locale} dir={dir}>
//         <Head />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//        <noscript>
//             <link
//               href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
//               rel="stylesheet"
//             />
//           </noscript>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }













import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const locale = this.props.__NEXT_DATA__.locale || 'en';
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
      <Html lang={locale} dir={dir}>
        <Head>
          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* Preload font CSS asynchronously */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="preload"
            as="style"
           
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}