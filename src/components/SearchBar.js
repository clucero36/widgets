import React, { useState } from 'react';
import {
    Box,
    Input,
    Icon,
    InputRightElement,
    InputGroup,
    FormLabel,
} from '@chakra-ui/react'
import { 
    IoIosSearch,
} from "react-icons/io";



const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term)
    }

    return (
        <Box>
            <form onSubmit={onSubmit}>
                <FormLabel size='md'>Search</FormLabel>
                <InputGroup>
                    <Input 
                        focusBorderColor='teal.200'
                        size='sm'
                        type='text'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <InputRightElement onClick={onSubmit} children={<Icon as={IoIosSearch} />} />
                </InputGroup>
            </form>
        </Box>
    )
}

export default SearchBar;