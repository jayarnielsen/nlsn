/// <reference types="styled-jsx/global" />
import type { AppProps } from "next/app";
import Head from "next/head";
import { VT323, Nunito_Sans } from "@next/font/google";
import "@gaze-ui/tokens/css/variables.css";
import "@gaze-ui/react/styles/base.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  weight: "200",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style global jsx>{`
        :root {
          --text-color: var(--color-slate-800);
          --body-weight: 600;
          --body-font: ${vt323.style.fontFamily};
          --body-weight: ${vt323.style.fontWeight};
          --heading-font: ${nunito.style.fontFamily};
          --heading-weight: ${nunito.style.fontWeight};
        }
      `}</style>
      <Head>
        <title>Jay Nielsen's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
