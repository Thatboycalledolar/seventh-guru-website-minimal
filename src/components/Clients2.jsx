import Reveal from "./Reveal";

export default function Clients2() {

  const clients = [
    { name: "Career Launchpad", logo: "/client-logo/Career-h.svg", logo2: "/client-logo/Career-base.svg" },
    { name: "Olar by Olar", logo: "/client-logo/olar-h.svg", logo2: "/client-logo/olar-base.svg" },
    { name: "Babs Fitness", logo: "/client-logo/babs-h.svg", logo2: "/client-logo/babs-base.svg" },
    { name: "Feed the Heart Foundation", logo: "/client-logo/fthf-h.svg", logo2: "/client-logo/fthf-base.svg" },
    { name: "Friedrice Zone", logo: "/client-logo/friedrice-h.svg", logo2: "/client-logo/friedrice-base.svg" },
    { name: "Omma's Afromart", logo: "/client-logo/omma-h.svg", logo2: "/client-logo/omma-base.svg" },
    { name: "Raven's crown care", logo: "/client-logo/raven-h.svg", logo2: "/client-logo/raven-base.svg" },
    { name: "Spicy reef", logo: "/client-logo/spicy-h.svg", logo2: "/client-logo/spicy-base.svg" },
  ];

  return (
    <div className=" flex flex-col justify-center items-center mb-16 w-full max-w-300 overflow-hidden mt-18">
      <Reveal duration={0.5}>
       <div className="flex flex-col  items-center px-12 gap-2 text-(--text-color)">
           <h2 className="text-lg md:text-2xl font-bold text-center leading-1.2 tracking-tighter">Trusted by:</h2>
            </div>
        </Reveal>
       
        <Reveal duration={0.7} className="w-full">
        <div className="py-10 overflow-hidden overflow-x-hidden w-full max-w-162.5 md:max-w-300 md:px-48 px-16">
          <div className="relative overflow-hidden ">

          {/* gradient fades */}
          <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10"></div>

          <div className="flex marquee w-full">

              <div className="flex shrink-0">
                {[...clients, ...clients].map((client, index) => (
                <div key={index} className="relative group w-17.5 h-12.5 mr-10 md:mr-16 md:h-16 md:w-20">

                  {/* base logo */}
                  <img
                    src={client.logo2}
                    alt={client.name}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* colored logo */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                </div>
              ))}

              </div>
            </div>

          </div>
      </div>
      </Reveal>

      

    </div>
    
    
  );
}