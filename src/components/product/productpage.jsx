import {Box,Heading,Flex,Text,Spacer} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";
import ProductCard from "./productcardpage";
import {useLocation, useSearchParams} from "react-router-dom"



function Productpage()
{


  


  const params = new URLSearchParams();



  

 

  
    let locaction = useLocation();
    let [searchParams, setSearchParams] = useSearchParams(locaction.search);
  

 
 

           useEffect(()=>{
 
           
            window.scrollTo(0, 500)
           

           },[])
   
      
    const [status,setstatus] = useState({gender:false,size:false,Brand:false,color:false,Design:false});


   

    const paramshandler = (key, value) => {

      searchParams.set(key, value)
      setSearchParams(searchParams)
  
  
    }
    

   

    return (<Box  >
        <Box     minH="1500px" h="auto" w={{base:"98%",lg:"80%"}} m="auto" mt={"30px"} mb="30px">

        <Heading   fontSize={"3xl"} display={"flex"}  justifyContent={"start"}>Printed T-Shirts for Men</Heading>
         <Flex   h="auto" gap={30}  flexDirection={{base:"column",lg:"row"}}>
            <Box onPointerEnter={"cursor"} position={{base:"realtive",lg:"sticky"}} scroll top="200px"  p="30" minH={"500px"} height={"400px"}  overflow="scroll"   flex={2}>
             <Box   >
                      
                      <Flex>
                        <Text fontWeight={"bold"} color={"gray"}>Filters</Text>
                        <Spacer/>
                        <Text>ClearAll</Text>
                      </Flex>
                      {/* <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,gender:!status.gender})}}>
                        <Text >Gender</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.gender?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box display={status.gender?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      <Text >Men</Text>
                      <Text >Unisex</Text>
                      <Text >Women</Text>
                      </Box>
                        
                      </Box> */}
                      <Box mt="10px"> <hr/></Box>
                      <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,size:!status.size})}}>
                        <Text >Sizes</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.size?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box cursor={"pointer"} display={status.size?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                     
                      <Text  onClick={()=>paramshandler("size","S")}>S</Text>
                      <Text  onClick={()=>paramshandler("size","M")}>M</Text>
                      <Text  onClick={()=>paramshandler("size","M")} >L</Text>
                      <Text  onClick={()=>paramshandler("size","XL")} >XL</Text>
                      <Text  onClick={()=>paramshandler("size","2XL")}>2XL</Text>
                      <Text  onClick={()=>paramshandler("size","3XL")} >3XL</Text>
                      <Text  onClick={()=>paramshandler("size","4XL")} >4XL</Text>
                      <Text   onClick={()=>paramshandler("size","5XL")}>5XL</Text>
                      <Text  onClick={()=>paramshandler("size","6XL")}>6XL</Text>


                      </Box>
                        
                      </Box>
                      <Box mt="10px"> <hr/></Box>
                      <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,Brand:!status.Brand})}}>
                        <Text >Brand</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.Brand?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box cursor={"pointer"} display={status.Brand?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      <Text onClick={()=>{paramshandler("brand","bewakoof")}} >Bewakoof</Text>
                      <Text onClick={()=>{paramshandler("brand","others")}} >Others</Text>
                      
                      </Box>
                        
                      </Box>
                      <Box mt="10px"> <hr/></Box>
                      <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,color:!status.color})}}>
                        <Text >Color</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.color?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box cursor={"pointer"} display={status.color?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      <Text onClick={()=>{}}>Red</Text>
                      <Text onClick={()=>{}}  >White</Text>
                      <Text onClick={()=>{  }}  >green</Text>
                      </Box>
                        
                      </Box>
                      <Box mt="10px"> <hr/></Box>
                      {/* <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,Fit:!status.Fit})}}>
                        <Text >Fit</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.Fit?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box display={status.Fit?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      <Text onClick={()=>{ setfit([...fit,"regular"]);setfithandler() }}  >Regular Fit</Text>
                      <Text onClick={()=>{ setfit([...fit,"oversized"]);setfithandler() }} >Oversized</Text>
                      <Text onClick={()=>{ setfit([...fit,"slimfit"]);setfithandler() }} >Slim Fit</Text>
                      </Box>
                        
                      </Box> */}
                      {/* <Box mt="10px"> <hr/></Box> */}
                      {/* <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,Sleeve:!status.Sleeve})}}>
                        <Text >Sleeve</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.Sleeve?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box display={status.Sleeve?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      <Text >Half Sleeve</Text>
                      <Text >Full Sleeve</Text>
                      <Text >Sleeveless</Text>
                      </Box>
                        
                      </Box> */}
                      {/* <Box mt="10px"> <hr/></Box> */}
                      {/* <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,Neck:!status.Neck})}}>
                        <Text >Neck</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.Neck?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box display={status.Neck?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      <Text >Round Neck</Text>
                      <Text >Hood</Text>
                      <Text >Polo</Text>
                      </Box>
                        
                      </Box> */}
                      {/* <Box mt="10px"> <hr/></Box> */}
                      <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,Ratings:!status.Ratings})}}>
                        <Text >Ratings</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.Design?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box cursor={"pointer"}display={status.Ratings?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      <Text onClick={()=>paramshandler("rating",4.5)}>4.5 and above</Text>
                      <Text onClick={()=>paramshandler("rating",4)} >4 and above</Text>
                      <Text onClick={()=>paramshandler("rating",3.5)}>3.5 and above</Text>
                      <Text  onClick={()=>paramshandler("rating",3)}>3 and above</Text>
                      <Text  onClick={()=>paramshandler("rating",2.5)}>2.5 and above</Text>
                      </Box>
                        
                      </Box>
                      <Box mt="10px"> <hr/></Box>
                      <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,Discount:!status.Discount})}}>
                        <Text >Discount</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.Discount?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box cursor={"pointer"} display={status.Discount?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      <Text  onClick={()=>paramshandler("discount",10)}>10% Or More</Text>
                     
                      <Text  onClick={()=>paramshandler("discount",30)} >30% Or More</Text>
                      <Text   onClick={()=>paramshandler("discount",50)}>50% Or More</Text>
                      <Text onClick={()=>paramshandler("discount",70)} >70% Or More</Text>
                     
                      </Box>
                        
                      </Box>
                      <Box mt="10px"> <hr/></Box>
                      <Box   mt="10px">
                      <Flex onClick={()=>{setstatus({...status,Sort:!status.Sort})}}>
                        <Text >Sort By</Text>
                        <Spacer/>
                        <Text fontSize={"32px"} color="black" fontWeight={"light"} >{status.Sort?<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</Text>
                      </Flex>
                      <Box cursor={"pointer"} display={status.Sort?"block":"none"} ml="30px" mt="10px" color={"gray"} textAlign="start">
                      
                      <Text   onClick={()=>paramshandler("sort",-1)}>Price:High to Low</Text>
                      <Text onClick={()=>paramshandler("sort",1)}>Price:Low to High</Text>
                      </Box>
                        
                      </Box>
                      <Box mt="10px"> <hr/></Box>
                     


             </Box>
             </Box>
             <Box  flex={5}>
             <ProductCard searchParams={searchParams} setSearchParams={setSearchParams}/>
             </Box>
         </Flex>
        </Box>
    </Box>)
}

export default Productpage