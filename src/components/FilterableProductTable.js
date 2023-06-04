import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
  const [filterText, setFilterText] = React.useState('');
  const [inStockOnly, setInStockOnly] = React.useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
};

export default FilterableProductTable;
