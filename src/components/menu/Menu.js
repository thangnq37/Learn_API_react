import React from 'react';
import {NavLink, Route} from 'react-router-dom';

const menuArray = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Quản lý sản phẩm',
    to: '/product-list',
    exact: false
  }
]

const MenuLink = ({label, to, actionWithExact}) =>{
  return <Route 
    path={to} 
    exact={actionWithExact}
    children={({match})=>{
      var classActive = match?'active':'';
      return (
        <li className={classActive}>
          <NavLink activeClassName="active" to={to} >{label}</NavLink>
        </li>
      );
    }}
  />;
}

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
              {_showMenu(menuArray)}
            </ul>
          </div>
        </div>
      </nav>
  );
}

function _showMenu(menu){
  var result = [];
  result = menu.map((value, index)=>{
    return <MenuLink key={index} label={value.name} to={value.to} actionWithExact={value.exact} />
  })
  return result;
}

export default Menu;
