import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import "./singleproduct.css";
import { FaStar } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux/es/exports";
import { FETCHPRODUCTBYID } from "../redux/productredux/action";
import { useNavigate,Navigate } from "react-router-dom";
import Toast from "../toast/toast";

import {Flex,Heading,Box,Image,Text,Grid,Spacer,Input,Button,Icon,Center} from "@chakra-ui/react"

import Loadingspinner from "../loadingspinner/loadingspinner";
import { POSTWISHLIST } from "../redux/wishlist/action";

function Singleprdtpage()
{


    let [redirect,setredirect] =useState(false);
 

    let toastauth = useSelector(state=>state.toastreducer.active);
    console.log(toastauth,"toastauth")
    let nav = useNavigate();
 
     let userid =  useSelector(state=>state.Loginreducer.user_id)||null;

     
    let IsAuth = useSelector(state=>state.Loginreducer.isAuth);
    let Spinner = useSelector(state => state.product.isLoading);
    let dispatch = useDispatch();
    let data = useSelector(state => state.product.singleproduct)||{};
   

    
    let [input,setinputdata] = useState("");
     let [alertsize,setalertsize] = useState({alert1:false,alert2:false});
     console.log(alertsize,"alertsize")
  
    

    let {id} =useParams();
         
    useEffect(()=>{

        
 
        dispatch(FETCHPRODUCTBYID(id))
        window.scrollTo(0, 0)
        
       
    },[])

    if(redirect)
    {
        return (<Navigate to="/login" state={{pathname:`/singleprdt/${id}`}} />)
    }

    


    const changehandler =(e)=>{
        setalertsize({alert1:true,alert2:true})
        setinputdata(e.target.value)
        

        

    }

    const baghandler =()=>{

        if(IsAuth && input.length!==0)
        {

            let obj = {user_id:userid,product_id:data._id}
           
            dispatch(POSTWISHLIST({...obj}))
            
        }
        else  if(IsAuth && input.length==0)
        {

            setalertsize({alert1:!alertsize.alert1,alert2:alertsize.alert1})
            
        }
        

        else{
            setredirect(true)
            console.log("yes")
             
        }

        
    }

    return (
    
    <Box pos={"relative"}   minH={"400px"} mt="80px" m={{base:"",lg:"30px"}}>
        

{Spinner&&<Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' bg={"white"} rounded={10} transform={{base:"translate(50%,150%)",md:"translate(200%,50%)",lg:"translate(450%,50%)"}}  zIndex={1} pos={"absolute"}  > <Loadingspinner/></Box>}
    <Flex   flexDirection={{base:"column",lg:"row"}} gap={{base:0,lg:"30px"}}w={{base:"100%",lg:"80%"}} m="auto" h="auto">
        <Box m="auto"  display={"flex"} justifyContent="center" flex="3">
           <Image w={{base:"100%",lg:"70%"}} h="90%" src={`https://images.bewakoof.com/t320/${data.display_image}`}/>
        </Box>
        <Box p={"10px"} textAlign={"start"}  flex="2">
            <Heading fontSize={"20px"}>Bewakoof</Heading> 
            <Text color={"gray"}>{data.custom_name}</Text>
          {  data.average_rating&& <Center m="10px 0px" gap={"1"}  w="70px" border={"1px solid black"}>
                <Text>{data.average_rating}</Text>
                <Icon  color={"gold"} as={FaStar}/>
            </Center>}
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
                <Flex className="Size_input_ALL" alignItems={"center"}  h="50px" w={{base:"100%",lg:"70%"}} gap={"10px"}>
                    <Input readOnly name="S" onClick={changehandler} bg={input=="S"?"black":"none"} color={input=="S"?"white":"black"}     value="S"  placeholder="S" />
                    <Input readOnly name="M" onClick={changehandler} bg={input=="M"?"black":"none"} color={input=="M"?"white":"black"}  value="M" placeholder="M" />
                    <Input readOnly name="L" onClick={changehandler} bg={input=="L"?"black":"none"} color={input=="L"?"white":"black"}   value="L" placeholder="L" />
                    <Input readOnly name="XL" onClick={changehandler} bg={input=="XL"?"black":"none"}  color={input=="XL"?"white":"black"} value="XL" placeholder="XL" />
                    <Input readOnly name="2XL" onClick={changehandler} bg={input=="2XL"?"black":"none"} color={input=="2XL"?"white":"black"} value="2XL" placeholder="2XL" />
                    <Input readOnly name="3XL" onClick={changehandler} bg={input=="3XL"?"black":"none"} color={input=="3XL"?"white":"black"} value="3XL" textAlign="justify"  placeholder="3XL" />
                </Flex>

            </Box>
            <Flex  m="15px 0px" gap={2} >
                <Button flex={1}   onClick={baghandler}    bg={"yellow"} >
                    ADD TO BAG

                </Button>
                
                <Button flex={1}  >
                    WISHLIST

                </Button>
            </Flex>
            <hr/>


               


        </Box>
    </Flex>
     {alertsize.alert1?alertsize.alert2?"":<Box pos={"absolute"} visibility={"hidden"}><Toast title={"Size"} error={"error"} description={"Please Select size "}/></Box>:alertsize.alert2?<Box pos={"absolute"} visibility={"hidden"}><Toast title={"Size"} description={"Please Select size "} error={"error"} /></Box>:""}
         {toastauth&&<Toast title={"Cart."} description={"Product added successfully!"}/>}
    </Box>)
}

export default Singleprdtpage