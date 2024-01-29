import { NextUIProvider } from '@nextui-org/system';

import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <Head>
        <title>Dra. Joana Santos</title>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default App;
