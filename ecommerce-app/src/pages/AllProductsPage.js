import React from 'react';
import ProductFilter from '../components/ProductFilter';
import ProductCard from '../components/ProductCard';

const AllProductsPage = () => {
  const products = []; // Fetch products from API

  return (
    <div>
      <ProductFilter />
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
