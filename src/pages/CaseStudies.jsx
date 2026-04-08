import { useParams } from "react-router-dom";
import { caseStudies } from "../data/CaseStudies.js";

export default function CaseStudies() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="flex flex-col w-full max-w-6xl text-(--text-color) p-8 mt-24">
      
      {/* Title */}
      <div className="mb-6 flex items-center gap-6">
        <img src={caseStudy.coverImg} alt={caseStudy.title} className="h-auto w-32 md:w-48 rounded-lg mb-6" />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
        {caseStudy.title}
        </h1>
        <p className="text-(--text-color) font-normal text-sm md:text-lg mb-12 bg-(--background-color) p-2 px-4 rounded inline-block">
          {caseStudy.category}
        </p>
        </div>
        
      </div>
      

      {/* painpoint */}
      <p className=" mb-12 md:text-lg">
        <span className="font-bold">Pain Point:</span> {caseStudy.painPoint}
      </p>

      {/* risk */}
      <p className=" mb-12 md:text-lg">
        <span className="font-bold">Risk:</span> {caseStudy.risk}
      </p>

      {/* system */}
      <p className=" mb-12 md:text-lg">
        <span className="font-bold">System:</span> {caseStudy.system}
      </p>

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
    </div>
  )
}