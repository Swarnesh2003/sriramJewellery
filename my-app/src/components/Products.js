

/*
const products = [
  { id: 1, name: 'Gold Ring', price: '$199', grams:'12 grams', details:'916 hallmark', image: require('../images/gold/rings/ring1.jpeg') },
  { id: 2, name: 'Silver Ring', price: '$149', grams:'12 grams', details:'916 hallmark', image: require('../images/gold/rings/ring2.jpeg') },
  { id: 3, name: 'Gold Bracelet', price: '$299', grams:'12 grams', details:'916 hallmark', image: require('../images/gold/rings/ring3.jpeg') },
  { id: 4, name: 'Diamond Earrings', price: '$399', grams:'12 grams', details:'916 hallmark', image: require('../images/gold/rings/ring4.jpeg') },
  { id: 5, name: 'Diamond Earrings', price: '$399', grams:'12 grams', details:'916 hallmark', image: require('../images/gold/rings/ring5.jpeg') },

];


const Products = () => {
  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', my: 4, px: 2 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          textAlign: 'center',
          mb: 3,
          color: '#333',
        }}
      >
        Our Exclusive Collection
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                transition: '0.3s',
                borderRadius: '15px',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 3 },
              }}
            >
              <CardMedia component="img" height="200" image={product.image} alt={product.name} />

              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#777', my: 1 }}>
                  {product.grams}
                </Typography>
                <Typography variant="body1" sx={{ color: '#777', my: 1 }}>
                  {product.details}
                </Typography>
                <Typography variant="body1" sx={{ color: '#777', my: 1 }}>
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#B6825D',
                    color: '#fff',
                    borderRadius: '20px',
                    px: 3,
                    textTransform: 'none',
                    transition: '0.3s',
                    '&:hover': { bgcolor: '#8C5B3E' },
                  }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
*/

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import allProducts from '../data/productData';

// Styled components
const ProductCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  borderRadius: theme.spacing(2),
  height: '100%',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8],
  },
}));

const ViewButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#B6825D',
  color: '#fff',
  borderRadius: '20px',
  padding: theme.spacing(1, 3),
  textTransform: 'none',
  transition: '0.3s',
  '&:hover': {
    backgroundColor: '#8C5B3E',
  },
}));

const DetailDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: '1000px',
    width: '90%',
    maxHeight: '80vh',
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
}));

const Products = () => {
  const { category, subcategory } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  const getFilteredProducts = () => {
    if (!category || !subcategory) return [];
    return allProducts[category]?.[subcategory] || [];
  };

  const products = getFilteredProducts();

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          textAlign: 'center',
          mb: 4,
          color: 'text.primary',
        }}
      >
        {category && subcategory 
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} ${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}`
          : 'All Products'
        }
      </Typography>

      <Grid container spacing={3}>
        {products && products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    mb: 1
                  }}
                >
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  {product.grams}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  {product.details}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {product.price}
                </Typography>
                <ViewButton variant="contained" onClick={() => handleViewClick(product)}>
                  View
                </ViewButton>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>

      {/* Product Detail Dialog */}
      <DetailDialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="product-dialog-title"
      >
        <DialogContent sx={{ p: 0 }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'grey.500',
              bgcolor: 'white',
              '&:hover': {
                bgcolor: 'grey.100',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          
          {selectedProduct && (
            <Grid container>
              {/* Left side - Image */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: '100%',
                    minHeight: { xs: '300px', md: '500px' },
                    position: 'relative',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={selectedProduct.image}
                    alt={selectedProduct.name}
                    sx={{
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Grid>

              {/* Right side - Details */}
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {selectedProduct.name}
                  </Typography>

                  <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
                    {selectedProduct.price}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {selectedProduct.description || 'Product description not available.'}
                  </Typography>

                  <Divider sx={{ my: 3 }} />

                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Specifications
                  </Typography>

                  {selectedProduct.specifications ? (
                    Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <Box key={key} sx={{ display: 'flex', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, width: '120px' }}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </Typography>
                        <Typography variant="body1">
                          {value}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, width: '120px' }}>
                          Weight:
                        </Typography>
                        <Typography variant="body1">{selectedProduct.grams}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, width: '120px' }}>
                          Purity:
                        </Typography>
                        <Typography variant="body1">{selectedProduct.details}</Typography>
                      </Box>
                    </Box>
                  )}

                  <Box sx={{ mt: 4 }}>
                    <ViewButton
                      variant="contained"
                      fullWidth
                      onClick={handleCloseDialog}
                      sx={{ mb: 2 }}
                    >
                      Add to Cart
                    </ViewButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          )}
        </DialogContent>
      </DetailDialog>

      {(!products || products.length === 0) && (
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ textAlign: 'center', mt: 4 }}
        >
          No products found in this category.
        </Typography>
      )}
    </Container>
  );
};

export default Products;