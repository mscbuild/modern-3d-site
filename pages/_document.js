import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
