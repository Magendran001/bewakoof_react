import { Box, Center, Divider, Flex, Spacer,Text,Image } from "@chakra-ui/react"
import { Button, Select } from "@chakra-ui/react"

function WishlistCard({data})
{

    return (<Box  mt="30px" border={"1px solid gray"} p="20px" pb={0} rounded={5}>
    <Flex >
           
           <Box >
             <Text>{data.name}</Text>
             <Center justifyContent={"start"} gap="10px" mt="3px">
                <Text fontSize={"xl"} fontWeight={"bold"}>&#8377;{data.price}</Text>
                <Text as="del" color={"gray"}>&#8377;{data.all_offer_price}</Text>
             </Center>
             <Text color={"green"} mt="3px">You saved ₹{data.all_offer_price-data.price}</Text>
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
           <Image w="100px" h="120px" rounded={5} src={`https://images.bewakoof.com/t320/${data.display_image}`}/>
    </Flex> 
    <Divider mt="30px"/>
    
    <Flex gap={2} h="50px" >
        <Button h="100%" flex={1}>Remove</Button>
       
        <Button h="100%" flex={2}>Move to Wishlist</Button>
    </Flex>
</Box>)
}
export default WishlistCard