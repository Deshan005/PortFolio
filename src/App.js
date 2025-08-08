import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Industry from "./components/industry";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import SpiderWeb from "./components/SpiderWeb";
import SpiralBackground from "./components/SpiralBackground";

function App() {
  return (
    <div>
      <SpiderWeb/>
      <SpiralBackground/>
      <NavBar />
      <Home />
      <About />
      <Industry/>
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
