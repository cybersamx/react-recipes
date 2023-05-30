import colors from 'tailwindcss/colors';

import { colorWeights, sizes, excludedColors } from './constants';

// --- Safelisting classes ---
// CREDIT: https://stackoverflow.com/a/74957762/347277
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

// --- Tailwind Config ---
const tailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
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
