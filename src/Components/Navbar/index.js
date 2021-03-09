import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './style.css';
import { MdPolymer } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return window.removeEventListener('resize', showButton)
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <div className='nav-logo'>
            <Link to='/' className='navbar-logo' onClick={closeMenu}>
              <MdPolymer className='navbar-icon' />
            </Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{display: 'flex', listStyle: "none", justifyContent: 'space-around'}}>
              <li className='nav-item'>
                <Link activeClass="active" to='projects' spy={true} smooth={true} className='nav-links' onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                 spy={true} smooth={true} to='skills'
                  className='nav-links'
                  onClick={closeMenu}
                >
                  Skills
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  spy={true} smooth={true} to='contact'
                  className='nav-links'
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  spy={true} smooth={true} to='about'
                  className='nav-links'
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              {/* <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;