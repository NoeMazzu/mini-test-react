import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "10px" }}>
      <h2>Nombre de clics : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Cliquez moi dessus</button>
    </div>
  );
}

export default Counter;
