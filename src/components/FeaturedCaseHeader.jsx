


export default function FeaturedCaseHeader( {text} ) {
  return(
    <div className="h-auto w-full justify-center text-white text-center gap-6 flex flex-col md:flex-row  md:gap-12 items-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat p-8 rounded-xl">
        <img src="/images/f-case-study.png" alt="" />
        <div className="md:flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold leading-1.2 tracking-tighter">{text}</h2>
        <p className="text-sm md:text-lg opacity-50 font-body">See for yourself how and the kind of magic we make</p>
        </div>
      </div>
  )
}