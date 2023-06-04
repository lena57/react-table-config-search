import React from 'react';

const SearchBar = ({filterText, inStockOnly, setInStockOnly, setFilterText}) => {
  return (
    <div>
      <form style={{margin: '50px'}}>
        <input type="text" placeholder="Search ..." value={filterText}
        onChange={(e)=>setFilterText(e.target.value)}
        />
        <div>
        <br />
          <label>
            <input type="checkbox" checked={inStockOnly} 
            onChange={(e)=>setInStockOnly(e.target.checked)}/>
            Show only products in stock
          </label>

        </div>
      </form>
    </div>
  );
};

export default SearchBar;
