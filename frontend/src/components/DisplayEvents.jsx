import React from 'react'
import { useState } from 'react'
import projects from './projects.json'
import MakePost from './MakePost'

function DisplayEvents() {
    const [event, setEvents] = useState(projects.projects)
    console.log(projects)

    

  return (
    <div>
    {/* Change post */}

    {/* To dynamically create stuff - Save for later when you have a template ready! */}

    {post && post.map((projects) => (
        <div className="max-w-xl mx-auto my-6" key={projects.id}>
            <h4 className="">Project {projects.title}</h4>
            <div className="">
                <img src={projects.image} width="100%"/>
            </div>
            <hr />

                <div className="rounded-lg m-3">
                    <p> {projects.body} </p>
                </div>
        </div>
        ))}
    {/* <div className='PostBox'>
        <div className=""></div>
        
    </div> */}
    
    <MakePost />


    </div>
  )
}

export default DisplayEvents;