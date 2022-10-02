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
            pic: "../images/Foodbuddy.png",
            time: "15:34"


        },
        {
            id: 2,
            name: "Dustin",
            message: "That was really well thought out!",
            pic: "../images/node.png",
            time: "15:34"



        },
        {
            id: 3,
            name: "Matthew",
            message: "Keep up the good work!",
            pic: "../images/mev2.jpeg",
            time: "15:34"


        }
    ]



    return (
        <div className='min-h-screen bg-gradient-to-b from-slate-50 to-orange-50'>

            {messages.map(({ id, name, message, pic, time }) => (

                <div key={id} className="flex flex-row p-3 border-b-2">
                    <img src={pic} alt=""
                        className='w-12 h-12 object-cover rounded-full align-middle' />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            {/* Name tothe Left */}
                            <h1 className="text-lg font-bold px-2">{name}</h1>

                            {/* Buttons */}
                            <div className='ButtonsToRight flex flex-row justify-end'>

                                <span className=''>
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
                        <h1 className="text-base text-slate-500 px-2">
                            {message}
                        </h1>
                    </div>
                </div>
            ))}

            {window && <SendKudos setChoice={setChoice} setWindow={setWindow} />}

        </div>
    )
}

export default KudosToday