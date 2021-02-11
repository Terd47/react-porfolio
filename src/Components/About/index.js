import React from 'react';
import './style.css';
import Doh from '../../images/Doh1.jpg';

const About = () => {

    return(
        <div className=" conatiner-fluid about">
            <div className="row cover">
                <div className="col-2">
                    <div className="image">
                        <img  className="pic" src={Doh} />
                    </div>
                </div>
                <div className="col-8">
                        <div className="greet">
                            <div className="display-4">
                            <h3 className="display-4">
                            Warm Greetings
                            </h3>
                            <hr />
                            </div>
                            <p className="lead">
                            I am Doh Terdlar a Full Stack Web Developer with a background 
                            in Linux Administration. Graduated from John Hopkins University and certified
                            in Full Stack Web Developement. Am passionate about coding in JavaScript, Python and 
                            enjoy learning new skills as I progress in the field. I constantly take on new 
                            challenges to update and improve my skills and also gain new skills. Currently, I am learning 
                            Java and flutter development. 
                            <hr />
                            I am familiar with Object Oriented
                            Programming principles and MVC pattern. I have developed multiple applications both frontend and backend using 
                            JavaScript, node.js, Reactjs, and databases like MySQL and MongoDB. I've also been a Linux System
                            Administrator for over 6 years supporting various Unix/Linux  Server distros and enterprise applications, and now looking to switch careers to Software Development/Devops. 
                            </p>
                            <hr />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;