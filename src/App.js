import Navbar from "./Components/Navbar";
import "./Styles/main.css"
import Mainpage from "./Components/MainPage/Mainpage";
import SocialMedia from "./Components/SocialMedia";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <SocialMedia />

      <Mainpage />
      
      <About />

      <Skills />
 
      <Portfolio />

      <Navbar />


      <div style={{height:500}}></div>

    </>
  );
}

export default App;
