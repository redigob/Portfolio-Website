import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div className="work">
            <h2>Things I have brought to life</h2>
            <p>A collection of Projects I've built while learning, experimenting, and turning ideas into working applications.</p>
            <div>
                <div>
                    <img src=""/>
                    <h2>Lumora</h2>
                    <p>Blog platform</p>
                    <p>React · Javascript · css</p>
                    <Link to={""}>Live Demo ↗</Link>
                </div>
                <div>
                    <img src=""/>
                    <h2>JobNova</h2>
                    <p>Job discovery platform</p>
                    <p>React · Javascript · css</p>
                    <Link to={""}>Live Demo ↗</Link>
                </div>
                <div>
                    <img src=""/>
                    <h2>Calculator</h2>
                    <p>Utility application</p>
                    <p>HTML · CSS · JavaScript</p>
                    <Link to={""}>Live Demo ↗</Link>
                </div>
                <div>
                    <img src=""/>
                    <h2>Weather App</h2>
                    <p>Weather application</p>
                    <p>HTML · CSS · JavaScript</p>
                    <Link to={""}>Live Demo ↗</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Work;