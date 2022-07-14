import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";


export const SidebarData = [
    {
        title:'Home',
        Path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Profile',
        Path:'/profile',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Logout',
        Path:'/logout',
        icon:<FaIcons.FaRegComments />,
        cName:'nav-text'
    }
]
