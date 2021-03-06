import {Grid,GridItem,Image,Flex,Text,Box,Icon,Spacer} from "@chakra-ui/react";
import axios from "axios";
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import {useParams} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Fetchproductdata } from "../redux/productredux/action";
import { useEffect, useState } from "react";
import Loadingspinner from "../loadingspinner/loadingspinner";
import "./product.css"


function ProductCard({searchParams,setSearchParams})
{

 

    let {category} = useParams();
    let locaction = useLocation();
   
    
    let dispatch = useDispatch();
    let data = useSelector(state => state.product.product);
    let Spinner = useSelector(state => state.product.isLoading);

    console.log(Spinner,"datause")
   

   
    
      useEffect(()=>{

        let obj = {
          
          
          color: searchParams.get("color"),
        sort: searchParams.get("sort"),
        
        rating: searchParams.get("rating"),
        discount: searchParams.get("discount"),
        size:searchParams.get("size"),
        brand: searchParams.get("brand"),
      
      
      };
        console.log(obj,"searchparamscart")

        dispatch(Fetchproductdata(category,obj))

      


      },[searchParams])


    return (
     <Box   >
      
          <Flex p={"30px"} justifyContent={"flex-end"}>
             <select name="" id="" onChange={(e)=>{searchParams.set("sort",e.target.value);setSearchParams(searchParams)}}>
               
                <option value={-1}>Price:High to Low</option>
                <option value={1}>Price:Low to High</option>
             </select>
          </Flex>
          
         
    <Grid position={"relative"} templateColumns={{base:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={{base:0,lg:30}}>

  
          {Spinner&&<Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' bg={"white"} rounded={10} transform={{base:"translate(70%,150%)",lg:"translate(150%,150%)"}}  zIndex={1} pos={"absolute"}  > <Loadingspinner/></Box>}
         

        {data.map(e=>{ return <Link to={`/singleprdt/${e._id}`}><GridItem  h="auto" textAlign={"start"}>
             <Image h={{base:"250px",lg:"350px"}}  src={`https://images.bewakoof.com/t320/${e.display_image}`}/>
             
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