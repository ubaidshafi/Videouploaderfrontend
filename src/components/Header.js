
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      
      <Navbar className="bg-success">
        <Container>
        <Link to={"/"} style={{textDecoration:'none'}}>
          <Navbar.Brand >
            <img
              alt=""
              src="https://i.postimg.cc/BvspWpkH/video1.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top me-3"
            />{' '}
         <b className='fs-3'> <span>V</span>ideo <span>P</span>layer </b>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header