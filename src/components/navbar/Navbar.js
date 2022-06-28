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

export default function Navbar () {
    return (
        <ChakraProvider theme={theme}>
            <Flex w="1400px" m="0 auto">
                <Center h="96px">
                    <img src={logo_img} alt="Logo Img" />
                </Center>
                <Box mt="44px" mx="20px">Система активных скидок</Box>
                <Box><Button bg="#91B93C" color="#fff" size="xs" mt="44px">Что это?</Button></Box>
                <Spacer />
                <Center h="96px">
                    <Button bg="#91B93C" color="#fff" size="lg" borderRadius="30px" fontSize="14px" px="40px">Вход / Регистрация</Button>
                </Center>
            </Flex>
        </ChakraProvider>
    )
}