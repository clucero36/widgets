import React from 'react';
import {
    Select,
    Box,
  } from '@chakra-ui/react'

const Dropdown = ({ selections, label, onSelectedChange }) => {

    let renderedSelections = selections.map((selection) => {
        return (
                <option 
                    key={selection.value} 
                    value={selection.value} 
                    style={{ backgroundColor: '#1D4044' }} 
                >
                    {selection.label}
                </option>
        )
    })

    return (
        <Box boxShadow='2xl'>
            <label>{label}</label>
            <Select 
                variant='flushed' 
                focusBorderColor='teal.900' 
                onChange={(e) => onSelectedChange(e.target.value)}
                iconColor='teal.200'
            >
                {renderedSelections}
            </Select>
        </Box>
    )
}

export default Dropdown;