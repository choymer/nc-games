import React, { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then(categoriesFromApi => {
            setCategories(categoriesFromApi)
        })
    },[])

    return (
        <div class="dropdown">
        <button class="dropbtn">Choose category: </button>
        <div class="dropdown-content">
          {categories.map((category) => {
            return (
              <a href={`/items/categories/${category.slug}`}>
                {category.slug}
              </a>
            );
          })}
        </div>
      </div>
    );
};

export default Categories;