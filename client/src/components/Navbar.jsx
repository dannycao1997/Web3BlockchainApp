import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import React from "react";

import logo from '../../images/logo.png';

const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="w-full flex justify-between items-center p-4 text-white">
            <div className="flex flex-1 items-center">
                <img src={logo} alt="logo" className="w-8 h-8 mr-2"/>
                <h1 className="text-3xl font-bold cursor-pointer"
                    style={{fontFamily: '"Open Sans", sans-serif'}}>Dannyverse | Crypto Exchange</h1>
            </div>
            <ul className="hidden md:flex list-none flex-row justify-between items-center flex-initial">
                {["Explore", "Market", "Learn", "Support"].map((item, index) => (
                    <li key={item + index} className="px-4 py-2 hover:bg-black rounded-md cursor-pointer">
                        {item}
                    </li>
                ))}
                <li className="border-2 border-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-black min-w-[100px] text-center">
                    Login
                </li>
                <li className="bg-pink-400 py-2 px-7 mx-100 rounded-full cursor-pointer hover:bg-black min-w-[100px] text-center">
                    Sign Up
                </li>
            </ul>
            <button
                className="md:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
            <div className="flex relative">
                {!toggleMenu && (
                    <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer"
                                onClick={() => setToggleMenu(true)}/>
                )}
                {toggleMenu && (
                    <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer"
                                    onClick={() => setToggleMenu(false)}/>
                )}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)}/></li>
                        {["Explore", "Market", "Learn", "Support"].map(
                            (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg"/>,
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;