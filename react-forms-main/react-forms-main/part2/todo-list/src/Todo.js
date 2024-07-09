import React from "react";

function Todo({ id, handleRemove, todo }) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div>
        {todo}
        <button onClick={remove}>X</button>
      </div>
    </div>
  );
}

export default Todo;
