import React from 'react';


const Nav = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="navbar_container">
        <ul className="navbar_left">
            <div className="navbar_left.logo">
                <h1>Al Amin</h1>
            </div>
        </ul>
        <ul className="navbar_right">
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Services</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Portfolio</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
