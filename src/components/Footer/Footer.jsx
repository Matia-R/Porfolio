import React, { Component } from 'react';
import { SocialItems } from "./SocialItems";
//import { Button } from "../Button"
import './Footer.css';

class Footer extends Component {

    render () {
        return (
            <nav className="footer">
                <div className="footer-stack">
                    <h1>Matia Raspopovic</h1>
                    <h2 className="careerTitle">Software Developer</h2>
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
            </nav>
        )
    }
}

export default Footer
