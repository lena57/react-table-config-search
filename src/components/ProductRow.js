import React from 'react';

const ProductRow = ({ category }) => {
  return (
    <tr>
      <th
        scope="row"
        style={
          category === 'Fruits'
            ? { background: 'lightpink' }
            : { background: 'lightgreen' }
        }
      >
        {category}
      </th>
    </tr>
  );
};

export default ProductRow;
