import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 px-4">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost p-0">
                    <img className="w-12" src="logo.png" alt="pro-learning" />
                </Link>
                <span className="normal-case text-2xl ml-2">Pro Learning</span>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <div className="flex items-center">
                        <button className="p-4 rounded-md hover:bg-gray-200">Dark</button>
                        <Link to='login' className="p-4 rounded-md hover:bg-gray-200">Log In</Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;