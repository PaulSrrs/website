import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
          <ToastContainer />
      </ThemeProvider>
  )
}

export default MyApp
