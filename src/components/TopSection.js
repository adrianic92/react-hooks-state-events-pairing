import React from 'react'
import ViewsAndUpDate from './ViewsAndUpDate'
import LikeSection from './LikeSection'
import CommentsHider from './CommentsHider'

function TopSection({videoInfo, hider, hide}) {
    console.log(videoInfo)
    return (
        <div>
            <h2>{videoInfo.title}</h2>
            <ViewsAndUpDate views={videoInfo.views} createdAt={videoInfo.createdAt} />
            <LikeSection upvotes={videoInfo.upvotes} downvotes={videoInfo.downvotes}/>
            <CommentsHider hider={hider} hide={hide}/>
        </div>
    )
}

export default TopSection;