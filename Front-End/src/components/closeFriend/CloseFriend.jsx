import React from 'react'
import  "../../dummyData.js"
import "./closeFriend.css"
export default function CloseFriend({user})
 {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER //PF means public folder

  return (
      <li className='sidebarFriend'>
             <img alt="" className='sidebarFriendImg' src={PF+user.profilePicture}/>
             <span className='sidebarFriendName'>{user.username}</span>
         </li>
    
  )
}
