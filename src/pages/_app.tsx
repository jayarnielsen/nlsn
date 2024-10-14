/// <reference types="styled-jsx/global" />
import type { AppProps } from "next/app";

import "@gaze-ui/react/styles.css";
import "@gaze-ui/tokens/css/variables.css";
import { Nunito_Sans, VT323 } from "next/font/google";
import Head from "next/head";
import * as React from "react";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: "200",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property, sonarjs/no-unknown-property */}
      <style global jsx>{`
        :root {
          --gaze-color-text-default: var(--gaze-color-slate-800);
          --gaze-font-family-base: ${vt323.style.fontFamily};
          --gaze-font-family-heading: ${nunito.style.fontFamily};
          --gaze-text-weight: ${vt323.style.fontWeight?.toString() ?? ""};
          --gaze-heading-weight: ${nunito.style.fontWeight?.toString() ?? ""};
        }
      `}</style>
      <Head>
        <title>Jay Nielsen&apos;s Blog</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
