import React from 'react';

function ProductList(props) {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
          <h3 className="panel-title">Danh Sách Các Sản Phẩm</h3>
      </div>
      <div className="panel-body">
          <table className="table table-bordered table-hover">
              <thead>
                  <tr>
                      <th>STT</th>
                      <th>mã SP</th>
                      <th>Tên</th>
                      <th>Giá </th>
                      <th>Trạng Thái</th>
                      <th>Hành Động</th>
                  </tr>
              </thead>
              <tbody>
                  {props.children}
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default ProductList;
