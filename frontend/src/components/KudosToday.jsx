import React from 'react'

function KudosToday() {
    // Messages Board

    //Send one back
    //Add to Scrapbook
    const messages = [
        {
            id: 1,
            name: "Jacky",
            message: "Hey, Thanks for helping me set up shop"

        },
        {
            id: 2,
            name: "Dustin",
            message: "That was really well thought out!"
        },
        {
            id: 3,
            name: "Matthew",
            message: "Keep up the good work!"
        }
    ]



    return (
        <div className=''>

            {messages.map(({ id, name, message }) => (
                //Id of each one [needed to map]
                <div key={id} className="border rounded-sm my-2">
                    {/* Name and Buttons */}
                    <div className="name">
                        {name}
                        {/* Buttons */}
                        <span>
                            <button className='border'>
                                Add to scrapbook
                                {/* Add to Scrapbook */}
                            </button>
                        </span>
                        <span>
                            <button className='border'>
                                Send Kudos back
                                {/* SendKudos */}
                            </button>
                        </span>

                    </div>


                    {/* message */}
                    <p className='message'>{message}</p>


                </div>


            ))}

        </div>
    )
}

export default KudosToday