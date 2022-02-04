import { useState, FC, memo, useCallback, useMemo } from "react";

const factory = () => (n1: number, n2: number) => n1 * n2;
const memoFactory = factory();
const mult1 = memoFactory;
console.log("🚀 ~ file: UseCallback.tsx ~ line 5 ~ mult1", mult1(1, 2))
const mult2 = memoFactory;
console.log("🚀 ~ file: UseCallback.tsx ~ line 7 ~ mult2", mult2(1, 2))
console.log("🚀 ~ file: UseCallback.tsx ~ line 7 ~ mult2", mult1 === mult2);

const mult3 = factory();
console.log("🚀 ~ file: UseCallback.tsx ~ line 5 ~ mult3", mult3(1, 2))
const mult4 = factory();
console.log("🚀 ~ file: UseCallback.tsx ~ line 7 ~ mult4", mult4(1, 2))
console.log("🚀 ~ file: UseCallback.tsx ~ line 7 ~ mult4", mult3 === mult4);

// To prevent the list re-renders caused by external state changes, we can use
// `memo`, this will basically memoize the component to prevent render calculus
// on every parent state change. When we have a big list, react visits every DOM element
// created to determine the differences
const List: FC<{ handleClick: (n: number) => void }> = memo(({ handleClick }) => {
  const list = Array.from(Array(100).keys()).map((n: number) => (
    <li key={n} onClick={() => handleClick(n)}>Number: {n}</li>
  ));

  return <ul>{list}</ul>
});

const UseCallback: FC = () => {
  const [ name, setName ] = useState<string>('Angular');
  const [ number, setNumber ] = useState<number>(-1);

  // If we have a complex operation that can be applied to specific values
  // we can use the hook `useMemo` in order to prevent unnecessary recalculations
  // on every render phase. In this example, the expensive operation is only
  // executed only if `number` has a different value.
  const num = useMemo(() => complexOperation(number), [number]);

  // The use of `useCallback` is to prevent re-render on the list,
  // this because functions are function objects with different hash
  // so every time react renders, the function generates a new pointer
  // and that causes the memoized list re-render
  const handleClick = useCallback((n: number) => {
    setNumber(n);
  }, []);

  return (
    <>
      <h1>F: {name} with number: {number > -1 ? number : ''} with num {num > -1 ? num : ''}</h1>
      <button onClick={() => setName(name === 'React' ? 'Angular' : 'React' )}>Change Name</button>
      <List handleClick={handleClick}/>
    </>
  )
};

// an expensive calculus xD
function complexOperation(n1: number) {
  for(let i = 0; i < 1000000000; i++) {}
  return n1 * 2;
}

export default UseCallback;