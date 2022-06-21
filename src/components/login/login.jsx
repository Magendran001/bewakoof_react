import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import { POSTLOGIN } from "../redux/login/action";
import {Button, Image,Input,Text,Divider} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Toast from "../toast/toast";


function Login()
{


    let [redirect,setredirect] = useState(false);
    console.log(redirect,"redired")

     useEffect(()=>{
 
           
        window.scrollTo(0, 100)
       

       },[])

         
    let history = useLocation();
    console.log("loginhistory",history.state);
    console.log("yes")
   
    let toastauth = useSelector(state=>state.toastreducer.active);

    
    let nav = useNavigate();

    let dispatch = useDispatch();
    let newuser = useSelector(state=>state.Loginreducer.newuser);

    console.log(newuser,"newuser")

    let selector = useSelector(state=>state.Loginreducer.isAuth);
    
    console.log(selector,"selector")
    

    useEffect(()=>{

         if(selector)
         {
            setredirect(true)
         }
       
       

    },[selector])   

   
      
    let [loginobj,setloginobj] = useState({});


    const Loginhandler =(e)=>{
           
        let {name,value} = e;

        setloginobj({...loginobj,[name]:value })
    }
  const Postloginhandler =()=>{

    dispatch(POSTLOGIN({...loginobj},nav))

  }

  if(redirect)
  {
        let path = history?.state?.pathname?history.state.pathname:"/";
        console.log(path,"path");

   return  <Navigate to={path} replace={true} state={{pathname:"maggi"}}/>
      // nav(history?.state?.pathname?history.state.pathname:"/",{replace:true})
  }
 if(newuser)
 {
  return  <Navigate to={"/signup"} replace={true} state={history.state}/>
 }



    return (<Box><Flex   direction={{base:"column",lg:"row"}}>
               <Box   position={"relative"}  h={"700px"}  flex={1} >
                 <Heading pos={"absolute"} top="20px" left="20px" bg={"rgb(255,248,220)"}>Welcome to the world of Bewakoof!</Heading>
               <Image h="100%" w="100%" bg={"rgb(255,248,220)"} src="https://images.bewakoof.com/web/group-19-1617704502.png"/>
               </Box>
               <Center  flex={1}>

                 <Box  p={{base:"5px",lg:"20px"}} w={{base:"100%",lg:"600px"}}  boxSizing="border-box">
                     <Heading m="30px">Login/Signup</Heading>
                     <Text color={"gray"} fontSize="20px" mb="50px">for Latest trends, exciting offers and everything Bewakoof!</Text>
                             <Box w="90%" m="auto">
                        <Flex  m="5px auto" rounded={5} p="0px 8px" gap="2" border={"1px solid gray"} w="95%" h="60px" alignItems={"center"}>
                            <Flex  p="4px 10px"  bg={"hsl(0,0%,96%)"}> <Image w="25px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlJeXMZx_Qk9XD43shNib1vJr9yHOg9_Nxg&usqp=CAU"/> <Text color={"gray"}>  +91</Text></Flex>
                            
                            <Input  isRequired  name="mobile_number" type={"number"} onChange={(e)=>{Loginhandler(e.target)}} outline={"none"}  placeholder="Enter Mobile Number"/>
                        </Flex>
                        <Flex m="5px auto" rounded={5}  p="0px 10px 0px 80px" gap="2" border={"1px solid gray"} w="95%" h="60px" alignItems={"center"}>
                          
                            
                            <Input  isRequired name="password" onChange={(e)=>{Loginhandler(e.target)}} type={"password"}  outline={"none"}  placeholder="Password"/>
                        </Flex>
                    
                     <Button onClick={Postloginhandler} m="5px auto"  h="60px" bg="teal" color={"white"} w="95%">CONTINUE</Button>
                        <Center m="30px"  >
                        <Divider bg={"gray"}/>
                            <Text>OR</Text>
                            <Divider bg={"gray"}/>
                        </Center>
                        <Button m="10px" h="40px" w="95%">
                            CONTINUE WITH EMAIL
                        </Button>
                        <Center m="10px auto"gap={2} h="40px" w="95%">
                        <Button flex={1}>
                            GOOGLE
                        </Button>
                        <Button flex={1}>
                           FACEBOOK
                        </Button>

                        </Center>
                        <Text maxW={"80%"} m="auto">
                        By creating an account or logging in, you agree with Bewakoof's Terms and Conditions and Privacy Policy.
                        </Text>
                        </Box>
                 </Box>
               </Center>
         
        
         </Flex>
         {toastauth&&<Toast title={"login"} description={"login Successful"}/>}
         </Box>)
}

export default Login