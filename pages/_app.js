import "../styles/dist/ravenbright.min.css";
import Head from "next/head";

import siteMetadata from "../data/SiteMetadata.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{siteMetadata.name}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="robots" content="index,follow" />

        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="author" content={siteMetadata.author} />
        <meta name="language" content={siteMetadata.language} />

        <meta property="og:site_name" content={siteMetadata.author} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:title" content={siteMetadata.name} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content="" />
        <meta
          property="og:image:alt"
          content=""
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.name} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:url" content={siteMetadata.name} />
        <meta name="twitter:creator" content={siteMetadata.author} />
        <meta name="twitter:image" content="" />
        <meta
          name="twitter:image:alt"
          content=""
        />

        <link rel="canonical" href="https://zauberhaft.ravnebright.design" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
