import React from "react"

function ComsOnly({comments}) {
    const commentList = comments.map(com => {return (
        <div key={com.id}>
            <h4>{com.user}</h4>
            <p>{com.comment}</p>
        </div>

    )})
    console.log(commentList)
    
    return (
        <div>{commentList}</div>
    )
}

export default ComsOnly