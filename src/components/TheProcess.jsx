import ProcessCard from "./ProcessCard";
import Reveal from "./Reveal";

export default function TheProcess() {
  return(
    <div className="flex flex-col items-center py-8  gap-12 max-w-300">
      <Reveal>
         <div className="flex flex-col items-start px-8 text-start p-8 rounded-md text-white max-w-300 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">The Process</h2>
          <p className="text-sm md:text-lg font-body opacity-60 ">Systems build brands, we also have structured processes we follow to create the magic your brand needs</p>
        </div>
      </Reveal>
     

      <div className="flex flex-col w-full py-6 gap-2 items-start">
        <Reveal delay={0.1}>
          <ProcessCard title="Onboarding" description="Taking the bold step to do what would bring the best out of your brand needs accolades of its own, we take time and honor welcoming you on board." Index="01." />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="h-20 border-l-2 border-dashed border-white mx-8"></div>
        </Reveal>
        <Reveal delay={0.1}>
        <ProcessCard title="Discovery" description="Time to get on a call to understand the pain-points of your brand, your core values so we can create systems custom made for just your brand." Index="02." />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="h-20 border-l-2 border-dashed border-white mx-8"></div>
        </Reveal>
        <Reveal delay={0.1}>
          <ProcessCard title="Infrastructure" description="Conclusion of the discovery call gives us the important information about your brand that helps us create the backbone and skeletal structure before design." Index="03." />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="h-20 border-l-2 border-dashed border-white mx-8"></div>
        </Reveal>
        <Reveal delay={0.1}>
          <ProcessCard title="Design" description="Here is where our creatives spring into action using the just created system, the provided information and our professional flare to create effective yet aesthetically pleasing visuals." Index="04." />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="h-20 border-l-2 border-dashed border-white mx-8"></div>
        </Reveal>
        
        <Reveal delay={0.1}>
           <ProcessCard title="Review & Refinement" description="There is always room for improvement, we may be the professionals but we do not discard your input, we review, rearrange, and optimize your visuals till complete satisfaction." Index="05." />
        </Reveal>
        
        <Reveal delay={0.2}>
          
        <div className="h-20 border-l-2 border-dashed border-white mx-8"></div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <ProcessCard title="Hand-off" description="Now your visuals, and systems are ready for your brand to implement and grow. we appreciate and congratulate you for partnering with us while handing your files over." Index="06." />
        </Reveal>
      </div>
      
    </div>
  )
}