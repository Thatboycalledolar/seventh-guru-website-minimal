import ProTips from "./ProTips"

export default function ProTip() {
  return(
    <div className="bg-white px-8 py-10 text-(--text-color) max-w-300 m-8 rounded-lg">
      <div className="flex flex-col mb-6">
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Pro Tip!</h3>
        <p className="text-sm md:text-lg md:leading-tight ">If your brand is just starting out follow through from service one down to 3, or Upon conclusion and delivery of your brand foundation and digital infrastructure, switch to the retainer package because you get :</p>
      </div>
      
      <div>
        <ProTips text="Smooth transition and zero management hassle" />
        <ProTips text="Easy and less tedious rebranding or brand refresh" />
        <ProTips text="Continuity, expansion and growth without worries while maintaining root originality" />
      </div>
     
    </div>
  )
}