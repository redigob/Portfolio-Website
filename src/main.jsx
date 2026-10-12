import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { Portfolioprovider } from './Portfoliocontext'
createRoot(document.getElementById('root')).render(
    <Portfolioprovider>
        <Router>
            <App/>
        </Router>    
    </Portfolioprovider>    
)
