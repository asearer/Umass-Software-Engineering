import React from "react";
import { Link } from "react-router-dom";

function Hotdog() {
  return (
    <div>
      <h4>Uh-Oh</h4>
      <img
        src="https://www.preparedfoods.com/ext/resources/2023/12/07/ImpossibleHotDogs_780.jpg?1704379098"
        alt="Hotdog"
      />
      <p>Hotdog!</p>
      <Link to="/">
        Go Back
      </Link>
    </div>
  );
}

export default Hotdog;