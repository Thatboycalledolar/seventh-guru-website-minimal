

export default function ClientCard({ image1, image2, alt }) {
  return(
    <div className="relative group">
      <img 
        src={image1}
        alt={alt}
        className="w-[80px] h-[80px] transition-opacity duration-300 ease-in-out group-hover:opacity-0 "
        />

      <img
        src={image2}
        alt={alt}
        className="absolute top-0 left-0 w-[80px] h-[80px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer"
        />
        
    </div>
  )
}