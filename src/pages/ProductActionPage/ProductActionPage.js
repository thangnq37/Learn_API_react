import React from 'react';

function ProductActionPage() {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    	<form>
    		<legend>Add Product</legend>
    		<div className="form-group">
    			<label>Tên sàn phẩm</label>
    			<input type="text" className="form-control" id="" placeholder="Input field" />
    		</div>
    		<div className="form-group">
    			<label>Giá</label>
    			<input type="number" className="form-control" id="" placeholder="Input field" />
    		</div>
    		<div className="form-group">
    			<label>Trạng thái</label>
    		</div>
    		<div class="checkbox">
    			<label>
    				<input type="checkbox" value="" />
    				Còn hàng
    			</label>
    		</div>
    		<button type="submit" className="btn btn-primary">Submit</button>
    	</form>
    </div>
  );
}
export default ProductActionPage;
