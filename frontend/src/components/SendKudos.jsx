import React from 'react'
import { useState } from 'react'

function SendKudos() {
    // Need some work to send to the other user and display on their thingy
    
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
        const mkudo = {kudo};
        console.log(mkudo);
      }


  return (
    <div>
        {messages.map(({id, message}) => (
            <button className='flex flex-col border rounded-sm my-1 w-full' key={id}> 
                <p className='text-center'>{message}</p>
            </button>
        ))}
        <button onClick={onClick}>
            Customize your own message!
            {/* Reveal */}
        </button>
        {
            display && (
                <form className='' action="" onSubmit={handleSubmit} >
                {/* Textbox for kudo */}
                <textarea  className='w-full border'
                onChange={e => setKudo(e.target.value)}
                placeholder="Send a kudo!"
                name="" id=""></textarea>
                {/* Send button */}
                <button>
                    Send!
                </button>
    
    
            </form>
                
            )
        }
        {/* Initially hidden */}


    </div>
  )
}

export default SendKudos