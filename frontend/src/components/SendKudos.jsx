import React from 'react'
import { useState } from 'react'

const SendKudos = ({ setChoice, setWindow }) => {
    // Need some work to send to the other user and display on their thingy
    const handleAnyClick = () => {
        setChoice(true);
        setWindow(false);

    }
    const handleCancelClick = () => {
        setChoice(false);
        setWindow(false);

    }

    const [kudo, setKudo] = useState('');
    const [display, setDisplay] = useState(false);
    const onClick = () => {
        setDisplay(current => !current)
        console.log(display);
    };



    const messages = [
        {
            id: 1,
            message: "Keep it up!"
        },
        {
            id: 2,
            message: "Working hard or hardly working?"
        }]

    const handleSubmit = (e) => {
        e.preventDefault();
        const mkudo = { kudo };
        console.log(mkudo);
    }


    return (
        <div className='bg-slate-200 opacity-90 fixed inset-0 z-50 '>
            <div className='flex flex-col h-screen justify-center items-center opacity-100' >
                {/* Change bottom to position height */}
                <div className=' absolute inset-x-0 bottom-0 flex-col rounded-lg justify-center opacity-100 bg-white py-5 px-auto border-sky-300'>
                    <h1 className='text-center text-lg'>Send Kudos</h1>

                    {/*  Fixed Messages */}
                    {messages.map(({ id, message }) => (
                        <button className='border-2 rounded-sm my-1 w-full'
                            onClick={handleAnyClick}
                            key={id}>
                            <p className='text-center py-2'>{message}</p>
                        </button>
                    ))}


                    <div className='text-center border-2 rounded-sm my-1 w-full p-2 bg-[#6FBAD2]' onClick={onClick}>
                        Customize your own message!
                        {/* Reveal */}
                    </div>
                    {/* Initially hidden */}


                    {
                        display && (
                            <form className='' action="" onSubmit={handleSubmit} >
                                {/* Textbox for kudo */}
                                <textarea className='w-full border'
                                    onChange={e => setKudo(e.target.value)}
                                    placeholder="Send a kudo!"
                                    name="" id=""></textarea>

                                {/* Send button */}
                                <div className='text-center border-2 rounded-sm my-1 w-full p-2 bg-[#DAF0F7]' 
                                    onClick={handleAnyClick}>
                                    Send!
                                </div>


                            </form>

                        )
                    }
                    <div className='text-center'>
                    <button className='border-2 py-2 rounded-md w-full bg-[#FFA7A0]' onClick={handleCancelClick}>Cancel</button>

                    </div>

                </div>

            </div>




        </div>
    )
}

export default SendKudos