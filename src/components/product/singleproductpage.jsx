import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import "./singleproduct.css";
import { FaStar } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux/es/exports";
import { FETCHPRODUCTBYID } from "../redux/productredux/action";

import {Flex,Heading,Box,Image,Text,Grid,Spacer,Input,Button,Icon,Center} from "@chakra-ui/react"

function Singleprdtpage()
{

    let dispatch = useDispatch();
    let data = useSelector(state => state.product.singleproduct)||{};
    console.log(data)

    
    let [input,setinputdata] = useState();
    

    let {id} =useParams();
         
    useEffect(()=>{

        

        dispatch(FETCHPRODUCTBYID(id))
       
    },[])


    const changehandler =(e)=>{

        setinputdata(e.target.value)

        

    }

    return (
    
    <Box m="30px" >
    <Flex flexDirection={{base:"column",lg:"row"}} gap="30px" w={{base:"90%",lg:"80%"}} m="auto" h="auto">
        <Box display={"flex"} justifyContent="center" flex="3">
           <Image w="70%" h="90%" src={`https://images.bewakoof.com/t320/${data.display_image}`}/>
        </Box>
        <Box p={"10px"} textAlign={"start"}  flex="2">
            <Heading fontSize={"20px"}>Bewakoof</Heading> 
            <Text color={"gray"}>{data.custom_name}</Text>
            <Center m="10px 0px" gap={"1"}  w="70px" border={"1px solid black"}>
                <Text>{data.average_rating}</Text>
                <Icon  color={"gold"} as={FaStar}/>
            </Center>
            <Flex alignItems={"end"} gap="5px">
                <Text fontSize={"22px"} fontWeight="bold">${data.price}</Text>
                <Text color={"gray"} as="del" fontSize={"15px"}>${data.all_offer_price}</Text>
                <Text  color={"green"}>${data.product_discount}</Text>
              
            </Flex>

            <Text color={"gray"}>inclusive of all taxes</Text>
            <Text  bg="green.400" display={"inline"} fontSize={"15px"} color={"white"}>BUY1 GET1</Text>
            <Grid mt="15px" gap={"15px"}>
            <hr></hr>
            <Text>TriBe members get an extra discount of ₹40 and FREE shipping.Learn more</Text>
            <hr></hr>
            </Grid>
            <Box>
                <Flex>
                    <Text>SELECT SIZE</Text>
                    <Spacer/>
                    <Text as="u" color={"teal"}>Size Guide</Text>
                </Flex>
                <Flex className="Size_input_ALL" alignItems={"center"}  h="50px" w="70%" gap={"10px"}>
                    <Input readOnly name="S" onClick={changehandler} bg={input=="S"?"black":"none"} color={input=="S"?"white":"black"}     value="S"  placeholder="S" />
                    <Input readOnly name="M" onClick={changehandler} bg={input=="M"?"black":"none"} color={input=="M"?"white":"black"}  value="M" placeholder="M" />
                    <Input readOnly name="L" onClick={changehandler} bg={input=="L"?"black":"none"} color={input=="L"?"white":"black"}   value="L" placeholder="L" />
                    <Input readOnly name="XL" onClick={changehandler} bg={input=="XL"?"black":"none"}  color={input=="XL"?"white":"black"} value="XL" placeholder="XL" />
                    <Input readOnly name="2XL" onClick={changehandler} bg={input=="2XL"?"black":"none"} color={input=="2XL"?"white":"black"} value="2XL" placeholder="2XL" />
                    <Input readOnly name="3XL" onClick={changehandler} bg={input=="3XL"?"black":"none"} color={input=="3XL"?"white":"black"} value="3XL" textAlign="justify"  placeholder="3XL" />
                </Flex>

            </Box>
            <Flex  m="15px 0px" gap={10} >
                <Button flex={1}      bg={"yellow"} >
                    ADD TO BAG

                </Button>
                
                <Button flex={1}  >
                    WISHLIST

                </Button>
            </Flex>
            <hr/>


               


        </Box>
    </Flex></Box>)
}

export default Singleprdtpage