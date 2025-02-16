import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import engagement1 from '../images/1.png';
import engagement2 from '../images/11.jpg';
import engagement3 from '../images/1.jpg';


const jewelryItems = [
    { 
        image: engagement1, 
        title: "Engagement ring Illusion I", 
        description: "Yellow gold 4.0 & 3.0 mm polished\n0.02 ct. Diamonds" 
      },
      { 
        image: engagement2, 
        title: "Engagement ring Illusion I", 
        description: "Yellow gold 4.0 & 3.0 mm polished\n0.02 ct. Diamonds" 
      },
      { 
        image: engagement3, 
        title: "Engagement ring Illusion I", 
        description: "Yellow gold 4.0 & 3.0 mm polished\n0.02 ct. Diamonds" 
      },

];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "-40px",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        boxShadow: 3,
        zIndex: 1,
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "-40px",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        boxShadow: 3,
        zIndex: 1,
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

const Cresouel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Box sx={{ maxWidth: "90%", margin: "auto", textAlign: "center", py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Explore Personalized Gifts</Typography>
      <Slider {...settings}>
        {jewelryItems.map((item, index) => (
          <Card key={index} sx={{ mx: 2, boxShadow: 3 }}>
            <CardMedia component="img" height="200" image={item.image} alt={item.title} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Cresouel;
