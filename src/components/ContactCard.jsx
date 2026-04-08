

export default function ContactCard({ icon, text, href }) {
  return(
    
       <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          >
          <div className="font-bold text-lg flex flex-col hover:shadow-lg items-center bg-white p-8 rounded-lg">
            <div className="bg-(--primary-color) p-2 rounded-md mb-4">{icon}</div>
            <p className="text-center">{text}</p> 
          </div>
        
    </a>
    
   
    
       
    
      
     
  )
}