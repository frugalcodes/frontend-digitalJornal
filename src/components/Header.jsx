import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(!localStorage.getItem('username'));
  const [username, setUsername] = useState(localStorage.getItem('username'));

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem("isLoggedIn");

    setIsLoggedOut(true);
    setUsername(null);
  }

  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return (
    <Navbar>
      <Container>
        <NavLink to="/" className="text-decoration-none text-reset">
          <Navbar.Brand role="button">Digital Journal | <Navbar.Text>Create A Note</Navbar.Text></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {username && !isLoggedOut ? (
            <>
              <span className="mr-3">{greeting}, {username}</span>
              &nbsp; &nbsp; &nbsp;
              <NavLink className="text-decoration-none text-reset" to="/" role="button" onClick={handleLogout}>Log Out</NavLink>
            </>
          ) : (
            <>
              <NavLink className="text-decoration-none text-reset" to="/" role="button">Log in</NavLink>
              &nbsp; &nbsp; &nbsp; 
              <NavLink className="text-decoration-none text-reset" to="/signup" role="button">Sign up</NavLink>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
