import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Freelance Web Dev | Puneet Kathar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hire the Best Website Developer as a Freelancer. This is the portfolio of Puneet Kathar showing his previous work and a career as a Web Dev freelance."
        />
      </Head>
      <Script
        id="1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
      />
      <Script id="2" strategy="lazyOnload">
        {`  
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', ${process.env.NEXT_PUBLIC_GA});
  `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
