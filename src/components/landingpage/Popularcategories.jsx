import { Box, Flex, Grid, GridItem, Heading ,Image,SimpleGrid} from "@chakra-ui/react";
import {Link} from "react-router-dom"



const popularcategoriesdata =[{
    name:"Printed T-shirts",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-printed-tshirt-1654498507.png",
    category:"T-Shirt"
},
{
    name:"Plain T-shirts",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1g-1654498502.png"

},

{
    name:"Joggers",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1h-1654498503.png",
    category:"Joggers"

},
{
    name:"Kurats",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1j-1654498503.png",
    category: "Kurta",

},
{
    name:"Vests",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1k-1654498503.png",
    category: "Vest",

},
{
    name:"Shorts",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1l-1654498504.png",
    category: "Shorts",

},
{
    name:"Shirts",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1m-1654498504.png",
    category: "Shirt",

},
{
    name:"Pyjamas",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-printed-pyjama-1654501962.png",
    category: "Pyjama",

},
{
    name:"Casual Shoes",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1o-1654498506.png",
    category: "Casual Shoes",

},
{
    name:"Boxers",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1b-1654498500.png"

},
{
    name:"Mobile Covers",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1c-1654498500.png"

},
{
    name:"Backpacks",
    image:"https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1p-1654498506.png"

},
]


function Popularcategories()
{
    return (<Box >

         <Heading>POPULAR CATEGORIES</Heading>
         <SimpleGrid columns={{base:3,md:4,lg:6}}  >
            {popularcategoriesdata.map(e=><Popularcategories_singledata data={e}/>)}
           
         </SimpleGrid>
    </Box >)
}

export default Popularcategories


function Popularcategories_singledata({data})
{

    return (<Link to={`/product/${data.category}`}> <GridItem   >

        <Image h="100%" src={data.image}/>
    </GridItem></Link>)

}