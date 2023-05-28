import type { Preview } from '@storybook/react';
import _JSXStyle from 'styled-jsx/style';

import '../styles/global.css';

if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle });
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
