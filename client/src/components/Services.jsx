import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

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
                    color="bg-[#2952E3]"
                    title="Security Guarantee"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Security is our top priority. We utilize advanced encryption methods and multi-layered security protocols to ensure that all transactions and user data are protected.
                    Our commitment to privacy is unwavering, and we regularly update our systems to guard against new threats, ensuring that your digital assets are always safe."
                />
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Best Exchange Rates"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Get more for your money. Our platform constantly monitors global cryptocurrency markets to offer you the best possible exchange rates. By leveraging real-time data analysis and our strategic partnerships, we ensure that you receive the most favorable financial conditions for every transaction, maximizing your investment potential."
                />
                <ServiceCard
                    color="bg-[#F84550]"
                    title="Fastest Transactions"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Experience lightning-fast processing. Our state-of-the-art transaction system ensures that your trades are executed almost instantly. With our optimized network infrastructure and cutting-edge technology, we minimize latency and ensure that your transactions go through swiftly, enabling you to take advantage of market movements as they happen."
                />
            </div>
        </div>
    </div>
);

export default Services;