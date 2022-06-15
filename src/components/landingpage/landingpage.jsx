import { Box ,Heading,Image} from "@chakra-ui/react"
import { MenuSlider } from "../slider/slider";
import Common_slider_5grid from "./common_slider_5grid";
import Design_personal from "./Design-personal";
import Discount_pe_discount from "./discount_pe_discount";
import Popularcategories from "./Popularcategories";
const Discount_pe_discount_data =[{image:"https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-buy2get1-banner-refreshment-1654174580.jpg"},
{image:"https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-play-banner-refreshment-1654174646.jpg"},
{image:"https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-men-June-1654178469.jpg"},
{image:"https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-buy3fr999-m-1652960227.jpg"},
]

const Best_seller_data =[{
    image:"https://images.bewakoof.com/t320/men-s-black-valhalla-2-0-t-shirt-498402-1652454701-1.jpg",
    price:"399",
    discount:"999",
    offer:"Buy 2 For 599"

},

    {
         image:"https://images.bewakoof.com/t320/hell-no-monday-half-sleeve-t-shirt-navy-blue-343973-1637995498-1.jpg",
        price:"349",
        discount:"1099",
        offer:"Buy 2 For 599"
    
    },
    {
        image:"https://images.bewakoof.com/t320/men-s-yellow-batman-t-shirt-391884-1649687933-1.jpg",
       price:"275",
       discount:"799",
       
   
   },

{
    image:"https://images.bewakoof.com/t320/time-flies-oversized-fit-t-shirt-509134-1654873540-1.jpg",
   price:"499",
   discount:"1299",
   fit:"OVERSIZED FIT"
   

},
{
    image:"https://images.bewakoof.com/t320/hang-loose-relax-half-sleeve-t-shirt-387407-1640087741-1.jpg",
   price:"349",
   discount:"1099",
   offer:"Buy 2 For 599"
   

},
{
    image:"https://images.bewakoof.com/t320/men-s-black-genjutsu-t-shirt-390475-1649688041-1.jpg",
   price:"349",
   discount:"1099",
   offer:"Buy 2 For 599"
   

},
{
    image:"https://images.bewakoof.com/t320/throne-of-dragon-oversized-fit-t-shirt-503831-1653666298-1.jpg",
    price:"499",
    discount:"1299",
    fit:"OVERSIZED FIT"
   

},

{
    image:"https://images.bewakoof.com/t320/killmonger-half-sleeve-t-shirt-509349-1655101044-1.jpg",
    price:"299",
    discount:"999",
    offer:"DESIGN OF THE DAY"
   

},
{
    image:"https://images.bewakoof.com/t320/killmonger-oversized-fit-t-shirt-509357-1655101091-1.jpg",
    price:"299",
    discount:"999",
    offer:"DESIGN OF THE DAY"
   

},


]

const T_shirt_299_data =[{image:"https://images.bewakoof.com/t320/olive-camo-sleeve-color-block-camo-t-shirt-277510-1638211682-1.jpg",price:263,discount:899},
{image:"https://images.bewakoof.com/t320/verdant-green-half-sleeve-t-shirt-346181-1639137616-1.jpg",price:249,discount:799},
{image:"https://images.bewakoof.com/t320/bold-red-plus-size-full-sleeve-t-shirt-326627-1632719072-1.jpg",price:299,discount:899},
{image:"https://images.bewakoof.com/t320/olive-camo-sleeve-raglan-camo-t-shirt-277518-1638210865-1.jpg",price:275,discount:899},
{image:"https://images.bewakoof.com/t320/lemon-drop-half-sleeve-t-shirt-346164-1639374604-1.jpg",price:349,discount:699},
{image:"https://images.bewakoof.com/t320/brotherhood-of-bikers-full-sleeve-t-shirt-white-296368-1635869973-1.jpg",price:255,discount:499},
{image:"https://images.bewakoof.com/t320/king-of-mrzpr-half-sleeve-t-shirt-black-295735-1635868837-1.jpg",price:275,discount:499},
{image:"https://images.bewakoof.com/t320/tea-sathi-kaypan-full-sleeve-t-shirt-pineapple-yellow-276699-1633520853-1.jpg",price:242,discount:599},


]

const The_stupidcollection_data =[{image:"https://images.bewakoof.com/uploads/grid/app/All-over-prints-pyjamas-mid-banner--1654591924.jpg"},
{image:"https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Pyjamas-Men---Copy-1654504679.jpg"},
{image:"https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Kurtas-Men-1654679176.jpg"},
{image:"https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Boxers-Men-2-1654760055.jpg"},
]

function Landingpage()
{
    return (<div style={{height:"auto",width:"98%",boxSizing:"border-box"}}>
         <MenuSlider/>
          <Image   w="98%" m="auto" mt="30px" src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg"/>
          <Design_personal/>
          <Image  w="100%" m="auto" mt="30px" src="https://images.bewakoof.com/uploads/grid/app/thin-banner1440x150-1654857548.gif"/>
          <Popularcategories/>
          <Discount_pe_discount Discount_pe_discount_data={Discount_pe_discount_data}/>
          <Common_slider_5grid header={"BESTSELLERS FOR MEN"} data={Best_seller_data}/>
          <Common_slider_5grid header={"T-SHIRTS UNDER 299"} data={T_shirt_299_data}/>
          <Discount_pe_discount Discount_pe_discount_data={The_stupidcollection_data}/>
          <Image  w="100%" m="auto" mt="30px" src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png"/>
          <Box>
            <Heading m="2" >Customize your T-shirts</Heading>
            <Image  w="100%" m="auto" src="https://images.bewakoof.com/uploads/grid/app/Byou-men-desk-1651215919.jpg"/>

          </Box>
          <Image  w="100%" m="auto" mt="30px" src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif"/>
        

    </div>)
}

export default Landingpage