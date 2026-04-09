import Reveal from "../components/Reveal";
import AboutPageHead from "../components/AboutPageHeader";
import { Palette } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { BadgeCheck } from "lucide-react";

export default function About() {
  return(
    <div className="flex flex-col w-full">
        <AboutPageHead />
      
      {/* main div for the about content */}
      <div className="flex flex-col md:grid grid-cols-2 gap-4 md:gap-10 max-w-350 mx-auto px-8 pt-16">

      <Reveal>
         {/* div for each content */}
        <div className="flex flex-col text-(--text-color) w-full mb-16 bg-gray-100 p-8 md:p-12 rounded-lg border-3 border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-(--primary-color)">Our Mission & Vision</h2>
          <div className="text-sm md:text-base rounded-lg flex flex-col gap-2 font-body">
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
        <div className="flex flex-col text-(--text-color) w-full mb-16 bg-gray-100 p-8 md:p-12 rounded-lg border-3 border-gray-200">
          
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-(--primary-color)">Our Beliefs</h2>
          
          <div className="text-sm md:text-base rounded-lg gap-2 flex flex-col font-body">
            <ul className="px-4 marker:text-(--primary-color)">
              <li className="list-disc ">Design without strategy causes chaos and unalignment.</li>
              <li className="list-disc">Strategy without execution lives on paper and brings no real results.</li>
              <li className="list-disc">Strategic patterns beat creative chaos every time.</li>
            </ul>
            <p className="font-semibold">
              We combine all to create the magic your brand needs.
            </p>
          </div>
        </div>
      </Reveal>



      <Reveal className="col-span-2">
        <div className="flex flex-col text-(--text-color) w-full mb-16 bg-gray-100 p-8 md:p-12 rounded-lg border-3 border-gray-200">
          
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-(--primary-color)">Our Core Values</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col bg-gray-200 p-6 md:p-10 rounded-lg">
              <BadgeCheck size={40} color="#333333" />
              <h3 className="font-bold text-xl md:text-2xl mb-2 mt-2 text-(--text-color)">Professionalism</h3>
              <p className="font-body text-sm md:text-base">Creativity is often considered chaotic, we operate with laid out plans and structures to ensure smooth delivery, effective handling and timely response. We priortize effectiveness over fancy.</p>
            </div>


            <div className="flex flex-col bg-blue-100 p-6 md:p-10 rounded-lg">
              <Palette size={40} color="#0059AA" />
              <h3 className="font-bold text-xl md:text-2xl mb-2 mt-2 text-(--primary-color)">Creativity</h3>
              <p className="font-body text-sm md:text-base">Strucure sometimes look boring, but we make your brand as stylish as possible. Unleashing creativity in your projects at it's best without compromising on structure in the slightest.</p>
            </div>

            
            <div className="flex flex-col bg-purple-100 p-6 md:p-10 rounded-lg">
              <BookOpenCheck size={40} color="#7435a5" />
              <h3 className="font-bold text-xl md:text-2xl mb-2 mt-2 text-purple-900/80">Adaptability</h3>
              <p className="font-body text-sm md:text-base">To ensure that our clients remain releveant and competitive in a a world that is constantly evolving and changing trends, we have the ability to adapt fast to the trends in our clients industry. We pivot like we see the future.</p>
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