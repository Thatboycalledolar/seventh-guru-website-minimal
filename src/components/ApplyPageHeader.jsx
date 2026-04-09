

export default function ApplyPageHeader() {
  return(
   <div className="bg-gray-100 w-full pt-36 md:pt-44 pb-20 md:pb-24">
      <div className="flex flex-col items-center max-w-300 mx-auto px-8">
        <h1 className="text-(--text-color) text-5xl tracking-tighter max-w-[80%] font-bold text-center md:text-6xl mb-4 md:mb-8">Apply to work <br /><span className="text-(--primary-color)"> with Us</span> </h1>
        <p className="opacity-70 text-(--text-color) font-body text-sm md:text-base leading-5 text-center max-w-[80%] md:max-w-[70%]">Tell us about your project and we'll see if we're a good fit.</p>
      </div>
    </div>
  )
}