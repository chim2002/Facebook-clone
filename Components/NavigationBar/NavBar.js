import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navbar.css";

export default function NavBar() {
  return (
    <div className='navBarBox'>
      <div className='navLeft'>
        <span className='logo'>FakeBook</span>
      </div>

      <div className='navMiddle'>
        <div className='searchBarBox'>
            <SearchIcon className='searchIcon'/>
            <input className='searchInput' placeholder='search'/>
        </div>
      </div>

      <div className='navRight'>
        <div className='navbarlinks'>
            <span className='navbarlink'>HomePage</span>
            <span className='navbarlink'>Profile</span>
        </div> 
        <div className='navbaricons'>
            <div className='navbaricon'>
                <PersonIcon className='personicon'/>
                <span className='iconTag'>3</span>
            </div>
            <div className='navbaricon'>
                <MessageIcon className='MessageIcon'/>
                <span className='iconTag'>4</span>
            </div>
            <div className='navbaricon'>
                <SettingsIcon className='SettingsIcon'/>
                <span className='iconTag'>5</span>
            </div>
        </div> 

        <div className='ProfilePic'>
            <img src='./images/image1.jpg' alt='profilePic' className='pic'></img>
        </div>
      </div>
    </div>
  )
}
