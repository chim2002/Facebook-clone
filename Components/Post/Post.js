import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <div className='postContainer'>
        <div className='postTop'>
          <img src='/images/images2.jpeg' alt='' className='postImage'/>
          <span className='postUserName'>Anne Diva</span>
          <span className='postTime'>5s ago</span>
        </div>

        <div className='postCenter'>
          <div className='postCaption'>
            Hello world.. How you all doing?
          </div>
          <img src='/images/images2.jpeg' alt='' className='postedImg'/>
        </div>

        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='/images/likefacebook.png' alt='' className='reactionPic'/>
            <img src='/images/hahafacebook.png' alt='' className='reactionPic'/>
            <img src='/images/heartImage.jpg' alt='' className='reactionPic'/>
            <span className='likeCount'>Batman and 255 others</span> 
          </div>

          <div className='postBottomRight'>
            <span className='commentCount'>
              15 comments
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
