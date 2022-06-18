import { Center } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/react"

function Loadingspinner()
{
    return (<Center width="150px" height="150px" rounded="10" m="auto">
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='yellow'
      size='xl'
    />
    </Center>)
}

export default Loadingspinner