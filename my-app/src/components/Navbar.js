import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, InputBase, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from '@mui/material/styles';

const LogoText = styled(Typography)({
  fontFamily: '"Tangerine", serif',
  fontWeight: 400,
});
const fontStyles = {
    fontFamily: '"Roboto Flex", serif',
    fontOpticalSizing: 'auto',
    fontStyle: 'normal',
    fontVariationSettings: `'slnt' 0, 'wdth' 100, 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712`
  };

const Navbar = () => {
  return (
      <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: 1, width: "100vw" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Logo */}
          <Box>
          <LogoText variant="h4">
             Shree Raam Jewellery
          </LogoText>
          </Box>

          {/* Center: Navigation Links */}
          <Box sx={{ display: "flex", gap: 3,  ...fontStyles,
            fontWeight: 500 }}>
            <Button color="inherit">Gold</Button>
            <Button color="inherit">Silver</Button>
            <Button color="inherit">Diamonds</Button>
          </Box>

          {/* Right: Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid gray",
              borderRadius: "20px",
              padding: "2px 10px",
              width: "180px",
            }}
          >
            <SearchIcon />
            <InputBase placeholder="Search..." sx={{ marginLeft: 1, flex: 1 }} />
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
