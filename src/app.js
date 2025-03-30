import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Outlet, useRoutes } from 'react-router-dom';
import Header from './moulc/Header';
import Footer from './moulc/Footer';
import Body from './compoent/Home/Body';
import Errorhandling from './moulc/Error';
import About from './compoent/About';
import Contact from './compoent/Contact'
import Coinview  from './compoent/Coinview';
import Login   from './compoent/Coinview';
import Usercontext  from './utits/UserContext'
const Stockmarket = lazy(()=>  import('./compoent/Stockmarket'));


const App = () => {
  const [userinfo , setuserinfo] = useState('');


  useEffect(() => {
    const data = {
      name:"sourabh"
    }

    setuserinfo(data.name);
  } , [])
  return (
    <div>
      <Usercontext.Provider  value={{logginuser:userinfo , setuserinfo}}>
      <Header />
      <Outlet/>
      <Footer />
      </Usercontext.Provider>
      
      </div>
  );
};

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <App />,
      errorElement: <Errorhandling />,
      children:[
        {
          path:'/',
          element:<Body />
        },
        {
          path:'/about',
          element:<About />
        },
        {
          path:'/contact',
          element:<Contact />
        },
        {
          path:'/coin/:coinid',
          element:<Coinview/>
        },
        {
          path:'/stock',
          element:<Suspense fallback ={<h1>Loaidng....</h1>}>
            <Stockmarket/>
          </Suspense>
        }
      ]
    },
    {
      path:'/login',
      element:  <GoogleOAuthProvider clientId="your-client-id">
        <Login/>
      </GoogleOAuthProvider>
    },
  ]);
  
  return routes;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
