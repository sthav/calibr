import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 p-10">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Left Half */}
                <div className="flex flex-col ">
                    <Image
                        src="/footerlogo.png"
                        alt="Logo"
                        width={100}
                        height={40}

                    />
                    <div className='mt-8'>
                        <p className="text-gray-400 text-xs">All Rights Reserved</p>
                    </div>

                    <div className="mt-10">

                        <Image
                            src="/SocialLinks.png"
                            alt="Logo"
                            width={100}
                            height={40}

                        />
                    </div>
                </div>

                {/* Right Half */}
                <div className="flex justify-start space-x-40">
                    {/* Column 1 */}
                    <div className="text-gray-600">
                        <h4 className="font-semibold text-white py-4">Company</h4>
                        <ul className="list-disc ml-4 text-gray-400">
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-gray-600">
                        <h4 className="font-semibold text-white py-4">Support</h4>
                        <ul className="list-disc ml-4 text-gray-400">
                            <li>Help Center</li>
                            <li>Terms of Service</li>
                            <li>Legal</li>
                            <li>Privacy Policy</li>
                            <li>Status</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="text-gray-600 relative">
                        <h4 className="font-semibold text-white py-4">Stay Up to Date</h4>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your Email Address"
                                className=" rounded  px-4 py-2 pr-16 mt-2 text-white-400 text-xs bg-gray-700"
                            />
                            <span className="absolute inset-y-0 right-2 top-2 flex items-center pr-3 text-gray-400">
                                <Image src="/send.png" alt="Icon"
                                    width={14}
                                    height={10}
                                />
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
