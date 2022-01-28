import { useState } from "react";

export default function UseState() {
  const [ name, setName ] = useState<string>('Fabian');
  const [ count, setCount ] = useState<number>(0);
  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName('Hector')}>Change Name</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}