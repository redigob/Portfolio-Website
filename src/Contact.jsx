import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <p>Get in Touch</p>
            <div>
                <p>Have an idea? <span>Let's build Something.</span></p>
                <p>I'm always interested in connecting with people who care about building useful digital experiences.</p>
                <p>Whether you have an opportunity, a project idea, or simply want to connect, I'd love to hear from you.</p>
                
                <div>
                    <div className="left">
                        <p>LET'S CONNECT</p>

                        <div>
                            <p>Email</p>
                            <p>For opportunities and inquiries</p>
                            <p>redietgob@gmail.com</p>
                        </div>

                        <div>
                            <p>GitHub</p>
                            <p>Explore my projects and code</p>
                            <p>github.com/redigob </p>
                        </div>

                        <div>
                            <p>LinkedIn</p>
                            <p>Let's connect professionally</p>
                            <p>Connect with me ↗</p>
                        </div>
                    </div>

                    <div className="right">
                       <p>Send a message</p>
                       <p>Have somthing in mind? Tell me a little about it.</p>
                       
                       <form action="https://formspree.io/f/mrpeynjz" method="POST">
                        <label htmlFor="name">Your name</label>
                        <input 
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          required
                        />

                        <label htmlFor="email">Your Email</label>
                        <input 
                          type="email"
                          id="name"
                          name="email"
                          placeholder="you@example.com"
                          required
                        />

                        <label htmlFor="subject">Subject</label>
                        <input 
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Job opportunity, project, collaboration..."
                          required
                        />


                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                            
                        />

                        <button type="submit">Submit</button>


                        
                       </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;