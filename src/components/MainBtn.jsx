import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MainBtn( { text, link } ) {
  return(
      <Link to={link}>
        <button className="flex items-center text-white text-md md:text-lg font-normal px-6 md:px-8 py-3 rounded-full gap-2 bg-(--text-color) hover:bg-(--primary-color) cursor-pointer group">{text}<span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight size={18} color="white" /></span> </button>
      </Link>
  )
} 

