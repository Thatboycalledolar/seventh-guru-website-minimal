

export default function ApplyPageHeader() {
  return(
    <div className="bg-(--primary-color) w-full pt-36 md:pt-44 pb-20 md:pb-24">
      <div className="flex flex-col items-center md:items-start max-w-300 mx-auto px-8">
        <h1 className="text-white text-5xl font-bold text-center md:text-start md:text-7xl mb-4">Apply <span className="text-(--secondary-color)">to work with us</span> </h1>
        <p className="opacity-70 text-white font-body text-sm md:text-lg leading-5 text-center md:text-start md:max-w-[80%]">Tell us about your project and we'll see if we're a good fit.</p>
      </div>
    </div>
  )
}