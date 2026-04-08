import ServiceCard from "../components/ServiceCard";

export default function TheServices() {
  return(
    <div className="flex flex-wrap justify-center bg-(--background-color) w-full gap-12 p-12" >
      <div className="flex flex-wrap justify-center gap-12 max-w-300">
        <ServiceCard 
          title="Brand Foundation"
          description="For companies that need clarity, positioning, and credibility. We create stunning visuals that effectively depict the brand and it's core values to represent it both online and prints."
          image="/image-ser-1.png"
        />
        <ServiceCard 
          title="Digital Infrastructure"
          description="Your website is your 24/7 salesman and brand representative, Creating a great user experience for your website visitors is important to retain trust and choice of your brand. "
          image="/image-ser-2.png"
        />
        <ServiceCard 
          title="Retainer Partnership"
          description="After creating the brand infrastructure, it’s time to make use of these system to maintain the overall look and performance of your brand. We offer ongoing design leadership and execution for scaling teams."
          image="/image-ser-3.png"
        />
      </div>
        
      </div>
  )
}