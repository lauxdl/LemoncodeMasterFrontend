import { createTheme, Theme } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#71007b',
    },
  },
});

export const theme: Theme = defaultTheme;
