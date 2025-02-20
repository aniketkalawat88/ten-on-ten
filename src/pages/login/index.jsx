import { DummyData } from '@/styles/dummy-data'
import { useRouter } from 'next/navigation'
import React , { useState } from 'react'

const Login = () => {
  const router = useRouter();
  const [isLoading , setIsLoading] = useState(false)
  const [isVal , setIsVal] = useState({
    email:'',
    password:'',
  })
  
const handleChange = (e) => {
  setIsVal({
      ...isVal,
      [e.target.name] : e.target.value
  })
}
const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);
  if(isVal.email === DummyData.user.email && isVal.password === DummyData.user.password){
    localStorage.setItem('user', JSON.stringify(isVal))
    router.push("/")
    setIsLoading(false)
  }
  else{
    alert("plese try again")
    setIsLoading(false)
  }
  console.log(isVal)
}
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
        <div className="relative mx-auto w-full h-96 max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
  <div className="w-full">
    <div className="text-center">
      <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
      <p className="mt-2 text-gray-500">Sign in below to access your account</p>
    </div>
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="relative mt-6">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={isVal.email}
            onChange={handleChange}
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            Email Address
          </label>
        </div>
        <div className="relative mt-6">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={isVal.password}
            onChange={handleChange}
            className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label
            htmlFor="password"
            className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            Password
          </label>
        </div>
        <div className="my-6">
          <button
            type="submit"
            className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
          >
            Sign in
          </button>
        </div>
        <p className="text-center text-sm text-gray-500">
          {`Don't have an account yet?`}
          <a
            href="#!"
            className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
          >
            Sign up { isLoading && <span>...</span>}
          </a>
          .
        </p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login