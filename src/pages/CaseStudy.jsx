import { Link } from "react-router-dom";
import { caseStudies } from "../data/CaseStudies.js";
import CaseStudyPageHead from "../components/CaseStudyPageHead.jsx";
import Reveal from "../components/Reveal.jsx";

export default function CaseStudy() {
  return(
     <div className="flex flex-col gap-8 w-full mb-12">
      <CaseStudyPageHead />

      <div className="flex flex-col px-8 max-w-300 items-center w-full mx-auto mt-10 md:mt-20 mb-20">
        
      
        <div className="flex flex-col md:grid grid-cols-2 md:max-w-300 gap-16 w-full">
         {caseStudies.map((study) => (
        <Link key={study.slug} to={`/CaseStudies/${study.slug}`}>
          <Reveal>
          <div className="group cursor-pointer p-4 pb-8 bg-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full w-full">

            <img
              src={study.coverImg}
              alt={study.title}
              className="rounded-lg w-full h-80 object-cover mb-8"
            />

            <h3 className="mt-4 text-xl font-bold md:text-3xl md:mb-2">
              {study.title}
            </h3>

            <p className="text-xs text-(--text-color)/50 bg-white shadow-sm inline-flex px-2 py-1 rounded-sm font-body md:text-sm">
              {study.category}
            </p>
          </div>
          </Reveal>
        </Link>
        ))}
      </div>
      </div>

      

        
      </div>
  );
}