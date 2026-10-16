import { Link } from 'react-router-dom';
import './Work.css'
 
const Work = () => {
    return (
        <div className="work">
            <h2>Projects I have built</h2>
            <p>A collection of ideas turned into working digital experience</p>
            <div>
                <div className='project1'>
                   <img src="/images/Jobnova.png"></img>
                   <div>
                        <p>01</p>
                        <h2>JobNova</h2>
                        <p>A job platform that helps people discover opportunities aligned with their skills and goals.</p>
                        <div className='skills'>
                           <p>React</p>
                           <p>JavaScript</p>
                           <p>CSS</p>
                        </div>
                        <div className='links'>
                            <Link className='link' to={""}>Live Demo ↗</Link>
                            <Link className='link' to={""}>Source Code ↗</Link>
                        </div>
                   </div>
                </div>

                <div className='projects'>
                  <p>02</p>
                  <img src='/images/lumora.png'></img>
                  <h2>Lumora</h2>
                  <p>A clean blog platform to explore stories, ideas and knowledge</p>
                  <div className='skills'>
                           <p>React</p>
                           <p>JavaScript</p>
                           <p>CSS</p>
                        </div>
                    <div className='links'>
                            <Link className='link' to={""}>Live Demo ↗</Link>
                            <Link className='link' to={""}>Source Code ↗</Link>
                    </div>
                </div>

                <div className='projects'>
                  <p>03</p>
                  <img src='/images/Weather.png'></img>
                  <h2>Weather App</h2>
                  <p>Get real-time weather updates with a simple and clean interface.</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                  </div>
                  <div className='links'>
                            <Link className='link' to={""}>Live Demo ↗</Link>
                            <Link className='link' to={""}>Source Code ↗</Link>
                  </div>
                </div>

                <div className='projects'>
                  <p>04</p>
                  <img src='/images/Calculator.png'></img>
                  <h2>Calculator</h2>
                  <p>A clean, fucntional calculator with a simple UI.</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                  </div>
                  <div className='links'>
                            <Link className='link' to={""}>Live Demo ↗</Link>
                            <Link className='link' to={""}>Source Code ↗</Link>
                  </div>
                </div>
 
                <div className='projects'>
                  <p>05</p>
                  <img src='/images/Todo.png'></img>
                  <h2>To-Do List</h2>
                  <p>A simple tool for organizing your tasks.</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                  </div>
                  <div className='links'>
                            <Link className='link' to={""}>Live Demo ↗</Link>
                            <Link className='link' to={""}>Source Code ↗</Link>
                  </div>
                </div>

                <div className='projects'>
                  <p>06</p>
                  <img src='/images/Quiz.png'></img>
                  <h2>Quiz App</h2>
                  <p>An interactive knowledge-testing experience.</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                  </div>
                  <div className='links'>
                            <Link className='link' to={""}>Live Demo ↗</Link>
                            <Link className='link' to={""}>Source Code ↗</Link>
                  </div>
                </div>

                <div className='projects'>
                  <p>07</p>
                  <img src='/images/Note.png'></img>
                  <h2>Note App</h2>
                  <p>A clean blog platform to explore stories, ideas and knowledge</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                        </div>
                    <div className='links'>
                            <Link className='link' to={""}>Live Demo ↗</Link>
                            <Link className='link' to={""}>Source Code ↗</Link>
                    </div>
                </div>
            </div>
            <p>MORE IDEAS. MORE BUILDS</p>
        </div>
    );
}
 
export default Work;