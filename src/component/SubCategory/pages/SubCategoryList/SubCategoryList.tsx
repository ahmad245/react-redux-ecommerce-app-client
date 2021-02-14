import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { useActions,useActionsSubCategory ,useActionsCategory, useTypedSelector } from '../../../../hooks';
import { SearchBar } from '../../../../shared/SearchBar';
import { SubCategoryDelete } from '..';
import { Link } from 'react-router-dom';


const  SubCategoryList=(props:any)=>{
   

    const { getAllSubCategory } = useActionsSubCategory();
    const { subCategoryReducer } = useTypedSelector(state => state)
    const [term, setTerm] = useState('');
    const [slug, setSlug] = useState('');
    useEffect(() => {
        getAllSubCategory();
            
             
    }, []);

    const openDeletModal=(slug:string='')=>{
        console.log('slug');
        
        if(slug=='') return
          setSlug(slug)
    }

    const renderBtn = (category: { name: string, _id: string, slug?: string }) => {
        return (
            <div className="right floated content">
                <Link to={`/admin/dashboard/subCategory/update/${category._id}/${category.slug}`} className="ui button primary">Edit</Link>
                <Link to={`/admin/dashboard/subCategory/delete/${category._id}/${category.slug}`} className="ui button negative">Delete</Link>
                {/* either link or button */}
                <button onClick={ (e)=> openDeletModal(category.slug)} >Delete</button>
            </div>
        )
    }

    const renderList = (term:string='') => {
        if (!subCategoryReducer.data ) return <div>loading</div>
        let subCategoryList = Object.values(subCategoryReducer.data);
        let list=filterResult(term,subCategoryList,'name')
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
            {slug !== '' && <SubCategoryDelete setSlug={setSlug}  slug={slug} />}
  
        </div>
    );
}

export default SubCategoryList;