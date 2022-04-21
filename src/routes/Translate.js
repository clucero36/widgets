import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Convert from '../components/Convert';
import { getLangs } from '../data';
import {
    Box,
    Text,
    Input,
    Heading,
  } from '@chakra-ui/react';

const Translate = () => {
    const langs = getLangs();
    const [language, setLanguage] = useState(langs[0].value);
    const [text, setText] = useState('');

    return (
        <Box w='80%' m='2rem auto' >
            <Box boxShadow='2xl' m='2rem 0'>
                <Text>Enter Text</Text>
                <Input 
                    focusBorderColor='teal.200'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </Box>
            <Dropdown 
                label='Select a Language'
                selections={langs}
                onSelectedChange={setLanguage}
            />
            <Heading mt='1rem' size='lg'>Output</Heading>
            <Convert language={language} text={text}/>
        </Box>
    )
}

export default Translate;