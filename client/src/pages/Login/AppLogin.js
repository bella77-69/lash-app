import React from 'react';
import './Login.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';
import useToken from './useToken';


function AppLogin() {
  const { token, setToken } = useToken();


  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/preferences">
            <Preferences />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppLogin;