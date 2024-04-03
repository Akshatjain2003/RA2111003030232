import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = {}; // Fetch product details from API based on productId

  return (
    <div>
      {/* Product details */}
    </div>
  );
};

export default ProductDetailPage;
