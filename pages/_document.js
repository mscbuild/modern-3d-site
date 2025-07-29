import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Базовая конфигурация */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* SEO */}
          <meta name="description" content="Portfolio" />
          <meta name="keywords" content="Portfolio" />
          <meta name="author" content="Mscbuild" />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content="Alex Johnson | Portfolio" />
          <meta property="og:description" content="Alex Johnson | Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://example.com/" />
          <meta property="og:image" content="https://example.com/preview.jpg" />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Заголовок для Twitter" />
          <meta name="twitter:description" content="Описание для Twitter" />
          <meta name="twitter:image" content="https://example.com/preview.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
