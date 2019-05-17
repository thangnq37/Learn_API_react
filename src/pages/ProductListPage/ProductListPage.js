import React, {Component } from 'react';
import ProductList from './../../components/productList/ProductList';
import ProductItem from './../../components/productItem/ProductItem';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';

class ProductListPage extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	products: []
	  };
	  this.funcSetProducts = this.funcSetProducts.bind(this);
	}

	render(){
		var {products} = this.state;
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			    <Link type="button" to='product/add' className="btn btn-info">
			        Thêm sản phẩm
			    </Link>
			    <ProductList>
			    	{this._showProducts(products)}
			    </ProductList>
			</div>
		);
	}

	funcSetProducts(products){
		this.setState({
			products: products
		})
	}

	componentDidMount(){
		callApi('products').then(rep =>{
			this.funcSetProducts(rep.data);
		})
	}

	_showProducts(products){
		var result = [];
		if(products.length > 0){
			result = products.map((product, index) => {
				return (
					<ProductItem key={index} product={product} onDelete={this.onDelete} index={index} />
				);
			})
		}
		return result;
	}

	onDelete = (id) => {
		var {products} = this.state;
		if(confirm('Bạn có chắc chắn muốn xóa không!!')){//eslint-disable-line
		    callApi(`products/${id}`,'DELETE', null).then(res => {
				if(res.status === 200){
					var index = this.findIndex(products,id);
					if(index !== -1){
						products.splice(index, 1);
						this.setState({
							products: products
						})
					}
				}
			})
		}
	}
	
	findIndex = (products, id)=>{
		var result = -1;
		products.forEach((product, index) => {
			if(product.id === id){
				result = index;
				return false;
			}
		})
		return result;
	}
	
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}
export default connect(mapStateToProps, null)(ProductListPage);
