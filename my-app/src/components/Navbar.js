import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  InputBase, 
  Menu, 
  MenuItem,
  Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';

const LogoText = styled(Typography)({
  fontFamily: '"Tangerine", serif',
  fontWeight: 400,
  cursor: 'pointer'
});

const fontStyles = {
  fontFamily: '"Roboto Flex", serif',
  fontOpticalSizing: 'auto',
  fontStyle: 'normal',
  fontVariationSettings: `'slnt' 0, 'wdth' 100, 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712`
};

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },
}));

const CategoryButton = styled(Button)(({ theme }) => ({
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState({
    gold: null,
    silver: null,
    diamonds: null
  });

  const categoryData = {
    gold: ['Rings', 'Chains', 'Bangles', 'Necklaces', 'Earrings'],
    silver: ['Rings', 'Chains', 'Anklets', 'Bracelets', 'Pendants'],
    diamonds: ['Rings', 'Earrings', 'Pendants', 'Necklaces', 'Bracelets']
  };

  const handleClick = (event, category) => {
    setAnchorEl({ ...anchorEl, [category]: event.currentTarget });
  };

  const handleClose = (category) => {
    setAnchorEl({ ...anchorEl, [category]: null });
  };

  const handleNavigate = (category, subcategory) => {
    navigate(`/${category}/${subcategory.toLowerCase()}`);
    handleClose(category);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: 1, width: "100vw" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box>
          <LogoText variant="h4" onClick={handleLogoClick}>
            Shree Raam Jewellery
          </LogoText>
        </Box>

        {/* Center: Navigation Links with Dropdowns */}
        <Box sx={{ display: "flex", gap: 3, ...fontStyles, fontWeight: 500 }}>
          {Object.keys(categoryData).map((category) => (
            <div key={category}>
              <CategoryButton
                onClick={(e) => handleClick(e, category)}
                endIcon={<KeyboardArrowDownIcon />}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryButton>
              <StyledMenu
                anchorEl={anchorEl[category]}
                open={Boolean(anchorEl[category])}
                onClose={() => handleClose(category)}
                MenuListProps={{
                  'aria-labelledby': `${category}-button`,
                }}
              >
                {categoryData[category].map((item) => (
                  <MenuItem 
                    key={item}
                    onClick={() => handleNavigate(category, item)}
                    sx={{ 
                      ...fontStyles,
                      minWidth: '150px',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      }
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </StyledMenu>
            </div>
          ))}
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