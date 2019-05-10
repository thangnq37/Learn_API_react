import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu() {
  return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Trang chủ</span>
              <span className="icon-bar "></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            
          </div>
      
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <NavLink className="navbar-brand" activeClassName="active" to='/' >Trang chủ</NavLink>
              </li>
            
              <li>
                <NavLink activeClassName="active" to="/product-list" >Quản lý sản phẩm</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
export default Menu;
