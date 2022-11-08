import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Shared/Login';
import Header from './components/pages/Shared/Header';
import ContactUs from './components/pages/ContactUs/ContactUs';
import SignUp from './components/pages/Shared/SignUp';
import Book from './components/pages/Book/Book';
import Payment from './components/pages/Book/Payment';
import BookingList from './components/pages/Book/BookingList';
import AddReview from './components/pages/Book/AddReview';
import RequireAuth from './components/hooks/RequireAuth';
import Dashboard from './components/pages/AdminDashboard/Dashboard';
import OrderList from './components/pages/AdminDashboard/OrderList';
import AddService from './components/pages/AdminDashboard/AddService';
import ManageService from './components/pages/AdminDashboard/ManageService';
import MakeAdmin from './components/pages/AdminDashboard/MakeAdmin';
import RequireAdmin from './components/hooks/RequireAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='max-w-[1300px] mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/book' element={<RequireAuth><Book/></RequireAuth>}>
          <Route path='payment/:id' element={<Payment/>}></Route>
          <Route path='bookingList' element={<BookingList/>}></Route>
          <Route path='addReview' element={<AddReview/>}></Route>
        </Route>
        <Route path='/dashboard' element={<RequireAdmin><Dashboard/></RequireAdmin>}>
          <Route path='orderList' element={<OrderList/>}></Route>
          <Route path='addService' element={<AddService/>}></Route>
          <Route path='manageService' element={<ManageService/>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin/>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
