import React from 'react';
import {
    Button,
    Box,
    Heading,
    VStack,
    useColorMode,
} from '@chakra-ui/react';



const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box>
            <VStack spacing='4rem'>
                <Box display='flex' m='4rem' justifyContent='space-around'>
                    <Heading color='teal.200'>Widgets</Heading>
                </Box>
                <Button onClick={toggleColorMode} w={12} h={8}>
                    {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </VStack>
        </Box>
    )
}

export default Home;