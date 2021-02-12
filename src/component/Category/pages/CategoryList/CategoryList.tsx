import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useActions, useTypedSelector, useActionsCategory } from '../../../../hooks';
import { SearchBar } from '../../../../shared/SearchBar';
import CategoryDelete from '../CategoryDelete/CategoryDelete';

const CategoryList = () => {


    const { getAllCategory } = useActionsCategory();
    const { categoryReducer } = useTypedSelector(state => state)
    const [term, setTerm] = useState('');
    useEffect(() => {
             getAllCategory();
    }, []);

    const openDeletModal=(slug:string='')=>{
          return <CategoryDelete slug={slug} />
    }

    const renderBtn = (category: { name: string, _id: string, slug?: string }) => {
        return (
            <div className="right floated content">
                <Link to={`/admin/dashboard/category/update/${category.slug}`} className="ui button primary">Edit</Link>
                <Link to={`/admin/dashboard/category/delete/${category.slug}`} className="ui button negative">Delete</Link>
                {/* either link or button */}
                <button onClick={ ()=> openDeletModal(category.slug)} >Delete</button>
            </div>
        )
    }

    const renderList = (term:string='') => {
        console.log('list component ' );
        if (!categoryReducer.data) return <div>loading</div>
        let categoryList = Object.values(categoryReducer.data);
        let list=filterResult(term,categoryList,'name')
        return list.map((category) => {
            return (
                <div className="item" key={category._id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {category.name}
                        {renderBtn(category)}
                    </div>

                </div>
            )
        })
    }
  // search
  const filterResult=(term:string='',list:any[],field:string)=>{
      return list.filter((el)=>el[field].toLocaleLowerCase().includes(term))
  }



    // end serach
    return (
        
        <div>
            <SearchBar
                placeholder="Search"
                
                onChange={setTerm}
            />
            {renderList(term)}
  
        </div>
    );

}

export default CategoryList;