import React from 'react';
import { Link as routerLink} from 'react-router-dom';
import { Link, HStack, Box, Spacer, Icon } from '@chakra-ui/react';
import { 
    IoIosSearch,
    IoIosHome, 
    IoIosMenu,
    IoIosCreate,
    IoIosBarcode,
    IoIosVideocam,
} from "react-icons/io";

const Header = () => {
    return (
        <Box p='2rem' m='0 auto' boxShadow='xl'>
            {/* Full Screen Display */}
            <HStack justify='space-between' justifyContent='center' w='90%' m='0 auto' 
                spacing={[null, '.5rem', '1rem', '1rem', '1rem']}  
                display={['none', 'flex', 'flex', 'flex', 'flex']}
            >
                <Link variant='primary' to='/' className='item' as={routerLink} >
                    Home
                </Link>

                <Spacer />

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

            {/* Mobile Display */}
            <HStack justify='space-between' justifyContent='center' w='90%' m='0 auto' 
                spacing='1rem'
                display={['flex', 'none', 'none', 'none', 'none']}
            >
                <Link variant='primary' to='/' className='item' as={routerLink} >
                    <Icon w={6} h={6} as={IoIosHome} _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/search' className='item' as={routerLink}>
                    <Icon w={6} h={6} as={IoIosSearch}  _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/accordion' className='item' as={routerLink}>
                    <Icon w={6} h={6} as={IoIosBarcode}  _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/translate' className='item' as={routerLink}>
                    <Icon w={6} h={6} as={IoIosCreate}  _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/dropdown' className='item' as={routerLink}>
                    <Icon w={6} h={6} as={IoIosMenu}  _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/videoplayer' className='item' as={routerLink}>
                    <Icon w={6} h={6} as={IoIosVideocam}  _hover={{ color: 'yellow.200'}} />
                </Link>
            </HStack>

        </Box>
    )
}

export default Header;