import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {

    const [nav, setNav] = useState(false);


    const links = [
        {
            id: 1,
            name: 'home',
            pic: '../images/home-3.svg',
            link: '/'

        },
        {
            id: 2,
            name: 'Kudos',
            pic: '../images/privacy-policy.svg',
            link: '/Kudos'


        },
        {
            id: 3,
            name: 'Scrapbook',
            pic: '../images/favorite.svg',
            link: '/Scrapbook'


        },
        {
            id: 4,
            name: 'Profile',
            pic: '../images/profile.svg',
            link: '/Profile'


        },

    ]

    return (

        <div className="nav">

            <div className='flex items-center w-full h-20 text-white fixed bottom-0 bg-slate-50 rounded-t'>
                {links.map(({ id, link, pic, name }) => (


                    <Link className=' flex-col w-1/4' key={id} to={link}>

                        <div className="text-center active:bg-violet-100 rounded-full max-w-md">
                            <object className="mx-auto my-auto" type="image/svg+xml" data={pic} >
                            </object>
                        </div>

                    </Link>


                ))}

            </div>

        </div>

    )
}

export default Navbar;