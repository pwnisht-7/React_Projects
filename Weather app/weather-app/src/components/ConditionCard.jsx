const ConditionCard = (props) => {
    const data = props;
  return (
    <div className="flex flex-col bg-zinc-800 items-center rounded-xl justify-center gap-4 w-20 p-3">
      <div className=" text-xl text-white">{data.text}</div>
      <div className="text-3xl text-white">{data.icon}</div>
    </div>
  )
}

export default ConditionCard
