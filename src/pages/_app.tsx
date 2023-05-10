import type { AppProps } from "next/app";
import Head from "next/head";
import "@gaze-ui/tokens/css/variables.css";
import "@gaze-ui/react/styles/base.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jay Nielsen's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
