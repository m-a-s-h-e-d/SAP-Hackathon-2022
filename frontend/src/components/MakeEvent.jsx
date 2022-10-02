import React from 'react'
import { useState } from 'react';

function MakeEvent() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  // Add another const for user

  const handleSubmit = (e) => {
    e.preventDefault();
    const mPost = { title, body, time, location };
    console.log(mPost);
  }

  return (
    <div>
      <div className="border-solid my-5">
        <h2>Add a new Event</h2>
        <form className='flex flex-col justify-between w-full my-auto' onSubmit={handleSubmit}>
          {/* Titlepost */}

          <label htmlFor="" className="postTitle mx-auto">Title</label>
          <input type="text"
            placeholder='Title of your event!'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)} />


          {/* Event Body */}
          <div className='Event Details border-black'>
          <label htmlFor="" className="flex mx-auto postContent"> Post </label>

          <textarea
            placeholder='Tell us what kind of event it is'
            cols=""
            rows=""
            value={body}

            onChange={e => setBody(e.target.value)}>

          </textarea>
            
          </div>



          {/* Where and When Same Line*/}
          {/* Time */}

          <label htmlFor="meeting-time" className="mx-auto postTitle">Event Time</label>
          <input type="datetime-local"
            required
            placeholder='When is happening?'
            value={time}
            onChange={(e) => setTime(e.target.value)} />

          {/* Where */}
          <label htmlFor="" className=" mx-auto postTitle">Location</label>
          <input type="text"
            required
            placeholder='Where is it happening?'
            value={location}
            onChange={(e) => setLocation(e.target.value)} />




          <button className='mx-auto rounded-md shadow-sm'>Add Event</button>
        </form>
      </div>

    </div>
  )
}

export default MakeEvent