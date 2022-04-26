import React from 'react';
import { getItems } from '../data';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
  } from '@chakra-ui/react'

const AccordionComp = () => {

    const items = getItems();

    const renderedItems = items.map((item) => {
        return (
            <React.Fragment key={item.title} >
                <AccordionItem > 
                    <Heading>
                        <AccordionButton focusBorderColor='teal.200'>
                            <Box flex='1' textAlign='left' >
                                {item.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb='4'>
                        {item.content}
                    </AccordionPanel>
                </AccordionItem>
            </React.Fragment>
        )
    })

    return (
        <Accordion allowToggle w='80%' m='2rem auto' >
            {renderedItems}
        </Accordion>
    )
}

export default AccordionComp;