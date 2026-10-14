import { faLightbulb, faLocation, faLocationArrow, faLocationDot, faLocationPin, faPeopleGroup, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './About.css'

const About = () => {
    return (
        <div className="about">
           <p> My story and Approach </p>
           <div>
               <div className="left">
                    <p>A developer who turns ideas into <span>impact.</span></p>
                    <p>I'm a frontend developer and Computer Science student at Addis Ababa University. I enjoy turning ideas into real, functional experiences and bringing concepts to life through code.</p>
                    <p>I approach development with ambition, practicality, and a willingness to keep learning. For me, every project is an opportunity to solve a problem, improve an experience, and build something useful.</p>
                    <p><FontAwesomeIcon icon={faLocationDot}/> Addis Ababa, Ethiopia</p>
               </div>

               <div className="right">
                 <img src="/images/portfolio.jpg"/>
                 <p>REDIET GOBEZIE/ FRONTEND DVELOPER</p>
               </div>
           </div>

           <div>
            <p>HOW I CAN CONTRIBUTE</p>
            <h2>Building better experiences, together.</h2>
            <p>I want to contribute to a team where ideas become solutions. I bring a practical mindset, a collaborative attitude, and a willingness to take on challenges—whether that means developing new features, solving problems, or refining existing products to make them more useful and effective.</p>

            <div>
                  <div>
                    <FontAwesomeIcon icon={faPeopleGroup}/>
                    <div>
                        <h3>Collaborate and contribute</h3>
                        <p>Work with teammates, share ideas, learn from others, and contribute toward shared goals.</p>
                    </div>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={faTools}/>
                    <div>
                        <h3>Improve what already exists</h3>
                        <p>Refine interfaces, improve usability, fix issues, and help existing products work better for the people who use them.</p>
                    </div>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={faLightbulb}/>
                    <div>
                        <h3>Solve real problems</h3>
                        <p>Understand the problem first, then build practical solutions that support the team's and company's goals.</p>
                    </div>
                  </div>
            </div>

           </div>

           <div>

            <p>MY CURRENT TOOLKIT</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
                <li>GitHub</li>
            </ul>
            <div>
                <h3>Good work happens together.</h3>

                <p>I'm looking forward to learning from a team, contributing my skills, and helping turn meaningful ideas into better digital products.</p>
                <p>Let's connect</p>
            </div>

           </div>
        </div>
    );
}
 
export default About;