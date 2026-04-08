import { CircleCheck } from "lucide-react"
import MainBtn from "../components/MainBtn"
import Contact from "../components/Contact"
import { Link } from "react-router-dom"


export default function ApplicationRecieved() {
  return(
    <div className="flex flex-col items-center w-full px-8 pt-36">
      <div className="flex flex-col items-center gap-6 mb-18 text-(--text-color) mt-20" >
        <h1 className="text-4xl text-center font-bold">Application Submitted <br />Successfully</h1>
        <CircleCheck color="#0059AA" width={96} height={96} />
      </div>

      
        <p className="bg-(--background-color) py-8 px-6 text-sm md:text-base rounded-lg gap-2  text-center mb-18">
          Our Onboarding team is evaluating your project and will back to you within 24hrs 
        </p>


      <div className="flex flex-col items-center gap-4 mb-36">
        <h3>Meanwhile</h3>
        <div className="flex flex-col items-center gap-4">
          <MainBtn text="View some Case Studies" link="/CaseStudy"/>
          <Link to="/">
            <button className="bg-red-500 px-4 py-3 text-sm rounded-sm text-white cursor-pointer hover:bg-red-700">Back to Homepage</button>
          </Link>
        </div>
        
      </div>

      <Contact />
      
    </div>
  )
}