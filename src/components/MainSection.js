import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,

} from '@chakra-ui/react'
import Category from './parent_category/Category'
import ChildCategory from './ChildCategory'

export default function MainSection() {
    return (
        <ChakraProvider theme={theme}>
            <Flex width={{base:'90%', md : '750px',xl : '1200px', '2xl' : '1400px'}}  m="0 auto" flexDirection="column" alignItems="center">
                <Category />
                <ChildCategory />
            </Flex>
        </ChakraProvider>
    )
}