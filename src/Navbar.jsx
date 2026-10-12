import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLightbulb,faToggleOff, faToggleOn} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { useContext, useState } from 'react'
import { Portfoliocontext } from './Portfoliocontext'

const Navbar = () => {
    const {darkmode,setDarkmode} = useContext(Portfoliocontext)
    const [fullbar,setFullbar] = useState(false)
    console.log(darkmode)
    return (
        <div className="navbar">
           <p>Rediet Gobezie</p>
           <div className='desktop'>
              <p>Home</p>
              <p>Work</p>
              <p>About</p>
              <p>Contact</p>
              <FontAwesomeIcon icon={faLightbulb}/>
           </div>
        
           
           <div className='phone'>
            <div>
                <FontAwesomeIcon icon={darkmode ? faToggleOn :faToggleOff} onClick={()=>setDarkmode(!darkmode)} />
                <FontAwesomeIcon icon={faBars} onClick={()=>setFullbar(!fullbar)}/>
            </div>
            <div className={fullbar ? "full" :""}>
                <p>Home</p>
                <p>Work</p>
                <p>About</p>
                <p>Contact</p>
            </div>
           </div>
        </div>
    );
}
 
export default Navbar;