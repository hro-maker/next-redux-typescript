import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Icategory } from "../../types/categoryreducer";
import { typetuseselector } from "./../../hooks/useselector";

const Meniuheader = () => {
  const [categories, setCategories] = useState<Icategory[] | null>(null);
  const { category } = typetuseselector((state) => state);
  useEffect(() => {
    setCategories(category.categories);
  }, [category.categories]);
  const renderCategories = (categoryes) => {
    let categories = [];
    for (let category of categoryes) {
      categories.push(
      
        <li className="nav_link" key={category.title}>
          { category.parentId ? (
            <Link
        
              href={`/${category.title}?cid=${category._id}`}
            >
             <a  className="menuheater_link"> { category.title}</a>
            </Link>
          ) : (
             <span> {category.title}</span>
            
          )}

          {category.childrens.length > 0 ? (
            <ul >{renderCategories(category.childrens)}</ul>
          ) : null}
        </li>
      );
    }
    return categories;
  };

  return (
    <div className="menuHeader">
      {categories && categories.length > 0
          ? renderCategories(categories)
          : null}
    </div>
  );
};

export default Meniuheader;
