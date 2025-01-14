import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButtons({ setCount }) {
  return (
    <div className='flex justify-center items-center mt-auto h-[116px] w-full rounded-b-[10px] bg-slate-900'>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
        className='flex flex-1 justify-center items-center cursor-pointer transition-all text-slate-100 hover:text-teal-500 text-5xl rounded-bl-[10px] hover:bg-teal-950  h-[116px] w-full border-r border-slate-800 '
      >
        <MinusIcon className='text-slate-100 hover:text-teal-500 rounded-bl-[10px] hover:bg-teal-950 h-10 w-10' />
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className='flex flex-1 justify-center items-center cursor-pointer transition-all text-slate-100 hover:text-teal-500 text-5xl rounded-br-[10px] hover:bg-teal-950  h-[116px] w-full border-l border-slate-800'
      >
        <PlusIcon className='text-slate-100 hover:text-teal-500 rounded-br-[10px] hover:bg-teal-950 h-10 w-10' />
      </button>
    </div>
  );
}
