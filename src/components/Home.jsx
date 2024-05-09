import React from 'react';
import HeroImage from '../assets/hero-img.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {

    return (

        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>

                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>

                    <p className='text-gray-500 py-4 max-w-md'>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci dolore magnam autem officiis illo itaque! Ut asperiores ad fugiat quaerat consectetur, voluptas amet reiciendis aperiam non magnam aut ipsum!

                    </p>

                    <div>

                        <button className='group text-black font-bold w-fit px-6 py-3 my-3 flex items-center rounded-lg bg-yellow-400'>
                            
                            Portfolio
                            <span className='group-hover:rotate-90 duration-200'><MdOutlineKeyboardArrowRight size={20} /></span>
                            
                        </button>

                    </div>


                </div>

                <div>

                    <img src={HeroImage} alt="My Profile" className='mx-auto w-2/3 md:w-full' />

                </div>


            </div>


        </div>


    );

};

export default Home;