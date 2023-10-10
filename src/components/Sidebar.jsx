import React from 'react'
import { BsFillFilePostFill } from 'react-icons/bs'
import { ImBlog } from 'react-icons/im';
import { RiPagesLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
    return (
        <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""} >
            <div className='sidebar-title'>
                <div className="sidebar-brand">
                    <ImBlog className='icon_header' /> Gosht Dash
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className="sidebar-list-item">
                    <Link to="/">
                        <ImBlog className='icon' /> Dashboard
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/posts" >
                        <BsFillFilePostFill className='icon' /> Posts
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/links">
                        <RiPagesLine className='icon' /> Links
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar