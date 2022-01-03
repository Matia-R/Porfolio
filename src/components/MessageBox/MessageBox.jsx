import React from 'react'
import { useRef } from 'react';
import emailjs from "emailjs-com"
import { SocialItems } from "../Footer/SocialItems"
import "../Footer/Footer.css"
import "./MessageBox.css"

function MessageBox() {

    const formSubmitMsg = useRef(null);

    function sendMessage(e) {
        e.preventDefault();
        emailjs.sendForm('service_0hfapzb', 'template_crc8qpu', e.target, 'user_ULuyjdHcvpiYeTh2cOUr0')
        .then(res => console.log(res))
        .catch(err => console.log(err));
        formSubmitMsg.current.classList.add("show");
    }

    return (
        <div className="msg-box-container">
            <div className="container border">
                <h1 className="msg-box-title">Message Me</h1>
                <p id="form-submit-msg" ref={formSubmitMsg}>
                    Thanks for contacting me! I will reach out as soon as possible.
                </p>
                <form className="row" onSubmit={sendMessage}>
                    <label className="msg-box-label">Name</label>
                    <input className="msg-box-fields" type="text" name="name"/>
                    <label className="msg-box-label">Email</label>
                    <input className="msg-box-fields" type="email" name="sender_email"/>
                    <label className="msg-box-label">Message</label>
                    <textarea className="msg-box-fields" name='message' rows='4'/>
                    <input className="msg-box-submit" type='submit' value='Send'/>
                </form>
                <p className="socials-title">Or Reach out on your favourite platform:</p>
                <ul className="socials-menu">
                        {SocialItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}> {item.icon}</a>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}

export default MessageBox;
