import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import products from '../data.json';
import ProductRow from './ProductRow';

const ProductTable = ({ filterText, inStockOnly }) => {
  const config = [
    {
      key: 'name',
      label: 'Name',
      render: (row) => (
        <div>
          {row.stocked ? (
            row.name
          ) : (
            <div style={{ color: 'red' }}>{row.name}</div>
          )}
        </div>
      ),
    },
    { key: 'price', label: 'Price', render: (row) => <b>{row.price}</b> },
    {
      key: 'status',
      label: 'Stocked',
      render: (row) => <div>{row.stocked ? 'yes' : 'no'}</div>,
    },
  ];

  let rows = [];
  let lastCategory = null;

  products.forEach((item) => {
    if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !item.stocked) return;

    if (item.category !== lastCategory) {
      rows.push(<ProductRow category={item.category} key={item.category} />);
    }
    rows.push(
      <ProductCategoryRow row={item} key={item.name} config={config} />
    );
    lastCategory = item.category;
  });
  return (
    <div className="container" style={{ margin: 'auto', width: '500px' }}>
      <table className="table table-bordered ">
        <thead>
          <tr>
            {config.map((column) => (
              <th
                style={{ background: 'lightblue' }}
                scope="col"
                key={column.key}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
