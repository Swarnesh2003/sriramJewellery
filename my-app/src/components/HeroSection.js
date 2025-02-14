import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import heroImage from '../images/heroSection.jpg'; // Import the image
import Button from '@mui/material/Button';

const HeroSection = () => {
  const fontStyles = {
    fontFamily: '"Playfair Display", serif',
    fontStyle: 'normal',
    fontWeight: 400
  };

  return (
    <Box 
      sx={{ 
        width: '100%',
        minHeight: '90vh',
        bgcolor: '#F2E6D4',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '90vh',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Left side - Text content */}
        <Box 
          sx={{ 
            flex: 1,
            p: 4,
            width: { xs: '100%', md: '50%' },
            position: 'relative'
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              ...fontStyles,
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.2,
              color: '#000',
              textShadow: '2px 2px 5px rgba(0,0,0,0.2)'
            }}
          >
            Personalized Elegance at Unbeatable Prices 
          </Typography>
          
          <Typography 
            variant="h3" 
            sx={{ 
              ...fontStyles,
              fontWeight: 300,
              mb: 4,
              color: '#333',
              fontSize: '2.5rem',
              textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            Quality Guaranteed
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'serif',
              fontSize: '1.1rem',
              color: '#555',
              lineHeight: 1.6,
              maxWidth: '450px',
              mb: 4,
            }}
          >
            Exquisite customized jewellery crafted with perfection, offering you
            luxury at unbeatable prices.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
            <Button 
              variant="contained" 
              sx={{
                bgcolor: '#D4A373',
                color: '#fff',
                px: 2,
                py: 0.5,
                fontSize: '0.875rem',
                borderRadius: '20px',
                textTransform: 'none',
                transition: '0.3s',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                '&:hover': { bgcolor: '#B6825D', transform: 'scale(1.05)' }
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        {/* Right side - Image */}
        <Box
          sx={{
            flex: 1,
            height: '90vh',
            width: { xs: '100%', md: '50%' },
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '30%',
              background: 'linear-gradient(to top right, #f8f6f4 0%, transparent 50%)',
              borderRadius: '0 0 0 100px'
            }
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="Elegant woman with jewelry"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '0 0 0 100px',
              filter: 'brightness(0.9) contrast(1.1)',
              transition: '0.3s',
              '&:hover': { filter: 'brightness(1) contrast(1.2)' }
            }}
          />
        </Box>
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(242,230,212,0.8), rgba(255,255,255,0.2))',
          zIndex: 1
        }}
      />
    </Box>
  );
};

export default HeroSection;
