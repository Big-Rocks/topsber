import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,
    Spacer,
    Center,
    Box,
    Button
} from '@chakra-ui/react'
import logo_img from '../../imgs/logo.png'
import {ReactComponent as USER_IMG} from '../../imgs/user.svg'

export default function Navbar () {
    return (
        <ChakraProvider theme={theme}>
            <Flex
                w={{base : '100%', sm : '100%', md : '750px', xl : '1200px', '2xl' : "1400px"}}
                m="0 auto"
                flexDirection={{base : 'column', sm : 'column',md : 'row', '2xl' : 'row'}}
                alignItems="center"
            >
                <Center h="96px">
                    <img src={logo_img} alt="Logo Img" />
                </Center>
                <Box mt="30px" mx="20px" fontWeight="500" fontSize="22px">Система активных скидок</Box>
                <Box><Button bg="#91B93C" color="#fff" size="xs" mt="34px" fontWeight="500" fontSize="14px">Что это?</Button></Box>
                <Spacer />
                <Center h="96px">
                    <Button
                        bg="#91B93C"
                        color="#fff"
                        size="lg"
                        borderRadius="30px"
                        fontSize="14px"
                        px="40px"
                        fontWeight="500"
                    >
                        <USER_IMG fill="white" />  <Box display="inline-block" pl="10px">Вход / Регистрация</Box>
                    </Button>
                </Center>
            </Flex>
        </ChakraProvider>
    )
}