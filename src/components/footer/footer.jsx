import { Box, Flex, Grid, Heading ,Text} from "@chakra-ui/layout"
import { Button, Input,Image } from '@chakra-ui/react';
import {Text as P} from "@chakra-ui/react" 


function Footer()
{
    return (<Box  textAlign={"start"} bg={"black"}  p="30px" >
        <Box w="80%" m="auto">
           
           <Heading display={"flex"} justifyContent={"start"} color={"yellow"}>Bewakoof*</Heading>
           <Grid mt="30px" templateColumns={{base:"repeat(1,1fr)",lg:"repeat(4,1fr)"}} color={"white"} gap="40px">
             <Box>
                <Text color={"yellow"}>CUSTOMER SERVICE</Text>
                <Box>
                <p><a>Contact us</a></p>
                <p><a>Track Order</a></p>
                <p><a>Return Order</a></p>
                <p><a>Cancel Order</a></p>
                </Box>
             </Box>
             <Box>
                <Text color={"yellow"}>Company</Text>
                <Box>
                <p><a >About us</a></p>
                <p><a >We're Hiring</a></p>
                <p><a >Terms & Conditions</a></p>
                <p><a >Privacy Policy</a></p>
                <p><a >Blog</a></p>
                </Box>
             </Box>
             <Box>
                <Text color={"yellow"}>Connect with us</Text>
                <Box>
                <p><a >4.7M People Like this</a></p>
                <p><a >1M Followers</a></p>
                </Box>
             </Box>
             <Box w="130%" >
                <Text color={"yellow"}>Keep up to date</Text>
                <Box>
                <Input w="150px" outline="none" border="none" borderBottom={"2px solid yellow"} placeholder="Enter Email Id" display={"inline"} />
                <Button rounded={0} colorScheme="yellow" color="gray"  display={"inline"} >Subscribe</Button>
                </Box>
             </Box>
             <Box  >
                <Text color={"yellow"}></Text>
                <Box>
                <p><a href="">15 Days return policy</a></p>
                <p><a href=""   >Cash on delivery*</a></p>
         
                </Box>
             </Box>
             <Box  >
                <Text color={"yellow"}>Download the app</Text>
                <Flex>
                  
                  <Image src="https://images.bewakoof.com/web/app_android_v1.png" />
                  <Image src="https://images.bewakoof.com/web/app_ios_v1.png" />
         
                </Flex>
             </Box>
             <Box  >
                <Text color={"yellow"}>100% secure payment</Text>
                <Box>
                  
                  <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
                  
         
                </Box>
             </Box>
           </Grid>


        </Box>

        <Box m="30px auto" w="80%">
               <hr/>
        </Box>
        <Grid w="80%" gap={10} m="auto" color={"white"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(4,1fr)"}} >
            <Box>
                
                <Heading mb="30px" fontSize={"xl"}>MEN'S CLOTHING</Heading>
                <Box>
                <P><a href="">Top Wear</a></P>
                <P><a href="">Men's New Arrivals</a></P>
                <P><a href="">Men's Half Sleeve T-Shirts</a></P>
                <P><a href="">Men's Hoodies & Sweatshirts</a></P>
                <P><a href="">Men's Long Sleeve T-shirts</a></P>
                <P><a href="">Men's Printed T-shirts</a></P>
                <P><a href="">Men's Plain T-shirts</a></P>
                <P><a href="">Men's Vests</a></P>
                <P><a href="">Men's Polo T-Shirts</a></P>
                <P><a href="">Men's Kurtas</a></P>
                <P><a href="">Men's Combo T-Shirts</a></P>
               
                <P><a href="">Men's Nightwear</a></P>
                <P><a href="">Men's Plus Size Store</a></P>
                <br/>
                <P><a href="">Bottom Wear</a></P>
                <P><a href="">Men's Pajamas</a></P>
                <P><a href="">Men's Boxer Shorts</a></P>
                <P><a href="">Men's Shorts</a></P>
                <P><a href="">Men's Track Pants</a></P>
                <P><a href="">Men's Pants</a></P>
                <br/>
                <P><a href="">Featured</a></P>
                <P><a href="">Men's Flip Flops</a></P>
                <P><a href="">Men's Sliders</a></P>
                <P><a href="">Marvel T-Shirts</a></P>
                <P><a href="">Disney T-Shirts</a></P>
                <P><a href="">Avengers T-Shirts</a></P>
                <P><a href="">Star Wars T-Shirts</a></P>
                <P><a href="">Batman T-Shirts</a></P>
                <P><a href="">Superman T-Shirts</a></P>
                <P><a href="">Joker T-Shirts</a></P>
                </Box>

            </Box>
            <Box>
                <Heading mb="30px" fontSize={"xl"}>WOMEN'S CLOTHING</Heading>
                <Box>

                <p><a  href="">Women's Top Wear</a></p>
                <p><a  href="">Women's New Arrivals</a></p>
                <p><a  href="">Women's T-Shirts</a></p>
                <p><a  href="">Women's Hoodies & Sweatshirts</a></p>
                <p><a  href="">Women's Top Wear</a></p>
                <p><a  href="">Women's 3/4 Sleeve T-Shirts</a></p>
                <p><a  href="">Women's Kurtis</a></p>
                <p><a  href="">Women's Kurtis</a></p>
                <p><a  href="">Women's Nightwear</a></p>
                <p><a  href="">Women's Plus Size Store</a></p>
                <br/>
                <p><a  href="">Women's Bottom Wear</a></p>
                <p><a href="">Women's Pajamas</a></p>
                <p><a href="">Women's Boxer Shorts</a></p>
                <p><a href="">Women's Jeans</a></p>
                <p><a href="">Women's Joggers</a></p>
                <p><a href="">Women's Shorts</a></p>
                <br/>
                <P><a href="">BAGS</a></P>
                <P><a href="">Laptop Bags</a></P>
                <P><a href="">Small Backpacks</a></P>
                <br/>
                <p><a href="">Featured</a></p>
                <p><a href="">Women's Slides</a></p>
                <p><a href="">Women's Flip Flops</a></p>

                    
                </Box>
            </Box>
            <Box>
                   
            <Heading mb="30px" fontSize={"xl"}>MOBILE COVERS</Heading>
            <Box>
            <p><a href="">Brands</a></p>
                <p><a href="">Realme</a></p>
                <p><a href="">Samsung</a></p>
                <p><a href="">Xiaomi</a></p>
                <p><a href="">Oneplus</a></p>
                <p><a href="">Vivo</a></p>
                <p><a href="">Oppo</a></p>
            </Box>

            </Box>

            < Grid h={{base:"auto",lg:"30px"}} gap={5} color={"hsl(169,43%,51%)"} >
                 
                 
              
                <Heading fontSize={"xl"}>FANBOOK</Heading>
                <Heading fontSize={"xl"}>OFFERS</Heading>
                <Heading fontSize={"xl"}>SITEMAP</Heading>

            </Grid>

        </Grid>

    </Box>)
}

export default Footer