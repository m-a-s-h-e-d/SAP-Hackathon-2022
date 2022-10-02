import React from 'react'
import SendKudos from './SendKudos'
import { useState } from 'react'

function KudosToday() {
    // Messages Board


    //Send one back
    const [window, setWindow] = useState(false)
    const [choice, setChoice] = useState(false)

    const clicked = () => {
        console.log(this)
        setWindow(true);
    }
    //Add to Scrapbook
    const messages = [
        {
            id: 1,
            name: "Jacky",
            message: "Hey, Thanks for helping me set up shop",
            pic: "https://picsum.photos/seed/picsum/40/40"

        },
        {
            id: 2,
            name: "Dustin",
            message: "That was really well thought out!",
            pic: "https://picsum.photos/seed/picsum/40/40"

            
        },
        {
            id: 3,
            name: "Matthew",
            message: "Keep up the good work!",
            pic: "https://picsum.photos/seed/picsum/40/40"

        }
    ]



    return (
        <div className='my-3'>

            {messages.map(({ id, name, message, pic }) => (
                //Id of each one [needed to map]
                <div key={id} className="shadow-md  rounded-lg py-3 px-3">
                    <div className='flex titleAndButtons justify-between'>
                    <img src={pic} alt="" />

                        {/* Name */}
                        <text className="name">
                            {name}
                        </text>

                        {/* Buttons */}
                        <div className='ButtonsToRight'>
                        <span>
                                {/* SendKudos clicking is a hit or miss*/}

                                <button onClick={clicked} className='mx-auto'>
                                    <div className='w-max'>
                                        <object className="mx-auto my-auto" type="image/svg+xml" data='../images/reply.svg' >
                                        </object>
                                    </div>
                                </button>
                            </span>
                            <span>
                                {/* Add to ScrapBook */}
                                <button className='my-auto'>
                                    <div className='w-max'>
                                    <object className="mx-auto my-auto" type="image/svg+xml" data='../images/favorite_border.svg' >
                                    </object>     
                                    </div>

                                </button>
                        </span>
                        </div>

                    </div>

                    {/* message */}
                    <p className='message'>{message}</p>


                </div>


            ))}
            {window && <SendKudos setChoice={setChoice} setWindow={setWindow} />}

        </div>
    )
}

export default KudosToday