import { createContext, useState } from "react";

export const Portfoliocontext = createContext()

export function Portfolioprovider({children}){
    const [fullbar,setFullbar] = useState(false)
    const [selected,setSelected] = useState("hero")
    const scrollToSection = (className) =>{
            document.querySelector(`.${className}`)?.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
            setFullbar(false)
    }

    return (
        <Portfoliocontext.Provider value={{scrollToSection,fullbar,setFullbar,selected,setSelected}}>
           {children}
        </Portfoliocontext.Provider>
    )

}