import React from "react";
import Navbar from "./Navbar";
import HeroSection from './HeroSection';
import { Box, Button, Container, Typography, Card, CardContent, CardMedia,  AppBar, Toolbar, InputBase } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cresouel from  "./caresouel";

const HomePage = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    {/* Add other components here */}
    <Typography variant="h4" sx={{ mt: 4 }}>
      Welcome to Trauring Spezialisten
    </Typography>
    <Cresouel />
  </>
  );
};

export default HomePage;
