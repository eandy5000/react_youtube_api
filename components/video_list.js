import React from 'react'
import VideoListItem from './video_list_item'


const VideoList = (props) => {
    const list = props.videos.map((video) => {
        return <VideoListItem video={video} key={video.etag} />
    })

    return (
        <ul>
            {list}
        </ul>
    )

}

export default VideoList