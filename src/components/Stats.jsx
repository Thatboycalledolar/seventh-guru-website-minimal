

export default function stats({ number, title}) {
  return(
    <div className="flex flex-col text-(text-color)">
      <div className="flex flex-col items-start  md:gap-2">
        <h3 className="text-3xl md:text-5xl font-medium text-white">{number}</h3>
        <p className="font-body font-light text-sm md:text-lg text-white">{title}</p>
      </div>
    </div>
  )
}