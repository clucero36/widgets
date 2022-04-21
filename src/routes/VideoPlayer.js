import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import useVideos from '../hooks/useVideos';
import {
    Box,
  } from '@chakra-ui/react';

const VideoPlayer = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('demuja');

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <Box w='80%' m='2rem auto'>
            <SearchBar onFormSubmit={search} />
            <Box display='flex' flexDir='row' justifyContent='space-between' mt='4rem'>
                <div >
                    <VideoDetail video={selectedVideo} />
                </div>
                <div>
                    <VideoList 
                        onVideoSelect={setSelectedVideo} 
                        videos={videos} 
                    />
                </div>
            </Box>
        </Box>
    )
}

export default VideoPlayer;