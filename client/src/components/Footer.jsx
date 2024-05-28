import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.5] justify-center sm:justify-start items-center">
            </div>
            <div className="flex flex-1.5 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">Explore</p>
                <p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">Market</p>
                <p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">Learn</p>
                <p className="text-white text-base text-center mx-2 cursor-pointer hover:underline">Support</p>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-white text-sm text-center">
                Connect with me on LinkedIn and explore my projects on GitHub :)

            </p>
            <div className="mt-2 flex justify-center">
                <a href="https://www.linkedin.com/in/dannycao97/" target="_blank" rel="noopener noreferrer"
                   className="text-white text-sm mx-2 flex items-center hover:text-blue-500">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.485c-.966 0-1.5-.717-1.5-1.515s.534-1.515 1.5-1.515 1.5 .717 1.5 1.515-.534 1.515-1.5 1.515zm13.5 11.485h-3v-5.5c0-1.379-.027-3.5-2.5-3.5-2.473 0-2.5 1.664-2.5 3.392v5.608h-3v-10h3v1.539h.027c.419-.794 1.44-1.539 2.973-1.539 3.18 0 3.5 1.914 3.5 4.461v5.539z"/>
                    </svg>
                    LinkedIn
                </a>
                <a href="https://github.com/dannycao1997" target="_blank" rel="noopener noreferrer"
                   className="text-white text-sm mx-2 flex items-center hover:text-gray-300">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.303 3.492.997.107-.776.419-1.303.762-1.602-2.667-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.241-3.221-.125-.304-.538-1.524.117-3.176 0 0 1.011-.324 3.31 1.234.96-.267 1.987-.399 3.008-.404 1.02.005 2.048.137 3.008.404 2.299-1.558 3.309-1.234 3.309-1.234.656 1.652.243 2.872.118 3.176.774.84 1.241 1.91 1.241 3.221 0 4.609-2.804 5.624-5.479 5.921.431.372.816 1.102.816 2.222v3.293c0 .319.192.694.801.576 4.765-1.588 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
            </div>
        </div>


        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "/>

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs">Dannyverse | Crypto Exchange</p>
            <p className="text-white text-right text-xs">All rights reserved</p>
        </div>
    </div>
);

export default Footer;