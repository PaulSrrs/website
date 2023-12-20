import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
