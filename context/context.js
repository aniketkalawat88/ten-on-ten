import { createContext ,useState } from 'react'


const RouteContext = createContext();

const RouteProvider = ({children}) => {
    const [isPopup , setIsPopup] = useState(false);
    const PopupOpen = () => {
      setIsPopup(true);
    };

    const PopupClose = () => {
      setIsPopup(false);
    };
    
  return (
    <RouteContext.Provider value={{ isPopup , PopupOpen , PopupClose}}>
        {children}
    </RouteContext.Provider>
  )
}

export  {RouteProvider,   RouteContext}