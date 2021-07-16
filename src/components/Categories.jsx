import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div class="dropdown">
      <button class="dropbtn">Choose category: </button>
      <div class="dropdown-content">
        {categories.map((category) => {
          return (
            <Link to={`/reviews/categories/${category.slug}`}>
              {category.slug}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
