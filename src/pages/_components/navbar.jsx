/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React , { useState , useContext } from 'react'
import { IoMdMenu } from "react-icons/io";
import PhoneNavbarDrawer from './phone-navbar-drawe';
import { RouteContext } from '../../../context/context';

const Navbar = () => {
    const path = usePathname();
    const { PopupOpen } = useContext(RouteContext)

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
    const arr =[
        {
            name:'Home',
            link:'/',
            path:'/',
        },
        {
            name:'Our Service',
            link:'/our-service',
            path:'/our-service',
        },
        {
            name:'Blogs',
            link:'/blogs',
            path:'/blogs',
        },
        {
            name:'About us',
            link:'/about-us',
            path:'/about-us',
        },
        {
            name:'Contact Us',
            link:'contact-us',
            path:'/contact-us',
        },
    ]
  return (
    <div>
     <nav  data-aos="fade-down" data-aos-duration="3000" className="bg-white border-gray-200 py-2.5 ">
  <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
    <Link href='/' className="flex items-center">
      <img
        src="/assests/logo.png"
        className="h-6 mr-3 sm:h-16"
        alt="Logo"
      />
    </Link>
    <div className="flex items-center lg:order-2">
      <div className="hidden mt-2  sm:inline-block">
      </div>
      <div
      className="bg-heading-main cursor-pointer text-primary-main hover:bg-heading-main py-2 px-4 rounded-full text-base font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg lg:inline
       hidden"
       onClick={PopupOpen}
    >
     Get Free consulation
    </div>
    <div className="hidden max-lg:inline">
        <PhoneNavbarDrawer />
    </div>
    </div>

      <ul className="lg:flex hidden justify-between mt-0 text-lg w-full max-w-xl">
        {
            arr.map((ele,i) => (
            <a key={i}
              href={ele.link}
              className={`block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-main lg:p-0  lg:dark:hover:text-primary-main lg:dark:hover:font-medium dark:hover:bg-gray-700 dark:hover:text-heading-main lg:dark:hover:bg-transparent  dark:border-gray-700 ${path === ele.path ? "text-primary-main font-medium" : "text-heading-main"}`}
            >
                {ele.name}
            </a>

            ))
        }
      </ul>
  </div>
</nav>
  {/* <nav className="bg-white border-gray-200 py-2.5 ">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
    <Link href='/' className="flex items-center">
        <img
          src="/assests/logo.png"
          className="h-6 mr-3 sm:h-16"
          alt="Logo"
        />
      </Link>
      <div className="flex items-center lg:order-2">
        <div className="hidden mt-2 mr-4 sm:inline-block">
          <span />
        </div>
        <Link
        href="/free-counsular"
          className="text-primary-main hover:bg-primary-main focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-heading-main dark:hover:bg-heading-main focus:outline-none dark:focus:ring-heading-main bg-heading-main"
        >
        Get Free consulation
        </Link>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="true"
        >
          <span className="sr-only">Open main menu</span>
          <IoMdMenu className="text-xl" />
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0 text-lg">
        
          {
              arr.map((ele,i) => (
          <li key={i}>
            <Link
              href={ele.link}
              className={`block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-primary-main dark:hover:bg-gray-700 dark:hover:text-primary-main lg:dark:hover:bg-transparent dark:border-gray-700 ${path === ele.path ? "text-primary-main font-medium" : "text-heading-main"}`}
            >
              {ele.name}
            </Link>
          </li>
              ))
          }
        </ul>
      </div>
    </div>
  </nav> */}

    </div>
  )
}

export default Navbar