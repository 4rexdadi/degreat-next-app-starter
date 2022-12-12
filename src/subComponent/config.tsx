// Imports
import { FC } from "react";
import Head from "next/head";

interface configProps {
  title: string;
  description?: string;
  image?: { url: string };
  url?: string;
  author?: string;
  twitter?: string;
  keywords?: string;
}

const defaults: configProps = {
  title: "React Three Next Starter",
  description:
    "The easiest and fastest way to create a 3D website using React Three Fiber and NextJS",
  image: {
    url: "",
  },
  url: `https://react-three-next.vercel.app/`,
  author: "Author",
  twitter: "@",
  keywords:
    "Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist",
};

const config: FC<configProps> = (props) => {
  return (
    <Head>
      {/*<!-- Recommended Meta Tags -->*/}
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={props.author || defaults.author} />
      <meta name="designer" content={props.author || defaults.author} />
      <meta name="publisher" content={props.author || defaults.author} />
      <meta name="referrer" content="no-referrer" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-dns-prefetch-control" content="off" />
      <meta httpEquiv="Window-Target" content="_value" />
      <meta name="geo.region" content="US" />

      {/*<!-- Search Engine Optimization Meta Tags -->*/}
      <title>{props.title || defaults.title}</title>
      <meta
        name="description"
        content={props.description || defaults.description}
      />
      <meta name="keywords" content={props.keywords || defaults.keywords} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="distribution" content="web" />

      {/*<!-- Facebook Open Graph meta tags  -->*/}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={"/icons/share.png"} />
      <meta property="og:url" content={props.url || defaults.url} />
      <meta property="og:title" content={props.title || defaults.title} />
      <meta property="og:site_name" content={props.title || defaults.title} />
      <meta
        property="og:description"
        content={props.description || defaults.description}
      />

      {/*<!-- Twitter Meta Tags -->*/}
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

      {/*<!-- Meta Tags for HTML pages on Mobile -->*/}
      <meta name="theme-color" content="#000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1.0"
      />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}

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
        rel="mask-icon"
        color="#000000"
        href="/icons/safari-pinned-tab.svg"
      />
      <link rel="apple-touch-startup-image" href="/startup.png" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      {/* END FAVICON */}
    </Head>
  );
};

export default config;
