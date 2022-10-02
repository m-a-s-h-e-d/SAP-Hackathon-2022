import React from 'react'
import { useState } from 'react';

const MakePost = ({ setChoice, setWindow }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // Add another const for user


  //Close Windows
  const handleCancelClick = () => {
    setChoice(false);
    setWindow(false);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const mPost = { title, body };
    console.log(mPost);
    setChoice(true);
    setWindow(false);
  }

  return (
    <div className='bg-slate-200 opacity-90 fixed inset-0 z-50 '>
      <div className='flex flex-col h-screen justify-center items-center opacity-100' >
        <div className=' absolute inset-x-0 bottom-0 flex-col rounded-lg justify-center opacity-100 bg-white py-5 px-auto border-sky-300'>
          {/* Where the columns start */}
          <div className="create flex flex-col text-center ">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
              {/* Titlepost */}

              <label htmlFor="" className="postTitle">Title</label>
              <input type="text"
                typeof='text'

                className='border-2 rounded-lg'
                value={title}
                onChange={(e) => setTitle(e.target.value)} />


              {/* Body Post */}
              <div className="post flex flex-col">
                <label htmlFor="" className="postContent"> Post </label>

                <textarea className='border-2 rounded-lg' name="" id="" cols="30" rows="5" value={body}
                  onChange={e => setBody(e.target.value)}>

                </textarea>
              </div>
              <button onClick={handleSubmit} className='text-center border-2 rounded-sm my-1 w-full p-2 bg-[#DAF0F7]' >Add Blog</button>
              <button onClick={handleCancelClick} className='border-2 py-2 rounded-md w-full bg-[#FFA7A0]' >Cancel</button>


            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MakePost