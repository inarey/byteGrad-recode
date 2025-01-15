export default function Title({locked}) {
  return (
    <h1 className="text-3xl uppercase font-bold text-slate-950 mt-14  ">
      {locked ? 'Go Freelancing!!!' : 'Continue with the course!'}
    </h1>
  )
}