import React from 'react'
import DisplayPosts from './DisplayPosts'
import MakeEvent from './MakeEvent'


const Profile = () => {


  const dummyProfile = [{

      id: 1,
      name: "Matthew Puyat",
      location: "Vancouver, BC",
      bio: "Fairly new in programming. I enjoy reading!",
      goal: "Read a book every month"

  },
]
  const profile = dummyProfile[0]

  return (
    
    <div className='bg-gradient-to-b from-zinc-50 to-zinc-100 min-h-screen'>


      <div class="h-48 bg-gradient-to-t from-zinc-200 to-violet-300"></div>
      {/* Top bar including Profile pic, name and location */}
      <div className='topbar flex justify-between'>
      <img src="../images/mev2.jpeg" className="rounded-full w-32 h-32 shadow-sm border-4 -mt-12 ml-7"/>
      {/* Right portion with name and location */}
      <div className='flex flex-col mr-20 mt-3'>
          <h1 class="text-gray-800 font-semibold text-x1 ">{profile.name}</h1>
          <h2 class="text-gray-400 font-semibold">{profile.location}</h2>
      </div>
      </div>
    <div class="flex mx-4 flex-col">
        <h3 class="text-gray-800 font-semibold text-x1 mt-5">Bio</h3>
          <p className='mx-auto my-auto'> {profile.bio}</p>
        <h3 class="text-gray-800 font-semibold text-x1 mt-5">Personal Goals:</h3>
        <p className='mx-auto my-auto'>{profile.goal}</p>

        </div>
    </div>
  

  )
}

export default Profile