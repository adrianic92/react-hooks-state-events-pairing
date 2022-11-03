import React from "react"
import ComCounter from "./ComCounter"
import ComsOnly from "./ComsOnly"

function CommentsSection({comments}) {
    return (
        <div>
            <ComCounter comments={comments}/>
            <ComsOnly comments={comments}/>
        </div>
    )
}

export default CommentsSection