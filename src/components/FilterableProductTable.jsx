import React, { Component } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      showAll: true,
    };
  }

  handleInputSearch = (event) => {
    const value = event.target.value;
    this.setState({
      search: value,
    });
  };

  handleCheckbox = (event) => {
    const value = !event.target.checked;
    this.setState({
      showAll: value,
    });
  };

  render() {
    const products = this.props.products.filter((product) => {
      if (!this.state.showAll && !product.stocked) {
        return false;
      }
      return product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          searched={this.state.search}
          handleSearch={this.handleInputSearch}
          handleCheck={this.handleCheckbox}
          showAllProducts={this.state.showAll}
        />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
