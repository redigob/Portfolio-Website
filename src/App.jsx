import './App.css'
import {Route, Routes, useLocation} from 'react-router-dom'
import Navbar from './Navbar';
import Hero from './Hero';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import { useEffect } from 'react';
const App = () => {
    const scrollToSection = (className) =>{
        document.querySelector(`.${className}`)?.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    }

    return (  
        <div className="app">
            <Navbar scrollToSection={scrollToSection}/>
            <Hero scrollToSection={scrollToSection}/>
            <Work/>
            <About/>
            <Contact/>
        </div>
    );
}
 
export default App;