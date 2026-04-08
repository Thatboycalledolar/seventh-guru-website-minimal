import Reveal from "../components/Reveal";
import AboutPageHead from "../components/AboutPageHeader";

export default function About() {
  return(
    <div className="flex flex-col w-full">
        <AboutPageHead />
      
      {/* main div for the about content */}
      <div className="flex flex-col max-w-300 mx-auto px-8 pt-16">

      <Reveal>
         {/* div for each content */}
        <div className="flex flex-col text-(--text-color) w-full mb-16 ">
          <div className="flex flex-col mb-4 ">
            <h2 className="text-3xl font-bold ">What Drives Us</h2>
            <p className="text-base">(Mission and Vision)</p>
          </div>
          <div className="bg-(--background-color) p-8 text-sm md:text-base rounded-lg flex flex-col gap-2 font-body">
             <p>
              Our Mission is to build brand systems that create clarity,       command authority, and unlock scalable growth for ambitious   companies worldwide. We exist to transform fragmented ideas and visuals into cohesive identities that bring about trust and guarantees long term growth and scalability.
            </p>
             <p>
              We envision to become a globally respected brand design and infrastructure studio known for building high-performance brand infrastructures that elevate companies from local relevance to international authority.
            </p>
          </div >
        </div>
      </Reveal>

       

      <Reveal>
        <div className="flex flex-col text-(--text-color) w-full mb-16">
          <div className="flex flex-col gap-1 mb-4 ">
            <h2 className="text-3xl font-bold ">Why Strategy/Infrastructure matters</h2>
          </div>
          <div className="bg-(--background-color) p-8 text-sm md:text-base rounded-lg flex flex-col gap-2 font-body">
            <p>
              Strategy separates activity from direction. Without strategy, brands make decisions based on trends, emotion, or short-term pressure which results in inconsistencies like unclear positioning, and fragmented visual identity. This makes the brand’s growth become unstable because the foundation was never properly structured. 
            </p>
            <p>
              Strategy creates alignment. It defines who you are, who you serve, how you are different, and how every expression of the brand supports long-term objectives.it coordinates design, marketing, products, and customer experience.
            </p>
          </div>
            

        </div>
      </Reveal>


      <Reveal>
        <div className="flex flex-col text-(--text-color) w-full mb-16">
          <div className="flex flex-col gap-1 mb-4 ">
            <h2 className="text-3xl font-bold ">Our Beliefs</h2>
          </div>
          <div className="bg-(--background-color) p-8 text-sm md:text-base rounded-lg gap-2 flex flex-col font-body">
            <ul className="px-4 marker:text-(--primary-color)">
              <li className="list-disc ">Design without <span className="font-bold">strategy</span> causes chaos and unalignment.</li>
              <li className="list-disc">Strategy without <span className="font-bold">execution</span> lives on paper and brings no real results.</li>
              <li className="list-disc"><span className="font-bold">Strategic patterns</span> beat creative chaos every time.</li>
            </ul>
            <p>
              We exist to combine all to create the magic your brand needs.
            </p>
          </div>
        </div>
      </Reveal>



      <Reveal>
        <div className="flex flex-col text-(--text-color) w-full mb-16">
          <div className="flex flex-col gap-1 mb-4 ">
            <h2 className="text-3xl font-bold ">Our Core Values</h2>
          </div>
          <div className="bg-(--background-color) p-8 md:p-12 text-sm md:text-base rounded-lg gap-8 flex flex-col font-body">
            <div className="flex flex-col">
              <h3 className="font-bold text-xl mb-2">Professionalism</h3>
              <p>Creativity is often considered chaotic, we operate with laid out plans and structures to ensure smooth delivery, effective handling and timely response. We priortize effectiveness over fancy.</p>
            </div>

            <div className="w-[50%] h-px bg-gray-800"></div>

            <div className="flex flex-col">
              <h3 className="font-bold text-xl mb-2">Creativity</h3>
              <p>Strucure sometimes look boring, but we make your brand as stylish as possible. Unleashing creativity in your projects at it's best without compromising on structure in the slightest.</p>
            </div>

            <div className="w-[50%] h-px bg-gray-800"></div>
            
            <div className="flex flex-col">
              <h3 className="font-bold text-xl mb-2">Adaptability</h3>
              <p>To ensure that our clients remain releveant and competitive in a a world that is constantly evolving and changing trends, we have the ability to adapt fast to the trends in our clients industry. We pivot like we see the future.</p>
            </div>
          </div>
        </div>
      </Reveal>

      </div>

     <Reveal>
      <div className="px-4 pb-24">
        <div className="flex flex-col gap-1 mb-4 bg-(--primary-color) text-white py-12 px-8 md:px-16 rounded-lg md:items-start w-full max-w-300 mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center ">Founder's Note</h2>
          <div className="flex flex-col font-body w-full ">
            <p className="text-sm md:text-base text-center md:text-start mb-4">
            Seventh Guru is a brand infrastructure and design studio that helps growth-stage companies clarify their brand positioning, and scale with confidence. 
          </p>
          <p className="text-sm md:text-base text-center md:text-start mb-4">
            We work with founders and teams that understand that design is more than just beautiful visuals, it is strategic leverage for brands when used right.
          </p>
          <p className="text-sm md:text-base text-center md:text-start mb-4">
            Every engagement begins with clarity: who you are, what you stand for, and why you matter. 
          </p>
          </div>
          <p className="font-bold text-(--primary-color) bg-white py-2 px-4 rounded-md text-center md:text-start text-sm md:text-base">Clients do not come to us for design, They come for direction.</p>
        </div>  
      </div>
      
     </Reveal>
        
    </div>
    
  );
}