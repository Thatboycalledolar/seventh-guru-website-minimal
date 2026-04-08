import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";


export default function ServiceDropDown({id, active, setActive, header,service, drop1, drop2, drop3, drop4} ) {

  const isOpen = active === id;

  function toggleDropdown() {
    setActive( isOpen? null : id);
  }

  return(
    <div className="relative">

      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="hover:border-2 border-(--primary-color) px-2 w-full py-2 rounded-md flex cursor-pointer"
      >
        <span className={`transition ease-in-out 3000 ${isOpen? "rotate-90" : "rotate-0"}`}><ChevronRight width={18} color="#0059AA"/></span>{service}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex flex-col mt-2 bg-white border-2 border-(--primary-color) rounded-md overflow-hidden"
          >
            <div className="px-4 md:px-10 py-6">
              <p className="pb-2 font-bold">{header}</p>
              <ul className="px-8 list-disc marker:text-(--primary-color)">
                <li>{drop1}</li>
                <li>{drop2}</li>
                <li>{drop3}</li>
                <li>{drop4}</li>
              </ul>
            </div>
          </motion.div>
        
      )}
      </AnimatePresence>
      

    </div>
  )
}