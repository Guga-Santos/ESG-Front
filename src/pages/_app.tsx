// pages/_app.tsx
import { AppProps } from 'next/app';
import '../app/globals.css'; // Importe o arquivo de estilos globais

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
