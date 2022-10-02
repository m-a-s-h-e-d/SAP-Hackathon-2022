import React from 'react'

function KudosToday() {
    // Messages Board
    

    //Send one back
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
                <div key={id} className="shadow-md border rounded-lg  py-3 px-3">
                    <div className='flex titleAndButtons justify-between'>
                    <img src={pic} alt="" />

                        {/* Name */}
                        <text className="name">
                            
                            {name}
                        </text>
                        {/* Buttons */}
                    
                        <div className='ButtonsToRight'>
                        <span>
                                {/* Add to ScrapBook */}
                                <button className='mx-auto'>
                                <object className="mx-auto my-auto" type="image/svg+xml" data='../images/reply.svg' >
                            </object>
                                </button>
                            </span>
                            <span>
                                {/* SendKudos */}
                                <button className='my-auto'>
                                <object className="mx-auto my-auto" type="image/svg+xml" data='../images/favorite_border.svg' >
                                </object>
                                </button>
                        </span>
                        </div>

                    </div>




                    {/* message */}
                    <p className='message'>{message}</p>


                </div>


            ))}

        </div>
    )
}

export default KudosToday