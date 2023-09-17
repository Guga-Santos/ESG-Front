// pages/_app.tsx
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../app/globals.css'; // Importe o arquivo de estilos globais

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider attribute='class'>
    <Component {...pageProps} />)
  </ThemeProvider>
  )
}

export default MyApp;
