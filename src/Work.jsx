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
                            <a className='link' target='_blank' href='https://jobnova-sigma.vercel.app/'>Live Demo ↗</a>
                            <a className='link' target='_blank' href='https://github.com/redigob/JobNova' >Source Code ↗</a>
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
                            <a className='link' target='_blank' href='https://lumora-rediet4.vercel.app/'>Live Demo ↗</a>
                            <a className='link' target='_blank' href='https://github.com/redigob/BlogWebsite' >Source Code ↗</a>
                  </div>
                </div>

                <div className='projects'>
                  <p>03</p>
                  <img src='/images/portfolioimg.png'></img>
                  <h2>Portfolio Website</h2>
                  <p>A personal portfolio showcasing my projects, skills, and journey as a frontend developer.</p>
                  <div className='skills'>
                           <p>React</p>
                           <p>JavaScript</p>
                           <p>CSS</p>
                  </div>
                  <div className='links'>
                            <a className='link' target='_blank' href='https://portfolio-website-rho-dun-10.vercel.app/'>Live Demo ↗</a>
                            <a className='link' target='_blank' href='https://github.com/redigob/Portfolio-Website' >Source Code ↗</a>
                  </div>
                </div>

                <div className='projects'>
                  <p>04</p>
                  <img src='/images/Weather.png'></img>
                  <h2>Weather App</h2>
                  <p>Get real-time weather updates with a simple and clean interface.</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                  </div>
                  <div className='links'>
                            <a className='link' target='_blank' href='https://weatherapp-rediet4.vercel.app/'>Live Demo ↗</a>
                            <a className='link' target='_blank' href='https://github.com/redigob/Weather-App' >Source Code ↗</a>
                  </div>
                </div>

                <div className='projects'>
                  <p>05</p>
                  <img src='/images/Calculator.png'></img>
                  <h2>Calculator</h2>
                  <p>A clean, fucntional calculator with a simple UI.</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                  </div>
                  <div className='links'>
                            <a className='link' target='_blank' href='https://calculatorapp-rediet4.vercel.app/'>Live Demo ↗</a>
                            <a className='link' target='_blank' href='https://github.com/redigob/Calculator-App' >Source Code ↗</a>
                  </div>
                </div>
 
                <div className='projects'>
                  <p>06</p>
                  <img src='/images/Todo.png'></img>
                  <h2>To-Do List</h2>
                  <p>A simple tool for organizing your tasks.</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                  </div>
                  <div className='links'>
                            <a className='link' target='_blank' href='https://todolistapp-nine.vercel.app/'>Live Demo ↗</a>
                            <a className='link' target='_blank' href='https://github.com/redigob/TodoList-App' >Source Code ↗</a>
                  </div>
                </div>

                <div className='projects'>
                  <p>07</p>
                  <img src='/images/Quiz.png'></img>
                  <h2>Quiz App</h2>
                  <p>An interactive knowledge-testing experience.</p>
                  <div className='skills'>
                           <p>React</p>
                           <p>JavaScript</p>
                           <p>CSS</p>
                  </div>
                  <div className='links'>
                            <a className='link' target='_blank' href='https://quizapp-swart.vercel.app/'>Live Demo ↗</a>
                            <a className='link' target='_blank' href='https://github.com/redigob/Quiz-App' >Source Code ↗</a>
                  </div>
                </div>

                <div className='projects'>
                  <p>08</p>
                  <img src='/images/Note.png'></img>
                  <h2>Note App</h2>
                  <p>A simple note-taking app to capture, organize, and manage your thoughts.</p>
                  <div className='skills'>
                           <p>HTML</p>
                           <p>CSS</p>
                           <p>JavaScript</p>
                  </div>
                  <div className='links'>
                            <a className='link' target='_blank' href='https://noteapp-rediet4.vercel.app/'>Live Demo ↗</a>
                            <a className='link' target='_blank' href='https://github.com/redigob/Note-App' >Source Code ↗</a>
                  </div>
                </div>
            </div>
            <p>MORE IDEAS. MORE BUILDS</p>
        </div>
    );
}
 
export default Work;