import React from "react";
import { Link } from "react-router-dom";

function CandyBar() {
  return (
    <div>
      <h5>Candy Bar</h5>
      <img
        src="https://media.istockphoto.com/photos/chocolate-bar-with-a-missing-bite-on-white-background-picture-id186682188?k=6&m=186682188&s=612x612&w=0&h=u0cutua_dNsPqVK8bV42a6cQv28llFID8G1cfcmJbOc="
        alt="Candy!"
      />
      <p>Chocolate, mmmm</p>
      <Link to="/">
        Go Back
      </Link>
    </div>
  );
}

export default CandyBar;
