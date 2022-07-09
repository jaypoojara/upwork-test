import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import colors from './colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: colors.purple,
    },
    secondary: {
      main: '#556cd6',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
