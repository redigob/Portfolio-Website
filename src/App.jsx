import './App.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Hero from './Hero';
import Work from './Work';
import About from './About';
import Contact from './Contact';
const App = () => {
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