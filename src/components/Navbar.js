import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <Link to="/" className="navbar-app-title">Title</Link>
      </nav>
    );
  }
}

export default Navbar;
