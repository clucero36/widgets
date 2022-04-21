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
            <AspectRatio maxW='750px' ratio={2}>
                <iframe src={videoSrc} title='video player' style={{ width: '100%', height: '100%'}}/>
            </AspectRatio>
            <div className='ui segment'>
                <h1 className='ui header'>{video.snippet.title}</h1>
                <p>{video.snippet.description}</p>
            </div>
        </>
    )
}

export default VideoDetail;