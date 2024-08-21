import React from 'react'
import heroimage from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[90vh] mx-auto py-8 bg-black font-sans'>
    
    <div className='my-auto mx-auto w-[300px] h-auto lg:w-[330px]'>
            <img src={heroimage} alt='heroimage' />
    </div>
    <div className='col-span-2 px-5 pt-20'>

        <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='primary-color'>
                I'm a
            </span> <br/>
            <TypeAnimation
            sequence={[
                "MERN stack developer",
                1000,
                "Trainer",
                1000,
                "Programmer",
                1000,

            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            />
        </h1>

        <p className='text-white sm:text-lg my-6  lg:text-xl'>
            My name is Hariharan and I have 2+ years in Web development
        </p>

        <div className='my-8'>
            <a href='https://drive.google.com/file/d/1UWCjESEnpJ97xjZjRjJlHYNiO_U9Za6C/view?usp=drive_link' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                Download CV
            </a>
            <a href='#contact' className='px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>Contact</a>    
        </div>
    </div>

    </div>
  )
}

export default Hero
