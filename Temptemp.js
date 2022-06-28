import React from 'react'

import {
    ChakraProvider,
    theme,
    Cotainer,
    Flex,
    Spacer,
    useBreakpointValue
} from '@chakra-ui/react'

export default function Temptemp(){
    const width = useBreakpointValue({base : '100px', md : '200px'})
    return (
        <ChakraProvider theme={theme}>
            <Flex
                h={{base : 'auto', md : '100px'}}
                py={[0,10,20]}   
            >
                
            </Flex>
        </ChakraProvider>
    )
}