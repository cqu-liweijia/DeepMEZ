import React from 'react';
import ReactDom from "react-dom"
import {contentRoutes,routes} from "./routes";
import './index.css';
import {BrowserRouter,Route,Redirect,Switch} from "react-router-dom"
import App from "./App";
import * as serviceWorker from './serviceWorker';

ReactDom.render(
    <BrowserRouter>
            <Switch>
                <Route path='/home' render = { routeProps => <App {...routeProps}/>}/>
                {
                    routes.map((item) =>{
                        return <Route key={item.path}
                                      path={item.path}
                                      component={item.component}
                        />
                    })
                }
                <Redirect from="/" to='/home' exact/> {/*默认启动项目重定向跳转至主页面*/}
                <Redirect to='/404'/>  {/*当path匹配不上是，跳转至404*/}
            </Switch>
    </BrowserRouter>,
  document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



