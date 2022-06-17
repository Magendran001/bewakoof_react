import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Box
  } from '@chakra-ui/react'
  import React from 'react';
  import { useSelector } from 'react-redux';
  import { Link } from 'react-router-dom';
import { useState } from "react"


  export default Drawerleft

  function Drawerleft({app}) {

    let IsAuth = useSelector(state=>state.Loginreducer.isAuth);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} bg=""  onClick={onOpen}>
           {app}
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Hi,</DrawerHeader>
  
            <DrawerBody>
                <Box  onClick={onClose}>{IsAuth?<Link to="/">Logout</Link>:<Link to={"/login"}>Login</Link>}</Box>
              
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }