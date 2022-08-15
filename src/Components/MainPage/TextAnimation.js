import React, {useRef, useState, useEffect} from 'react'

function TextAnimation() {

    const texts = ["Front-End Dev.", "Back-end Dev.", "UI/ UX Designer."]
    const [currentTitle, setCurrentTitle] = useState("");


    useEffect(() =>{

        let i = 0;
        setCurrentTitle(texts[i])
        
        setInterval(() => {
            if(i === texts.length - 1){
                i = 0;
            }else{
                i++;
            }

            setCurrentTitle(texts[i])
            
            
        },4000)

    }, [])


    


  return (
    <div className="text-animation">
        <span className="text sec-text" id="sec-text">{ currentTitle }</span>
    </div>
  )
}

export default TextAnimation