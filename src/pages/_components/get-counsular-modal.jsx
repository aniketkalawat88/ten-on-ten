import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const GetCounsularModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [isLoading , setIsLoading] = useState(false);
  const [isVal ,setIsVal] = useState({
    name:'',
    email:'',
    message:''
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
      message:''
  })
}

  return (
    <div>
      <button
        className="bg-heading-main text-primary-main hover:bg-heading-main py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
        onClick={openModal}
      >
        Get Free consulation
      </button>
      <div
        id="modelConfirm"
        className={`fixed z-50 inset-0 bg-primary-main/20 bg-opacity-60 overflow-y-auto h-full w-full px-4 ${isOpen ? '' : 'hidden'}`}
      >
        <div className="relative top-20 mx-auto rounded-md max-w-xl">
          <div className="flex justify-end p-2 absolute top-0 right-0 ">
            <button
              onClick={closeModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center z-20 "
            >
             X
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
          <div className="relative py-3 sm:max-w-5xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-main to-primary-main shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-secondary-main shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Get Free Consulation</h1>
            <p className="text-gray-300">
              
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="shadow mb-4 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              value={isVal.name}
              onChange={handleChange}
              required 
            />
            <input
              className="shadow mb-4 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={isVal.email}
              onChange={handleChange}
              required 
            />
            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-40 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              type="text"
              placeholder="Type your message here..."
              name="message"
              value={isVal.message}
              onChange={handleChange} 
              required
            />
            <div className="flex justify-between">
            <button type="Submit" className="shadow bg-heading-main hover:bg-primary-main text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-44">
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