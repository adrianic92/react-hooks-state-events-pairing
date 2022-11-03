import React from 'react'

function ViewsAndUpDate({views, createdAt}) {
    return (
        <p>{views} Views | Uploaded {createdAt}</p>
    )
}

export default ViewsAndUpDate