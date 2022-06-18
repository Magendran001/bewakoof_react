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
    Box,
    Heading
  } from '@chakra-ui/react'
  import React from 'react';
  import { useSelector } from 'react-redux';
  import { Link } from 'react-router-dom';
  import {useDispatch} from "react-redux"
import { useState } from "react"
import { Logoutfun } from '../redux/login/action';


  export default Drawerleft

  function Drawerleft({app}) {

    let dispatch = useDispatch();

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
  
            <DrawerBody fontWeight={"bold"} fontSize={"20px"}>
                <Box  onClick={onClose}>{IsAuth?<button onClick={()=>{dispatch(Logoutfun())}} >Logout</button>:<Link to={"/login"}>Login</Link>}</Box>
                <Box onClick={onClose}><Link to={"/"}>Home</Link></Box>
              
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }