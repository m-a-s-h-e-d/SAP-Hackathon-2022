import React from 'react'
import { useState } from 'react'


function Scrapbook() {
  // Achievements
  // KudosToday
  const [item, setItems] = useState()
  const ditems = [
    {
      id: 1,
      desc: "Very first Hackathon!",
      date: "10/02/2022",
      img: "../images/SAP.png",
      color: "bg-[#DAF0F7]"
    }, {
      id: 2,
      desc: "Very first project!",
      date: "10/02/2022",
      img: "../images/tailwind.png",
      color: "bg-[#DAF0F7]"
    },
    {
      id: 3,
      desc: "Green for transit!",
      date: "10/01/2019",
      img: "../images/node.png",
      color: "bg-[#DAF0F7]"
      
    },
    {
      id: 4,
      desc: "'Lovely Project'",
      date: "10/01/2019",
      img: "../images/html.png",
      color: "bg-[#FFFFD1]"


    },
  ]



  return (
    <div className='flex-col py-2 bg-gradient-to-b from-slate-50 to-rose-50 min-h-screen'>
      {/* Container for award and text  */}

      {/* Dynamically Create */}
      {ditems.map(({id, desc, date, img, color}) => (
        <div className={`SplitTwo flex flex-row justify-evenly shadow-sm my-1 rounded-xl py-2  ${color}`} key={id}>
          <div className='w-12 h-12'>
            <img className='' src={img} alt="" />
          </div>
          <div className='grid place-items-center'>
            <p>{desc}</p>
            <p>{date}</p>
          </div>

        </div>

      ))

      }



    </div>
  )
}

export default Scrapbook