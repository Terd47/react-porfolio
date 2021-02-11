import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Project = () => {

    return(
        <div className="container-fluid projects">
            <div className="projects">
                 <div className="title">
                    <h2 className="section-head">Fun Projects</h2>
                 </div>
                 <div className="container">
                 <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed prod-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                NutriVice (Healthy React Meal Advisor)
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is a Full Stack React web application developed using  technologies such as API from Spoonacular.com, React.JS, BootStrap for the frontend
                                and Node.Js, JavaScript, ExpressJs for the backend. Bcrypt, JasonWebToken were used to handle authentication and
                                password harshing and MongoDb for database. 
                                The Application enables to use to make healthy meal choices from an API based on their preferences and store thsese meals
                                to the database which is later be retrieved and displayed in the user Dashboard. Users can also calsulate their BMI and get meal suggestions 
                                based on how often they exercise. During this project, I was responsible for building the authentication, discover and dashboard components
                                and functionalities.
                                <div className="button">
                                <a href="https://github.com/nickgdam/NutriVice"  type="button"  target="_blank" class="btn btn-info click">Repository</a>
                                <a href="#" type="button" target="_blank" class="btn btn-info click">live Site</a>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed prod-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                React Employee Directory
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is a fully responsive React application built using technologies such as ReactJs, Bootstrap, JavaScript, axios, 
                                jQuery, NodeJs, HTML, CSS, and Random User API
                                This Application lets the user to view non sensitive data about their compnany's employees and they are able to search by name, city and state.
                                
                                </div>
                                <div className="button">
                                <a href="https://github.com/Terd47/React-Employee-Directory"  type="button"  target="_blank" class="btn btn-info click">Repository</a>
                                <a href="https://terd47.github.io/React-Employee-Directory/" type="button" target="_blank" class="btn btn-info click">live Site</a>
                                </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed prod-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Budget Tracker PWA
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is a fullstack responsive web application which enables the user to calculate their expenditures and submit new transactions
                                 both Online and offline and the application automatically caches the data if online to indexedDB and resyncs when the application comes back online.
                                 Technologies used include JavaScript, PWA service workers, indexedDB, MongoDB, Mongoose, MongoDB Atlas, Express.js, Morgan, HTML, CSS, NodeJs, jQuery and fetch.
                                </div>
                                <div className="button">
                                <a href="https://github.com/Terd47/BudgetTracker-PWA"  type="button"  target="_blank" class="btn btn-info click">Repository</a>
                                <a href="https://sleepy-sands-17380.herokuapp.com/" type="button" target="_blank" class="btn btn-info click">live Site</a>
                                </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed prod-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                               FastFit Tracker
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is a full stack web application which will help the user keep track of their gym and workout time. With this app, the user is able to create 2 workout types and
                                input how much workout is done for each workout plan and also able to see a visual representation of their weekly workouts. The Application was developed using 
                                technologies such as HTML, CSS, JavaScript, Express.Js, Node.js, Bootstrap, MongoDB, and Mongoose.
                                </div>
                                <div className="button">
                                <a href="https://github.com/Terd47/FastFIT-Tracker"  type="button"  target="_blank" class="btn btn-info click">Repository</a>
                                <a href="https://sheltered-river-39169.herokuapp.com/" type="button" target="_blank" class="btn btn-info click">live Site</a>
                                </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed prod-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                                ProCourse
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is a Full Stack Web Application which let users create study plans and groups and collaborate on open projects. Users can
                                create a project and make it public or private. Public projects are accessible by the community and other users can request to join
                                the project. The app was developed using technologies such as Javascript, CSS, jQuery, MySQL, Sequelize, Node.js, MVC, Handlebars, nodemailer, ExpressJs.
                                This Application was developed in collaboration with 2 friends and i was responsible for working on the feeds and dashboard pages and their functionality.
                                </div>
                                <div className="button">
                                <a href="https://github.com/Terd47/procourse-1"  type="button"  target="_blank" class="btn btn-info click">Repository</a>
                                <a href="https://frozen-ridge-87935.herokuapp.com/" type="button" target="_blank" class="btn btn-info click">live Site</a>
                                </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSix">
                            <button class="accordion-button collapsed prod-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                                Purple Team Generator
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is a full stack application developed using OOP principles in JavaScript with full CRUD functionalities.
                                The user is able to create new employee's, view all employees, view employees based on supervisors and department and set employee roles.
                                The newly generated employees can then be viewd in the front end.
                                Technologies used are Node.js, 
                                </div>
                                <div className="button">
                                <a href="https://github.com/Terd47/purple-team-generator-app"  type="button"  target="_blank" class="btn btn-info click">Repository</a>
                                <a href="https://drive.google.com/file/d/1JA7VltJYfpW05vml0ryRbEOSHEsDGe9R/view?usp=sharing" type="button" target="_blank" class="btn btn-info click">Video Sample</a>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Project;