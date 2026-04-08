import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Form() {

  const [step, setStep] = useState(1);

  const [error, setError] =useState("");

  const formRef = useRef();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function validateStep(){
    if (step === 1) {
      return formData.name && formData.email
    }

    if (step === 3) {
      return formData.service
    }

    if (step === 4) {
      return formData.budget
    }

    if (step === 5) {
      return formData.timeline
    }

    return true; 
  }

  function nextStep() {
    if (!validateStep()) {
      setError("Please complete required fields");
      return;
    }
    setError("");
    setStep(step + 1);
  }

  function prevStep() {
    setError("");
    setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_mavzenl",
      "template_vjj7yhq",
      formRef.current,
      "vSIVmJ3pvFzduW6Zp"
    )
    .then(
      () => {
        navigate("/Application-recieved")
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong, please try again later.");
      }
    )
  }

  return (
    <div className="w-full max-w-300 mx-auto px-8 md:px-20 py-12 mb-24">

      {/* Progress indicator */}
      <div className="flex justify-between mb-10 text-sm">

        {[1,2,3,4,5,6].map((num) => (
          <div
            key={num}
            className={`flex-1 h-1 mx-1 rounded-full ${
              step >= num ? "bg-(--primary-color)" : "bg-gray-200"
            }`}
          />
        ))}

      </div>


      {error && (
        <p className="bg-red-500 py-2 px-4 rounded-md inline-flex text-white text-sm mb-6">{error}</p>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Hidden inputs for form data */}
        <input type="hidden" name="name" value={formData.name} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="company" value={formData.company} />
        <input type="hidden" name="website" value={formData.website} />
        <input type="hidden" name="service" value={formData.service} />
        <input type="hidden" name="budget" value={formData.budget} />
        <input type="hidden" name="timeline" value={formData.timeline} />
        <input type="hidden" name="message" value={formData.message} />

        {/* STEP 1 */}
        {step === 1 && (
          <>

        {/* step 1 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              Personal Information
            </h1>

          {/* name div */}
            <div className="flex flex-col gap-4 w-full">
              <p>Name <span className="text-red-500">*</span></p>
              <input
                  type="text"
                  name="name"
                  placeholder="Enter your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-(--background-color) text-sm p-6 font-body italic rounded-md w-full "
                />
            </div>

            {/* email div */}
            <div className="flex flex-col gap-4 w-full mb-6">
              <p>Email <span className="text-red-500">*</span></p>
              <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-(--background-color) text-sm p-6 font-body italic rounded-md w-full  "
            />
            </div>
            

            <div className="flex">
              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6 flex gap-2 rounded-md cursor-pointer"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}




        {/* STEP 2 */}
        {step === 2 && (
          <>

          {/* step 2 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              Brand Information
            </h1>

          <div className="flex flex-col gap-4 w-full">
            <p>Company Name</p>
             <input
              type="text"
              name="company"
              placeholder="Company / Brand Name"
              value={formData.company}
              onChange={handleChange}
              required
              className="bg-(--background-color) text-sm p-6 font-body italic rounded-md w-full"
            />
          </div>


          <div className="flex flex-col gap-4 w-full mb-6">
            <p>Company Website (If Available)</p>
             <input
              type="text"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
              className="bg-(--background-color) text-sm p-6 font-body italic rounded-md w-full"
            />
          </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2 cursor-pointer"
              >
                <ArrowLeft width={18} />
                Back
                
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6  flex gap-2 rounded-md cursor-pointer"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}




        {/* STEP 3 */}
        {step === 3 && (
          <>

          {/* step 3 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              Choose a Service
            </h1>

             <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  title:"Brand Identity",
                  img:"/icons/brand-identity.svg"
                },
                {
                  title:"Website Design",
                  img:"/icons/website.svg"
                },
                {
                  title:"Brand Identity + Website Design",
                  img:"/icons/duo.svg"
                },
                {
                  title:"Retainer Partnership",
                  img:"/icons/retainer.svg"
                }

              ].map((service) => (

                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setFormData({...formData, service: service.title})
                  }}
                  className={`bg-(--background-color) px-4 py-2 rounded-lg text-left transition ${formData.service === service.title ? "bg-(--primary-color) text-white" : "bg-(--background-color) hover:bg-(--primary-color) hover:text-white"}`}
                >
                  <div className="flex items-center gap-4 p-2 group">
                    <img src={service.img} alt="" className="w-10 h-auto bg-(--primary-color) p-1 rounded-sm"/>
                    <p className="text-lg font-bold">{service.title}</p>
                  </div>
                  
                </button>
              ))}
             </div>
          

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2 cursor-pointer"
              >
                <ArrowLeft width={18} />
                Back
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6 rounded-md flex gap-2 cursor-pointer"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}




        {/* STEP 4 */}
        {step === 4 && (
          <>

          {/* step 4 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              What's this service worth to you
            </h1>

             <div className="flex flex-col gap-4 mb-8">
              {[
                "$500 - $1,000",
                "$1,000 - $3,000",
                "$3,000 - $7,000",
                "$8,000+",
              ].map((budget) => (

                <button
                  key={budget}
                  type="button"
                  onClick={() => {
                    setFormData({...formData, budget})
                  }}
                  className={`bg-(--background-color) px-4 py-2 rounded-lg text-left transition ${formData.budget === budget ? "bg-(--primary-color) text-white" : "bg-(--background-color) hover:bg-(--primary-color) hover:text-white"}`}
                >
                 <p className="text-lg font-bold">{budget}</p>
                </button>
              ))}
             </div>
          

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2 cursor-pointer"
              >
                <ArrowLeft width={18} />
                Back
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6 rounded-md flex gap-2 cursor-pointer"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}



        {/* STEP 5 */}
        {step === 5 && (
          <>

          {/* step 5 header */}
            <h1 className="text-3xl font-bold text-left mb-4 text-(--text-color)">
              What's your preffered delivery duration
            </h1>

             <div className="flex flex-col gap-4 mb-8">
              {[
                "Less than 2 Weeks",
                "1 Month",
                "1 - 3 Months",
                "3+ Months",
              ].map((timeline) => (

                <button
                  key={timeline}
                  type="button"
                  onClick={() => {
                    setFormData({...formData, timeline})
                  }}
                  className={`bg-(--background-color) px-4 py-2 rounded-lg text-left transition ${formData.timeline === timeline ? "bg-(--primary-color) text-white" : "bg-(--background-color) hover:bg-(--primary-color) hover:text-white"}`}
                >
                    <p className="text-lg font-bold">{timeline}</p>
                  
                </button>
              ))}
             </div>
          

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2 cursor-pointer"
              >
                <ArrowLeft width={18} />
                Back
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-(--primary-color) text-white py-3 px-6 rounded-md flex gap-2 cursor-pointer"
              >
                Next
                <ArrowRight width={18} />
              </button>
            </div>
          </>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <>

          <h1 className="text-3xl font-bold text-left text-(--text-color)">
              Walk us through your Project <span className="text-red-500">*</span>
            </h1>


            <div className="flex flex-col"></div>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleChange}
              rows="8"
              required
              className="bg-(--background-color) p-4 rounded-md mb-8"
            />

            <div className="flex gap-4 justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border py-3 px-6 rounded-md flex gap-2 cursor-pointer"
              >
                <ArrowLeft width={18} />
                Back
              </button>

              <button
                type="submit"
                className="bg-(--primary-color) text-white py-3 px-6 rounded-md cursor-pointer"
              >
                Submit Application
              </button>
            </div>
          </>
        )}

      </form>

    </div>
  );
}