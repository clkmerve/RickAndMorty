import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='text'>Rick and Morty</div>
      <div className='link'>
          <Link to="/">Karakterler</Link>
          <Link to="/episode">Bölümler</Link>
          <Link to="/favorites">Favori Karakterler</Link>
       </div>
    </nav>
  );
};

export default Navbar;
