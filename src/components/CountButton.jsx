import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export function CountButton({ type, setCount, locked }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === 'minus') {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });
  };
  return (
    <>
      <button
        disabled={locked}
        onClick={handleClick}
        className='flex flex-1 justify-center items-center cursor-pointer transition-all text-slate-100 hover:text-teal-500 text-5xl rounded-br-[10px] rounded-bl-[10px] hover:bg-teal-950  h-[116px] w-full border-slate-800'
      >
        {type === 'minus' ? (
          <MinusIcon className='text-slate-100 hover:text-teal-500 hover:bg-teal-950 h-10 w-10' />
        ) : (
          <PlusIcon className='text-slate-100 hover:text-teal-500hover:bg-teal-950 h-10 w-10' />
        )}
      </button>
    </>
  );
}
