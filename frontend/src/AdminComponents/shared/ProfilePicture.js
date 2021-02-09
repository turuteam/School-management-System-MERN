import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar'


function Profile({profileimg,setprofileUrl}) {
    return (
        <div>
             <h3>Profile Photo</h3>
             <input accept="image/*" className="" id="icon-button-file" type="file"  onChange={setprofileUrl}/>
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
                </IconButton>
            </label>
            {profileimg && <Avatar  src={profileimg} alt="profile picture"/>}
        </div>
    )
}

export default Profile
