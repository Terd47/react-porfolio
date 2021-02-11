import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import {
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';

const Hero = () => {

    return (
        <div className="container-fluid hero">
             <div className="salut">
               <div className="heading">
                   <h2 className="title">DOH TERDLAR</h2>
                   <h4 className=" job">FullStack Developer/ Linux System Administrator</h4>
                   <div className='social-icons social'>
                    <Link
                        className='social-icon-link soc'
                        to={
                        '//www.youtube.com/channel/UCw_unzMe6XX1WL9zXj3gKWg'
                        }
                        target='_blank'
                        aria-label='Youtube'
                    >
                    <FaYoutube />
                    </Link>
                    <Link
                        className='social-icon-link soc'
                        to='//www.twitter.com/Dterd3'
                        target='_blank'
                        aria-label='Twitter'
                    >
                    <FaTwitter />
                    </Link>
                    <Link
                        className='social-icon-link soc'
                        to='//www.linkedin.com/in/doh-terdlar-9a17b61ab/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <FaLinkedin />
                    </Link>
                </div>
                <div className='resume'>
                    <Link to="//drive.google.com/file/d/1GXvRIFLH7zmakbDF0gGqTPV9fG5PDAFK/view?usp=sharing"
                      target='_blank' 
                      className="resume-btn">
                          View Resume
                    </Link>
                </div>
               </div>
             </div>
        </div>
    )
}

export default Hero;