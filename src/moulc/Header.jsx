import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utits/useOnlinestatus';
import image from '../assest/dNngWssZGJMPaotB5f5nPR.png';
import Usercontext from '../utits/UserContext';
import { FiUser, FiHome, FiTrendingUp, FiInfo, FiMail, FiLogIn, FiLogOut } from 'react-icons/fi';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { logginuser } = useContext(Usercontext);
    const userstatus = useOnlinestatus();

    const handleAuthClick = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to='/' className="flex items-center space-x-2 group">
                    {/* <img
                        alt="Logo"
                        src={image}
                        className="h-12 w-12 transition-transform duration-300 group-hover:rotate-12"
                    /> */}
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                        CryptoWatch
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link 
                        to='/stock' 
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                        <FiTrendingUp className="mr-2" />
                        <span>Market</span>
                    </Link>
                    <Link 
                        to='/about' 
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                        <FiInfo className="mr-2" />
                        <span>About</span>
                    </Link>
                    <Link 
                        to='/contact' 
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                        <FiMail className="mr-2" />
                        <span>Contact</span>
                    </Link>

                    <Link 
                        to='/price' 
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                        {/* <FileSystemEntry className="mr-2" /> */}
                        <span>Price</span>
                    </Link>
                    
                    {/* User Status */}
                    <div className="flex items-center space-x-2 ml-4">
                        <div className={`h-3 w-3 rounded-full ${userstatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                        <span className="text-sm text-gray-400">
                            {userstatus ? 'Online' : 'Offline'}
                        </span>
                    </div>
                </nav>

                {/* User/Auth Section */}
                <div className="flex items-center space-x-4">
                    {logginuser && (
                        <div className="hidden md:flex items-center space-x-2">
                            <FiUser className="text-purple-400" />
                            <span className="text-gray-300">{logginuser}</span>
                        </div>
                    )}
                    
                    <Link to={isLoggedIn ? "/" : "/login"}>
                        <button
                            onClick={handleAuthClick}
                            className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            {isLoggedIn ? (
                                <>
                                    <FiLogOut className="mr-2" />
                                    Logout
                                </>
                            ) : (
                                <>
                                    <FiLogIn className="mr-2" />
                                    Login
                                </>
                            )}
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;