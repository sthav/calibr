"use client";
import Image from 'next/image'
import React from 'react'
import CustomButton from '@/components/CustomButton'

const Hero = () => {
    return (
        <div className="hero max-w-screen-2xl mx-auto h-screen  items-center bg-gray-200 relative">
            <div className='flex max-w-screen-xl mx-auto '>
                <div className="w-1/2 p-12 mt-40">
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-inter font-semibold mb-4">
                        Lessons and insights <span className="text-green-500">from 8 years</span>
                    </h1>
                    <p className="text-base font-inter font-normal leading-6 text-left text-gray-700 mb-8">
                        Where to grow your business as a photographer: site or social media?
                    </p>

                    <CustomButton
                        title="Register"
                        containerStyles="bg-green-500 text-white block w-32 py-2 px-1 text-sm rounded-sm mt-4"
                    />
                </div>
                <div className="w-1/2 flex justify-end mt-40">
                    <Image
                        src="/Illustrationhero.png"
                        alt="Your Image"
                        width={391}
                        height={407}
                        className="filter brightness-90"
                    />
                </div>
            </div>
            <div className="dots absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-4">
                <Image
                    src="/Dot.png"
                    alt="Dots"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    )
}

export default Hero
