import Reveal from "./Reveal"

export default function Solution() {
  return(
    <div className="w-full rounded-2xl flex flex-col items-start px-8 py-16 md:px-16 max-w-300 gap-8">
      <div className="max-w-300 w-full py-8 flex flex-col items-start rounded-xl gap-4">
        <Reveal duration={0.5}>
          <h2 className="text-left w-full text-6xl md:text-8xl font-bold leading-14 md:leading-18 tracking-tighter text-(--text-color)">Our <br />Services</h2>
        </Reveal>
        <Reveal duration={0.7}>
           <p className="text-sm md:text-lg font-body">We have a Structured Approach to ensure your brand’s Sustainable Growth.</p>
        </Reveal>
        
       
      </div>
      
      <div className="flex flex-col items-start py-8 md:grid grid-cols-2 gap-12">
        <Reveal duration={0.5}>
          <div className=" gap-3 flex flex-col items-start bg-amber-100 py-6 rounded-2xl border-3 border-(--text-color) px-8 hover:-translate-y-3 hover:border-(--primary-color) transition-transform 3s ease-in-out">
            <p className="text-9xl font-bold text-amber-900/60">01.</p>
            <h3 className="font-bold tracking-tighter text-3xl md:text-4xl text-(--text-color) text-left">Brand Foundation</h3>
            <p className="font-normal text-(--text-color) text-sm md:text-lg mb-4 font-body leading-tight w-full">For companies that need clarity, positioning, and credibility. We create stunning visuals that effectively depict the brand and it's core values to represent it both online and prints.</p>

            <div className="flex flex-col w-full gap-2 text-white pb-4">
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">Brand Positioning</p>
              <p className="bg-(--text-color) py-2 text-left px-4 rounded-lg">Brand Messaging</p>
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">Visual Identity</p>
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">Brand Giudeline</p>
            </div>
        </div>
        </Reveal>
          
        <Reveal duration={0.5}>
          <div className=" gap-3 flex flex-col items-start bg-blue-200 py-6 rounded-2xl border-3 border-(--text-color) px-8 hover:-translate-y-3 hover:border-(--primary-color) transition-transform 3s ease-in-out">
            <p className="text-9xl font-bold text-(--primary-color)/60">02.</p>
            <h3 className="font-bold tracking-tighter text-3xl md:text-4xl text-left text-(--text-color)">Digital Infrastructure</h3>
            <p className="font-normal text-(--text-color) text-sm md:text-lg mb-4 font-body leading-tight w-full">Your website is your 24/7 salesman and brand representative, Creating a great user experience for your website visitors is important to retain trust and choice of your brand. </p>

            <div className="flex flex-col w-full gap-2 text-white pb-4">
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">UI/Ux (web design and development)</p>
              <p className="bg-(--text-color) py-2 text-left px-4 rounded-lg">Web and mobile App development</p>
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">MVP design, development and update</p>
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">Website update and redesign</p>
            </div>
        </div>
        </Reveal>

        <Reveal duration={0.5} className="col-span-2">
          <div className=" gap-3 flex flex-col items-start bg-purple-200 py-6 rounded-2xl border-3 border-(--text-color) px-8 col-span-2 hover:-translate-y-3 hover:border-(--primary-color) transition-transform 3s ease-in-out">
            <p className="text-9xl font-bold text-purple-900/60">03.</p>
            <h3 className="font-bold tracking-tighter text-3xl md:text-4xl text-left text-(--text-color)">Retainer Partnership</h3>
            <p className="font-normal text-(--text-color) text-sm md:text-lg mb-4 font-body leading-tight w-full ">After creating the brand infrastructure, it’s time to make use of these system to maintain the overall look and performance of your brand. We offer ongoing design leadership and execution for scaling teams..</p>

            <div className="flex flex-col w-full gap-2 text-white pb-4 md:grid grid-cols-2">
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">Monthly design</p>
              <p className="bg-(--text-color) py-2 text-left px-4 rounded-lg">Brand guidelines iteration</p>
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">Ongoing design support</p>
              <p className="bg-(--text-color) text-left py-2 px-4 rounded-lg">Brand elements refresh</p>
            </div>
        </div>
        </Reveal>
        


        


        

        </div>
      </div>
  )
}