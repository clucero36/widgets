import React from 'react';
import './VideoItem.css';
import {
    Box,
  } from '@chakra-ui/react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Box 
            className='video-item item' onClick={() => onVideoSelect(video)}
            borderBottom='1px solid'
            alignItems='center'
            mb='.5rem'
            borderColor='pink'
        >
            <img 
                alt={video.snippet.title}
                style={{ marginRight: '10px'}} 
                src={video.snippet.thumbnails.medium.url}
            />
            <div>{video.snippet.title}</div>
        </Box>
    )
}

export default VideoItem;