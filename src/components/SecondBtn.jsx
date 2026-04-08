import { Link } from "react-router-dom";

export default function SecondBtn( { text, link } ) {
  return(
      <Link to={link}>
        <button className="flex items-center text-white hover:text-(--primary-color) text-md md:text-lg font-normal px-6 md:px-8 py-3 rounded-full gap-2 border-2 border-white hover:bg-white cursor-pointer group">{text}</button>
      </Link>
  )
} 

