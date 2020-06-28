import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { IState } from './types';

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#AD875E",
    },
    secondary: {
      main: grey[500],
    },
  },
  typography: {
    fontFamily: "Georgia"
  }
});

export const defaultState: IState = {
  phoneNumber: "",
  country: "",
  operator: "",
  prefix: "",
  message: "",
  formattedMessage: "",
  display: false,
  displayError: false,
};