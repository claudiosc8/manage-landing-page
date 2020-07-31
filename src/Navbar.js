import React, {useState} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap/'
import Logo from './Logo'

const Navigation = ({className}) => {

	const [showNav, setShowNav] = useState(false)


	return (

		<Navbar expand="md">
              <div className={`navbar-brand`}><Logo /></div>
              <Navbar.Toggle onClick={() => setShowNav(e => !e)} className={`${showNav ? 'active' : ''}`}/>
                <Navbar id="basic-navbar-nav" className={`navigation${showNav ? ' show' : ''}`}>
                  <Nav>
                      <div className='nav-link'>Pricing</div>
                      <div className='nav-link'>Product</div>
                      <div className='nav-link'>About Us</div>
                      <div className='nav-link'>Careers</div>
                      <div className='nav-link'>Community</div>
                  </Nav>
                  <span className='background' onClick={() => setShowNav(false)}></span>
                </Navbar>
                <div className='d-none d-md-block'>
                  <Button>Get started</Button>
                </div>
            </Navbar>

		)
}

export default Navigation;