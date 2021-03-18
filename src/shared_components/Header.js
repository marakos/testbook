import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => (
  <header id="app-header">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Brand href="/create">New Book</Navbar.Brand>
    </Navbar>
  </header>
)
export default Header;