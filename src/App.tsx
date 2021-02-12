import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './shared/globalStyles/globalStyles';
import Navbar from './shared/layout/Nanbar/Navbar';
import {Input} from './shared/Input';
import { Register } from './component/Auth/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterComplete from './component/Auth/Register/RegisterComplete';
import { Logout } from './component/Auth/logout';
import { Login } from './component/Auth/Login';
import { ForgotPassord } from './component/Auth/ForgotPassord';
import { AuthRoute } from './shared/RedirectToRoute';
import { History } from './component/User/pages/History';
import { useActions } from './hooks/useActions';
import AdminRoute from './shared/RedirectToRoute/AdminRoute';
import { Dashboard } from './component/Admin/pages';
import { CategoryCreate, CategoryDelete, CategoryList, CategoryUpdate } from './component/Category/pages';
import { AdminHistory } from './component/Admin/pages/History';

function App() {
  const {authChange} =useActions();

  useEffect(() => {
    authChange()
    
  }, [])
  return (  
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer/>
      <Navbar />
      <Switch>
      <Route path="/register" exact component={Register} />
      <Route path="/register/complete" exact component={RegisterComplete} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/forgotPassword" exact component={ForgotPassord} />
   
      <AuthRoute path="/user/history" exact component={History} />
     
      
      <AdminRoute path="/admin/history" exact component={AdminHistory} />
     
      <AdminRoute path="/admin/dashboard" exact component={Dashboard} />
      <AdminRoute path="/admin/dashboard/categories" exact component={CategoryList} />
      <AdminRoute path="/admin/dashboard/category/create" exact component={CategoryCreate} />
      <AdminRoute path="/admin/dashboard/category/update/:slug" exact component={CategoryUpdate} />
      <AdminRoute path="/admin/dashboard/category/delete/:slug" exact component={CategoryDelete} />

      </Switch>
     </BrowserRouter>
    
  );
}

export default App;
