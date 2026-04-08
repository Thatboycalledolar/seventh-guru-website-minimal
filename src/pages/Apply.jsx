import Form from "../components/Form";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import ApplyPageHeader from "../components/ApplyPageHeader";

export default function Apply() {
  return(
    <div className="flex flex-col items-center  text-(--text-color) w-full">
        <ApplyPageHeader />
      
      <div className="w-full max-w-300">
        <Reveal>
         <Form />
        </Reveal>
        <Reveal>
         <Contact />
        </Reveal>
      </div>
      
      
      
    </div>
  );
}