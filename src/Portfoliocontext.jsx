import { createContext, useState } from "react";

export const Portfoliocontext = createContext()

export function Portfolioprovider({children}){
    const [darkmode,setDarkmode] = useState(false)

    return (
        <Portfoliocontext.Provider value={{darkmode,setDarkmode}}>
           {children}
        </Portfoliocontext.Provider>
    )

}