import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useActions, useTypedSelector, useActionsCategory } from '../../../../hooks';
import { SearchBar } from '../../../../shared/SearchBar';
import Fuse from "fuse.js";
const CategoryList = () => {


    const { getAllCategory } = useActionsCategory();
    const { categoryReducer } = useTypedSelector(state => state)
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const fetch=async()=>{
            console.log('hi');
            
            await getAllCategory();
            if (!categoryReducer.data) setData([]);
            else{
                let categoryList = Object.values(categoryReducer.data)
                if(categoryList != undefined){
                    setData(categoryList);
                }
            }
        }
        fetch()
        
       
        
    }, []);

    const renderBtn = (category: { name: string, _id: string, slug?: string }) => {
        return (
            <div className="right floated content">
                <Link to={`/admin/dashboard/update/${category.slug}`} className="ui button primary">Edit</Link>
                <Link to={`/admin/dashboard/delete/${category.slug}`} className="ui button negative">Delete</Link>
            </div>
        )
    }

    const renderList = () => {
        console.log('list component ' );
        if (!categoryReducer.data) return <div>loading</div>
        let categoryList = Object.values(categoryReducer.data)
        return categoryList.map((category) => {
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
    const renderListFromFuseJs=()=>{
        console.log('state',data);
        
        return (
            <div className="Container">
        {data.map((item:any) => (
          <p {...item} key={item.name} />
        ))}
      </div>
        )
    }
    const searchData = (pattern: string) => {
        if (!pattern) {
          
            return;
        }
        const fuse = new Fuse(Object.values(categoryReducer.data), {
            keys: ["name"],
        });
        const result = fuse.search(pattern);
        const matches:any = [];
        if (!result.length) {
            setData([]);
        } else {
            result.forEach(({ item }) => {
                matches.push(item);
            });
            setData(matches);
        }
    }

    // end serach
    return (
        <div>
            <SearchBar
                placeholder="Search"
                
                onChange={ ()=>console.log('hh')
                }
            />
            {/* {renderList()} */}
            {renderListFromFuseJs()}
        </div>
    );

}

export default CategoryList;