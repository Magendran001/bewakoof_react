import { Box, Button, Flex, Heading,Text,Image, Spacer, Divider, Select, Center, Grid } from "@chakra-ui/react"

function Cartpage()
{
    return (<div><Box h="auto" m="20px 0px">

            <Box w={{base:"100%",lg:"80%"}} m="auto">

                <Heading textAlign={"start"} mb="30px">My Bag 5 item(s)</Heading>
                <Flex flexDirection={{base:"column",lg:"row"}} gap={"30px"}>

                    <Box flex={3} textAlign={"start"}>

                        <Center pl={4} justifyContent={"start"} bg={"hsl(71,100%,97%)"} h="40px" >
                            <Text>Yay! You get FREE delivery on this order</Text>
                        </Center>
                        <Box mt="30px" border={"1px solid gray"} p="20px" pb={0} rounded={5}>
                            <Flex >
                                   
                                   <Box >
                                     <Text>Pineapple Yellow Round Neck 3/4th Sleeve T-Shirt</Text>
                                     <Center justifyContent={"start"} gap="10px" mt="3px">
                                        <Text fontSize={"xl"} fontWeight={"bold"}>&#8377;1375</Text>
                                        <Text as="del" color={"gray"}>$1995</Text>
                                     </Center>
                                     <Text color={"green"} mt="3px">You saved ₹620!</Text>
                                      <Flex  w="200px"  mt={"20px"} gap="10px">
                                         <Select border={"1px solid gray"}>
                                            <option>Size:</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                         </Select>
                                         <Select border={"1px solid gray"}>
                                            <option>Qty:</option>
                                            <option>5</option>
                                            <option>1</option>
                                            <option>2</option>
                                         </Select>
                                      </Flex>

                                   </Box>
                                          <Spacer/>
                                   <Image w="100px" h="120px" rounded={5} src="https://images.bewakoof.com/t320/pineapple-yellow-round-neck-3-4th-sleeve-t-shirt-231551-1637995773-1.jpg"/>
                            </Flex> 
                            <Divider mt="30px"/>
                            
                            <Flex  h="50px" >
                                <Button h="100%" flex={1}>Remove</Button>
                               
                                <Button h="100%" flex={2}>Move to Wishlist</Button>
                            </Flex>
                        </Box>
                        
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
                                            <Text>₹ 1299</Text>
                                            

                                        </Flex>
                                        <Flex>
                                            <Text>Delivery Fee  </Text>
                                            <Spacer/>
                                            <Text>FREE</Text>
                                            

                                        </Flex>
                                        <Flex>
                                            <Text>Bag Discount  </Text>
                                            <Spacer/>
                                            <Text>- ₹800</Text>
                                            

                                        </Flex>
                                        <Flex>
                                            <Text>Subtotal  </Text>
                                            <Spacer/>
                                            <Text>₹ 499</Text>
                                            

                                        </Flex>
                                        <Text p={1} rounded={12} w="90%" m="10px auto" mb="40px" bgColor={"hsl(107,37%,93%)"} >You are saving ₹ 800 on this order</Text>
                                    </Grid>
                                  </Box>

                                </Box>

                                <Box  border={"1px solid gray"}>

                                    <Center p={"10px 15px"}>
                                        <Grid>
                                            <Text>Total</Text>
                                            <Text>&#8377;499</Text>
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