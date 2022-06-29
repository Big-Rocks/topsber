import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

import Navbar from "./components/navbar/Navbar"
import MainSection from './components/MainSection'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box h={{base : "100%", sm : '100%', md : '100%',lg : "96px"}} bg="#fff" boxShadow="0px 30px 80px rgba(0, 0, 0, 0.07)">
        <Navbar />
      </Box>
      <Box bg="#E3DDF2">
        <MainSection />
      </Box>
    </ChakraProvider>
  );
}

export default App;
