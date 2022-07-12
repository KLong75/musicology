import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title:'Home',
        Path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Comments',
        Path:'/comments',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Reviews',
        Path:'/',
        icon:<FaIcons.FaRegComments />,
        cName:'nav-text'
    },
    {
        title:'Settings',
        Path:'/',
        icon:<IoIcons.IoSettingsSharp />,
        cName:'nav-text'
    },
    {
        title:'About',
        Path:'/',
        icon:<BsIcons.BsInfoCircleFill />,
        cName:'nav-text'
    },
]
