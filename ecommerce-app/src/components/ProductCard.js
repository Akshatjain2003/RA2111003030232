import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2">
          Company: {product.company}
        </Typography>
        <Typography variant="body2">
          Category: {product.category}
        </Typography>
        <Typography variant="body2">
          Price: {product.price}
        </Typography>
        <Typography variant="body2">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2">
          Discount: {product.discount}
        </Typography>
        <Typography variant="body2">
          Availability: {product.availability ? 'Available' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
