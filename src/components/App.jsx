import React from 'react';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import DashBoard from '../components/DashBoard/DashBoard'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart/Cart';
import WishList from './WishList/WishList';

{/* <Login />

<SignUp />

<DashBoard /> */}

// dry

// Before Routing

// function App() {
//   return (
//     <>

//       <Login />

//       <SignUp />

//       <DashBoard />

//     </>
//   )
// }

// After Routing

function App() {
  return (
    <>
      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Login />} />

          <Route path='/signup' element={<SignUp />} />



          <Route path='/cart' element={<Cart />} />
          <Route path='/wishList' element={<WishList />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}





export default App;

// https://www.myntra.com/wishlist

// path = '/'  default     https://www.flipkart.com/

// path = '/SignUp' SingUp     https://www.flipkart.com/account/login?signup=true&ret=/

// path = 'Dashboard' Dashboard


// https://www.myntra.com/login


// https://www.myntra.com/checkout/cart