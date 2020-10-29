import React from 'react';
import './App.css'
import PageNotFound from "./pages/404/PageNotFound";
import Login from "./pages/login/Login"
import Home from "./pages/home/Home";



// 定义一个登录状态；若没有登录，进入Login页面，若已经登录，进入Home，若网络状态返回err进入404
function App() {
  return (
       <Login/>
  );
}

export default App;
