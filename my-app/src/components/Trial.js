import React from "react";
import { Box, Button, Container, Typography, Card, CardContent, CardMedia,  AppBar, Toolbar, InputBase } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";

import SearchIcon from "@mui/icons-material/Search";

const diamondShapes = ["Round", "Cushion", "Pear", "Emerald", "Asscher", "Square", "Radiant", "Heart"];
const products = [
  { id: 1, name: "Engagement Ring Illusion 1", price: "€1,245.00", image: "/ring1.jpg" },
  { id: 2, name: "Engagement Ring Illusion 2", price: "€1,540.00", image: "/ring2.jpg" },
  { id: 3, name: "Engagement Ring Illusion 3", price: "€1,345.00", image: "/ring3.jpg" },
  { id: 4, name: "Engagement Ring Illusion 4", price: "€1,780.00", image: "/ring4.jpg" },
];

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box>
          <Typography variant="h6" fontWeight="bold">
            shree ram Jewellers
          </Typography>
        </Box>

        {/* Center: Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit">Gold</Button>
          <Button color="inherit">Silver</Button>
          <Button color="inherit">Diamonds</Button>
        </Box>

        {/* Right: Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", border: "1px solid gray", borderRadius: "20px", padding: "4px 10px" }}>
          <SearchIcon />
          <InputBase placeholder="Search..." sx={{ marginLeft: 1, width: "150px" }} />
        </Box>
      </Toolbar>
    </AppBar>
      {/* Hero Section */}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" gap={4} mt={4}>
        <Box flex={1}>
          <Typography variant="h4" fontWeight="bold">
            Wedding Rings & Engagement Rings
          </Typography>
          <Typography variant="h5" color="text.secondary" mt={1}>
            from the Specialist
          </Typography>
          <Typography variant="body1" mt={2}>
            Are you looking for wedding rings or an application ring? We offer many possibilities for individual and personal advice.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, borderRadius: "20px", textTransform: "none" }}
            endIcon={<ArrowForwardIcon />}
          >
            Individually & Stylish
          </Button>
        </Box>
        <Box flex={1} textAlign="center">
          <img src="/hero-ring.jpg" alt="Engagement Ring" style={{ width: "100%", borderRadius: "10px" }} />
        </Box>
      </Box>

      {/* Diamond Shape Section */}
      <Box textAlign="center" mt={6}>
        <Typography variant="h5" fontWeight="bold">
          Explore Diamonds By Shape
        </Typography>
        <Carousel autoPlay={false} indicators={false} animation="slide" navButtonsAlwaysVisible>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mt={2}>
            {diamondShapes.map((shape) => (
              <Button key={shape} variant="text" sx={{ textTransform: "none" }}>
                {shape}
              </Button>
            ))}
          </Box>
        </Carousel>
      </Box>

      {/* Products Section */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold">
          Explore Trauring Spezialisten
        </Typography>
        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }} gap={3} mt={2}>
          {products.map((product) => (
            <Card key={product.id} sx={{ borderRadius: "10px" }}>
              <CardMedia component="img" height="180" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
