import { useState } from "react";
import { review } from "../data/Review";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Review() {

  const [reviewPage, setReviewPage] = useState(0);

  const nextPage = () => {
    setReviewPage((prev) => (prev + 1) % review.length) 
  };

  const prevPage = () => {
    setReviewPage((prev) => prev === 0? review.length - 1 : prev - 1)
  };

  const rev = review[reviewPage]

  return(
    <div className="bg-(--background-color) w-full flex flex-col items-center justify-center py-20">
      <div className="max-w-300 px-8 md:px-30 flex flex-col md:items-start justify-start items-center ">
        <Reveal duration={0.5}>
          <h2 className="text-5xl md:text-6xl text-(--primary-color) font-bold mb-12">What Clients say!</h2>
        </Reveal>
        
       
      <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-8">
         <Reveal duration={0.7}>
           <div className="flex flex-col justify-start items-center md:items-start">
          <h3 className="text-2xl text-center md:text-left md:text-3xl h-40 font-body text-(--text-color)/80 font-normal tracking-tight mb-6">{rev.message}</h3>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg md:text-2xl text-(--primary-color) font-bold">{rev.name}</p>
            <p className="text-sm md:text-md text-(--text-color) font-normal">{rev.position}</p>
          </div>
        </div>
        </Reveal>
       
        
        <Reveal duration={0.9}>
          <div className="flex items-center justify-center gap-8">
          <button
          onClick={prevPage}
          className="cursor-pointer bg-white p-4 hover:shadow-lg hover:border-2 border-red-500 rounded-full w-full">
          <ChevronLeft color="red" /></button>

          <button
          onClick={nextPage}
          className="cursor-pointer bg-white p-4 hover:shadow-lg hover:border-2 border-(--primary-color) rounded-full w-full">
          <ChevronRight color="#0059AA" /></button>
        </div>
        </Reveal>
        
      </div>
      </div>
      
    </div>
  )
}