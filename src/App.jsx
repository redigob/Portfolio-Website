import './App.css'
import Navbar from './Navbar';
import Hero from './Hero';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import { useContext, useEffect } from 'react';
import { Portfoliocontext } from './Portfoliocontext';
const App = () => {
    const {setSelected} = useContext(Portfoliocontext)
    
    useEffect(()=>{
        const handleScroll = ()=>{
            document.querySelectorAll(".hero,.about,.work,.contact").forEach(section=>{
                const rect = section.getBoundingClientRect()
                const center = window.innerHeight /2

                if(rect.top<=center && rect.bottom>=center){
                    setSelected(section.classList[0])
                }
            })
        }
        window.addEventListener("scroll",handleScroll)
        handleScroll()

        return ()=> window.removeEventListener("scroll" , handleScroll)

    },[setSelected])
    
    
    return (  
        <div className="app">
            <Navbar/>
            <Hero/>
            <Work/>
            <About/>
            <Contact/>
        </div>
    );
}
 
export default App;