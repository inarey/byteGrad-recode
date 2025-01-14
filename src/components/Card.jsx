import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);

  
  return (
    <div className="flex flex-col items-center justify-center w-[476px] h-[615px] bg-teal-900 rounded-lg transition-all shadow-[0_25px_121px_rgba(0,0,0,0.5)]">
      <Title />
      <Count count={count}/>
      <ResetButton />
      <CountButtons setCount={setCount}/>
    </div>)
}
