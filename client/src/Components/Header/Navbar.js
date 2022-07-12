import React from 'react'
import './Components/Header/NavStyle.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <link to='#' className='menu-bars'>
          <FaIcons.FaBars/>
        </link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </link>
          </li>

        </ul>
      </nav>
    </>
  );
}


export default Navbar;