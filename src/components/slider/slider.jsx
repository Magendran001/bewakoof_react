import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css"






export  const MenuSlider =()=> {
  
    const settings = {
      dots: true,
    
      slidesToShow: 3,
      slidesToScroll:1,
      speed: 1000,
      autoplay: true,
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
      <div style={{width:"99%",margin:"auto",height:"auto"}}>
        
        <Slider className="Total_slider_part" {...settings}>
          <div className="Single_slider_part">
            <img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Oversized-Tshirt-Men-1654684413.jpg"/>
          </div>
          <div className="Single_slider_part">
           <img src="https://images.bewakoof.com/uploads/grid/app/b1g1-1x1-m-1655216421.jpg"/>
           
          </div>
          <div className="Single_slider_part">
          <img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Buy-2-Men-1654684412.jpg"/>
          </div>
          <div className="Single_slider_part">
          <img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Men-2-1654684414.jpg"/>
          </div>
          <div className="Single_slider_part">
          <img src="https://images.bewakoof.com/uploads/grid/app/OOFsale-Homepage-Static-1X1-men-ENDS48HRS-02-1655230715.gif"/>
          </div>
          <div className="Single_slider_part">
          <img src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Just-Arrived-Coords-Men-1654967804.gif"/>
          </div>
          <div className="Single_slider_part">
          <img src="https://images.bewakoof.com/uploads/grid/app/new-styles--fresh-looks-banner-1x1-men-1655120135.gif"/>
          </div>
          <div className="Single_slider_part">
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-joggers-men-1655112462.gif"/>
          </div>
        </Slider>
      </div>
    );
  }
