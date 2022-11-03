import React from 'react'

function VideoBlock({videoInfo}) {
    return (
        <iframe
        width="919"
        height="525"
        src={videoInfo.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoInfo.title}
        />
    )
    
}

export default VideoBlock;