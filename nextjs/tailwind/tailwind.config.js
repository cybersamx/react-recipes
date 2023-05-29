// CREDIT: https://stackoverflow.com/a/74957762/347277

import colors from 'tailwindcss/colors';

import { colorWeights, sizes, excludedColors } from './constants';

const safelist = [];
const extendedColors = {};

// Generate the class names that cover all colors and weights.
for (const key in colors) {
  // Use valid colors and avoid tailWind 'Color deprecated' warning.
  if (!excludedColors.includes(key)) {
    extendedColors[key] = colors[key];

    colorWeights.forEach((weight) => {
      safelist.push(`bg-${key}-${weight}`);
    });
  }
}

sizes.forEach((size) => {
  safelist.push(`w-${size}`);
  safelist.push(`h-${size}`);
});

const tailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  development: true,
  mode: 'jit',
  plugins: [],
  safelist: safelist,
  theme: {
    extend: {
      colors: extendedColors,
    },
  },
};

module.exports = tailwindConfig;
