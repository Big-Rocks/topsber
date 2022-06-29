import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,
    Spacer,
    Box,
    Button,
    Link
} from '@chakra-ui/react'
import indi_left from '../../imgs/indi_carosel_left_arrow.svg'
import indi_right from '../../imgs/indi_carosel_right_arrow.svg'
import prod_photo from '../../imgs/Frame 5329922.png'
import carousel_dot from '../../imgs/indi_carousel_dot.svg'
import carousel_dot_active from '../../imgs/indi_carousel_dot_active.svg'
import manufacturer_logo from '../../imgs/Sumsung_logo.svg'

function CarouselDot (){
    return (
        <Flex alignItems="center" alignSelf="center">
            <Box m="14px"><img src={carousel_dot} alt='1'  /></Box>
            <Box m="14px"><img src={carousel_dot_active} alt='2'  /></Box>
            <Box m="14px"><img src={carousel_dot} alt='3'  /></Box>
        </Flex>
    )
}

function TimeDigit(props){
    return (
        <Flex
            w={{base : "35px", sm : "45px", lg : "52px"}}
            h={{base : "35px", sm : "45px", lg : "52px"}}
            bgColor="white"
            boxShadow="6px 6px 16px rgba(13, 39, 80, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.8)"
            borderRadius="8px"
            justifyContent="center"
            alignItems="center"
            m="4px"
        >
            <Box
                fontWeight="400"
                fontSize={{sm : "18px",lg : "22px"}}
                color="#484848"
                // alignSelf="center"
            >
                {props.digit}
            </Box>
        </Flex>
    )
}

function DigitBundle(props){
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
        >
            <Flex flex="row">
                <TimeDigit digit={props.digit_1} />
                <TimeDigit digit={props.digit_2} />
            </Flex>
            <Box
                fontWeight="300"
                fontSize="14px"
                color="#484848"
                m="8px"
            >
                {props.digit_label}
            </Box>
        </Flex>
    )
}

function IndividualCarosel(){
    return (
        <Flex
            w={{base : '100%', sm : '100%', md : '100%', xl : '668px','2xl' : "668px"}}
            p={{sm : "10px 50px", md : "15px 45px" , lg : "30px 90px"}}
            flexDirection="column"
        >
                <Flex flexDirection="row" alignItems="center" justifyContent="center" w="100%">
                    <button color="rgba(0,0,0,0)" border="rgba(0,0,0,0)" bgColor="rgba(0,0,0,0)"><img src={indi_left} alt="left" /></button>
                    <Spacer />
                    <img src={prod_photo} alt="product" />
                    <Spacer />
                    <button  color="rgba(0,0,0,0)" border="rgba(0,0,0,0)" bgColor="rgba(0,0,0,0)"><img src={indi_right} alt="right" /></button>
                </Flex>
                <CarouselDot />
                <Box fontSize="14px" fontWeight="300" ml={{base : "10px", md: "0px", lg : "56px"}}  >
                    До старта акции осталось
                    <Flex mt="14px" justifyContent="center" w="100%">
                        <DigitBundle digit_1="5" digit_2="3" digit_label="Дней" />
                        <Box m={{sm : "4px" ,md : "8px"}} fontWeight="400" fontSize="26px" >:</Box>
                        <DigitBundle digit_1="8" digit_2="33" digit_label="Часов" />
                        <Box m={{sm : "4px" ,md : "8px"}} fontWeight="400" fontSize="26px" > :</Box>
                        <DigitBundle digit_1="21" digit_2="59" digit_label="Минут" />
                    </Flex>
                </Box>
        </Flex>
    )
}

function CarouselDesc(){
    return (
        <Flex
            flexDirection="column"
            mt="65px"
            mb="65px"
            mr={{base : '50px', sm : '50px', md : '80px', xl : "106px"}}
            ml={{base : "50px",md : "50px", lg : "50px", xl :"0px"}}
        >
            <Box
                fontSize="36px"
                fontWeight="400"
                color="#1f2d3d"
            >Samsung Galaxy Tab S</Box>
            <Box
                fontSize="14px"
                fontWeight="300"
                color="rgba(72,72,72,.8)"
                m="28px auto"
            >
                Цельнометаллический корпус с минимальным выступом блока основной камеры выглядит просто и изысканно, а благодаря тонкому форм-фактору держать планшет очень удобно. Потрясающая цветопередача на большом экране планшета позволяет увидеть мельчайшие детали
            </Box>
            <Flex
                flexDirection={{base : "column", sm: "row"}}
                alignItems="flex-end"
            >
                <Flex
                    flexDirection="column"
                >
                    <Box
                        fontSize="40px"
                        fontWeight="500"
                        color="#330f42"
                    >
                        8 500 ₽
                    </Box>
                    <Box
                        fontSize="14px"
                        fontWeight="400"
                        color="#484848"
                    >Возможная цена</Box>
                </Flex>
                <Flex
                    flexDirection="column"
                    ml="29px"
                >
                    <Box
                        fontSize="20px"
                        fontWeight="400"
                        color="rgba(72,72,72,.8)"
                    >
                        23 000 ₽ 
                    </Box>
                    <Box
                        fontSize="16px"
                        fontWeight="300"
                        color="rgba(72,72,72,.8)"
                    >Стартовая цена</Box>
                </Flex>
            </Flex>
            {/* ///////////////////////// */}
            <Flex
                mt="58px"
                alignItems="center"
                flexDirection={{base : "column", sm : "column", md : "column", lg : "column", xl : "column", '2xl':"row"}}
            >
                <Button color="#fff" fontSize="14px" fontWeight="500" bgColor="#91b93c" borderRadius="30px" h="52px" w={{sm : "150px", md : "300px"}}>Принять участие</Button>
                <Flex ml={{sm : "0px", md : "0px", lg : "0px", '2xl' : "32px"}} alignItems="center"
                flexDirection={{base : "column", sm : "column", md : "column", lg : "column", xl : "column", '2xl':"row"}}
                >
                    <img src={manufacturer_logo} alt='logo' />
                    <Box ml="10px" textAlign="center">
                        <Link color='#91B93C' href='#'>
                            Перейти
                        </Link> в интернет-магазин
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default function Promotion(){
    return (
        <ChakraProvider theme={theme}>
            <Flex
                mt="36px"
                borderRadius="14px"
                bgColor="white"
                alignSelf="center"
                flexDirection={{base : "column",sm : "column",md : "column", xl : 'row'}}
                w={{base:'100%', sm : "100%", md : '750px',xl : '1200px', '2xl' : '1400px'}}
            >
                <IndividualCarosel />
                <CarouselDesc />
            </Flex>
        </ChakraProvider>
    )
}