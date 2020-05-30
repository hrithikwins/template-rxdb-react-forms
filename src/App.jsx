import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from "component/Theme";
import { Scrollbars } from 'react-custom-scrollbars';

import SignIn from "views/pages/SignIn";
import StartIn from "views/pages/StartIn";
import Home from 'views/pages/Home';



function App() {
  return (
    <Scrollbars style={{ width: '100vw', height: '100vh' }}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <Route path="/home" component={Home} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/" component={StartIn} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Scrollbars>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
