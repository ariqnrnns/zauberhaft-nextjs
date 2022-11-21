import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://api.fontshare.com/v2" />
          <link
            rel="preload"
            as="style"
            href="https://api.fontshare.com/v2/css?f=satoshi@900,700,500,400&amp;display=swap"
          />
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f=satoshi@900,700,500,400&amp;display=swap"
            media="all"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/favicon-180x180.png"
          />
					<link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/favicon/favicon-192x192.png"
          />
			<Script strategy="beforeInteractive"
            src="/js/darkthemetoggle.js"
            onLoad
          />

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
