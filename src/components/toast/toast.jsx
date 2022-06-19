import { Box,Button, useToast } from "@chakra-ui/react"

function Toast({title,description,error}) {
    const toast = useToast();
    
    return (
     
        
          toast({
            title: title,
            description: description,
            status: error?error:"success",
            duration: 5000,
            isClosable: true,
            position: "top",
          })
        
      
      
     
      
    )
  }

  export default Toast