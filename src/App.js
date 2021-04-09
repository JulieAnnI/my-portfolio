import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/my-portfolio" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path = "/contact" component={Contact} /> 
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
