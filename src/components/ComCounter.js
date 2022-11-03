import React from 'react'

function ComCounter({comments}) {
    console.log(comments)
    
    return (
        <h3>{comments.length} Comments</h3>
    )
}

export default ComCounter