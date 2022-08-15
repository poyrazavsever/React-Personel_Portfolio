import { Icon } from "./MainStyle";
import { useEffect, useRef } from "react";


function Navbar() {

    const list = useRef()
    
    useEffect(() => {

        let id = window.location.href.split("/").at(-1)
        
        list.current.childNodes.forEach(item => {
          
          item.tagName === "LI" && 
            id && item.childNodes.forEach(tag => {
              id === tag.href.split("/").at(-1) ? item.classList.add("active"):item.classList.remove("active")
              
            })
            item.addEventListener("click", (e) => {
              let li = Object.values(e.path).find(el => el.tagName=="LI")
              li.parentNode.childNodes.forEach(element => {
                element.classList.remove("active")
              })
              li.classList.add("active")
            })
          
        })
      })


    return (

        <div className="nav-bar">
            <nav className="navigation">
                <a href="#">
                    <img src="Svg/Main-Logo-sm.svg" alt="Main-Logo" className="mainLogo"/>
                </a>

                <ul ref={list}>
                    <li className="list active">
                        <a href="#mainpage">
                            <span className="icon">
                                <Icon src="İcon-Set/Home.svg" alt="home-ico" />
                            </span>
                            <span className="text">
                                Home
                            </span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#about">
                            <span className="icon">
                            <Icon src="İcon-Set/User.svg" alt="user-ico" />
                            </span>
                            <span className="text">
                                About
                            </span>
                        </a>
                    </li>
                    <li className="list ">
                        <a href="#skills">
                            <span className="icon">
                                <Icon src="İcon-Set/talents.svg" alt="talent-ico" />
                            </span>
                            <span className="text">
                                Skills
                            </span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#portfolio">
                            <span className="icon">
                                <Icon src="İcon-Set/Briefcase.svg" alt="portfolio-ico" />
                            </span>
                            <span className="text">
                                Portfolio
                            </span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#contact">
                            <span className="icon">
                                <Icon src="İcon-Set/interface.svg" alt="contact-ico" />
                            </span>
                            <span className="text">
                                Contact
                            </span>
                        </a>
                    </li>

                    <div className="indicator"></div>
                </ul>
                <div className="otherlinks">
                    <img src="İcon-Set/sun.svg" alt="changeMode" className="otherLink"/>

                    <img src="İcon-Set/united.svg" alt="changeMode" className="otherLink"/>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;