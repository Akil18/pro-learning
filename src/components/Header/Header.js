import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [mode, setMode] = useState('Dark');

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => {console.error(error)})
    };

    const toggleMode = () => {
        if(mode === 'Dark') {
            setMode('Light');
            document.getElementById('header').classList.add('bg-gray-900');
            document.getElementById('header').classList.add('text-gray-100');
        } else {
            setMode('Dark');
            document.getElementById('header').classList.remove('bg-gray-900');
            document.getElementById('header').classList.remove('text-gray-100');
        }
    };

    console.log(mode);
    return (
        <div id="header" className="navbar bg-base-100 px-4">
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
                        <button onClick={toggleMode} className="p-4 rounded-md hover:bg-gray-200">{mode}</button>
                        {
                            user?.uid ?
                            <>
                                <button onClick={handleLogOut} className="p-4 rounded-md hover:bg-gray-200">Log Out</button>
                                {
                                    user?.photoURL ?
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={user.photoURL} alt={user.email} />
                                        </div>
                                    </div>
                                    :
                                    <FaUser />
                                }
                            </>
                            : 
                            <Link to='login'>
                                <button className="p-4 rounded-md hover:bg-gray-200">Log In</button>
                            </Link>
                        }
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;