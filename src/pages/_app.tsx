import { CartProvider } from 'context/useCart';
import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
