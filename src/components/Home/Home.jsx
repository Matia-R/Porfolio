import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import "./Home.css";

class Home extends Component {

    render () {
        return (
            <div>
                <div className="pageTitle">
                    <h1>Matia Raspopovic</h1>
                </div>
                <div class="typeAnimationWrapper">
                    <TypeAnimation
                        sequence={[
                            'A passionate Software Developer.', // Deletes 'One' and types 'Two'
                            1000, // Waits 2s
                            'A dedicated Computer Science student.',
                            1000,
                            'An innovative entreprenueur.',
                            1000,
                            () => {
                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ 
                            fontSize: getAnimationSize(document.documentElement.clientWidth)
                        }}
                    />
                </div>
                <div class="heroContent">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button
                        className='btn-solid' 
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/contact';
                    }}>Download Resume
                </Button>
                </div>
            </div>
        )
    }
}

function getAnimationSize(screenWidth) {
    if (screenWidth < 800 && screenWidth > 400) {
        return '1.5em';
    }
    if (screenWidth <= 400) {
        return '1.1em';
    }
    return '2.5em';
}

export default Home
