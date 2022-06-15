import { Box, Center,Flex,Grid,Image,SimpleGrid,Text } from "@chakra-ui/react";


const Design_personal_data =[{image:"https://images.bewakoof.com/uploads/grid/app/WhatsApp-Video-2022-01-29-at-14-06-03-1643446784.gif",desc:"Design Of The Day"},

  {image:"https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg",desc:"Bestsellers"},
  {image:"https://images.bewakoof.com/uploads/grid/app/CUSTOMISE-thumbnail-1644818150.jpg",desc:"Customization"},
  {image:"https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg",desc:"Last Sizes Left"},
  {image:"https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg",desc:"Plus size"},
  {image:"https://images.bewakoof.com/uploads/grid/app/merch-store-thumbnail-1650381435.jpg",desc:"The Official Merch Store"},
  {image:"https://images.bewakoof.com/uploads/grid/app/bwkf-offer-thumbnail-1651735001.jpg",desc:"Coupon Offers"},
  {image:"https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg",desc:"New Arrivals"},
  {image:"https://images.bewakoof.com/uploads/grid/app/PersonalCare-Thumbnail-1647932750.jpg",desc:"Personal Care"},
  

]



function Design_personal()
{
    return (<SimpleGrid   columns={{base:3,sm:3,md:4,lg:9}} justifyContent={"center"} alignItems={"center"} gap={5}  w="80%" m="30px auto" h="auto"  boxSizing="border-box">

        {Design_personal_data.map(ele=> <Design_personal_single_prdt  image={ele.image} desc={ele.desc} /> )}

        
          
         
         
    </SimpleGrid>)
}

export default Design_personal



function Design_personal_single_prdt({image,desc})
{
    return (<Box    h="200px"  >
        <Image rounded={5}   src={image}/>
        <Text fontWeight={"bold"} fontSize={"12px"}>{desc}</Text>

      </Box>)
}
