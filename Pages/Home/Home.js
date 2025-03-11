import React from 'react'
import NavBar from '../../Components/NavigationBar/NavBar.js'
import LeftPane from '../../Components/LeftPane/LeftPane.js'
import PostPane from '../../Components/PostPAne/PostPane.js'
import RightPane from '../../Components/RightPane/RightPane.js'
import './home.css'


export default function Home() {
  return (
    <div>
      <NavBar/>

      <div className='bottomContainer'>
        <LeftPane/>
        <PostPane/>
        <RightPane/>
      </div>
     
    </div>
  )
}
