import React, { Component } from 'react';
import CardLayout from "../CardLayout/CardLayout";
import projectItems from "./ProjectItems";

class Projects extends Component {

    render () {
        return (
            <div>
                <div className="pageTitle">
                    <h1>Projects</h1>
                </div>
                <CardLayout cardItems={projectItems}/>
            </div>
        )
    }
}

export default Projects
