import React from 'react'
import { useState } from 'react'
import MakePost from './MakePost'


function DisplayPosts() {
    const [post, setPosts] = useState(' ')

    // Modal for Make Post
    const [window, setWindow] = useState(false)
    const [choice, setChoice] = useState(false)

    const clicked = () => {
        console.log(this)
        setWindow(true);
    }

    const Dummylist = [
        {
            id: 1,
            name: "Dustin",
            postText: "Just finished my first project ever!",
            pic: "../images/node.png",
            time: "17:34"
        },
        {
            id: 2,
            name: "Matthew",
            postText: "Just completed SAP's Hackathon with my buddies! Very Enjoyable! @SAPHACKATHON2022",
            pic: "../images/mev2.jpeg",
            time: "15:34"
        },
        {
            id: 3,
            name: "Jacky",
            postText: "bought a compass card yesterday. Go Green!",
            pic: "../images/Foodbuddy.png",
            time: "14:20"
        },
    ]


    return (
        <div className=' min-h-screen  bg-gradient-to-b from-slate-50 to-blue-100'>

            {/* Change post */}
            <div className='flex py-2 justify-end' onClick={clicked}>
                <object className="" type="image/svg+xml" data='../images/add_box.svg' >
                </object>

            </div>

            {Dummylist && Dummylist.map(({id, name, postText, time, pic}) => (

            <div key={id} className="flex flex-row p-3 border-b-2">
                <img src={pic} alt=""
                    className='w-12 h-12 object-cover rounded-full' />
                <div className="flex flex-col w-full">
                    <div className="flex flex-row">
                        <h1 className="text-lg font-bold px-2">{name}</h1>
                        <h1 className="text-md px-2 text-gray-500">{time}</h1>


                    </div>
                    <h1 className="text-base text-slate-500 px-2">
                        {postText}
                    </h1>
                    <div className='flex justify-end'>
                        {/* {Buttons} */}
                        <button className="bg-[#DAF0F7] rounded-md float-right sendkudos text-base text-slate-500 px-2">
                            Send Kudos
                        </button>

                        <button className='my-auto mx-1' >
                                        <div className='w-max'>
                                            <object className="mx-auto my-auto" type="image/svg+xml" data='../images/favorite_border.svg' >
                                            </object>
                                        </div>
                        </button> 

                    </div>
                </div>
            </div>
            ))}



            {/* To dynamically create stuff - Save for later when you have a template ready! */}




            {window && <MakePost setChoice={setChoice} setWindow={setWindow} />}



        </div>
    )
}

export default DisplayPosts