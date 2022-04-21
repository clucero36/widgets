import React, { useState, useEffect } from 'react';
import wiki from '../apis/wiki';
import {
    Input,
    Text,
    Box,
    Flex,
    Button,
    Heading,
  } from '@chakra-ui/react';

const Search = () => {

    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // throttles api requests
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        // used so we dont update state on an unmounted component
        let isMounted = true;

        const search = async () => {
            const { data } = await wiki.get('' ,{
                params: {
                    srsearch: debouncedTerm,
                },
            });
            if (isMounted) {
                setResults(data.query.search);
            }
        };

        search();

        //cleanup function sets isMounted to false
        return () => {
            isMounted = false;
        }
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <Box key={result.pageid} borderBottom='1px dotted' borderColor='teal' p='.5rem 0'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Box m='.25rem'>
                        <Heading size='md'>{result.title}</Heading>
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    </Box>
                    <Button>
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className='ui button'>Go</a>
                    </Button>
                </Flex>
            </Box>
        )
    })

    return (
        <Box w='80%' m='2rem auto'>
            <Box>
                <Text pb='.5rem'>Wiki Search</Text>
                <Input  
                    focusBorderColor='teal.200'
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
            </Box>
            <Box mt='2rem'>
                {renderedResults}
            </Box>
        </Box>
    );
}

export default Search;