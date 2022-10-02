import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';

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
    <footer className='flex items-center w-full h-20 text-white fixed bottom-0 bg-slate-50 rounded-t'>
        {links.map(({id, link, pic, name}) => (


                <Link className='flex-col w-1/4' key={id} to={link}>

                <div className="text-center">
                    <object className="mx-auto my-auto" type="image/svg+xml" data={pic} >
                    </object>
 

                {/* <p className='text-sm mx-auto my-auto'>{link}</p> */}
                    
                </div>

                </Link>


        ))}

    </footer>
  )
}

export default Navbar;