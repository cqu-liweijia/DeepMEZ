import React from 'react';
import './App.css'
import {Route,Redirect,Switch} from "react-router-dom"
import {contentRoutes} from './routes/index'  //引入2级路由
import Home from "./pages/home/Home";

// 定义一个登录状态；若没有登录，进入Login页面，若已经登录，进入Home，若网络状态返回err进入404
function App() {
  return (
          <Home>
              <Switch>
                  {
                      contentRoutes.map( (route)=>{
                              return <Route
                                  key = {route.path}
                                  path = {route.path}
                                  exact = {route.exact}
                                  render={(routeProps) =>{
                                      return <route.component {...routeProps}/>
                                  }}
                              />
                          }
                      )
                  }
                  <Redirect from="/home" to='/home/content1' exact/>
              </Switch>
          </Home>

  );
}

export default App;

