import { createContext ,useState } from 'react'


const RouteContext = createContext();

const RouteProvider = ({children}) => {
    const [isPopup , setIsPopup] = useState(false);
    const [isDrawer , setIsDrawer] = useState(false);
    
    const PopupOpen = () => {
      setIsPopup(true);
    };

    const PopupClose = () => {
      setIsPopup(false);
    };
    const DrawerOpen = () => {
      setIsDrawer(true);
    };

    const DrawerClose = () => {
      setIsDrawer(false);
    };
    
  return (
    <RouteContext.Provider value={{ isPopup , PopupOpen , PopupClose , isDrawer,DrawerOpen ,DrawerClose}}>
        {children}
    </RouteContext.Provider>
  )
}

export  {RouteProvider,   RouteContext}