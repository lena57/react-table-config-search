import React from 'react';

const ProductCategoryRow = ({ row, config }) => {
  return (
    <tr>
      {config.map((data) => (
        <td key={data.key}>{data.render(row)}</td>
      ))}
    </tr>
  );
};

export default ProductCategoryRow;
