import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useActions, useTypedSelector, useActionsCategory } from '../../../../hooks';
import { SearchBar } from '../../../../shared/SearchBar';
import CategoryDelete from '../CategoryDelete/CategoryDelete';
import { useDispatch } from 'react-redux';

const CategoryList = () => {


    const { getAllCategory } = useActionsCategory();
    const { categoryReducer } = useTypedSelector(state => state)
    const [term, setTerm] = useState('');
    const [slug, setSlug] = useState('');
    useEffect(() => {
             getAllCategory();
             console.log('slug');
             
    }, []);

    const openDeletModal=(slug:string='')=>{
        console.log('slug');
        
        if(slug=='') return
          setSlug(slug)
    }

    const renderBtn = (category: { name: string, _id: string, slug?: string }) => {
        return (
            <div className="right floated content">
                <Link to={`/admin/dashboard/category/update/${category._id}/${category.slug}`} className="ui button primary">Edit</Link>
                <Link to={`/admin/dashboard/category/delete/${category._id}/${category.slug}`} className="ui button negative">Delete</Link>
                {/* either link or button */}
                <button onClick={ (e)=> openDeletModal(category.slug)} >Delete</button>
            </div>
        )
    }

    const renderList = (term:string='') => {
        if (!categoryReducer.data ) return <div>loading</div>
        let categoryList = Object.values(categoryReducer.data);
        let list=filterResult(term,categoryList,'name')
          if(list.length==0) return <div>loading</div>
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
      console.log(list);
      
      if(list.length==0) return []
      return list.filter((el)=> el[field] && el[field].toLocaleLowerCase().includes(term))
  }



    // end serach
    return (
        
        <div>
            <SearchBar
                placeholder="Search"
                onChange={setTerm}
            />
            {renderList(term)}
            {slug !== '' && <CategoryDelete setSlug={setSlug}  slug={slug} />}
  
        </div>
    );

}

export default  memo(CategoryList);