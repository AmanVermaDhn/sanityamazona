import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache'
import '../styles/globals.css';

const clientSideEmotionCache=createCache({key:'css'})

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
