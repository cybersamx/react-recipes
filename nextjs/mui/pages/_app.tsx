import Head from 'next/head';
import { AppProps } from 'next/app';
import createEmotionCache from '@/components/emotion-cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/pages/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

const clientEmotionCache = createEmotionCache();

export interface MuiProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, emotionCache = clientEmotionCache, pageProps}: MuiProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
