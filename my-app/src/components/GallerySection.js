import React from 'react';
import { Box, Typography } from '@mui/material';

const images = [
  require('../images/gallery/ring1.jpeg'),
  require('../images/gallery/ring2.jpeg'),
  require('../images/gallery/ring3.jpeg'),
  require('../images/gallery/ring4.jpeg'),
  require('../images/gallery/ring5.jpeg'),
];


const GallerySection = () => {
    return (
      <Box sx={{ bgcolor: '#F2E6D4', py: 6, px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            mb: 4,
            textAlign: 'center',
            color: '#333',
          }}
        >
          Moments of Elegance
        </Typography>
  
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridAutoRows: '200px',
            gap: 2,
            '@media (max-width: 768px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridAutoRows: '150px',
            },
          }}
        >
          {images.map((src, index) => {
            const gridStyles = [
              { gridColumn: 'span 3', gridRow: 'span 2' }, // big
              { gridColumn: 'span 2', gridRow: 'span 1' }, // small
              { gridColumn: 'span 1', gridRow: 'span 1' }, // small
              { gridColumn: 'span 2', gridRow: 'span 1' }, // medium
              { gridColumn: 'span 1', gridRow: 'span 1' }
            ];
  
            const style = gridStyles[index % gridStyles.length];
  
            return (
              <Box
                key={index}
                component="img"
                src={src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  ...style,
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            );
          })}
        </Box>
      </Box>
    );
  };
  
  export default GallerySection;