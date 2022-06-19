import { Box,Button, useToast } from "@chakra-ui/react"

function Toast({title,description}) {
    const toast = useToast();
    
    return (
     
        
          toast({
            title: title,
            description: description,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top",
          })
        
      
      
     
      
    )
  }

  export default Toast