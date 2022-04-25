import React, { useState } from 'react';
import {
    Box,
    Heading,
    Input
  } from '@chakra-ui/react'

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term)
    }

    return (
        <Box>
            <Box onSubmit={onSubmit} >
                <Heading size='md'>Search</Heading>
                <Input 
                    size='sm'
                    type='text'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </Box>
        </Box>

    )
}

export default SearchBar;