import {Grid,GridItem,Image,Flex,Text,Box,Icon,Spacer} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import {useParams} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Fetchproductdata } from "../redux/productredux/action";
import { useEffect, useState } from "react";
import Loadingspinner from "../loadingspinner/loadingspinner";


function ProductCard()
{

    let {category} = useParams();

    
    let dispatch = useDispatch();
    let data = useSelector(state => state.product.product);
    let Spinner = useSelector(state => state.product.isLoading);

    console.log(Spinner,"datause")
   

   
    
      useEffect(()=>{

        dispatch(Fetchproductdata(category))

      


      },[])


    return (
     <Box >
      
          <Flex p={"30px"} justifyContent={"flex-end"}>
             <select name="" id="">
                <option>Popular</option>
                <option>New</option>
                <option>Price:High to Low</option>
                <option>Price:Low to High</option>
             </select>
          </Flex>
          
         
    <Grid position={"relative"} templateColumns={{base:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={{base:2,lg:30}}>

  
          {Spinner&&<Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' bg={"white"} rounded={10} transform={{base:"translate(50%,150%)",lg:"translate(150%,150%)"}}  zIndex={1} pos={"absolute"}  > <Loadingspinner/></Box>}
         

        {data.map(e=>{ return <Link to={`/singleprdt/${e._id}`}><GridItem  h="auto" textAlign={"start"}>
             <Image h="350px"  src={`https://images.bewakoof.com/t320/${e.display_image}`}/>
             
             <Flex mt="5px"><Text>Bewakoof</Text>
             <Spacer/>
             <Icon mr={"5px"} w={22} h={22} as={FaRegHeart} />
             </Flex>
             <Text h={"18px"}  overflow="hidden"  fontSize={"10"} color="gray">{e.name}</Text>
             <Flex alignItems={"center"}>

             <Text mr="5px" fontWeight={"bold"} fontSize={"18px"}>&#8377;{e.price}</Text>
             <Text as="del"fontSize={"13px"}>&#8377;{e.all_offer_price}</Text>

             </Flex>
             <Text fontSize={"12px"} fontWeight={"bold"} bgColor="rgb(242,242,242)">&#8377;{e.member_price +e.tribe_text}</Text>

           </GridItem>
           </Link> 
            })}

          

    </Grid>
    
   
    
    </Box>)
}

export default ProductCard