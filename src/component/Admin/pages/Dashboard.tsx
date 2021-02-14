import React from 'react'
import { AdminHistory } from './History';
import { CategoryCreate, CategoryList, CategoryUpdate, CategoryDelete } from '../../Category/pages';
import { Switch, BrowserRouter } from 'react-router-dom';
import AdminRoute from '../../../shared/RedirectToRoute/AdminRoute';
import { SubCategoryList, SubCategoryCreate, SubCategoryUpdate, SubCategoryDelete } from '../../SubCategory/pages';
import { ProductCreate } from '../../Product/pages/ProductCreate';


const Dashboard=(props:any)=>{
    console.log(props);
    
    return (
        <BrowserRouter>
        <div style={{display:'flex'}}>
           <div style={{width:'50%'}}><AdminHistory /></div>  
           <div>
          
               <Switch>
               <AdminRoute path="/admin/dashboard/categories" exact component={CategoryList} />
                <AdminRoute path="/admin/dashboard/category/create" exact component={CategoryCreate} />
                <AdminRoute path="/admin/dashboard/category/update/:id/:slug" exact component={CategoryUpdate} />
                <AdminRoute path="/admin/dashboard/category/delete/:slug" exact component={CategoryDelete} />
               
                <AdminRoute path="/admin/dashboard/subCategories" exact component={SubCategoryList} />
                <AdminRoute path="/admin/dashboard/subCategory/create" exact component={SubCategoryCreate} />
                <AdminRoute path="/admin/dashboard/subCategory/update/:id/:slug" exact component={SubCategoryUpdate} />
                <AdminRoute path="/admin/dashboard/subCategory/delete/:slug" exact component={SubCategoryDelete} />
                
                <AdminRoute path="/admin/dashboard/product/create" exact component={ProductCreate} />

               </Switch>
              
               
               </div> 
        </div>
        </BrowserRouter>
    )
}

export default Dashboard;