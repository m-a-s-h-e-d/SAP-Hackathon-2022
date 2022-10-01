import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
            pic: '../images/home-3.svg'

        },
        {
            id: 2,
            link: 'Kudos',
            pic: '../images/privacy-policy.svg'

        },
        {
            id: 3,
            link: 'Scrapbook',
            pic: '../images/favorite.svg'

        },
        {
            id: 4,
            link: 'Profile',
            pic: '../images/profile.svg'

        },

    ]

  return (
    <footer className='flex items-center w-full h-20 text-white fixed bottom-0 bg-slate-400 rounded-t'>
        {links.map(({id, link, pic}) => (
            <div className='flex-col w-1/4' key={id}> 
                <div className="text-center">
                    <object className="mx-auto my-auto" type="image/svg+xml" data={pic} >
                </object>

                <p className='text-sm mx-auto my-auto'>{link}</p>
                    
                </div>


            </div>
        ))}

    </footer>
  )
}

export default Navbar;