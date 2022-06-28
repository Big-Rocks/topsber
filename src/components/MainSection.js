import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,
    Spacer

} from '@chakra-ui/react'
import Category from './parent_category/Category'

export default function MainSection() {
    return (
        <ChakraProvider theme={theme}>
            <Flex width={{base:'90%', md : '1400px'}}>
                <Category />
            </Flex>
        </ChakraProvider>
    )
}