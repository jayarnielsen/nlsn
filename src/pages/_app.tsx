import type { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Jay Nielsen's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
