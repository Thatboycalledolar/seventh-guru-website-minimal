


export default function ServicesHeader () {
  return(
    <div className="w-full flex flex-col items-center gap-8 px-8 max-w-300">
      <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center w-full h-auto px-8 py-12 flex flex-col gap-8 items-center justify-center rounded-lg">
        <h1 className="text-4xl text-center text-white font-bold">How we ensure <span className="text-(--secondary-color)">your brand’s growth</span></h1>
        <img src="/service-hero-img.png" alt="header image" className="md:w-120 h-auto" />
      </div>
    </div>
  )
}