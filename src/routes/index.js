import PageNotFound from "../pages/pagenotfound/PageNotFound";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

import Content1 from "../pages/contents/Content1";
import Content2 from "../pages/contents/Content2";
import Content3 from "../pages/contents/Content3";
import Content4 from "../pages/contents/Content4";

export const routes = [
    {
        path:"/login",
        component: Login
    },
    {
        path:"/register",
        component: Register
    },
    {
        path:"/404",
        component: PageNotFound
    },
]

export const contentRoutes = [
    {
        path: "/home/content1",
        component:Content1,
        isShow:true,
        title:"Content1"
    },
    {
        path: "/home/content2",
        component:Content2,
        isShow:true,
        title:"Content1"
    },
    {
        path: "/home/content3",
        component:Content3,
        isShow:true,
        title:"Content3"
    },
    {
        path: "/home/content4",
        component:Content4,
        isShow:true,
        title:"Content4"
    }
]

