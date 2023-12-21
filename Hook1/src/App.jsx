import React, { useState } from 'react';

function Counter() {
  const [Count, setCount] = useState(0);
  function handlerButton(){
    setCount(Count+1);
  }
  return (
    <div>
      <button onClick ={handlerButton}> Increment </button>
      <p>Count: {Count}</p>
    </div>
  );
}

export default Counter;
