import ContactCard from "./ContactCard"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"
import { Globe } from "lucide-react"
import { InstagramIcon } from "lucide-react"

export default function Contact() {
  return(
    <div className="mb-16 w-full max-w-300 md:px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-16 w-[80%]">Reach Out to us for further Enquiries</h2>

      <div className="w-full bg-(--background-color) py-12 px-12 flex flex-col gap-16 rounded-lg md:grid grid-cols-2">
        <ContactCard icon={<Mail color="white"/>} text="Seventhguru@gmail.com" href="mailto:seventhguru@gmail.com" />
        <ContactCard icon={<Phone color="white" />} text="+23412345678" href="tel:+23412345678"/>
        <ContactCard icon={<Globe color="white" />} text="www.seventhguru.com" href="https://www.seventhguru.com" />
        <ContactCard icon={<InstagramIcon color="white" />} text="seventh_guru" href="https://www.instagram.com/seventh_guru/"/>
      </div>
    </div>
  )
}