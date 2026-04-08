import ClientCard from "./ClientCard";

export default function Clients() {
  return(
    <div className="flex flex-col items-center px-4 py-16 gap-2">
      <div className="flex flex-col items-center px-12 py-16 gap-2 text-(--text-color)">
        <h2 className="text-4xl font-bold text-center leading-1.2 tracking-tighter">Our Clients trust us <br />completely</h2>
        <p className="text-sm font-body text-center">We are trusted by clients all around the globe</p>
      </div>

      <div className="grid grid-cols-2 px-12 gap-16">
        <ClientCard 
          image1="/client-logo/Career-base.svg"
          image2="/client-logo/Career-h.svg"
          alt="Career Base Logo"
          />
        <ClientCard 
          image1="/client-logo/olar-base.svg"
          image2="/client-logo/olar-h.svg"
          alt="Olar Logo"
          />
        <ClientCard 
          image1="/client-logo/babs-base.svg"
          image2="/client-logo/babs-h.svg"
          alt="BABS Logo"
          />
        <ClientCard 
          image1="/client-logo/fthf-base.svg"
          image2="/client-logo/fthf-h.svg"
          alt="fthf Logo"
          />
        <ClientCard 
          image1="/client-logo/friedrice-base.svg"
          image2="/client-logo/friedrice-h.svg"
          alt="Fried Rice Logo"
          />
        <ClientCard 
          image1="/client-logo/omma-base.svg"
          image2="/client-logo/omma-h.svg"
          alt="Omma Logo"
          />
        <ClientCard 
          image1="/client-logo/raven-base.svg"
          image2="/client-logo/raven-h.svg"
          alt="Raven Logo"
          />
        <ClientCard 
          image1="/client-logo/spicy-base.svg"
          image2="/client-logo/spicy-h.svg"
          alt="Spicy Logo"
          />
      </div>
    </div>
    
  )
}