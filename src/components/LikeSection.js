import React, {useState} from 'react'

function LikeSection({upvotes, downvotes}) {
    const [likes, setLikes] = useState(upvotes)
    const [unLikes, setUnLikes] = useState(downvotes)

    function liker() {
        setLikes(likes => likes + 1)
    }

    function unLiker() {
        setUnLikes(unLikes => unLikes - 1)
    }

    return (
        <div>
        <button onClick={liker}>{likes}👍</button>
        <button onClick={unLiker}>{unLikes}👎</button>
        </div>
    )
}

export default LikeSection