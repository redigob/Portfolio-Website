import { useContext } from 'react';
import './Hero.css'
import { Portfoliocontext } from './Portfoliocontext';
const Hero = () => {
    const {scrollToSection} = useContext(Portfoliocontext)
    return (
        <div className="hero">
            <div className='first'>
               <div>
                    <p>FRONTEND DEVELOPER · COMPUTER SCIENCE STUDENT </p>
                    <div>
                        <p>I turn ideas into </p>
                        <p> digital</p> 
                        <p>experiences</p>
                    </div>
                    <p>I am a developer who loves turning ideas into useful, intuitive, and beautiful web applications. </p>
                    <p>I enjoy solving problems, exploring new technologies, and bringing ideas to life through code.</p>
                
                    <div className='buttons'>
                        <button onClick={()=>scrollToSection("work")}>View My Work</button>
                        <button ><a href="/Rediet_Gobezie_CV.pdf" download>Download CV ↓</a></button>
                    </div>

                    <div>
                        <p>· ·</p>
                        <p>SCROLL TO EXPLORE</p>
                    </div>
                </div>
                <img src="/images/hero5.jpg"/>
            </div>
            
        </div>
    );
}
 
export default Hero;