import React from 'react';

const About = () => {
    return (

        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
                        About
                    </p>

                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus alias atque numquam. Itaque ex, voluptatem sint praesentium sequi repellendus officia soluta atque assumenda recusandae earum dolorem, minus saepe laborum hic beatae obcaecati doloremque tempore ullam maxime nisi deleniti? Tempore, id incidunt cum vero officiis repellendus itaque animi aspernatur dolor sint?
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos delectus illum dolores, fugiat tempore? Tempora labore iure dolore? Pariatur itaque quo corrupti quas doloremque fugiat dicta doloribus illum ad officiis, obcaecati facere dignissimos sunt? Ipsa saepe praesentium sapiente dolore repellat eum nobis nulla maxime laudantium molestiae inventore, architecto repellendus!
                </p>

            </div>

        </div>

    );

};

export default About;
