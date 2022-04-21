import React from 'react';
import { getItems } from '../data';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

const AccordionComp = () => {

    const items = getItems();

    const renderedItems = items.map((item) => {
        return (
            <React.Fragment key={item.title} >
                <AccordionItem bgColor='gray.800'> 
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                {item.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb='4' bgColor='teal.900'>
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