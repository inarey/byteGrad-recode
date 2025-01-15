import { CountButton } from "./CountButton";

export default function ButtonContainer({ setCount, locked }) {

  return (
    <div className='flex justify-center items-center mt-auto h-[116px] w-full rounded-b-[10px] bg-slate-900'>
      <CountButton type="minus" setCount={setCount} locked={locked}/>
      <CountButton type="plus" setCount={setCount} locked={locked}/>
    </div>
  );
}


