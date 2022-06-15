import { Box, Center, Divider, Flex, Icon, Input, Spacer, Stack } from '@chakra-ui/react';
import "./header.css"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

import { IoMdSearch } from "react-icons/io";



function Header()
{
    return (<div className='Header_total_part'>

        <Box h="auto" >
            <Flex bg="hsl(0,0%,90%)" display={{base:"none",lg:"flex"}} h="40px" alignItems={"center"} className='header_flex_1stpart'  p="0px 100px" >
                <Box >Offers</Box>
                <Box>Fanbook</Box>
                <Box>Download App</Box>
                <Box>TriBe Membership</Box>
                <Spacer/>
               
                <Box>Contact Us</Box>
                <Box>Track Order</Box>
            </Flex>
            <Flex  borderBottom={"1px solid gray"} bg={{base:"hsl(49,98%,60%)",lg:"none"}} h="60px" alignItems={"center"} className='header_flex_2ndpart'  p={{base:"0px",lg:"0px 100px"}}  >
                <Box  >Bewakoof</Box>
                <Box display={{base:"none",lg:"block"}} >MEN</Box>
                <Box display={{base:"none",lg:"block"}}>WOMEN</Box>
                <Box display={{base:"none",lg:"block"}}>MOBILE COVERS</Box>
                <Spacer display={{base:"none",lg:"block"}} />
                <Flex p="0px 10px" rounded={"5"} alignItems={"center"}  bg={{base:"none",lg:"hsl(0,0%,90%)"}} h="40px" >
                    <Icon  fontWeight={"light"} color={"black"} w={25} h={25} as={IoMdSearch}/>
                    <Input  display={{base:"none",lg:"block"}} bg="hsl(0,0%,90%)" border={"none"}  outline="none" w="300px"   placeholder='Search by product,Category or collection' /></Flex>
                   
      
  

                <Box display={{base:"none",lg:"block"}} >Login</Box>
                <Icon mr={"20px"} w={25} h={25} as={FaRegHeart} />
                <Icon  w={25} h={25} as={MdOutlineShoppingBag} />
               
               
            </Flex>
            
            <Center boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} h="80px">

                <Box m="0px 20px">MEN</Box>
                <Box m="0px 20px">WOMEN</Box>
                <Box m="0px 20px">ACCESSORIES</Box>

            </Center>

        </Box>
    </div>)
}

export default Header