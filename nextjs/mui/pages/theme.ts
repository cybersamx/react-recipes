import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '300', '400', '500', '700'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A200,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
