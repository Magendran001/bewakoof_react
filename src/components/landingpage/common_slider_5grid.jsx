import { Box, Grid, GridItem, Heading,Image,Text } from "@chakra-ui/react"
import React, { Component } from "react";
import "./common.css"
import Slider from "react-slick";

function Common_slider_5grid({data,header})
{
    return (<Box boxSizing="border-box" w="99%"  m="auto" >
          <Heading>{header}</Heading>
          <Box   m="auto" p="0px 20px" mt={"10px"} className="Total_slider" ><Simpleslider data={data}/></Box>
          
         
    </Box>)
}

export default Common_slider_5grid






function Simpleslider({data}){
  
    var settings = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>

            {data.map(e=><Box   >

                <Image h="90%" w="90%" src={e.image}/>
                <Box>
                <Text fontSize={"18px"} display={"inline"}> &#x20b9; {e.price} </Text>
                <Text display={"inline"} as='del' >{e.discount}</Text>
                </Box>
              
            </Box>)}
          
        </Slider>
      </div>
    );
  }


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }