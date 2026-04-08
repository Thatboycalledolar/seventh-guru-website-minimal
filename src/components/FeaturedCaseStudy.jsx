import MainBtn from "./MainBtn";
import FeaturedCaseHeader from "./FeaturedCaseHeader";
import { caseStudies } from "../data/CaseStudies";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";


export default function FeatureCaseStudy() {
  return(
    <div className="flex flex-col items-center w-full max-w-300 py-16 gap-8 px-6 md:px-16">
      <Reveal duration={0.5} className="w-full">
         <FeaturedCaseHeader text="Featured Case Study" />
      </Reveal>

      <div className="flex flex-col md:grid grid-cols-2 md:max-w-300 gap-10 w-full mb-8">
               {caseStudies.map((study) => (
              <Link key={study.slug} to={`/CaseStudies/${study.slug}`}>
        <Reveal duration={0.5}>
            <div className="group relative h-80 rounded-lg overflow-hidden cursor-pointer w-full">
                    {/* Background Image */}
              <img
                src={study.coverImg}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-120 transition-all ease-in-out 5s"
              />

              {/* Overlay */}
            
              <div
                className="absolute inset-0 flex flex-col justify-end p-6
                opacity-100 md:opacity-0
                translate-y-0 md:translate-y-10
                md:group-hover:translate-y-0 md:group-hover:opacity-80
                transition-all duration-500 ease-in-out"
                style={{ backgroundColor: `${study.color}99` }}
              >
                <h3 className="text-white text-2xl font-bold">
                  {study.title}
                </h3>
                <p className="text-white/80 text-sm font-body">
                  {study.category}
                </p>
              </div>
                </div>
      </Reveal>
          
              </Link>

              
          ))}
          
         
      </div>
      <Reveal duration={0.5}>
          <MainBtn text="View more case studies" link="/CaseStudy" />
      </Reveal>
       
    </div>
  )
}