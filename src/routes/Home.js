import React from 'react';
import {
    Box,
    Heading,
    Icon,
    HStack,
    Link,
} from '@chakra-ui/react';
import { 
    IoIosSearch,
    IoIosHome, 
    IoIosMenu,
    IoIosCreate,
    IoIosBarcode,
    IoIosVideocam,
} from "react-icons/io";
import { Link as routerLink} from 'react-router-dom';


const Home = () => {

    return (
        <Box>
            <Box display='flex' m='6rem' justifyContent='space-around'>
                <Heading color='teal.200'>Widgets</Heading>
            </Box>
            <HStack justify='space-between' justifyContent='center' spacing='1rem'>
                <Link variant='primary' to='/' className='item' as={routerLink} >
                    <Icon w={8} h={8} as={IoIosHome} _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/search' className='item' as={routerLink}>
                    <Icon w={8} h={8} as={IoIosSearch}  _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/accordion' className='item' as={routerLink}>
                    <Icon w={8} h={8} as={IoIosBarcode}  _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/translate' className='item' as={routerLink}>
                    <Icon w={8} h={8} as={IoIosCreate}  _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/dropdown' className='item' as={routerLink}>
                    <Icon w={8} h={8} as={IoIosMenu}  _hover={{ color: 'yellow.200'}} />
                </Link>
                <Link variant='primary' to='/videoplayer' className='item' as={routerLink}>
                    <Icon w={8} h={8} as={IoIosVideocam}  _hover={{ color: 'yellow.200'}} />
                </Link>
            </HStack>
        </Box>
    )
}

export default Home;