import { Button, Flex, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import {  FaSearch, FaFilm, FaRegSave } from 'react-icons/fa';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Auth from '../utils/auth';

const LandingPage = () => {

return (
    <Container>
        <p >A Landing Page Test</p>
        <Button colorScheme='blue' as={Link} to='/search'>Start Adding To Your Watchlist</Button>
    </Container>
);
//   const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
//   const array = [
//     {
//       id: 1,
//       text: ' Solving world problems through various web applications using efficient programs and tools',
//       icon: FaTools,
//     },
//     {
//       id: 2,
//       text: 'Through team work, we collaborate and deliver quality projects of high standards',
//       icon: FaHandshake,
//     },
//     {
//       id: 3,
//       text: 'Five star service with installament plan is readily available',
//       icon: FaStar,
//     },
//   ];
//   return (
//     <Flex
//       minH="70vh"
//       alignItems="center"
//       justifyContent="space-between"
//       w="full"
//       py="16"
//       px={isLargerThanMD ? '16' : '6'}
//       flexWrap="wrap"
//       flexDirection={isLargerThanMD ? 'row' : 'column'}
//     >
//       {array.map((arr) => (
//         <>
//           <Flex
//             height="300px"
//             bg="blackAlpha.200"
//             width={isLargerThanMD ? '32%' : 'full'}
//             shadow="md"
//             p="6"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="md"
//             flexDirection="column"
//             textAlign="center"
//             mb={isLargerThanMD ? '0' : '4'}
//             border="1px solid #C4DDFF"
//           >
//             <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
//             <Text>{arr.text}</Text>
//           </Flex>

    
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThanMD ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThanMD ? 'row' : 'column'}
    >

 
      {array.map((arr) => (
        <>
          <Flex
            height="600px"
            bg="#00000"
            width={isLargerThanMD ? '32%' : 'full'}
            shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? '0' : '4'}
            border="2px solid #000000"
          >
            <Icon as={arr.icon} boxSize={14} color="red.400" mb="5" />
            <img>{arr.img}</img>
            <Text>{arr.text}</Text>

          </Flex>

          <Spacer />
        </>
      ))}
    </Flex>
    </>
  );
};


export default LandingPage;