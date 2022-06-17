import { Box, Center, Flex, Heading } from "@chakra-ui/layout"
import {Button, Image,Input,Text,Divider} from "@chakra-ui/react"

function Login()
{
    return (<Box><Flex  direction={{base:"column",lg:"row"}}>
               <Box  position={"relative"}  h={"700px"}  flex={1} >
                 <Heading pos={"absolute"} top="20px" left="20px" bg={"rgb(255,248,220)"}>Welcome to the world of Bewakoof!</Heading>
               <Image h="100%" w="100%" bg={"rgb(255,248,220)"} src="https://images.bewakoof.com/web/group-19-1617704502.png"/>
               </Box>
               <Center flex={1}>

                 <Box p="20px"  w={{base:"95%",lg:"600px"}}  boxSizing="border-box">
                     <Heading m="30px">Login/Signup</Heading>
                     <Text color={"gray"} fontSize="20px" mb="50px">for Latest trends, exciting offers and everything Bewakoof!</Text>
                             <Box w="90%" m="auto">
                        <Flex m="5px auto" rounded={5} p="0px 8px" gap="2" border={"1px solid gray"} w="95%" h="60px" alignItems={"center"}>
                            <Flex  p="4px 10px"  bg={"hsl(0,0%,96%)"}> <Image w="25px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlJeXMZx_Qk9XD43shNib1vJr9yHOg9_Nxg&usqp=CAU"/> <Text color={"gray"}>  +91</Text></Flex>
                            
                            <Input  outline={"none"} variant='unstyled' placeholder="Enter Mobile Number"/>
                        </Flex>
                    
                     <Button m="5px auto"  h="60px" bg="teal" color={"white"} w="95%">CONTINUE</Button>
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
         
        
         </Flex></Box>)
}

export default Login