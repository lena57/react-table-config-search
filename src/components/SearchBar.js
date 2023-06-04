import React from 'react';

const SearchBar = ({filterText, inStockOnly, setInStockOnly, setFilterText}) => {
  return (
    <div className="d-flex align-items-center justify-content-center" 
    style={{ margin: '10px'}}>
      <form  >
        <input type="text" placeholder="Search ..." value={filterText}
        onChange={(e)=>setFilterText(e.target.value)}
        class="form-control"
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
