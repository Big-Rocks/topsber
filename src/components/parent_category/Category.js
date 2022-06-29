import React from 'react'
import {
    ChakraProvider,
    theme,
    Flex,
    Spacer,
    Box,
    useBoolean
} from '@chakra-ui/react'
import {ReactComponent as Parent01} from '../../imgs/gadget 1 (Traced).svg'
import {ReactComponent as Parent02} from '../../imgs/luggage (1) 1 (Traced).svg'
import {ReactComponent as Parent03} from '../../imgs/diamond (1) 1 (Traced).svg'
import {ReactComponent as Parent04} from '../../imgs/car 1 (Traced).svg'
import {ReactComponent as Parent05} from '../../imgs/business-and-trade 1 (Traced).svg'
import Pbg1 from '../../imgs/parent1_bg.svg'
import Pbg2 from '../../imgs/parent2_bg.svg'
import Pbg3 from '../../imgs/parent3_bg.svg'
import Pbg4 from '../../imgs/parent4_bg.svg'
import Pbg5 from '../../imgs/parent5_bg.svg'


const Item = (props) => {
    const [flag, setFlag] = useBoolean()
    return (
        <Flex flexDirection='column' alignItems="center" onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
           <Box
                w="158px"
                h="158px"
                style={{
                    backgroundImage:`url(${props.i_pbg})`,
                    backgroundRepeat: 'no-repeat',
                    width:'158px',
                    backgroundSize: '180px 180px',
                    backgroundPosition:'center',
                    boxShadow: 'inset 0 0 45px rgba(255,255,255,1)'
                }}
            >
                <Flex
                    w="114px"
                    h="114px"
                    m="22px"
                    borderRadius="70px"
                    backgroundImage={flag ? props.i_grad : 'linear-gradient(180deg, #fff 100%, #fff 100%)'}
                    justifyContent="center"
                >
                    <Box
                        alignSelf="center"
                    >
                        {flag ? props.i_img_1 : props.i_img_2}
                    </Box>
                </Flex>
            </Box>
            <Box
                fontWeight={flag ? "700" : "500"}
                fontSize="15px"
                mt="18px"
                color={flag ? props.i_color : "black"}
            >
                {props.i_title}
            </Box>
        </Flex>
    )
}

export default function Category() {
    return (
        <ChakraProvider theme={theme}>
            <Flex flexDirection="column" w={{base : '100%', sm : '100%', md : '750px', xl : '1200px','2xl' : "1400px"}}>
                <Flex
                    flexDirection={{base : 'column', sm : 'column', md : 'row'}}
                    m="38px 0px 0px 0px"
                    bg="#fff"
                    // boxShadow="0px 10px 80px rgba(13, 39, 80, 0.06), inset 0px 4px 50px rgba(51, 15, 66, 0.04)"
                    borderRadius="14px"
                    w="100%"
                    p={{base : '36px', md : '36px 80px',lg : '36px 80px',xl : '36px 100px', '2xl':"36px 145px"}}
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Item
                        i_title="Hi-Tech"
                        i_img_1={<Parent01 fill="#fff" />}
                        i_img_2={<Parent01 fill="url(#grad1)" />}
                        i_pbg={Pbg1}
                        i_grad="linear-gradient(180deg, #96C03C 0%, #4F7500 100%)"
                        i_color="#4F7500"
                    />
                    <Spacer />
                    <Item
                        i_title="Туризм"
                        i_img_1={<Parent02 fill="#fff" />}
                        i_img_2={<Parent02 fill="url(#grad2)" />}
                        i_pbg={Pbg2}
                        i_grad="linear-gradient(180deg, #FE9549 0%, #DB6900 100%)"
                        i_color="#DB6900"
                    />
                    <Spacer />
                    <Item
                        i_title="Лакшери"
                        i_img_1={<Parent03 fill="#fff" />}
                        i_img_2={<Parent03 fill="url(#grad3)" />}
                        i_pbg={Pbg3}
                        i_grad="linear-gradient(180deg, #71BBFF 0%, #2A69A4 100%)"
                        i_color="#2A69A4"
                    />
                    <Spacer display={{base : 'none', xl : 'block'}}/>
                    <Item
                        i_title="Авто-мото"
                        i_img_1={<Parent04 fill="#fff" />}
                        i_img_2={<Parent04 fill="url(#grad4)" />}
                        i_pbg={Pbg4}
                        i_grad="linear-gradient(180deg, #F53B68 0%, #BA183F 100%)"
                        i_color="#BA183F"
                    />
                    <Spacer maxW={{base : '50px', '2xl' : '100%'}}/>
                    <Item
                        i_title="Недвижимость"
                        i_img_1={<Parent05 fill="#fff" />}
                        i_img_2={<Parent05 fill="url(#grad5)" />}
                        i_pbg={Pbg5}
                        i_grad="linear-gradient(180deg, #1DDBB8 0%, #2E9683 100%)"
                        i_color="#2E9683"
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