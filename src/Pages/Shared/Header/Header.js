
import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  const {user, logOut} = useAuth();
    return (
    
<>
  <Navbar sticky="top" bg="warning" variant="light" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">tourX</Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
      <Nav.Link as={HashLink} to="/home#travellers">Travellers</Nav.Link>
      
      <div></div>
      {user?.email ?
      <div className="d-flex">
      <Nav.Link as={Link} to="/bookingReview">My Bookings</Nav.Link>
      <Nav.Link as={Link} to="/manageBookings">Manage All Bookings</Nav.Link>
      <Nav.Link as={Link} to="/addPackage">Add a new Package</Nav.Link>
      <Button onClick={ logOut } variant="light">Logout</Button>
      </div>:
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>

    </Container>
  </Navbar>
</>

     

      
    );
};

export default Header;