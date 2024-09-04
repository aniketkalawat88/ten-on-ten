/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { RouteContext } from "../../../context/context";
import { usePathname } from "next/navigation";

export default function PhoneNavbarDrawer() {
  const path = usePathname();
  
  const {isDrawer,DrawerClose} = useContext(RouteContext)
  
  const categ = [
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
    <>

      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform hidden max-lg:inline ${
          isDrawer ? "translate-x-0" : "-translate-x-full"
        } bg-white w-64 dark:bg-secondary-main`}
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-white uppercase dark:text-white"
        >
         <Link href='/' className="flex items-center">
      <img
        src="/assests/logo.png"
        className="h-12 mr-3"
        alt="Logo"
      />
    </Link>
        </h5>
        <button
          type="button"
          onClick={DrawerClose}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <RxCross1 className="text-white" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {
              categ.map((ele,i) => (
              <li key={i}>
                <Link href={ele.link}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-orange-100 dark:hover:bg-primary-main group cursor-pointer ${path === ele.path ? "bg-primary-main font-medium" : "text-heading-main"}`} onClick={DrawerClose}
                >
                  <span className="ms-3">{ele.name}</span>
                </Link>
              </li>

              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}
