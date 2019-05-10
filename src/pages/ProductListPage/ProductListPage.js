import React from 'react';
import ProductList from './../../components/productList/ProductList';
import ProductItem from './../../components/productItem/ProductItem';

function ProductListPage() {
	var products = [];
	return (
		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		    <button type="button" className="btn btn-info">
		        Thêm sản phẩm
		    </button>
		    <ProductList>
		    	{_showProducts(products)}
		    </ProductList>
		</div>
	);
}

function _showProducts(products){
	var result = [];
	if(products.length > 0){
		result = products.map((product, index) => {
			return (
				<ProductItem key={index} product={product} index={index} />
			);
		})
	}
	return result;
}

export default ProductListPage;
