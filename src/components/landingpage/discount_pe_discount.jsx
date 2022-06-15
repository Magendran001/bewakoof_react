import { Box, Grid, GridItem, Heading ,Image} from "@chakra-ui/react"


function Discount_pe_discount({Discount_pe_discount_data})
{


    return (<Box h="auto" >

        <Heading>DISCOUNT PE DISCOUNT</Heading>
        <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} gap={10}>

            {Discount_pe_discount_data.map(e=><Discount_pe_discount_singleprdt data={e}/>)}

        </Grid>

    </Box>)
}

function Discount_pe_discount_singleprdt({data})
{
    return (<GridItem >

        <Image w={"100%"} src={data.image} />
    </GridItem>)
}

export default Discount_pe_discount