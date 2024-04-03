// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:productId">
          <ProductDetailPage />
        </Route>
        <Route path="/">
          <AllProductsPage />
        </Route>
      </Switch>
    </Router>
  );
}

import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};


export default App;
