import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <div className='header'>
      <Link to='/'>
        hi
      </Link>
      <Link to='/asdf'>asdf</Link>
    </div>
  );
}

export default NavBar;
