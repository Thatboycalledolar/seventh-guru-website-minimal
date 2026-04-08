import MainBtn from "./MainBtn"
import Reveal from "./Reveal"

export default function WorkWithUs() {
  return (
    <div className="flex flex-col items-center px-12 py-16 gap-12 mb-16 max-w-300">
      <Reveal duration={0.5}>
        <div className="text-center text-(--text-color) flex flex-col gap-4 items-center">
        <h2 className="font-bold text-4xl md:text-5xl leading-1.2 tracking-tighter">How to work with Us</h2>
        <p className="text-sm md:text-lg font-body">Working with us is easy but we need to verify as we can’t work with every brand</p>
      </div>
      </Reveal>
      

      <div className="flex flex-col gap-8 items-center w-full">
        <Reveal duration={0.7} className="w-full">
          <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm md:text-lg w-full">Apply to work with us by filling out our Application form</p>
        </Reveal>
        <Reveal duration={0.8} className="w-full">
          <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm md:text-lg w-full">Get on a Discovery call</p>
        </Reveal>
        <Reveal duration={0.9} className="w-full">
          <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm md:text-lg w-full">We device the best strategy for your brand and execute</p>
        </Reveal>
        <Reveal duration={1.0} className="w-full">  
           <p className="font-body font-light bg-(--background-color) p-6 rounded-md text-sm md:text-lg w-full">Long term Partnership</p>
        </Reveal>
        </div>
        <Reveal duration={0.5}>
           <MainBtn text="Apply Now" link="/Apply" />
        </Reveal>
     
    </div>
  )
}