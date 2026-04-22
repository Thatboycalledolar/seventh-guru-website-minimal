 import MainBtn from "../components/MainBtn";
 import Reveal from "./Reveal";
 import ImageFade from "./ImageFade";
 
 export default function Hero() {
  return(
    <div className=" w-full min-h-screen pb-24 bg-gray-100 flex flex-col items-center justify-center">
      
      <div className="flex flex-col lg:flex-row items-start justify-start w-full pt-48 px-8 pb-24 gap-8 max-w-300">

        <div className="flex flex-col items-center mx-auto gap-4 mb-12 max-w-300 w-full">
          <div className="flex flex-col items-center justify-center gap-4 mb-12 w-full">
            <Reveal delay={0.2} y={70}>
              <h1 className="text-5xl md:text-7xl mb-4 leading-12 md:leading-20 text-center text-(--text-color) font-bold tracking-tight md:max-w-200">From ideas, We create. <br /> <span className="font-black text-(--primary-color)">You Scale!</span></h1>
            </Reveal>
            <Reveal delay={0.4} y={70}>
              <p className="text-center font-normal text-(--text-color)/70 text-sm md:text-base font-body md:max-w-[50%] mx-auto">We work with growth inclined Companies to create professional brand positioning, brand identity, and digital experiences that drive trust, conversion, and growth.</p>
            </Reveal> 
          </div>
          <div >
            <Reveal delay={0.6} y={70}>
              <MainBtn text="Apply to work with Us" link="/Apply" />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full px-8 gap-12 max-w-300 bg-white md:rounded-2xl p-6 md:p-8">
        <Reveal delay={0.8} className="flex w-full">
          <ImageFade />
        </Reveal>

        <Reveal delay={0.2} className="w-full" >
        <div className="flex md:flex-col items-start w-full md:h-120 justify-between bg-gray-100 gap-6 rounded-2xl px-4 md:px-8 py-3 md:py-8">
          <div className="w-full flex flex-col justify-center items-center h-full md:h-[50%] bg-gray-200 rounded-md md:rounded-xl p-4 md:shadow-lg">
            <h3 className="font-bold text-2xl md:text-7xl text-(--text-color)">20+</h3>
            <p className="font-body text-sm md:text-xl text-(--text-color)">Brands Built</p>
          </div>
          <div className="flex w-full md:h-[50%] gap-6 justify-between">
            <div className="flex flex-col items-center justify-center bg-gray-200 w-full rounded-md md:rounded-xl p-4 md:shadow-lg">
              <h3 className="font-bold text-2xl md:text-7xl text-(--text-color)">3</h3>
              <p className="font-body text-sm md:text-xl text-(--text-color)">Countries</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-200 w-full rounded-md md:rounded-xl p-4 md:shadow-lg">
              <h3 className="font-bold text-2xl md:text-7xl text-(--text-color)">80+</h3>
              <p className="font-body text-sm md:text-xl text-(--text-color)">Projects</p>
            </div>
          </div>
        </div>
        
      </Reveal>
      </div>

      

      
      
       
    </div>
   
  )
 }
 