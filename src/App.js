import Navbar from "./Components/Navbar";
import "./Styles/main.css"
import Mainpage from "./Components/MainPage/Mainpage";
import SocialMedia from "./Components/SocialMedia";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <SocialMedia />

      <Mainpage />
      
      <About />

      <Skills />
 
      <Navbar />
     

    </>
  );
}

export default App;
