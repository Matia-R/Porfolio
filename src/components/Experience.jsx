import React, { Component } from 'react';
import Timeline from "./Timeline/Timeline";

class Experience extends Component {

    render () {
        return (
            <div id="experiencePage">
                <div className="pageTitle">
                    <h1>Experience</h1>
                </div>
                <Timeline/>
            </div>
        )
    }
}

export default Experience
