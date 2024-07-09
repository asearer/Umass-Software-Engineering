import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Navbar";
import VendingMachine from "./VendingMachine";
import CandyBar from "./CandyBar";
import Soda from "./Soda";
import FruitRollup from "./FruitRollup";
import Hotdog from "./Hotdog";

function App() {
  return (
    <div className="App">
      <h1>React Router Vending Machine</h1>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route path="/CandyBar">
          <CandyBar />
        </Route>
        <Route path="/Soda">
          <Soda />
        </Route>
        <Route path="/FruitRollup">
          <FruitRollup />
        </Route>
        <Route path="/Hotdog">
          <Hotdog />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
