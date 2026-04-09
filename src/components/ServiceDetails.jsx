

export default function ServiceDetails({ header, body}) {
  return(
    <div className="flex flex-col gap-2 md-gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-(--text-color)">{header}</h2>
          <p className="text-sm md:text-lg leading-6 font-light">{body}</p>
    </div>
  )
}