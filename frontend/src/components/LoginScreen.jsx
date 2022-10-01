import React from 'react'
import { useState } from 'react'

function LoginScreen() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mPost = { userName, password };
        console.log(mPost);
      }




  return (
    <div className='grid h-screen place-items-center'> 
    {/* Login */}
        <form 
        onSubmit={handleSubmit}
        className='flex flex-col justify-between text-center' action="">
            {/* Insert Logo here */}

            {/* <img src="" alt="" /> */}

            {/* Username */}
            <label htmlFor="">Username:</label>
            <input 
            onChange={e => setUsername(e.target.value)}
            className='border rounded-md border-gray-800' type="text" placeholder='Username'/>
            {/* Password */}
            <label htmlFor="">Password:</label>
            <input 
            onChange={e => setPassword(e.target.value)}
             className='border rounded-md border-gray-800' type="password" placeholder='Password'/>

            <button className='border border-solid shadow-md my-4'>Login!</button>

            

        </form>
    </div>
    
  )
}

export default LoginScreen