import './Hero.css'
const Hero = () => {
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
                        <button>View My Work</button>
                        <button>About Me</button>
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