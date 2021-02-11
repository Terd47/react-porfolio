import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdPolymer } from 'react-icons/md';
import {MdFavorite} from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdPolymer className='navbar-icon display-3' />
            </Link>
          </div>
          <small className='website-rights'>
            Developed with <MdFavorite /> ©  DOH TERDLAR 2021
          </small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCw_unzMe6XX1WL9zXj3gKWg'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.twitter.com/Dterd3'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.linkedin.com/in/doh-terdlar-9a17b61ab/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;