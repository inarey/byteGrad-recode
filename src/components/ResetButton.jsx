import { ResetIcon } from '@radix-ui/react-icons';

export default function ResetButton({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount(0);
      }}
      className='px-4 py-2 rounded-lg mt-4 transition-all duration-200'
    >
      <ResetIcon className='h-10 w-10  text-slate-100' />
    </button>
  );
}
