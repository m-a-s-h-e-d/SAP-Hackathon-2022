import React from 'react'
import { useState } from 'react';

function MakePost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // Add another const for user

    const handleSubmit = (e) => {
        e.preventDefault();
        const mPost = {title, body};
        console.log(mPost);
    }

  return (
    <div>
        <div className="create">
         <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                {/* Titlepost */}
                
                <label htmlFor="" className="postTitle">Title</label>
                <input type="text"
                typeof='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

                
                {/* Body Post */}
                <label htmlFor="" className="postContent"> Post </label>

                <textarea name="" id="" cols="30" rows="10" value={body}
                onChange={e => setBody(e.target.value)}>

                </textarea>
                <button>Add Blog</button>

            </form>
            </div>

    </div>
  )
}

export default MakePost