import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login';
import Logout from './components/Logout'
import StockForm from "./components/StockForm";
import './App.css';

function App() {

const [user, setUser] = useState(null)

const url = "https://finnhub.io/api/v1/quote?";

function stockURL(stock) {
    let name = stock.toUpperCase();
    return url + "symbol=" + name + "&token=c07um4f48v6uu9ck9l4g";
  }

    fetch("https://finnhub.io/api/v1/quote?symbol=TSLA&token=ceqa5caad3i9f7a4qjdgceqa5caad3i9f7a4qje0")
    .then((response) => response.json())
    .then(r => console.log(r))


// function clickHandler() {

//   fetch("https://finnhub.io/api/v1/quote?symbol=APPLE/eq9lg2ad3i9f7a4q5egceq9lg2ad3i9f7a4q5f0")
//     .then((response) => response.json())
//     .then((event) => {
//       let currentPrice = event.c;

//       let totalPastPrice = parseInt(purchasedPrice) * parseInt(quantityPurchased);
//       let totalCurrentPrice = parseInt(currentPrice) * parseInt(quantityPurchased);

//       let balance = totalCurrentPrice - totalPastPrice;

//       // Point 5
//       if (balance > 0) {
//       let percentage = (
//           (parseInt(quantityPurchased) / parseInt(purchasedPrice)) *
//           100
//         ).toFixed(2);
//         setOutput(
//           `You made a profit of ${percentage} which amounts to $ ${balance} `
//         );} 


//      else if (balance < 0) {
//         var percentage = (
//           (parseInt(purchasedPrice) / parseInt(quantityPurchased)) *
//           100
//         ).toFixed(2);
//         setOutput(
//           `You made a loss of ${percentage}% which amounts to $${-balance} `
//         );} 


//    else setOutput("You made neither a profit nor a loss.");
//     })

//     //Point 6
//     .catch((event) => alert("There is something wrong with the server"));}

  return (
       <div className="App">
       <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/logout">
            <Logout user={user} setUser={setUser} />
          </Route>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>
          <Route path="/stockform">
            <StockForm/>
          </Route>
          <Route path="/">
            <h1>Hello HomePage</h1>
          </Route>  
        </Switch>
      </div>
  );
}

export default App;