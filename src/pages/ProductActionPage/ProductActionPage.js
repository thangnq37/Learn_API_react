import React, {Component} from 'react';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';

class ProductActionPage extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        id: '',
        txtName: '',
        txtPrice: '',
        chkbStatus: ''
      };
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            callApi(`products\${id}`,'GET', null).then(res =>{
                var product = res.data;
                this.setState({
                    id: id,
                    txtName: product.name,
                    txtPrice: product.price,
                    chkbStatus: product.status
                }) 
            })
        }
        
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        var {txtName, txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        callApi('products', 'POST',{
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res =>{
            history.goBack();
        })
    }

    render(){
        var {txtName, txtPrice, chkbStatus} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Link to='/product-list' className="btn btn-danger">Trở Lại</Link>
                <form onSubmit={this.onSave}>
                    <legend>Add Product</legend>
                    <div className="form-group">
                        <label>Tên sàn phẩm</label>
                        <input 
                            type="text" 
                            name="txtName" 
                            className="form-control"
                            placeholder="Input field" 
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input 
                            type="number" 
                            name="txtPrice" 
                            className="form-control"
                            placeholder="Input field"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                            />
                            Còn hàng
                        </label>
                    </div>
                    <Link to='/product-list' className="btn btn-danger">Trở Lại</Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default ProductActionPage;
