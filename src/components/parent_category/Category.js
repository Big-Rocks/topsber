import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,
    Spacer,
    Box
} from '@chakra-ui/react'
import {ReactComponent as Parent01} from '../../imgs/gadget 1 (Traced).svg'
import {ReactComponent as Parent02} from '../../imgs/luggage (1) 1 (Traced).svg'
import {ReactComponent as Parent03} from '../../imgs/diamond (1) 1 (Traced).svg'
import {ReactComponent as Parent04} from '../../imgs/car 1 (Traced).svg'
import {ReactComponent as Parent05} from '../../imgs/business-and-trade 1 (Traced).svg'


const Item = (props) => {
    return (
        <Flex flexDirection='column' alignItems="center">
           <Box
                w="140px"
                h="140px"
                border="3.55px solid"
                borderColor={props.i_color}
                borderRadius="70px"
                boxShadow={`0px 0px 0px 9px ${props.i_shadow}`}
                // border: 4.30909px solid #91B93C;
            >
                <Flex
                    w="114px"
                    h="114px"
                    m="9.5px"
                    borderRadius="70px"
                    backgroundImage={props.i_grad}
                    justifyContent="center"
                    boxShadow={`0px 0px 0px 9px ${props.i_shadow}`}
                >
                    <Box
                        alignSelf="center"
                    >
                        {props.i_img}
                    </Box>
                </Flex>
            </Box>
            <Box
                fontWeight="500"
                fontSize="15px"
                mt="18px"
            >
                {props.i_title}
            </Box>
        </Flex>
    )
}

export default function Category() {
    return (
        <ChakraProvider theme={theme}>
            <Flex flexDirection="column" w="100%">
                <Flex
                    m="38px 0px 0px 0px"
                    bg="#fff"
                    boxShadow="0px 10px 80px rgba(13, 39, 80, 0.06), inset 0px 4px 50px rgba(51, 15, 66, 0.04)"
                    borderRadius="14px"
                    w="100%"
                    p="36px 145px"
                >
                    <Item
                        i_title="Hi-Tech"
                        i_img={<Parent01 fill="#fff" />}
                        i_grad="linear-gradient(180deg, #96C03C 0%, #4F7500 100%)"
                        i_color="#4F7500"
                        i_shadow="rgba(60, 185, 162, 0.1)"    
                    />
                    <Spacer />
                    <Item
                        i_title="Туризм"
                        i_img={<Parent02 fill="#fff" />}
                        i_grad="linear-gradient(180deg, #DB6900 0%, #FE9549 100%)"
                        i_color="#FE9549"
                        i_shadow="rgba(254, 127, 73, 0.1)"
                    />
                    <Spacer />
                    <Item
                        i_title="Лакшери"
                        i_img={<Parent03 fill="#fff" />}
                        i_grad="linear-gradient(180deg, #71BBFF 0%, #2A69A4 100%)"
                        i_color="#2A69A4"
                        i_shadow="rgba(42, 105, 164, 0.1)"
                    />
                    <Spacer />
                    <Item
                        i_title="Авто-мото"
                        i_img={<Parent04 fill="#fff" />}
                        i_grad="linear-gradient(180deg, #F53B68 0%, #BA183F 100%)"
                        i_color="#BA183F"
                        i_shadow="rgba(186, 24, 63, 0.1)"    
                    />
                    <Spacer />
                    <Item
                        i_title="Недвижимость"
                        i_img={<Parent05 fill="#fff" />}
                        i_grad="linear-gradient(180deg, #1DDBB8 0%, #2E9683 100%)"
                        i_color="#2E9683"
                        i_shadow="rgb(46, 150, 131, 0.1)"    
                    />
                </Flex>
                <Flex
                    m="0 auto"
                    h="14px"
                    w="60px"
                    bgColor="#fff"
                    clipPath="polygon(50% 100%, 0 0, 100% 0)"
                >

                </Flex>
            </Flex>
        </ChakraProvider>
    )
}