import React from "react";
import {BsShieldFillCheck, BsShieldLockFill} from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import {MdOutlineRateReview} from "react-icons/md";
import {AiOutlineThunderbolt} from "react-icons/ai";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                    Services That We
                    <br />
                    Continuously Improve
                </h1>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                    Your Premier Destination for Buying and Selling Crypto Assets. We are dedicated to providing a user-friendly experience that adapts to your needs. Our platform offers a suite of services designed to make trading cryptocurrencies simple, secure, and rewarding. Here’s how we stand out:
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#a099ff]"
                    title="MetaMask Integration"
                    icon={<BsShieldLockFill fontSize={21} className="text-white" />}
                    subtitle="Connect your Ethereum wallet effortlessly using MetaMask. This integration ensures that you can manage your digital assets securely and conveniently, making Dannyverse a central hub for your blockchain transactions."
                />
                <ServiceCard
                    color="bg-[hsla(357,94%,71%,1)]"
                    title="Cryptocurrency Transactions"
                    icon={<MdOutlineRateReview fontSize={21} className="text-white" />}
                    subtitle="Send Ethereum and other supported cryptocurrencies through a secure, decentralized network. Dannyverse goes beyond traditional transactions by allowing you to send not only funds but also messages and personalized GIFs, adding a unique personal touch to every exchange."
                />
                <ServiceCard
                    color="bg-[rgb(152,231,156)]"
                    title="React.js Framework"
                    icon={<AiOutlineThunderbolt fontSize={21} className="text-white" />}
                    subtitle="Built using React.js, Dannyverse provides a responsive and dynamic user experience, ensuring that your interactions with the blockchain are as smooth as they are secure."
                />
            </div>
        </div>
    </div>
);

export default Services;