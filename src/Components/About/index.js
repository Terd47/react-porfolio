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
                            I am Doh Terdlar a highly motivated IT professional with 6 years experience as Linux Administrator and 
                            1 year experience in development and implementation of customized software and web based applications and very passionate about software development. Studied
                            full stack web development from John Hopkins university in a 24 week program to improve my development skills. I
                            love taking on challenging projects and working hard to reach datelines regardless of how difficult a problem may appear to be.

                            
                            <hr />
                            I am familiar with Object Oriented Programming principles and following the MVC pattern in developing full stack applications.
                            I have developed multiple applications both frontend and backend using technologies such as JavaScript, node.js, Reactjs, 
                            and databases like MySQL and MongoDB and more.
                            </p>
                            <hr />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;