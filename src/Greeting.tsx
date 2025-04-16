import react, { useState } from 'react';

export const Greeting = (props: { label: string; content?: string }) => {
  const { label: componentLabel, content } = props; // destruturing
  const [value, setValue] = useState<number>(0);
  const handleClick = (event, name) => {
    setValue((prev) => {
      return prev + 1;
    });
  };
  return (
    // <>
    //   <h1>{value}</h1>
    //   <button onClick={() => setValue(value + 1)}>CLick</button>
    // </>
    <>
      <h1>{value}</h1>
      <button onClick={(e) => handleClick(e, 'fdsg')}>CLick</button>
    </>
  );
};
