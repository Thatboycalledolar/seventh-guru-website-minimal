import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MainBtn( { text, link } ) {
  return(
      <Link to={link}>
        <button className="bg-white flex items-center text-(--primary-color) text-md md:text-lg font-bold px-6 md:px-8 py-3 rounded-full gap-2 border-2 border-(--secondary-color) hover:bg-(--secondary-color) hover:border-white/50 cursor-pointer group">{text}<span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight size={18} color="#0059AA" /></span> </button>
      </Link>
  )
} 

