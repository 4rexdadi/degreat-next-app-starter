// Favicon Generator. : https://realfavicongenerator.net/
// Imports
import Head from "next/head";
import { FC } from "react";

interface ConfigProps {
  title: string;
  description?: string;
  image?: { url: string };
  url?: string;
  author?: string;
  twitter?: string;
  keywords?: string;
  PWA?: {
    title: string;
    description: string;
  };
}

const defaults: ConfigProps = {
  title: "degreat-next-app-starter",
  description: "The easiest and fastest way to create degreat-next-app-starter",
  image: {
    url: "",
  },
  url: `http://localhost:3000`,
  author: "Author",
  twitter: "@",
  keywords:
    "Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist",
  PWA: {
    title: "degreat-next-app-starter",
    description: "just as the tittle : degreat-next-app-starter",
  },
};

const config: FC<ConfigProps> = (props) => {
  return (
    <Head>
      {/* <!-- Recommended Meta Tags --> */}
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={props.author || defaults.author} />
      <meta name="designer" content={props.author || defaults.author} />
      <meta name="publisher" content={props.author || defaults.author} />
      <meta name="referrer" content="no-referrer" />
      <meta httpEquiv="x-dns-prefetch-control" content="off" />
      <meta httpEquiv="Window-Target" content="_value" />
      <meta name="geo.region" content="US" />

      {/* <!-- Search Engine Optimization Meta Tags --> */}
      <title>{props.title || defaults.title}</title>
      <meta
        name="description"
        content={props.description || defaults.description}
      />
      <meta name="keywords" content={props.keywords || defaults.keywords} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="distribution" content="web" />

      {/* <!-- Facebook Open Graph meta tags  --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={props.image?.url || defaults.image?.url}
      />
      <meta property="og:url" content={props.url || defaults.url} />
      <meta property="og:title" content={props.title || defaults.title} />
      <meta property="og:site_name" content={props.title || defaults.title} />
      <meta
        property="og:description"
        content={props.description || defaults.description}
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:title" content={props.title || defaults.title} />
      <meta
        name="twitter:description"
        content={props.description || defaults.description}
      />
      <meta
        name="twitter:image"
        content={props.image?.url || defaults.image?.url}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={props.twitter || defaults.twitter} />
      <meta name="twitter:url" content={props.url || defaults.url} />
      <meta
        name="twitter:creator"
        content={props.twitter || defaults.twitter}
      />

      {/* <!-- Meta Tags for HTML pages on Mobile PWA--> */}
      {/* <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1.0"
      /> */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta
        name="application-name"
        content={props.PWA?.title || defaults.PWA?.title}
      />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={props.PWA?.title || defaults.PWA?.title}
      />
      <meta
        name="description"
        content={props.PWA?.description || defaults.PWA?.description}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      {/* START FAVICON */}
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="degreat-next-app-starter"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      {/* END FAVICON */}
    </Head>
  );
};

export default config;
