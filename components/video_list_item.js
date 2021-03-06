import React from 'react'

const VideoListItem = (props) => {
    const video = props.video
    const imgURL = video.snippet.thumbnails.default.url

    return (
        <li onClick={() => {
            return props.onVideoSelect(video)
        }}>
            <div>
                <img src = {imgURL} />
                <h3>{video.snippet.title}</h3>
            </div>
        </li>
        )
}

export default VideoListItem