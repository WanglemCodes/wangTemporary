import React from 'react';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Home from "./componets/Home.jsx";
import Navbar from "./componets/Navbar.jsx";
import Footer from "./componets/Footer.jsx";
import Blog from "../src/componets/blog/Blog.jsx";
import Register from "./componets/user/Register.jsx";
import Login from "./componets/user/Login.jsx";
import Profile from "./componets/user/Profile.jsx";
import Daily from "./componets/daily/Daily.jsx";
import Img from "./componets/daily/Img.jsx";
import Video from "./componets/blog/Video.jsx";


const Layout = () => {
   return (
      <div className='app'>
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   )
}

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children:[
         {
            path: "/",
            element: <Home />
         },
         {
            path: "/login",
            element: <Login />
         },
         {
            path: "/register",
            element: <Register />
         },
         {
            path: "/blog",
            element: <Blog />
         },
         {
            path: "/daily",
            element: <Daily />
         },
         {
            path: "/img",
            element: <Img />
         },
         {
            path: "/video",
            element: <Video />
         },
      ]
   }
])

const App = () => {
   return (
      <div>
         <RouterProvider router={router} />
      </div>
   )
}

export default App;