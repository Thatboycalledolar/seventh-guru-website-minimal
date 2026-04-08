


export default function ProTips({ text }) {
  return(
    <div className="flex items-center gap-2">
      <div className="bg-(--primary-color) h-2 w-2 md:h-4 md:w-4 rounded-xs md:rounded-sm"></div>
      <p className="text-sm md:text-lg text-(--text-color) w-full">{text}</p>
    </div>
  )
}