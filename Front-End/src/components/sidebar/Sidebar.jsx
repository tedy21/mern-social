import React from 'react'
import "./sidebar.css"
import {Bookmark, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline,Event,Group, ChatBubbleOutlineOutlined} from "@mui/icons-material"
import { Users } from '../../dummyData'
import CloseFriend from "../closeFriend/CloseFriend";
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
      <ul className='sidebarList'>
        
        <li className='sidebarListItem'>
   <RssFeed className="sidebarIcon"/>
   <span className="sidebarListItemText">Feed</span>
        </li>

        <li className='sidebarListItem'>
   <ChatBubbleOutlineOutlined className="sidebarIcon"/>
   <span className="sidebarListItemText">chat</span>
        </li>


        <li className='sidebarListItem'>
   <Group className="sidebarIcon"/>
   <span className="sidebarListItemText">Groups</span>
        </li>

        <li className='sidebarListItem'>
   <PlayCircleFilledOutlined className="sidebarIcon"/>
   <span className="sidebarListItemText">videos</span>
        </li>
        <li className='sidebarListItem'>
   <Bookmark  className="sidearIcon"/>
   <span className="sidebarListItemText">Bookmarks</span>
        </li>

        <li className='sidebarListItem'>
   <HelpOutline className="sidearIcon"/>
   <span className="sidebarListItemText">questions</span>
        </li>

        <li className='sidebarListItem'>
   <WorkOutline className="sidebarIcon"/>
   <span className="sidebarListItemText">jobs</span>
        </li>

        <li className='sidebarListItem'>
   <Event className="sidebarIcon"/>
   <span className="sidebarListItemText">Event</span>
        </li>

        <li className='sidebarListItem'>
   <School className="sidebarIcon"/>
   <span className="sidebarListItemText">courses</span>
        </li>
      </ul>


  <button className='sidebarButton'>Show More</button>
     
  <hr className='sidebarHr' />
     
     <ul className='sidebarFriendList'>
          {Users.map(u=>(
               <CloseFriend key={u.id} user={u}/>
          ))}
   </ul>
   
      </div>
    </div>
  )
}
