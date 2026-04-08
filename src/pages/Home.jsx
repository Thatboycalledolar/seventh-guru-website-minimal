import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import FeaturedCaseStudy from "../components/FeaturedCaseStudy";
import WorkWithUs from "../components/WorkWithUs";
import Client2 from "../components/Clients2";
import Review from "../components/Review";

export default function Home() {
  return(
   <div className="flex flex-col items-center w-full">
    
    <Hero />
    <Client2 />
    <div className="h-0.5 rounded-full max-w-150 bg-[#333333] mt-4 mb-10 w-[70%]"></div>
    <Problem />
    <Solution />
    <FeaturedCaseStudy />
    <Review />
    <WorkWithUs />
    
   </div>
    
  );
}

