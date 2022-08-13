import Navbar from "./Components/Navbar";
import "./Styles/main.css"
import Mainpage from "./Components/MainPage/Mainpage";
import SocialMedia from "./Components/SocialMedia";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <SocialMedia />

      <Mainpage />
      
      <About />
 
      <Navbar />
     

    </>
  );
}

export default App;
