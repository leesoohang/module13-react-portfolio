// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <div>
  <nav className="navbar fixed-top bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand text-white">Home</Link>
    <Link to="/projects" className="navbar-brand text-white">Projects</Link>
    <Link to="/contact" className="navbar-brand text-white">Contact</Link>
    </div>

</nav>
</div>
  );
}

export default Navbar;
