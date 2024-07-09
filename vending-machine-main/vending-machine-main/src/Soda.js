import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h4>Coke</h4>
      <img
        src="https://www.preparedfoods.com/ext/resources/images/2020/0820/CocaCola_900.jpg?1598899934"
        alt="Coca-cola"
      />
      <p>So tasty!</p>
      <Link exact to="/">
        Go Back
      </Link>
    </div>
  );
}

export default Soda;
