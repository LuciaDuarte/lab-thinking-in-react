import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <div>
        <label htmlFor="search-input">Search</label>
        <input
          className="search-input"
          id="search-input"
          type="text"
          placeholder="Search products..."
          value={props.searched}
          onChange={props.handleSearch}
        />
      </div>
      <div>
        <input
          id="stock-check"
          type="checkbox"
          onChange={props.handleCheck}
          checked={!props.showAllProducts}
        />
        <label htmlFor="stock-check">Only show products on stock</label>
      </div>
    </form>
  );
}

export default SearchBar;
