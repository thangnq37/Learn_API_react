import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/menu/Menu';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
        <div>
          {/*Menu Header*/}
          <Menu />
          {/*Body*/}
          <div className="container">
            <div className="row">
                {_showContentMenus(routes)}
            </div>
          </div>
        </div>
    </BrowserRouter>
  );
}

function _showContentMenus(routes){
    let result = [];
    console.log(routes);
    if(routes.length > 0){
        result = routes.map((value,index) =>{
            return (
                <Route 
                    key={index} 
                    exact={value.exact} 
                    path={value.path} 
                    render={value.main} 
                />
            );
        })
    }
    return (<Switch>
                {result}
            </Switch>);
}

export default App;
