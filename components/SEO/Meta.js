import React from "react";
import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      /* Primary Meta Tags */
      <title>Bayram Dev Portfolio</title>
      <meta charSet="utf-8" />
      <meta name="title" content="Bayram Dev Portfolio" />
      <meta
        name="description"
        content="Bayram's (bayramdev) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme using Next.js and Tailwind CSS."
      />
      <meta name="author" content="Bayram Dev (bayramdev)" />
      <meta
        name="keywords"
        content="linux,portfolio,bayram,bayramdev,bayram k,developer,developer portfolio,ubuntu,ubuntu portfolio"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#E95420" />
      /* Search Engine */
      <meta name="image" content="images/logos/favicon.png" />
      /* Schema.org for Google */
      <meta itemProp="name" content="Bayram Dev Portfolio" />
      <meta
        itemProp="description"
        content="Bayram's (bayramdev) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme using Next.js and Tailwind CSS."
      />
      <meta itemProp="image" content="images/logos/favicon.png" />
      /* Twitter */
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Bayram Dev Portfolio - Computer Engineering Student"
      />
      <meta
        name="twitter:description"
        content="Bayram's (bayramdev) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme using Next.js and Tailwind CSS."
      />
      <meta name="twitter:site" content="bayramdev" />
      <meta name="twitter:creator" content="bayramdev" />
      <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
      /* Open Graph general (Facebook, Pinterest & Google+) */
      <meta name="og:title" content="Bayram Dev Portfolio" />
      <meta
        name="og:description"
        content="Bayram's (bayramdev) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS."
      />
      <meta name="og:image" content="images/logos/logo_1200.png" />
      <meta name="og:url" content="http://bayramdev.github.io/" />
      <meta name="og:site_name" content="Bayram Personal Portfolio" />
      <meta name="og:locale" content="en_IN" />
      <meta name="og:type" content="website" />
      <link rel="icon" href="images/logos/favicon.png" />
      <link rel="apple-touch-icon" href="images/logos/logo.png" />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
}
