import React from 'react';

function ProductItem(props) {
  var {product, index} = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price} vnđ</td>
      <td>
          {_showStatusProduct(product.status)}
      </td>
      <td>
          <button type="button" className="btn btn-warning">Sửa</button>
          <button type="button" className="btn btn-danger">Xóa</button>
      </td>
    </tr>
  );
}

function _showStatusProduct(status){
  var nameState = status?'Còn hàng': 'Hết hàng';
  var classState = status?'success': 'warning';
  return (<span className={`label label-${classState}`}>
                {nameState}
          </span>);
}

export default ProductItem;
