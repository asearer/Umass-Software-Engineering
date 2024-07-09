import React from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css'; 

function VendingMachine() {
  return (
    <div className="vending-machine">
      <p class="vm">Hungry? Have a snack!</p>
      <Link exact to="/Soda" className="button">
        Soda
      </Link>
      <br />
      <Link exact to="/CandyBar" className="button">
        CandyBar
      </Link>
      <br />
      <Link exact to="/FruitRollup" className="button">
        FruitRollup
      </Link>
      <br />
      <Link exact to="/Hotdog" className="button">
        Hotdog
      </Link>
    </div>
  );
}

export default VendingMachine;
