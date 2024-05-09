import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [

        {
            id: 1,
            child: (

                <>
                LinkedIn
                <FaLinkedin size={25} />
                </>

            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-lg'
        },

        {
            id: 2,
            child: (

                <>
                GitHub
                <FaGithub size={25} />
                </>

            ),
            href: 'https://github.com',
        },

        {
            id: 3,
            child: (

                <>
                Mail
                <BiLogoGmail size={25} />
                </>

            ),
            href: 'mailto:kara.barisberkay@gmail.com',
        },

        {
            id: 4,
            child: (

                <>
                Resume
                <BsFillPersonLinesFill size={25} />
                </>

            ),
            href: '/CV_KARA_Baris.pdf',
            style: 'rounded-br-lg',
            download: true,
        }

    ]



    return (

        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>

            <ul>

                {links.map(({ id, child, href, style, download }) => (

                    <li 
                    
                        key={id} 
                        className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:ml-[-10px] hover:rounded-lg duration-300 bg-yellow-400 font-bold ' + style}>

                        <a

                            href={href} 
                            className='flex justify-between items-center w-full' 
                            download={download} 
                            target='_blank'
                            rel="noreferrer"
                        >
                            
                            {child}
                        
                        </a>

                    </li>

                ))}

            </ul>

        </div>

    );
};

export default SocialLinks;