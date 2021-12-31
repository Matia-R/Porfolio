import React, { Component } from 'react';
import "./intro.css";

class Home extends Component {

    render () {
        return (
            <div className="intro">
                <h1 className="intro-title">
                    Hi, I am Matia Raspopovic
                </h1>
                <h2 className="intro-subtitle">An Enthusiastic Software Developer</h2>
                <img src={process.env.PUBLIC_URL + '/headshot.jpg'} alt="Matia Raspopovic Headshot"/>
            </div>
        )
    }
}

export default Home
