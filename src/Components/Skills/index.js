import React from 'react';
import './style.css';

const Skills = () => {
    return(
        <div className="container-fluid skills">
              <div className="skills">
              <div className="heading lead">
                  <h2 className="role-check">Familiar Technologies</h2>
              </div>
              <div className="container">
                 <div className="row cover">
                       <div className=" col">
                           <div className="card">
                               <div className="card-type">
                               <h3 className="card-title"> Frontend Development</h3>
                               </div>
                               <div className="card-body">
                                   <h5 className="list-head">Front-End</h5>
                                   <ul className="list">
                                       <li>HTML</li>
                                       <li>CSS</li>
                                       <li>JavaScript</li>
                                       <li>HandleBars</li>
                                       <li>ReactJs</li>
                                       <li>Progressive Web Application (PWA)</li>
                                   </ul>
                                   <h5>UI/UX Design</h5>
                                   <ul className="list">
                                        <li>Figma</li>
                                        <li>AdobeXD</li>
                                        <li>Draw.io (wireframing)</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className="col">
                       <div className="card">
                       <div className="card-type">
                               <h3 className="card-title"> Backend Development</h3>
                               </div>
                               <div className="card-body">
                                   <h5 className="list-head">Back-End</h5>
                                   <ul className="list">
                                       <li>NodeJs</li>
                                       <li>JavaScript</li>
                                   </ul>
                                   <h5>DataBases</h5>
                                   <ul className="list">
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        <li>IndexedDB</li>
                                   </ul>
                                   <h5>Languages</h5>
                                   <ul className="list">
                                        <li>JavScript</li>
                                        <li>Python</li>
                                        <li>Java (learning)</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className="col">
                       <div className="card">
                               <div className="card-type">
                               <h3 className="card-title"> Familiar Frameworks</h3>
                               </div>
                               <div className="card-body">
                                   <h5></h5>
                                   <ul className="list">
                                       <li>Bootstrap</li>
                                       <li>Bulma CSS</li>
                                       <li>jQuery</li>
                                        <li>jQuery UI</li>
                                        <li>Material UI</li>
                                        <li>ExpressJs</li>
                                        <li>Sequelize</li>
                                        <li>Mongoose</li>
                                        <li>Passportjs</li>
                                        <li>Json Web Tokens</li>
                                        <li>Bcrypt</li>
                                        <li>WebPack</li>
                                        <li>MERN Stack</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                 </div>
              </div>
              </div>
        </div>
    )
}

export default Skills;