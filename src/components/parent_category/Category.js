import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,
    Spacer
} from '@chakra-ui/react'
import parent_01 from '../../imgs/gadget 1 (Traced).svg'
import parent_02 from '../../imgs/luggage (1) 1 (Traced).svg'
import parent_03 from '../../imgs/diamond (1) 1 (Traced).svg'
import parent_04 from '../../imgs/car 1 (Traced).svg'
import parent_05 from '../../imgs/business-and-trade 1 (Traced).svg'


const Item = (props) => {
    return (
        <Flex flexDirection='row' alignItems="center">
            
        </Flex>
    )
}

export default function Category() {
    return (
        <ChakraProvider theme={theme}>
            <Flex
                m="38px 0px 0px 0px"
                bg="#fff"
                boxShadow="0px 10px 80px rgba(13, 39, 80, 0.06), inset 0px 4px 50px rgba(51, 15, 66, 0.04)"
                borderRadius="14px"
            >
                <Item i_title="Hi-Tech" i_img={parent_01} />
                <Spacer />
                <Item i_title="Туризм" i_img={parent_02} />
                <Spacer />
                <Item i_title="Лакшери" i_img={parent_03} />
                <Spacer />
                <Item i_title="Авто-мото" i_img={parent_04} />
                <Spacer />
                <Item i_title="Недвижимость" i_img={parent_05} />
            </Flex>
        </ChakraProvider>
    )
}