import React from 'react'

const VideoDetail = ({video: video}) => {
    const VideoId = video.id.videoId
    const url = `https://youtube.com/embed/${VideoId}`

    return (
        <div>
            <iframe src={url}></iframe>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </div>
    )
}
export default VideoDetail