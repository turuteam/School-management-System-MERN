import React from 'react';
import GuadianCard from './GuadianCard'

function GuadanceTab({user}) {
    console.log(user)
    return (
        <div>
            {user?.length > 0 ? user?.map(e => {
                return(
                    <GuadianCard  guadian={e}  key={e._id} noEdit={true}/>
                )
            }) : <div>No guadian info</div>}
        </div>
    )
}

export default GuadanceTab
