import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { AnimationBtn2 } from "./Buttons"

export default function ContactSection() {
    const [res, setRes] = useState()
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2jyhvsr', 'template_7lbl6im', formRef.current, 'zxOfi-RRc6UPCfhTF')
        .then((result) => {
            setRes({status: true ,msg: "Mail başarıyla gönderildi."})
        }, (error) => {
            setRes({status: false, msg: "Mail gönderilirken bir sorunla karşılaşıldı."})
        });
    }

    return (
        <div>
            <div>
                <div>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        {
                            res && (
                                res.status ? 
                                <div >
                                    {res.msg}
                                </div>  
                                :
                                <div >
                                    {res.msg}
                                </div>
                            )
                        }
                        <div className='contactForm'>

                            <div className="inputBox">
                                <input required type="text" name="user_name"/>
                                <span>User Name</span>
                            </div>

                            <div className="inputBox">
                                <input required type="text" name="user_name"/>
                                <span>E-Mail</span>
                            </div>

                            <div className="inputBox">
                                <textarea required name="message" id="messageInput1"></textarea>
                                <span>Message</span>
                            </div>

                            <AnimationBtn2 type='submit' className='anm-contact-btn'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                - Send
                            </AnimationBtn2>

                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}