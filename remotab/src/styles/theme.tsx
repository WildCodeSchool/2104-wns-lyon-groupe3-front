import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F7F7FF', //background, text, border, input
      main: '#577399', //blocks, moon icon
      dark: '#8AA4C2', //main block
      contrastText: '#0A2463', //names, titles
    },
    secondary: {
      light: '#FE5F55', //action button, notifications, menu icons, reduce and zoom buttons, mode icon, offline user
      main: '#FFFFFF', //label
      dark: '#495867', //chat messages
      contrastText: '#38B000', //online user
    },
  },
});

export default theme;
