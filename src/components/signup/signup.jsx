import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import {Image,Text,Input, Checkbox, Button} from "@chakra-ui/react";
import {useDispatch,useSelector} from "react-redux";
import { Logoutmention, POSTSIGNUP } from "../redux/signup/action";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../toast/toast";
import { Logoutfun, newuserremove } from "../redux/login/action";

function Signup()
{

   
   let history = useLocation();
   console.log(history,"history")

  
   
    let nav = useNavigate();
    let Data = useSelector(state =>state.Signupreducer.success);
    console.log(Data,"DATA")

         useEffect(()=>{

            dispatch(newuserremove())
            // dispatch(Logoutmention())

            if(Data)
         {
            console.log(history)
            console.log(history?.state?.pathname,"Data");
            
            nav(history?.state?.pathname?history.state.pathname:"/",{replace:true})

         }
         },[Data])


    let dispatch = useDispatch(); 


     let [signinobj,setsigninobj]  =useState({});

     const Signuphandler =(res)=>{

        let {name,value} = res;

        setsigninobj({...signinobj,[name]:value})


     }

     const PostSignup =()=>{
        
        dispatch(POSTSIGNUP({...signinobj}))
     }
     

    return (<Box bg={"hsl(49,100%,92%)"} p={{base:0,lg:"30px"}}>
          
          <Flex  w={{base:"100%",lg:"70%"}}m="auto" flexDirection={{base:"column",lg:"row"}}>
            <Center flex={1} >
            <Image w={{base:"90%",lg:"90%"}} h={{base:"300px",lg:"100%"}}    src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"/>
            </Center>
            <Center  w={{base:"100%",lg:"500px"}} bg={"white"} p="30px"  flexDirection={"column"} >
                <Box w={{base:"100%",lg:"70%"}} m="auto" textAlign={"start"}  >

                <Heading m="30px 0px ">Sign Up</Heading>
            <Text m="30px 0px ">Hi new buddy, let's get you started with the bewakoofi!</Text>

            <Box  m="30px 0px " >

            <Input m="10px 0px " onChange={(e)=>{Signuphandler(e.target)}} name="full_name" type={"text"} variant='flushed' borderColor="gray" placeholder='Name' />
            <Input m="10px 0px " onChange={(e)=>{Signuphandler(e.target)}} name="mobile_number"  type={"number"}   variant='flushed' borderColor="gray" placeholder='Mobile' />
            <Input m="10px 0px " onChange={(e)=>{Signuphandler(e.target)}} name="email"  type={"email"}   variant='flushed' borderColor="gray" placeholder='Email id' />
            <Input m="10px 0px " onChange={(e)=>{Signuphandler(e.target)}} name="password"   type={"password"}  variant='flushed' borderColor="gray" placeholder='Password' />
             
            </Box>

            <Flex gap={2} m="20px 0px"> 
                <Checkbox></Checkbox>
                <Text>I want to receive order updates on Whatsapp</Text>
            </Flex>

            <Button onClick={PostSignup} colorScheme={"none"} bg="gray" color={"white"} w="100%" h="60px" m="10px auto">PROCEED</Button>

            </Box>

            </Center>


          </Flex>
         
    </Box>)
}

export default Signup