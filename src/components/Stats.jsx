

export default function stats({ number, title}) {
  return(
    <div className="flex flex-col text-(text-color)">
      <div className="flex flex-col md:flex-row items-center  md:gap-2">
        <h3 className="text-3xl md:text-5xl font-bold text-(--primary-color)">{number}</h3>
        <p className="font-body text-sm md:text-lg">{title}</p>
      </div>
    </div>
  )
}