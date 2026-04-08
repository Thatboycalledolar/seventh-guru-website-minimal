import { useState } from "react";
import TheProcess from "../components/TheProcess";
import ProTip from "../components/ProTip";
import ServiceDetails from "../components/ServiceDetails";
import ServiceDropDown from "../components/ServiceDropDown";
import ServicePageHead from "../components/ServicePageHead";
import Reveal from "../components/Reveal";

export default function Services() {

  const [active, setActive] = useState(null);

  return(
    <div className="flex flex-col items-center w-full gap-8">
      
      
      <ServicePageHead />

      {/* service cards div */}
      <div className="flex flex-col max-w-300 px-8 md:px-16 items-start md:items-center md:mt-30">

        {/* card one */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-30">
          <Reveal delay={0}>
            <h3 className="text-start md:text-end text-[200px] md:text-[250px] font-bold italic text-amber-300">01</h3>
          </Reveal>
          
          <div className="flex flex-col gap-8">
            <Reveal delay={0.2}>
               <ServiceDetails header="Brand Foundation" body="For companies that need clarity, positioning, and credibility. We create stunning visuals that effectively depict the brand and it's core values to represent it both online and prints."/>
            </Reveal>
           
            <div className="flex flex-col">
              <Reveal delay={0.1}>
                 <ServiceDropDown 
                  id="brand-foundation-1"
                  active={active}
                  setActive={setActive}
                  service="Brand Architecture" 
                  header="What we Deliver:"
                  drop1="Market & Audience Research" 
                  drop2="Competitive Analysis" 
                  drop3="Brand Positioning" 
                  drop4="Brand Messaging" />
              </Reveal>
              <Reveal delay={0.2}>
                <ServiceDropDown 
                  id="brand-foundation-2"
                  active={active}
                  setActive={setActive}
                  service="Visual Identity Design" 
                  header="What we Deliver:"
                  drop1="Logo Design" 
                  drop2="Color and Typography" 
                  drop3="Iconography and pattern" 
                  drop4="Brand Guideline" />
              </Reveal>
              <Reveal delay={0.3}>
                <ServiceDropDown 
                  id="brand-foundation-3"
                  active={active}
                  setActive={setActive}
                  service="Digital Materials" 
                  header="What we can do:"
                  drop1="Social Media Templates" 
                  drop2="Digital Ads (static, carousels & motion)" 
                  drop3="Presentation Deck Templates" 
                  drop4="Social Post Schedule" />
              </Reveal>
              <Reveal delay={0.4}>
                <ServiceDropDown 
                  id="brand-foundation-4"
                  active={active}
                  setActive={setActive}
                  service="Print Media" 
                  header="What we can do:"
                  drop1="Business Cards" 
                  drop2="Promotional Materials (flyers, Roll-ups etc.)" 
                  drop3="Stationeries" 
                  drop4="Packaging Design" />
              </Reveal>
            </div>
            
          </div>
        </div>

        <div className="h-0.5 w-[80%] md:w-[50%] bg-gray-500 mt-20 mb-5 md:mb-40 md:mt-30"></div>

        {/* card two */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-30">
          <Reveal delay={0}>
            <h3 className="text-start md:text-end text-[200px] md:text-[250px] font-bold italic text-blue-300">02</h3>
          </Reveal>
          
          <div className="flex flex-col gap-8">
            <Reveal delay={0.2}>
               <ServiceDetails header="Digital Infrastructure" body="Your website is your 24/7 salesman and brand representative, Creating a great user experience for your website visitors is important to retain trust and choice of your brand."/>
            </Reveal>
           
            <div className="flex flex-col">
              <Reveal delay={0.1}>
                 <ServiceDropDown 
                  id="digital-1"
                  active={active}
                  setActive={setActive}
                  service="UI/Ux Design" 
                  header="What we Deliver:"
                  drop1="User Research & Persona" 
                  drop2="Wireframes & Low Fidelity Design" 
                  drop3="Responsive Design & Prototyping" 
                  drop4="Uability Testing" />
              </Reveal>
              <Reveal delay={0.2}>
                <ServiceDropDown 
                  id="digital-2"
                  active={active}
                  setActive={setActive}
                  service="Website Development" 
                  header="What we can do:"
                  drop1="Corporate Websites" 
                  drop2="E-Commerce Websites" 
                  drop3="Custom Web Applications" 
                  drop4="Portfolio & One-page Websites" />
              </Reveal>
              <Reveal delay={0.3}>
                <ServiceDropDown 
                  id="digital-3"
                  active={active}
                  setActive={setActive}
                  service="App Development" 
                  header="What we can do:"
                  drop1="iOS App Development" 
                  drop2="Android App Development" 
                  drop3="Cross-Platform Apps (React Native, Flutter)" 
                  drop4="App Maintenance" />
              </Reveal>
            </div>
            
          </div>
        </div>

        <div className="h-0.5 w-[80%] md:w-[50%] bg-gray-500 mt-20 mb-5 md:mb-40 md:mt-30"></div>

         {/* card three */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-30">
          <Reveal delay={0}>
            <h3 className="text-start md:text-end text-[200px] md:text-[250px] font-bold italic text-purple-300">03</h3>
          </Reveal>
          
          <div className="flex flex-col gap-8">
            <Reveal delay={0.2}>
               <ServiceDetails header="Retainer Partnership" body="After creating the brand infrastructure, it’s time to make use of these system to maintain the overall look and performance of your brand. We offer ongoing design leadership and execution for scaling teams."/>
            </Reveal>
           
            <div className="flex flex-col">
              <Reveal delay={0.1}>
                 <ServiceDropDown 
                  id="retainer-1"
                  active={active}
                  setActive={setActive}
                  service="Ongoing Support" 
                  header="What we Deliver:"
                  drop1="Monthly Corporate Design" 
                  drop2="Monthly Social Media Design" 
                  drop3="Design Reviews & Edits" 
                  drop4="Monthly Website banner Design" />
              </Reveal>
              <Reveal delay={0.2}>
                <ServiceDropDown 
                  id="retainer-2"
                  active={active}
                  setActive={setActive}
                  service="Brand Tracking" 
                  header="What we can do:"
                  drop1="Brand Elements Refresh" 
                  drop2="Design Performance Tracking" 
                  drop3="UI Performance Tracking" 
                  drop4="Website Elements Refresh" />
              </Reveal>
            </div>
            
          </div>
        </div>

      </div>
      
      <div className="bg-(--text-color) w-full flex flex-col items-center py-8">
        <div className=" max-w-300 px-4">
            <TheProcess />
          <Reveal>
            <ProTip /> 
          </Reveal>
            

          
          
           
        </div>
      </div>
      
      
    </div>
    
  );
}