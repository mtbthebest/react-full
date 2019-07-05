import React from 'react';
import './App.css';
import {Header} from './header/app-header'
import ProductDashboard from "./product-dashboard/app-product-dashboard";
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductDashboard/>

    </div>
  );
}

export default App;
