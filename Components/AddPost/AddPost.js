import React from 'react'
import './addPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className='addPostContainer'>
            <div className='addPostTop'>
                <img src='/images/image1.jpg' alt='' className='addPostPic'/>
                <input className='addPostInput' placeholder="What's in your mind...?" type='text'/>
            </div>
            <hr className='posthr'/>
            <div className='addPostBottum'>
                <div className='addPostOptions'>
                    <div className='addPostOption'>
                        <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
                        <span className='addPostOption'>Add Photo/Video</span>
                    </div>

                    <div className='addPostOption'>
                        <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                        <span className='addPostOption'>Add Location</span>
                    </div>

                    <div className='addPostOption'>
                        <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                        <span className='addPostOption'>Add Tag</span>
                    </div>

                    <div className='addPostOption'>
                        <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
                        <span className='addPostOption'>Go Live</span>
                    </div>

                </div>
                <button className='postButton'>Post</button>
            </div>
        </div>
    </div>
  )
}
