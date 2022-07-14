import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from '../Navbar/SidebarData'
// import { Link } from 'react-router-dom';


function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='navbar'>
        <link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </link>
          </li>
          {SidebarData.map((item, index) =>{
            return(
              <li key={index} className={item.cName}>
                <link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
}


export default Navbar;