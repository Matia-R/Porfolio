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
                            'Software Developer.', // Deletes 'One' and types 'Two'
                            1000, // Waits 2s
                            'Computer Science student.',
                            1000,
                            'Entreprenueur.',
                            1000
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
                    Hi! I’m a software developer and third-year computer science student at Carleton University (graduation date: May 2024). 
                    I’ve worked as a Software Developer Intern at Ciena and Geotab, where I’ve contributed to API design, developed automation, and improved security and infrastructure for backend web services. 
                    At heart, I’m passionate about software, and I’m eager to work on all areas of the stack. 
                    </p>
                    <p style={ {padding: '1rem'} }>
                    Please consider exploring this portfolio, downloading my resume, or messaging me if you'd like to know more. I’m always excited to meet new people and explore new opportunities!  
                    </p>
                    <Button
                        className='btn-solid' 
                        onClick={(e) => {
                            var element = document.createElement('a');
                            element.download = 'Matia Raspopovic Resume.pdf';
                            element.href = process.env.PUBLIC_URL + '/files/Matia_Raspopovic_Resume.pdf';

                            element.style.display = 'none';
                            document.body.appendChild(element);

                            element.click();

                            document.body.removeChild(element);
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
