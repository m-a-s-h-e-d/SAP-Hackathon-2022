import React from 'react'

const Header = (props) => {
    const title = props.title;
    console.log(props, title)
  return (
    <div className='flex justify-center items-center w-full h-20 text-black bg-slate-50 top-0 rounded-lg'>
        <h1 className=''>
        {title}

        </h1>
        


    </div>
  )
}

export default Header