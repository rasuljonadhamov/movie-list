import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setDate] = useState(0);

  function handleClick() {
    setDate(data + 1);
  }

  useEffect(() => {
    console.log("hello");
  });

  return (
    <>
      <h1>{data}</h1>
      <button onClick={handleClick}>Ok</button>
    </>
  );
}

export default App;
