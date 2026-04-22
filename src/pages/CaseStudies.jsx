import { useParams } from "react-router-dom";
import { caseStudies } from "../data/CaseStudies.js";

export default function CaseStudies() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="flex flex-col w-full text-(--text-color)">
      
      {/* Title */}
      <div className="bg-gray-100 w-full pt-36 md:pt-44 pb-10 md:pb-14">

        <div className="mb-6 flex flex-col px-8 md:flex-row items-center gap-6 max-w-300 mx-auto">
          <img src={caseStudy.coverImg} alt={caseStudy.title} className="h-auto w-48 rounded-lg mb-3 md:mb-6" />
          <div>
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold mb-2">
          {caseStudy.title}
          </h1>
          <p className="text-(--text-color) font-normal text-xs md:text-base bg-gray-200 font-body p-2 px-4 rounded inline-block">
            {caseStudy.category}
          </p>
          </div> 
        </div>
      </div>
      

      {/* documentaion div */}
      <div className="max-w-300 mx-auto px-8 mt-10 md:mt-20 mb-20">
        <div className="flex flex-col md:grid grid-cols-2 gap-10 mb-10 md:mb-20">

          {/* painpoint */}
          <div className=" flex flex-col bg-gray-100 p-8 md:p-10 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Pain Point</h3>
            <p className="text-sm opacity-70 font-body md:text-base">{caseStudy.painPoint}</p>
          </div>
          
          {/* risk */}
          <div className=" flex flex-col bg-gray-100 p-8 md:p-10 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Risk</h3>
            <p className="text-sm opacity-70 font-body md:text-base">{caseStudy.risk}</p>
          </div>
          
          {/* system */}
          <div className="flex flex-col bg-gray-100 p-8 md:p-10 rounded-lg col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">System</h3>
            <p className="text-sm opacity-70 font-body md:text-base">{caseStudy.system}</p>
          </div>
        </div>
          

          {/* Responsive Case Study Image */}
          <picture>

            {/* Desktop Image */}
            <source
              media="(min-width: 768px)"
              srcSet={caseStudy.images.desktop}
            />

            {/* Mobile Image */}
            <img
              src={caseStudy.images.mobile}
              alt={caseStudy.title}
              loading="lazy"
              className="w-full rounded-lg"
            />

          </picture>

          {/* website(optional) */}
          <div className={`${!caseStudy.website ? "hidden" : "block"} mt-10 gap-2
           flex flex-col`}>
            <h3 className="italic">{caseStudy.website.type}</h3>
            <a href={caseStudy.website.link} target="blank" className="hover:text-white hover:bg-(--primary-color) bg-gray-100 px-4 py-2 rounded-lg text-base md:text-lg md:font-bold w-fit">{caseStudy.website.label}</a>
          </div>
      </div>
      
    </div>
  )
}