import React from 'react'

function CommentsHider({hider, hide}) {

    return (
        <p>
            <button onClick={hider}>{hide ? "Hide Comments" : "Show Comments"}</button>
        </p>
    )
}

export default CommentsHider 