import React from 'react';
import CustomButton from './CustomButton'; // Import your CustomButton component
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg-gray-200">
            <nav className=" max-w-screen-xl mx-auto bg-gray-200 p-4 flex justify-between items-center">
                {/* Left side with logo */}
                <Image
                    src="/Logo.png" // Replace with the path to your logo image
                    alt="Logo"
                    width={100} // Set the desired width
                    height={40} // Set the desired height
                // className="h-10 w-10 mr-4"
                />

                {/* Right side with navigation links and buttons */}
                <div className="space-x-8">
                    <Link href="#" className="text-gray-800 hover:text-gray-300">Home</Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-300">Services</Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-300">Features</Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-300">Products</Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-300">Testimonials</Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-300">FAQ</Link>
                </div>

                {/* Login and Sign Up buttons */}
                <div className="flex justify-between">
                    <CustomButton title="Login" containerStyles="text-green-500 mr-6" />
                    <CustomButton title="Sign up" containerStyles="bg-green-500 text-white block w-30 py-2 px-4 text-sm rounded-md" />
                </div>

            </nav>
        </div>

    );
};

export default Navbar;
