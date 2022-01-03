import React, { Component } from 'react';
import CardLayout from '../CardLayout/CardLayout';
import passionItems from './PassionItems';

class Passions extends Component {

    render () {
        return (
            <div>
                <div className="pageTitle">
                    <h1>Passions</h1>
                </div>
                <CardLayout cardItems={passionItems}/>
            </div>
        )
    }
}

export default Passions
