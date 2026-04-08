import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MainBtnSmall( { text, link } ) {
  return(
      <Link to={link}>
        <button className="bg-(--text-color) flex items-center text-white text-sm font-normal px-4 py-2 rounded-sm gap-2 hover:bg-(--primary-color) cursor-pointer group">{text}<span className=" transition-transform duration-300 group-hover:translate-x-2"><ArrowRight size={14} color="white" /></span> </button>
      </Link>
  )
} 

