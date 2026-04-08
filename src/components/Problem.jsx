import { ArrowDown } from "lucide-react"
import Reveal from "./Reveal";

export default function Problem() {
  return(
    <div className="w-full flex flex-col items-center gap-8 mb-4 px-8 md:px-16 max-w-300">
        <div className=" py-16 gap-8 flex flex-col items-center"> 
          <Reveal duration={0.5}>
            <h3 className="text-4xl md:text-5xl text-center font-bold text-(--text-color) leading-1.2 tracking-tighter max-w-4xl"><span className="text-(--primary-color)">Anticipated Growth Without Structure</span> Creates Friction and unalignment.</h3>
          </Reveal>
          <Reveal duration={0.7}>
            <p className="text-center text-(--text-color) font-body text-sm md:text-lg max-w-4xl font-normal px-8">As companies start to scale, brand clarity may weaken. Messaging becomes inconsistent, What worked at the early stage may begin to break under growth pressure.</p>
          </Reveal>
          
          
        </div>
      <Reveal duration={0.9}>
        <div className="flex flex-col items-center gap-6">
        <h3 className="text-md">That’s where we come in</h3>
        <ArrowDown className="animate-bounce" height={34} color="#0059AA"/>
      </div>
      </Reveal>
      
    </div>
  );
}