export default function CountButtons() {
  return (
    <div className="flex justify-center items-center mt-auto h-[116px] w-full rounded-b-[10px] bg-slate-900">
      <button className="flex flex-1 justify-center items-center cursor-pointer transition-all text-slate-100 hover:text-teal-500 text-5xl rounded-bl-[10px] hover:bg-teal-950  h-[116px] w-full">-</button>
      <button className="flex flex-1 justify-center items-center cursor-pointer transition-all text-slate-100 hover:text-teal-500 text-5xl rounded-br-[10px] hover:bg-teal-950  h-[116px] w-full">+</button>
    </div>
  );
}
