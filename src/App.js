import Navbar from "./Components/Navbar";
import "./Styles/main.css"
import Mainpage from "./Components/MainPage/Mainpage";
import SocialMedia from "./Components/SocialMedia";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact"



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function App() {
  return (
    <>

      <SocialMedia />
      <Mainpage />

      <About/>    

      <div className="reveal">   
        <Skills /> 
      </div>

      <div className="reveal">   
        <Portfolio /> 
      </div>

      <div className="reveal">
        <Contact />
      </div>

 
      <Navbar />


      <div style={{height:500}}></div>

    </>
  );
}

export default App;
