import React from "react";
import { BrowserRouter as Route, HashRouter} from "react-router-dom";
import NavTabs from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter basename="/" >
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/my-portfolio" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path = "/contact" component={Contact} /> 
        <Footer /> 
      </div>
    </HashRouter>
  );
}

export default App;
