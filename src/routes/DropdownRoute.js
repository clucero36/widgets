import React, { useState } from 'react';
import { getColors } from '../data';
import Dropdown from '../components/Dropdown';
import {
    Box,
  } from '@chakra-ui/react'

const DropDownRoute = () => {

    const colors = getColors();
    const [color, setColor] = useState(colors[0].value)

    return (
        <Box m='2rem auto' w='80%'>
            <Dropdown 
                selections={colors}
                label='Select a Color'
                onSelectedChange={setColor}
            />
        </Box>
    )
}

export default DropDownRoute;