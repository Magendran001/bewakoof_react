import { Box, Button, Flex, Heading,Text,Image, Spacer, Divider, Select, Center, Grid } from "@chakra-ui/react"
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import WishlistCard from "./wishlistcard";
function Cartpage()
{

   
    let Wishlistdata = useSelector(state=>state.Wishlistreducer.wishlistdata);
   
    

    

    let total_mrp =Wishlistdata?.map(a=>a.product_id.all_offer_price);
    total_mrp= total_mrp.length!=0?total_mrp.reduce((a,b)=>a+b):0

     let totalprice = Wishlistdata?.map(a=>a.product_id.price);
     totalprice= totalprice.length!=0?totalprice.reduce((a,b)=>a+b):0;

     let totaldiscount = total_mrp-totalprice;


    

    return (<div><Box h="auto" m="100px 0px">

            <Box w={{base:"100%",lg:"80%"}} m="auto">

                <Heading textAlign={"start"} mb="30px">My Bag {Wishlistdata.length} item(s)</Heading>
                <Flex flexDirection={{base:"column",lg:"row"}} gap={"30px"}>

                    <Box flex={3} textAlign={"start"}>

                        <Center pl={4} justifyContent={"start"} bg={"hsl(71,100%,97%)"} h="40px" >
                            <Text>Yay! You get FREE delivery on this order</Text>
                        </Center>
                         {Wishlistdata.map(e=> <WishlistCard user_id={e.user_id} id={e._id} data={e.product_id}/>)}
                        
                    </Box>
                    <Box  p={{base:"20px",lg:0}}  flex={2}>
                             
                             <Flex  rounded={5} p={"10px"} bg="hsl(49,98%,60%)" h="50px">
                                  <Text color={"white"}>Save extra ₹30 with TriBe</Text>
                                  <Spacer/>
                                  <Text>kk</Text>
                             </Flex>
                             <Grid mt="10px" textAlign={"start"}  gridGap={2}>
                             <Box border={"1px solid gray"} rounded={3} p={2}>
                             Whistles! Get extra 10% Cashback on prepaid orders above Rs.699. Coupon code - OOF10.
                             </Box>
                             <Box  border={"1px solid gray"} rounded={3}  p={2}>
                             Get upto Rs.200 cashback on orders above Rs.299 on Paytm Wallet and Paytm Postpaid
                             </Box>
                             <Box  border={"1px solid gray"} rounded={3} p={2} >
                             Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!
                             </Box>
                             </Grid>
                               

                             <Box mt="20px">

                              <Center p={"10px"} border={"1px solid gray"}>
                                  <Flex rounded={4} p={"4px 10px"} w={"100%"} bg={"hsl(174,36%,95%)"}>
                                 <Text>Have a Coupon / Referral / Gift Card ?</Text>
                                 <Spacer/>
                                  <Text>Redeem</Text>
                                   </Flex>
                                  </Center>

                                  <Box border={"1px solid gray"}  >
                                    <Flex h="40px" p={"0px 20px"} bg={"hsl(0,0%,96%)"} alignItems={"center"} >
                                        <Text fontWeight={"bold"} fontSize={"12px"}>PRICE SUMMARY</Text>
                                    </Flex>
                                    <Grid gap={2} fontSize={"14px"} lineHeight={"18px"} color={"gray"} p={"4px 25px"} >
                                        <Flex>
                                            <Text>Total MRP (Incl. of taxes) </Text>
                                            <Spacer/>
                                            <Text>₹ {total_mrp}</Text>
                                            

                                        </Flex>
                                        <Flex>
                                            <Text>Delivery Fee  </Text>
                                            <Spacer/>
                                            <Text>FREE</Text>
                                            

                                        </Flex>
                                        <Flex>
                                            <Text>Bag Discount  </Text>
                                            <Spacer/>
                                            <Text>- ₹{totaldiscount}</Text>
                                            

                                        </Flex>
                                        <Flex>
                                            <Text>Subtotal  </Text>
                                            <Spacer/>
                                            <Text>₹ {totalprice}</Text>
                                            

                                        </Flex>
                                        <Text p={1} rounded={12} w="90%" m="10px auto" mb="40px" bgColor={"hsl(107,37%,93%)"} >You are saving ₹ {totaldiscount} on this order</Text>
                                    </Grid>
                                  </Box>

                                </Box>

                                <Box  border={"1px solid gray"}>

                                    <Center p={"10px 15px"}>
                                        <Grid>
                                            <Text>Total</Text>
                                            <Text>&#8377;{totalprice}</Text>
                                        </Grid>
                                        <Spacer/>
                                        <Button w={{base:"150px",lg:"270px"}} h="50px" color={"white"} bg={"teal"}>ADD ADDRESS</Button>
                                    </Center>

                                </Box>
                    </Box>
                    

                </Flex>

            </Box>
        </Box></div>)
}

export default Cartpage