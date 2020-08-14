import React from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

const allProducts = data.data;

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={allProducts} />
    </div>
  );
}

export default App;
