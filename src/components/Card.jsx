import { useState } from "react";

import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";


export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5? 'locked' : '';

  
  return (
    <div className="flex flex-col items-center justify-center w-[476px] h-[615px] bg-teal-900 rounded-xl transition-all shadow-[0_25px_121px_rgba(0,0,0,0.5)]">
      <Title />
      <Count count={count}/>
      <ResetButton setCount={setCount}/>
      <ButtonContainer setCount={setCount}locked={locked}/>
    </div>)
}
