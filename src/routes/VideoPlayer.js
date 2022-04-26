import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import useVideos from '../hooks/useVideos';
import {
    Box,
    Heading
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
            <Heading mt='2rem'>VideoPlayer</Heading>
            <Box 
                display={['block', 'block', 'block', 'flex', 'flex']} 
                flexDir='row' 
                justifyContent='space-between' 
                mt='3rem'
                gap='1rem'
            >
                <Box w='100%'>
                    <VideoDetail video={selectedVideo} />
                </Box>
                <Box mt={['2rem', '2rem', '2rem', '0', '0']}>
                    <VideoList 
                        onVideoSelect={setSelectedVideo} 
                        videos={videos} 
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default VideoPlayer;