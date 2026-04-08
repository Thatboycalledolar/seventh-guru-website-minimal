import MainBtnSmall from "./MainBtnSmall"

export default function ServiceCard({ title, description, image }) {
  return(
    <div className="bg-white p-6 rounded-lg shadow-lg w-90">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-6" />
      <h3 className="text-2xl font-bold text-(--primary-color) mb-2">{title}</h3>
      <p className="text-[12px] text-(--text-color) mb-6 font-body">{description}</p>
      <MainBtnSmall text="Apply Now" link="/Apply" />
    </div>
  )
}