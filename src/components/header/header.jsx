import { Box, Center, Divider, Flex, Heading, Icon, Input, Spacer, Stack } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import "./header.css"
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { GoThreeBars } from "react-icons/go";
import { Drawer } from '@chakra-ui/react';

import { MdOutlineShoppingBag } from "react-icons/md";

import { IoMdSearch } from "react-icons/io";
import Drawerleft from '../drawer/drawer';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { Fetchwishlistdata } from '../redux/wishlist/action';
import { Logoutfun } from '../redux/login/action';




function Header()
{


    let Wishlistdata = useSelector(state=>state.Wishlistreducer.wishlistdata);
    let IsAuth = useSelector(state=>state.Loginreducer.isAuth);
    let userid = useSelector(state=>state.Loginreducer.user_id);
    
    
    console.log(Wishlistdata,"wishlistdat");
    let dispatch = useDispatch();
    console.log(IsAuth)


    useEffect(()=>{
 


        if(IsAuth)
        {
            dispatch(Fetchwishlistdata(userid))
        }
        
       
            
      
            
      

        
    },[IsAuth])


   
    return (
    <Box h={"auto"}>
    <div className='Header_total_part'>

        <Box h="auto" >
            <Flex bg="hsl(0,0%,90%)" display={{base:"none",lg:"flex"}} h="40px" alignItems={"center"} className='header_flex_1stpart'   p="0px 100px" >
                <Box >Offers</Box>
                <Box>Fanbook</Box>
                <Box>Download App</Box>
                <Box>TriBe Membership</Box>
                <Spacer/>
               
                <Box>Contact Us</Box>
                <Box>Track Order</Box>
            </Flex>
            <Flex  borderBottom={"1px solid gray"} bg={{base:"hsl(49,98%,60%)",lg:"none"}} h="60px" alignItems={"center"} className="header_flex_2ndpart" justifyContent={"space-between"}  p={{base:"0px 10px",lg:"0px 100px"}}  >
                <Box  display={{base:"block",lg:"none"}} >
                    
               
                    <Drawerleft app={<Icon fontSize={"x-large"} as={GoThreeBars}/>} />
                </Box>
               
                <Box  fontWeight={"bold"}   ><Link to="/">Bewakoof</Link></Box>
                <Box   display={{base:"none",lg:"block"}} >MEN</Box>
                <Box display={{base:"none",lg:"block"}}>WOMEN</Box>
                <Box display={{base:"none",lg:"block"}}>MOBILE COVERS</Box>
                <Spacer display={{base:"none",lg:"block"}} />
                <Flex   p="0px 10px" rounded={"5"} alignItems={"center"}  bg={{base:"none",lg:"hsl(0,0%,90%)"}} h="40px" >
                    <Icon  fontWeight={"light"} color={"black"} w={25} h={25} as={IoMdSearch}/>
                    <Input  display={{base:"none",lg:"block"}} bg="hsl(0,0%,90%)" border={"none"}  outline="none" w="300px"   placeholder='Search by product,Category or collection' /></Flex>
                   
      
  

                <Box display={{base:"none",lg:"block"}} >{IsAuth?<button  onClick={()=>{dispatch(Logoutfun())}}>Logout</button>:<Link to={"/login"}>Login</Link>}</Box>
                <Icon mr={"20px"} w={25} h={25} as={FaRegHeart} />
                <Link to="/cartpage"> <Box pos={"relative"}><Box rounded={10} bg={{base:"red",lg:"hsl(49,98%,60%)"}} w="20px" h="auto" color={{base:"white",lg:"black"}} pos={"absolute"} right="-5px" top="-5px">{IsAuth&&Wishlistdata.length}</Box> <Icon  w={25} h={25} as={MdOutlineShoppingBag} /></Box> </Link>
              
               
               
            </Flex>
             <Box display={{base:"none",lg:"block"}}>
            <Center boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} h="80px">

                <Box m="0px 20px">MEN</Box>
                <Box m="0px 20px">WOMEN</Box>
                <Box m="0px 20px">ACCESSORIES</Box>

            </Center>
            </Box>

        </Box>
    </div></Box>)
}

export default Header