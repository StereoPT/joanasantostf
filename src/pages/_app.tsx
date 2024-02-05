import { NextUIProvider } from '@nextui-org/system';

import '@/styles/globals.css';

import Head from 'next/head';
import { AppPropsWithLayout } from '@/types/global';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <NextUIProvider>
      <Head>
        <title>Dra. Joana Santos</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </NextUIProvider>
  );
};

export default App;
