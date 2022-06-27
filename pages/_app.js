import "../styles/globals.css";
import Head from "next/head";

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
        <meta name="google-site-verification" content="hDw0Jswy0SXHWhteY3mFAdx8l9qBvONf-BINPfQ9XA0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
