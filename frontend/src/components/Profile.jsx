import React from 'react'
import SpiderGraph from './SpiderGraph'
import DisplayPosts from './DisplayPosts'
import MakeEvent from './MakeEvent'


const Profile = () => {

  return (
    
    <div className="flex flex-col">
      {/* Default picture */}

      <div className="flex tophalf">
          {/* Left side */}
        <div className="profilepic ">
          <img className='rounded-full' src="../images/react.png" alt="" />
        </div>

          {/* Statistics */}
        <div>
          <span>Posts: insert data</span>
          <span>Kudos given: insert data</span>
          <span></span>
        </div>

      </div>

      <h3>Username</h3>



      {/* Bio information */}
      <div className='Bio'>
        <h3>Bio</h3>
          <p className=''> Insert bio here</p>

        <h3>Personal Goals:</h3>
          <p className=''> Insert goals here</p>

        <h3>Fun Fact:</h3>
          

      </div>


    </div>
  )
}

export default Profile