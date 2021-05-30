// import React from 'react';
// import {Link} from 'react-router-dom';
// import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
// import './Navbar.css';

// function NavBar() {
//     return (
//         <>
//         <Navbar className="navbar"  expand="lg">
//             <Navbar.Brand>Mentopia</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                 <Nav.Link className="nav-link"><Link to="/">Home</Link></Nav.Link>
//                 <Nav.Link className="nav-link"><Link to="/Topics">Topics</Link></Nav.Link>
//                 <Nav.Link className="nav-link"><Link to="/blogs">Blog</Link></Nav.Link>
//                 <Nav.Link className="nav-link"><Link to="/about">About</Link></Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
        
        
//         </Navbar>
//         </>
//     )
// }

// export default NavBar;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from 'react-bootstrap';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} style={{marginLeft: '8rem'}}>
            Mentopia
          </Link>
          <div className='menu-icon' onClick={handleClick}>
             <Button variant="light"></Button>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Topics'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Categories
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/GeneralAwareness'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Awareness
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tips
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

