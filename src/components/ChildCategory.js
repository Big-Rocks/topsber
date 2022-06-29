import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,
    Box
} from '@chakra-ui/react'

import Promotion from './promotion/Promotion'
import ProductCarosel from './product_carosel/ProductCarosel'

export default function ChildCategory(){
    return (
        <ChakraProvider theme={theme}>
            <Flex flexDirection="column" mt="30" alignItems="center">
                <Box fontWeight="400" fontSize="20px">
                    Актуальные акции раздела Hi-TECH
                </Box>
                <Promotion />
                <ProductCarosel />
            </Flex>
        </ChakraProvider>
    )
}