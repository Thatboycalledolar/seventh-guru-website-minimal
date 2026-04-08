 import MainBtn from "../components/MainBtn";
 import Reveal from "./Reveal";
 import ImageFade from "./ImageFade";
 import Stats from "./Stats";
 
 export default function Hero() {
  return(
    <div className=" w-full min-h-screen  bg-linear-to-b from-(--primary-color) to-[#001E3A] flex flex-col items-center justify-center">
      
      <div className="flex flex-col lg:flex-row items-start justify-start w-full pt-48 px-8 pb-24 gap-8 max-w-300">

        <div className="flex flex-col items-center lg:items-start  gap-4 mb-12 max-w-300 w-full">
          <div className="flex flex-col items-center lg:items-start justify-start gap-4 mb-8 w-full">
            <Reveal delay={0.2} y={70}>
              <h1 className="text-5xl md:text-7xl leading-12 md:leading-16 text-center lg:text-left text-white font-bold tracking-tight  md:max-w-200">From ideas, We create. <br /> <span className="font-black text-(--secondary-color)">You Scale!</span></h1>
            </Reveal>
            <Reveal delay={0.4} y={70}>
              <p className="text-center lg:text-left font-normal text-white/50 text-sm md:text-lg font-body w-full">We work with growth inclined Companies to create professional brand positioning, brand identity, and digital experiences that drive trust, conversion, and growth.</p>
            </Reveal> 
          </div>
          <div >
            <Reveal delay={0.6} y={70}>
              <MainBtn text="Apply to work with Us" link="/Apply" />
            </Reveal>
          </div>
        </div>
        
        <Reveal delay={0.8} className="flex relative w-full">
          <ImageFade />
        </Reveal>
      
        
      </div>

      <Reveal delay={0.2} className="w-full max-w-300 px-8 md:px-20">
        <div className="flex items-center justify-between bg-white gap-4 border-3 border-(--secondary-color) rounded-2xl md:px-20 px-10 py-3 md:py-6 mb-24">
          <Stats number="20+" title="Brands built" />
          <div className="h-8 bg-(--text-color) rounded-full w-0.5"></div>
          <Stats number="3" title="Countries" />
          <div className="h-8 bg-(--text-color) rounded-full w-0.5"></div>
          <Stats number="80+" title="Projects" />
        </div>
        
      </Reveal>

      
      
       
    </div>
   
  )
 }
 