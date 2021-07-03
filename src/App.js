import Footer from "./component/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import { AboutScreen } from "./Screens/AboutScreen";
import { ServicesScreen } from "./Screens/ServicesScreen";
import { PortfolioScreen } from "./Screens/PortfolioScreen";
import { HomeScreen } from "./Screens/HomeScreen";
import Particles from "react-particles-js";




function App() {
  return (
    <>
  
  <Particles
  className="particle-canvas"
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
v3.3.0
   
        <Navbar />
      <Switch>

        <Route path="/about" component={AboutScreen} />
        <Route path="/services" component={ServicesScreen} />
        <Route path="/portfolio" component={PortfolioScreen}/>
        
        <Route path="/" component={HomeScreen} />
      </Switch>
        <Footer />
        </>
    
  
  );

}

export default App;
