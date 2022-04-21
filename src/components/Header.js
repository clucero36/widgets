import React from 'react';
import { Link as routerLink} from 'react-router-dom';
import { Link, HStack, Box } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box p='2rem' m='0 auto' boxShadow='2xl' bgColor='gray.800'>
            <HStack justify='space-between' justifyContent='center' spacing='1rem'>
                <Link variant='primary' to='/' className='item' as={routerLink} >
                    Home
                </Link>
                
                <Link variant='primary' to='/search' className='item' as={routerLink}>
                    Search
                </Link>

                <Link variant='primary' to='/accordion' className='item' as={routerLink}>
                    Accordion
                </Link>

                <Link variant='primary' to='/translate' className='item' as={routerLink}>
                    Translate
                </Link>

                <Link variant='primary' to='/dropdown' className='item' as={routerLink}>
                    Dropdown
                </Link>

                <Link variant='primary' to='/videoplayer' className='item' as={routerLink}>
                    VideoPlayer
                </Link>
            </HStack>
        </Box>

    )
}

export default Header;