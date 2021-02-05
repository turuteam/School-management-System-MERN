import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


function Profile() {
    return (
        <div>
             <h3>Profile Photo</h3>
             <input accept="image/*" className="" id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
                </IconButton>
            </label>
        </div>
    )
}

export default Profile
