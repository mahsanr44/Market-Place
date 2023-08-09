import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const Increment = () => {
    setValue((a) => a + 1);
  };
  const Decrement = () => {
    setValue((a) => a - 1);
  };
  return (
    <div className="m-10">
      <h1 className="text-red-500 text-5xl font-serif py-5">Hello World</h1>
      <button className="border-2 bg-green-400 p-1 px-2" onClick={Increment}>
Increment      </button>
      <p className="p-2">value: {value}</p>
      <button className="border-2 bg-red-400 p-1" onClick={Decrement}>
Decrement      </button>
    </div>
  );
}

export default App;
