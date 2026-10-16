import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import {  useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Portfoliocontext } from './Portfoliocontext'

const Navbar = () => {
    const {scrollToSection,fullbar,setFullbar,selected} = useContext(Portfoliocontext)

    return (
        <div className="navbar">
           <div className='navbarinside'>
           <p>Rediet Gobezie</p>
           <div className='desktop'>
              <p className={selected=="hero" ? "selected" :""} onClick={()=>(scrollToSection("hero"))}>Home</p>
              <p className={selected=="work" ? "selected" :""} onClick={()=>(scrollToSection("work"))}>Work</p>
              <p className={selected=="about" ? "selected" :""} onClick={()=>(scrollToSection("about"))}>About</p>
              <p className={selected=="contact" ? "selected" :""} onClick={()=>(scrollToSection("contact"))}>Contact</p>
           </div>
        
           
           <div className='phone'>
            <div>
                <FontAwesomeIcon icon={faBars} onClick={()=>setFullbar(!fullbar)}/>
            </div>
            <div className={fullbar ? "full" :""}>
                <p className={selected=="hero" ? "selected" :""} onClick={()=>(scrollToSection("hero"))}>Home</p>
                <p className={selected=="work" ? "selected" :""} onClick={()=>(scrollToSection("work"))}>Work</p>
                <p className={selected=="about" ? "selected" :""} onClick={()=>(scrollToSection("about"))}>About</p>
                <p className={selected=="contact" ? "selected" :""} onClick={()=>(scrollToSection("contact"))}>Contact</p>
            </div>
           </div>
         </div>
        </div>
    );
}
 
export default Navbar;