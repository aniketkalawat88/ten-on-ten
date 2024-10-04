import React, { useState , useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { RxCross1 } from "react-icons/rx";
import { RouteContext } from '../../../context/context';

const GetCounsularModal = () => {
  const { isPopup , PopupClose } = useContext(RouteContext)


  const [isLoading , setIsLoading] = useState(false);
  const [isVal ,setIsVal] = useState({
    name:'',
    email:'',
    number:'',
    message:'',
    location:'',
    property:''
})
const handleChange = (e) => {
    setIsVal({
        ...isVal,
        [e.target.name] : e.target.value
    })
}
const handleSubmit = async (e) => {
  e.preventDefault();
  try{
      setIsLoading(true)
      const res = await axios.post("https://sheetdb.io/api/v1/59aqknib5ssla", isVal);
      console.log(isVal);
      toast.success("Data Submitted Successfully")
      setIsLoading(false)
  }
  catch(err){
      toast.error("❌ Data not Submit")
      console.log(err,"error hai")
      setIsLoading(false)
  }
  setIsVal({
    name:'',
    email:'',
    number:'',
    message:'',
    location:'',
    property:''
  })
}

  return (
    <div>
      <div 
        id="modelConfirm"
        className={`fixed z-50 inset-0 bg-white bg-opacity-60 overflow-y-auto h-full w-full px-4 ${isPopup ? '' : 'hidden'}`}
      >
        <div className="relative top-10 mx-auto rounded-md max-w-6xl">
          <div className="p-6 pt-0 text-center">
          <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
            <button
              onClick={PopupClose}
              type="button"
              className="text-white absolute right-8 top-6 bg-transparent scale-125 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center z-20 "
            >
             <RxCross1 />
            </button>
        <div className="text-white relative px-4 py-10 bg-[#c7a86f] shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Get Free Consultation</h1>
            <p className="text-gray-300">
              
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <input
              className="shadow text-lg appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              value={isVal.name}
              onChange={handleChange}
              required 
            />
            <input
              className="shadow text-lg appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={isVal.email}
              onChange={handleChange}
              required 
            />
            <input
              className="shadow text-lg appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Number"
              name="number"
              value={isVal.number}
              onChange={handleChange}
              required 
            />
            <input
              className="shadow text-lg appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Location"
              name="location"
              value={isVal.location}
              onChange={handleChange}
              required 
            />
            <input
              className="shadow text-lg appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline col-span-2"
              type="text"
              placeholder="Property"
              name="property"
              value={isVal.property}
              onChange={handleChange}
              required 
            />
            <textarea
              className="col-span-2 shadow text-lg min-h-0 appearance-none border rounded h-40 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              type="text"
              placeholder="Type your message here..."
              name="message"
              value={isVal.message}
              onChange={handleChange} 
            
            />
            <div className="flex justify-between">
            <button type="Submit" className="shadow hover:bg-heading-main bg-secondary-main text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-44">
                Submit
                    {
                        isLoading && <span className="animate-spin">ting </span>
                    }
                </button>
            </div>
          </form>
          
      <ToastContainer />
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCounsularModal;