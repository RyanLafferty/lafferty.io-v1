import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import orange from 'material-ui/colors/orange';
import Home from './screens/Home';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lightBlue,
    secondary: orange,
  },
});

ReactDOM.render(
  <HashRouter>
    <MuiThemeProvider theme={theme}>
      <Home/>
    </MuiThemeProvider>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
