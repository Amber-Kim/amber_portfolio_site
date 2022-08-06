import React, { useEffect, useState } from "react";

//data
import ServicesData from "ServicesData";
import PortfolioData from "PortfolioData";

// Components
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";
import About from "components/About/About";
import Portfolio from "components/Portfolio/Portfolio";
import Contact from "components/Contact/Contact";
import Services from "components/Services/Services";


// Animation
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import { Menu } from "components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Services services={ServicesData} />
      <Portfolio projects={PortfolioData} />
      <Contact />
    </div>
  );
}

export default App;
