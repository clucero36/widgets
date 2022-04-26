import React from 'react';
import {
    AspectRatio,
  } from '@chakra-ui/react';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Loading....</div>
    }
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
        <>
            <AspectRatio ratio={2}>
                <iframe minW='740px' src={videoSrc} title='video player'/>
            </AspectRatio>
            <div className='ui segment'>
                <h1 className='ui header'>{video.snippet.title}</h1>
                <p>{video.snippet.description}</p>
            </div>
        </>
    )
}

export default VideoDetail;