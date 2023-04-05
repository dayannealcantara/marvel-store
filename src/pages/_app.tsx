import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles/global';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Marvel</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};
export default MyApp;
