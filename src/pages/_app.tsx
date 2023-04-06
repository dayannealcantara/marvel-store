import { CartProvider } from 'context/useCart';
import { ComicsProvider } from 'context/useComics';
import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ComicsProvider>
        <CartProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </ComicsProvider>
    </>
  );
}
