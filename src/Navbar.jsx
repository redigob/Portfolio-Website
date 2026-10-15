import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({scrollToSection}) => {
    const [fullbar,setFullbar] = useState(false)
    
    return (
        <div className="navbar">
           <div className='navbarinside'>
           <p>Rediet Gobezie</p>
           <div className='desktop'>
              <p onClick={()=>(scrollToSection("hero"))}>Home</p>
              <p onClick={()=>(scrollToSection("work"))}>Work</p>
              <p onClick={()=>(scrollToSection("about"))}>About</p>
              <p onClick={()=>(scrollToSection("contact"))}>Contact</p>
           </div>
        
           
           <div className='phone'>
            <div>
                <FontAwesomeIcon icon={faBars} onClick={()=>setFullbar(!fullbar)}/>
            </div>
            <div className={fullbar ? "full" :""}>
                <p onClick={()=>(scrollToSection("hero"))}>Home</p>
                <p onClick={()=>(scrollToSection("work"))}>Work</p>
                <p onClick={()=>(scrollToSection("about"))}>About</p>
                <p onClick={()=>(scrollToSection("contact"))}>Contact</p>
            </div>
           </div>
         </div>
        </div>
    );
}
 
export default Navbar;