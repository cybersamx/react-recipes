// Based on https://github.com/mui/material-ui/blob/master/examples/material-next-ts/pages/_document.tsx

import {
  ComponentProps,
  ComponentType,
} from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document';
import { AppType } from 'next/app';
import createEmotionServer from '@emotion/server/create-instance';

import theme, { roboto } from './theme';
import createEmotionCache from '@/components/emotion-cache';
import { MuiProps } from './_app';

interface MuiDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MuiDocument({ emotionStyleTags }: MuiDocumentProps) {
  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MuiDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App: ComponentType<ComponentProps<AppType> & MuiProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });
  };

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
