import React from 'react'
import { useState } from 'react'
import projects from './projects.json'
import MakePost from './MakePost'


function DisplayPosts() {
    const [post, setPosts] = useState(projects.projects)
    console.log(projects)

    // Modal for Make Post
    const [window, setWindow] = useState(false)
    const [choice, setChoice] = useState(false)

    const clicked = () => {
        console.log(this)
        setWindow(true);
    }

  return (
    <div className='my-2 min-h-screen bg-[#F5F5F4]'>
    {/* Change post */}
    <div className='flex justify-end' onClick={clicked}>
    <object className="" type="image/svg+xml" data='../images/add_box.svg' >
                                    </object>    
    
    </div>


    {/* To dynamically create stuff - Save for later when you have a template ready! */}

    {post && post.map((projects) => (
        <div className="max-w-xl mx-auto my-6" key={projects.id}>
            <h4 className="">Project {projects.title}</h4>
            {/* <div className="">
                <img src={projects.image} width="100%"/>
            </div> */}
            <hr />

                <div className="rounded-lg m-3">
                    <p> {projects.body} </p>
                </div>
        </div>
        ))}

    {/* Replace with Icon on header*/}

    {window && <MakePost setChoice={setChoice} setWindow={setWindow} />}



    </div>
  )
}

export default DisplayPosts