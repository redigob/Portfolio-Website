import './App.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Hero from './Hero';
import Work from './Work';
const App = () => {
    return (  
        <div className="app">
            <Navbar/>
            <Hero/>
            <Work/>
        </div>
    );
}
 
export default App;