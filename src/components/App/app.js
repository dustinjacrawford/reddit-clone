import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login/login';
import Dashboard from '../Dashboard/dashboard';
import Preferences from '../Preferences/preferences';
import Hot from '../Hot/hot';
import useToken from './useToken';


function App() {
  const { token, setToken} = useToken();

  return (
    <div className="wrapper">
      <h1>Reddit Clone</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/hot'>
            <Hot/>  
          </Route>'
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/preferences">
            <Preferences/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
