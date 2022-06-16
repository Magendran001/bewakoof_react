import {Grid,GridItem,Image,Flex,Text,Box,Icon,Spacer} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
function ProductCard()
{

    let {category} = useParams();

    console.log(category)

    let [data,setdata] = useState([]);
    console.log(data)
      useEffect(()=>{

        axios.get(`http://localhost:2345/products/${category}`)
        .then(res=>setdata(res.data))
        .catch(err=>console.log(err))


      },[])


    return (
     <Box>
          <Flex p={"30px"} justifyContent={"flex-end"}>
             <select name="" id="">
                <option>Popular</option>
                <option>New</option>
                <option>Price:High to Low</option>
                <option>Price:Low to High</option>
             </select>
          </Flex>
    <Grid templateColumns={"repeat(3,1fr)"} gap="30">

        {data.map(e=>{ return <Link to={`/singleprdt/${e._id}`}><GridItem  h="auto" textAlign={"start"}>
             <Image h="350px" src={`https://images.bewakoof.com/t320/${e.display_image}`}/>
             
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