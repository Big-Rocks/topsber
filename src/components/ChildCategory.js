import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,
    Spacer,
    Box
} from '@chakra-ui/react'

import Promotion from './promotion/Promotion'
import ProductCarosel from './product_carosel/ProductCarosel'

export default function ChildCategory(){
    return (
        <ChakraProvider theme="theme">
            <Flex flexDirection="column">
                <Box m="30 auto" fontWeight="400" fontSize="20px">
                    Актуальные акции раздела Hi-TECH
                </Box>
            </Flex>
        </ChakraProvider>
    )
}