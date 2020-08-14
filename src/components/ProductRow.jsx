import React from 'react';

function ProductRow(props) {
  return (
    <tr
      style={{
        color: !props.stocked ? 'red' : '',
      }}
    >
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
