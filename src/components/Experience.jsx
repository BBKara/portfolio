import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';

const Experience = () => {

    const techs = [

        {
            id: 1,
            src:html,
            title: 'HTML',
            alt: 'HTML logo'
        },

        {
            id: 2,
            src:css,
            title: 'CSS',
            alt: 'CSS logo'
        },

        {
            id: 3,
            src:javascript,
            title: 'JavaScript',
            alt: 'JavaScript logo'
        }

    ]

    return (

        <div name='experience' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div>

                    <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
                        Experience
                    </p>

                </div>

                <div className='w-full grid grid-col-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mt-20'>

                    {techs.map(({id, src, title, alt}) => (

                        <div key={id} className='border-b-2 rounded-md border-yellow-400 hover:scale-105 duration-200 cursor-pointer'>

                            <img className='w-20 mx-auto' src={src} alt={alt} />

                            <p>{title}</p>

                        </div>
                    
                    ))}

                </div>

            </div>

        </div>

    );

};

export default Experience;