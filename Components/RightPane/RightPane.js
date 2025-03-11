import React from 'react'
import './rightPane.css'

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className='rightPanecontainer'>
         <div className='addContainer'>
          <span className='sponsered'>Sponsered</span>
          <img src='/images/adImage.jpg' alt='' className='adImage'/>
          <div className='adtextdiv'>
            <span className='adText'>If you're a Coca Cola lover, one thing's for sure: you'll be singing to a different tune this summer. The company recently unveiled the plan for their "Share a Coke and a Song" campaign, which will be swapping out the names you usually see on cans for lines from your favorite songs – there are more than 70 different lyrics featured, and yes, Taylor Swift made the cut!</span>
          </div>  
         </div>
         <div className='birthdayContainer'>
          <img src='/images/birthday.png' alt='' className='birthdayImage'/>
          <span className='birthdayText'><b>Charlie Dann </b>and <b>2 others</b> are having birthday today....!</span>
         </div>
         <div className='friendList'>
          <li className='onlineFriend'>
            <div className='onlineFriendImgContainer'>
              <img src='/images/person.jpeg' alt='' className='onlineFriendImg'/>
              <span className='onlineStates'></span>
            </div>
            <span className='onlineFriendName'>Donald seal</span>
          </li>
          
          <li className='onlineFriend'>
            <div className='onlineFriendImgContainer'>
              <img src='/images/person.jpeg' alt='' className='onlineFriendImg'/>
              <span className='onlineStates'></span>
            </div>
            <span className='onlineFriendName'>Donald seal</span>
          </li>

          <li className='onlineFriend'>
            <div className='onlineFriendImgContainer'>
              <img src='/images/person.jpeg' alt='' className='onlineFriendImg'/>
              <span className='onlineStates'></span>
            </div>
            <span className='onlineFriendName'>Donald seal</span>
          </li>

          <li className='onlineFriend'>
            <div className='onlineFriendImgContainer'>
              <img src='/images/person.jpeg' alt='' className='onlineFriendImg'/>
              <span className='onlineStates'></span>
            </div>
            <span className='onlineFriendName'>Donald seal</span>
          </li>

          <li className='onlineFriend'>
            <div className='onlineFriendImgContainer'>
              <img src='/images/person.jpeg' alt='' className='onlineFriendImg'/>
              <span className='onlineStates'></span>
            </div>
            <span className='onlineFriendName'>Donald seal</span>
          </li>
          
         </div>
      </div>
    </div>
  )
}
