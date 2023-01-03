import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login';
import Logout from './components/Logout'
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  } , []);

  console.log(user)
  
  if (!user) return (
    <div style={{
        display:'flex',
        flexFlow: 'row wrap',
        textAlign: 'center',
        justifyContent:'space-around',
        minHeight: '100vh',
        backgroundSize: 'cover',  
        padding: "100px"}}>
        <Login setUser={setUser} />
    </div>)

  return (
    // <BrowserRouter>
      <div className="App">
       <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/logout">
            <Logout user={user} setUser={setUser} />
          </Route>
          <Route path="/posts">
            <h1>Posts</h1>
          </Route>
          <Route path="/search">
            <h1>Search</h1>
          </Route>
          <Route path="/">
            <h1>Hello HomePage</h1>
          </Route>  
        </Switch>
      </div>
    // </BrowserRouter>
  );
}

export default App;