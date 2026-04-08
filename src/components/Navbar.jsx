import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full shadow-lg">
      <div className="px-8 py-4 flex max-w-300 mx-auto justify-between items-center">
        
        {/* Logo */}
        <a href="/"><img src="/logo-full-blue.svg" alt="Seventh guru logo" className="h-9
         w-auto" /></a>

        {/* Desktop Links */}
        <div className="flex justify-center items-center text-(--text-color) gap-6">
          <div className="hidden md:flex text-base gap-6 font-medium">
          <Link to="/" className="hover:text-(--primary-color)">Home</Link>
          <Link to="/Services" className="hover:text-(--primary-color)">Services</Link>
          <Link to="/CaseStudy" className="hover:text-(--primary-color)">CaseStudy</Link>
          <Link to="/About" className="hover:text-(--primary-color)">About</Link>
        </div>
        <div className="hidden md:flex">
          <Link to="/Apply">
            <button className="text-white text-[14px] px-5 py-3 rounded-full bg-slate-700 hover:bg-(--primary-color) cursor-pointer"> Work with Us</button>
          </Link>
        </div>
        </div>
        
        

        {/* Hamburger */}
       <button
          onClick= {() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-slate-700 transform transition duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-slate-700 transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-slate-700 transform transition duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div  className={`md:hidden flex items-end flex-col gap-4 px-8 pt-8 pb-24 bg-white shadow-2xl transition-all duration-300 overflow-hidden relative ${
          open ? "max-h-102 rounded-none " : "max-h-0"} `}> 

          <div className="flex flex-col items-end gap-4">
            <Link to="/" onClick={() => setOpen(false)} className="text-slate-700 font-bold text-lg">Home</Link>
            <Link to="/Services" onClick={() => setOpen(false)} className="text-slate-700 font-bold text-lg">Services</Link>
            <Link to="/CaseStudy" onClick={() => setOpen(false)} className="text-slate-700  font-bold text-lg">CaseStudy</Link>
            <Link to="/About" onClick={() => setOpen(false)} className="text-slate-700 font-bold text-lg mb-4">About</Link>
            <Link to="/Apply" onClick={() => setOpen(false)}><button className="bg-(--primary-color) flex text-white text-lg items-center font-bold px-4 py-2 rounded-md gap-2 cursor-pointer"> Work with Us </button></Link>
          </div>

           <h1 className="font-bold text-9xl bg-clip-text text-transparent bg-linear-to-r from-slate-700 to-white">menu</h1>
          
          
           
        </div>
      )} 
    </nav>
  );
}
